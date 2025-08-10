import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Lead, { ILead } from '@/app/models/Lead';
import mongoose from 'mongoose';
import { sendLeadEmail } from '@/app/lib/mailer';

export async function POST(request: Request) {
  try {
    console.log('Iniciando processamento do lead...');
    const body = await request.json() as Omit<ILead, 'dataEnvio'>;
    console.log('Dados recebidos:', JSON.stringify(body, null, 2));
    
    // Validação básica dos campos obrigatórios
    if (!body.nome || !body.email || !body.whatsapp || !body.tipoLote || !body.parcelas) {
      console.error('Dados incompletos:', body);
      return NextResponse.json(
        { message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    try {
      console.log('Conectando ao MongoDB...');
      await connectDB();
      console.log('Conexão estabelecida com sucesso');
    } catch (dbError) {
      console.error('Erro ao conectar com MongoDB:', dbError);
      return NextResponse.json(
        { message: 'Erro de conexão com o banco de dados' },
        { status: 500 }
      );
    }
    
    let lead;
    try {
      console.log('Criando lead no banco de dados...');
      lead = await Lead.create({
        ...body,
        aceitoPrivacidade: true
      });
      console.log('Lead criado com sucesso:', JSON.stringify(lead, null, 2));
    } catch (createError) {
      console.error('Erro ao criar lead:', createError);
      return NextResponse.json(
        { message: 'Erro ao salvar os dados' },
        { status: 500 }
      );
    }

    // Enviando e-mails (notificação e C2S)
    try {
      console.log('Enviando e-mails...');
      await sendLeadEmail(lead);
      console.log('E-mails enviados com sucesso');
    } catch (emailError) {
      console.error('Erro ao enviar e-mails:', emailError);
      // Não interrompemos o fluxo se houver erro no envio dos e-mails
    }
    
    return NextResponse.json(
      { 
        message: 'Lead cadastrado com sucesso!', 
        lead
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro não esperado:', error);
    return NextResponse.json(
      { message: 'Erro interno ao cadastrar lead' },
      { status: 500 }
    );
  }
} 