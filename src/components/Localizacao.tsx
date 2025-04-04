'use client';

import Image from 'next/image';

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao-section">
      <div className="container">
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <i className="fas fa-square-full"></i>
          <span className="separator-line-large"></span>
        </div>
        <h2>Localização Privilegiada</h2>
        <div className="localizacao-content">
          <div className="mapa-container">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0003.jpg"
              alt="Mapa de Localização"
              width={600}
              height={400}
              className="mapa-img"
            />
          </div>
          <div className="localizacao-info">
            <h3>Endereço</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Rifaina - SP
            </p>
            <p>
              Localizado às margens da represa Jaguara, próximo à ponte do Rio Grande, que faz divisa entre os
              estados de São Paulo e Minas Gerais, está inserido na área de turismo e lazer, e possui vista para
              o município de Rifaina-SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 