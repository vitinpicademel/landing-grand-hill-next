'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        <div className="hero-title">
          <Image src="/imagens/07.png" alt="Logo Grand Hill" width={80} height={80} className="hero-logo" />
        </div>
        <motion.h1
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
            <span>Área Total: 150m²</span>
          </div>
          <div className="feature">
            <span>3 Suítes</span>
          </div>
          <div className="feature">
            <span>2 Vagas</span>
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
          <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            Fale com um Especialista
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 