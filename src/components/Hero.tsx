'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="logo-container">
          <Image src="/07.png" alt="Logo Grand Hill" width={80} height={80} className="hero-logo" />
          <h1>Grand Hill</h1>
        </div>
        <p className="subtitle">A arte de viver em grande estilo</p>
        <div className="hero-details">
          <div className="detail-item">
            <i className="fas fa-ruler-combined"></i>
            <span>Área Total: 150m²</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-bed"></i>
            <span>3 Suítes</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-car"></i>
            <span>2 Vagas</span>
          </div>
        </div>
        <div className="cta-container">
          <Link href="#sobre" className="cta-button sobre-button">
            Sobre o Grand Hill
          </Link>
          <Link
            href="https://wa.me/553433339576"
            className="cta-button whatsapp-button"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i> Fale com um Especialista
          </Link>
        </div>
      </div>
    </section>
  );
} 