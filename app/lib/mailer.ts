import nodemailer from 'nodemailer';
import { ILead } from '../models/Lead';

// Configuração do transportador de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendLeadEmail(lead: ILead) {
  try {
    // E-mail de notificação
    const notificationEmailBody = `
      Novo lead recebido via Landing Page:
      
      Nome: ${lead.nome}
      E-mail: ${lead.email}
      WhatsApp: ${lead.whatsapp}
      Tipo de Lote: ${lead.tipoLote}
      Parcelas: ${lead.parcelas}
      Data de Envio: ${new Date().toLocaleString('pt-BR')}
    `;

    // E-mail para o C2S
    const c2sEmailBody = `
Nome: ${lead.nome}
Email: ${lead.email}
Telefone: ${lead.whatsapp.replace(/\D/g, '')}
Origem: Landing Page
Produto: ${lead.tipoLote} - ${lead.parcelas} parcelas
    `.trim();

    // Configuração dos e-mails
    const emails = [
      // E-mail de notificação
      {
        from: process.env.EMAIL_USER,
        to: 'clafla261@gmail.com',
        subject: 'Novo formulário recebido via Landing Page',
        text: notificationEmailBody
      },
      // E-mail para o C2S
      {
        from: process.env.EMAIL_USER,
        to: 'donnaimobiliaria8@contact2sale.com',
        subject: 'Novo Lead - Landing Page',
        text: c2sEmailBody
      }
    ];

    // Enviando os e-mails
    for (const mailOptions of emails) {
      const info = await transporter.sendMail(mailOptions);
      console.log(`E-mail enviado com sucesso para ${mailOptions.to}:`, info.messageId);
    }

    return true;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return false;
  }
} 