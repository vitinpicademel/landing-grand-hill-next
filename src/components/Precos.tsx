'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function Precos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const plantas = [
    {
      nome: 'ONE FLAT',
      area: '55,55m²',
      specs: ['1 Dormitório', '1 Banheiro', 'Área Gourmet', 'Lavanderia']
    },
    {
      nome: 'LOFT',
      area: '82,45m²',
      specs: ['1 Suíte', '2 Banheiros', 'Área Gourmet', 'Pé Direito Duplo']
    },
    {
      nome: 'TWO HILL',
      area: '83,84m²',
      specs: ['1 Suíte + 1 Dormitório', '2 Banheiros', 'Área Gourmet', 'Hall']
    },
    {
      nome: 'TWO LOUNGE',
      area: '83,75m²',
      specs: ['1 Suíte + 1 Dormitório', '2 Banheiros', 'Área Gourmet', 'Hall']
    },
    {
      nome: 'DUPLEX',
      area: '145,62m²',
      specs: ['1 Suíte + 2 Dormitórios', '3 Banheiros', 'SPA Privativo']
    }
  ];

  return (
    <section id="precos" className="precos-section" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="precos-header"
        >
          <div className="separator">
            <span className="line"></span>
            <span className="diamond">♦</span>
            <span className="line"></span>
          </div>
          
          <h2>Oportunidade Única</h2>
          
          <div className="ultima-semana-alert">
            <FontAwesomeIcon icon={faExclamationTriangle} className="alert-icon" />
            <div className="alert-content">
              <h3>⚠️ ÚLTIMA SEMANA COM ESTES VALORES!</h3>
              <p>Até a próxima semana continua neste valor atual. Não perca esta oportunidade única!</p>
              <div className="countdown">
                <FontAwesomeIcon icon={faClock} className="clock-icon" />
                <span>Oferta por tempo limitado</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="precos-grid"
        >
          {plantas.map((planta, index) => (
            <div key={index} className="preco-card">
              <div className="preco-header">
                <h3 className="planta-nome">{planta.nome}</h3>
                <span className="planta-area">{planta.area}</span>
              </div>
              
              <div className="preco-content">
                <div className="planta-specs">
                  {planta.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="spec-item">
                      <span className="spec-dot">•</span>
                      <span className="spec-text">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="preco-footer">
                <a 
                  href={`https://wa.me/553497711600?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20${planta.nome}%20do%20Grand%20Hill%20[003]`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-consultar"
                >
                  Consultar Valores
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="precos-info"
        >
          <div className="info-card">
            <h3>Condições Especiais</h3>
            <ul>
              <li>✓ Entrada facilitada</li>
              <li>✓ Financiamento direto</li>
              <li>✓ Parcelas que cabem no seu bolso</li>
              <li>✓ Documentação simplificada</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>Lembre-se</h3>
            <p>Esta é a <strong>última semana</strong> com estes valores especiais. Após este período, os preços voltarão ao valor original.</p>
            <a 
              href="https://wa.me/553497711600?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20ao%20Grand%20Hill%20[004]"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-agendar"
            >
              Agendar Visita
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 