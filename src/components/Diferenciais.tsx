'use client';

import Image from 'next/image';

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="diferenciais-section">
      <div className="container">
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <i className="fas fa-square-full"></i>
          <span className="separator-line-large"></span>
        </div>
        <h2>Diferenciais Exclusivos</h2>
        <div className="diferenciais-grid">
          <div className="diferencial-card">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0023.jpg"
              alt="Acabamento Premium"
              width={300}
              height={200}
              className="diferencial-img"
            />
            <h3>Acabamento Premium</h3>
            <p>Materiais de primeira linha e acabamento refinado em todos os ambientes.</p>
            <ul className="detalhes-lista">
              <li>Pisos em porcelanato premium</li>
              <li>Rodapés em mármore</li>
              <li>Portas com acabamento nobre</li>
            </ul>
          </div>
          <div className="diferencial-card">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0004.jpg"
              alt="Segurança 24h"
              width={300}
              height={200}
              className="diferencial-img"
            />
            <h3>Segurança 24h</h3>
            <p>Sistema completo de segurança com monitoramento constante.</p>
            <ul className="detalhes-lista">
              <li>Portaria 24 horas</li>
              <li>Câmeras de segurança</li>
              <li>Controle de acesso</li>
            </ul>
          </div>
          <div className="diferencial-card">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0015.jpg"
              alt="Área de Lazer"
              width={300}
              height={200}
              className="diferencial-img"
            />
            <h3>Área de Lazer</h3>
            <p>Espaços exclusivos para lazer e entretenimento.</p>
            <ul className="detalhes-lista">
              <li>Piscina com raia</li>
              <li>Academia completa</li>
              <li>Salão de festas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 