'use client';

import Image from 'next/image';

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao-section">
      <div className="container">
        <div className="separator">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>
        
        <h2>Localização Privilegiada</h2>
        
        <div className="localizacao-content">
          <div className="mapa-container">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0003.jpg"
              alt="Localização do Grand Hill"
              width={800}
              height={500}
              className="mapa-img"
            />
            <div className="mapa-overlay">
              <div className="marker rifaina">
                <span className="marker-icon">📍</span>
                <span className="marker-text">RIFAINA-SP</span>
              </div>
              <div className="marker ponte">
                <span className="marker-icon">📍</span>
                <span className="marker-text">PONTE</span>
              </div>
              <div className="marker grand-hill">
                <span className="marker-icon">📍</span>
                <span className="marker-text">GRAND HILL</span>
              </div>
            </div>
            <div className="mapa-description">
              <p>
                Localizado às margens da represa Jaguara, próximo à ponte do Rio Grande, que faz divisa entre os estados de São Paulo e Minas Gerais, está inserido na área de turismo e lazer, e possui vista para o município de Rifaina-SP.
              </p>
            </div>
          </div>
          
          <div className="endereco-card">
            <h3>Endereço</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Rifaina - SP
            </p>
            <p>
              Localizado às margens da represa Jaguara, próximo à ponte do Rio Grande, que faz divisa entre os estados de São Paulo e Minas Gerais, está inserido na área de turismo e lazer, e possui vista para o município de Rifaina-SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 