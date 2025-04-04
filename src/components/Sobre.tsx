'use client';

import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        <div className="intro-text fade-in">
          <h2 className="main-title fade-in">
            Apartamentos de 55m² a 145m²<br />com 1 a 3 suítes
          </h2>
          <div className="separator fade-in">
            <span className="separator-line"></span>
            <i className="fas fa-square-full"></i>
            <span className="separator-line"></span>
          </div>
          <h3 className="subtitle-intro fade-in">
            Seu refúgio às margens<br />da represa Jaguara
          </h3>
          <p className="intro-description fade-in">
            GRAND HILL, nome inspirado nas grandes colinas da nossa região. Empreendimento com conceito de
            Residência e Resort, contempla toda comodidade e aconchego do lar e todos os itens de lazer de
            um clube.
          </p>
        </div>
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <i className="fas fa-square-full"></i>
          <span className="separator-line-large"></span>
        </div>
        <h2>Sobre o Grand Hill</h2>
        <div className="sobre-content">
          <div className="sobre-text">
            <p>Descubra um novo conceito de moradia, onde luxo e conforto se encontram em perfeita harmonia.</p>
            <p>
              O Grand Hill representa o ápice do desenvolvimento imobiliário, oferecendo uma experiência única
              de moradia.
            </p>
            <ul className="sobre-lista">
              <li>
                <i className="fas fa-check"></i> Torre única com 20 andares
              </li>
              <li>
                <i className="fas fa-check"></i> 2 apartamentos por andar
              </li>
              <li>
                <i className="fas fa-check"></i> Elevadores privativos
              </li>
              <li>
                <i className="fas fa-check"></i> Paisagismo exclusivo
              </li>
            </ul>
          </div>
          <div className="sobre-image">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0009.jpg"
              alt="Grand Hill - Vista Exterior"
              width={500}
              height={300}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 