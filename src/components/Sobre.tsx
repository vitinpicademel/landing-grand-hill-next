'use client';

import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        <div className="separator">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>
        
        <h2>Sobre o Grand Hill</h2>
        
        <div className="sobre-content">
          <div className="sobre-text">
            <p className="sobre-intro">
              Descubra um novo conceito de moradia, onde luxo e conforto se encontram em perfeita harmonia.
            </p>
            
            <p className="sobre-descricao">
              O Grand Hill representa o ápice do desenvolvimento imobiliário, oferecendo uma experiência única de moradia.
            </p>
            
            <ul className="sobre-lista">
              <li>
                <span className="check">✓</span> Torre única com 20 andares
              </li>
              <li>
                <span className="check">✓</span> 2 apartamentos por andar
              </li>
              <li>
                <span className="check">✓</span> Elevadores privativos
              </li>
              <li>
                <span className="check">✓</span> Paisagismo exclusivo
              </li>
            </ul>
          </div>
          
          <div className="sobre-image">
            <Image
              src="/imagens/Book Grand Hill Ana Luisa_page-0009.jpg"
              alt="Grand Hill - Vista Exterior"
              width={600}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 