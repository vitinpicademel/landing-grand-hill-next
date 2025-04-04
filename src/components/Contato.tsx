'use client';

import Link from 'next/link';

export default function Contato() {
  return (
    <section id="contato" className="contato-section">
      <div className="container">
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <span className="separator-diamond">♦</span>
          <span className="separator-line-large"></span>
        </div>
        <h2>Entre em Contato</h2>
        <div className="contato-content">
          <h3>Quer saber mais sobre o Grand Hill?</h3>
          <div className="contato-cards">
            <div className="contato-card">
              <i className="fas fa-phone"></i>
              <p>34 3336-1900</p>
            </div>
            <div className="contato-card">
              <i className="fas fa-envelope"></i>
              <p>vendas@biomarenegocios.com.br</p>
            </div>
            <div className="contato-card">
              <i className="fas fa-clock"></i>
              <p>Seg a Sex 8h às 18h</p>
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