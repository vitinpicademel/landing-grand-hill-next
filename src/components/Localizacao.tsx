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
              src="/imagens/mapa.jpg"
              alt="Localização do Grand Hill"
              width={600}
              height={400}
              className="mapa-img"
            />
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