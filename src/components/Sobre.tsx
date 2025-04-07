'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sobre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="sobre" className="sobre-section" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="intro-text text-center"
        >
          <h3 className="text-intro">Apartamentos de 55m² a 145m²</h3>
          <h3 className="text-intro">com 1 a 3 suítes</h3>
          <div className="separator">
            <span className="line"></span>
            <span className="diamond">♦</span>
            <span className="line"></span>
          </div>
          <h2 className="text-destaque">Seu refúgio às margens<br />da represa Jaguara</h2>
          <p className="text-descricao">
            GRAND HILL, nome inspirado nas grandes colinas da nossa região.<br />
            Empreendimento com conceito de Residência e Resort, contempla<br />
            toda comodidade e aconchego do lar e todos os itens de lazer de um clube.
          </p>
        </motion.div>

        <div className="separator">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>
        
        <h2>Sobre o Grand Hill</h2>
        
        <div className="sobre-content">
          <div className="sobre-text">
            <p className="sobre-intro">
              Projeto arrojado e exclusivo. Todas as unidades com vista para a frente e vista para a Represa de Jaguara. São três opções de plantas, que variam de 55 a 271m².
            </p>
            
            <p className="sobre-descricao">
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