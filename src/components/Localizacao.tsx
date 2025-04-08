'use client';

import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Localizacao() {
  return (
    <section className="localizacao-section">
      <div className="separator">
        <span className="line"></span>
        <span className="diamond">♦</span>
        <span className="line"></span>
      </div>
      
      <h2>Localização Privilegiada</h2>
      
      <div className="localizacao-content">
        <div className="mapa-container">
          <Image
            src="/imagens/localizacao.jpg"
            alt="Localização Grand Hill"
            width={1200}
            height={600}
            className="mapa-img"
          />
          <div className="mapa-overlay">
            <div className="marker rifaina">
              <FaMapMarkerAlt className="marker-icon" />
              RIFAINA-SP
            </div>
            <div className="marker ponte">
              <FaMapMarkerAlt className="marker-icon" />
              PONTE
            </div>
            <div className="marker grand-hill">
              <FaMapMarkerAlt className="marker-icon" />
              GRAND HILL
            </div>
          </div>
          <div className="mapa-description">
            <p>
              Localizado às margens da represa Jaguara, próximo à ponte do Rio Grande,
              que faz divisa entre os estados de São Paulo e Minas Gerais, está inserido
              na área de turismo e lazer, e possui vista para o município de Rifaina-SP.
            </p>
          </div>
        </div>

        <div className="endereco-card">
          <h3>Endereço</h3>
          <p>
            <FaMapMarkerAlt className="endereco-icon" />
            Rifaina - SP
          </p>
          <p>
            Localizado às margens da represa Jaguara, próximo à ponte do Rio Grande,
            que faz divisa entre os estados de São Paulo e Minas Gerais, está inserido
            na área de turismo e lazer, e possui vista para o município de Rifaina-SP.
          </p>
        </div>
      </div>
    </section>
  );
} 