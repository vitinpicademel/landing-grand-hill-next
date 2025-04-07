'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTextDark, setIsTextDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;

      const heroHeight = heroSection.clientHeight;
      const scrollPercentage = (currentScroll / heroHeight) * 100;

      setIsScrolled(currentScroll > 50);

      if (scrollPercentage > 90) {
        setIsTextDark(true);
      } else if (scrollPercentage > 50) {
        const opacity = (scrollPercentage - 50) / 40;
        setIsTextDark(opacity > 0.5);
      } else {
        setIsTextDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isTextDark ? 'text-dark' : ''}`}>
      <nav className="nav-container">
        <div className="logo left-logo">
          <Image src="/imagens/07.png" alt="Logo Grand Hill" width={50} height={50} />
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="#sobre" onClick={toggleMenu}>Sobre</Link>
          <Link href="#diferenciais" onClick={toggleMenu}>Diferenciais</Link>
          <Link href="#plantas" onClick={toggleMenu}>Plantas</Link>
          <Link href="#localizacao" onClick={toggleMenu}>Localização</Link>
          <Link href="#contato" onClick={toggleMenu}>Contato</Link>
        </div>
        
        <div className="logo right-logo">
          <Image src="/imagens/07.png" alt="Logo Grand Hill" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
} 