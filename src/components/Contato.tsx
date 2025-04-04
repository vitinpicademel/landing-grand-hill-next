'use client';

import Link from 'next/link';

export default function Contato() {
  return (
    <section id="contato" className="contato-section">
      <div className="container">
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <i className="fas fa-square-full"></i>
          <span className="separator-line-large"></span>
        </div>
        <h2>Entre em Contato</h2>
        <div className="contato-content">
          <p>
            Estamos à disposição para esclarecer todas as suas dúvidas sobre o Grand Hill. Entre em contato
            conosco através dos canais abaixo:
          </p>
          <div className="contato-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>(34) 3336-1900</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>contato@grandhill.com.br</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Rifaina - SP</p>
            </div>
          </div>
          <Link
            href="https://wa.me/553433339576"
            className="whatsapp-button"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i> Fale com um Especialista
          </Link>
        </div>
      </div>
    </section>
  );
} 