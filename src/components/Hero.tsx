'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined, faUmbrellaBeach, faGem } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero-section" ref={ref}>
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-logo-container">
          <Image 
            src="/imagens/07.png" 
            alt="Logo Grand Hill" 
            width={80} 
            height={80} 
            className="hero-logo" 
          />
        </div>
        
        <motion.h1
          className="hero-title"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Grand Hill
        </motion.h1>
        
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-subtitle"
        >
          A arte de viver em grande estilo
        </motion.p>
        
        <motion.div
          className="hero-features"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="feature">
            <FontAwesomeIcon icon={faRulerCombined} className="feature-icon" />
            <span>Área Total: 50.000M²</span>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faUmbrellaBeach} className="feature-icon" />
            <span>Beach Club</span>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faGem} className="feature-icon" />
            <span>Alto Luxo</span>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-buttons"
          variants={fadeIn}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#sobre" className="btn btn-primary">
            Sobre o Grand Hill
          </a>
          <a href="https://wa.me/553497711600?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Grand%20Hill%20[002]" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <span>Fale com um Especialista</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 