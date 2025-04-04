'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTextDark, setIsTextDark] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isTextDark ? 'text-dark' : ''}`}>
      <nav className="nav-container">
        <div className="logo left-logo">
          <Image src="/07.png" alt="Logo Grand Hill" width={50} height={50} />
        </div>
        <div className="nav-links">
          <Link href="#sobre">Sobre</Link>
          <Link href="#diferenciais">Diferenciais</Link>
          <Link href="#plantas">Plantas</Link>
          <Link href="#localizacao">Localização</Link>
          <Link href="#contato">Contato</Link>
        </div>
        <div className="logo right-logo">
          <Image src="/07.png" alt="Logo Grand Hill" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
} 