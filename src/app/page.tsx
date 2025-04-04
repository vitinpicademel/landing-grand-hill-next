'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Diferenciais from '@/components/Diferenciais';
import Plantas from '@/components/Plantas';
import Localizacao from '@/components/Localizacao';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Plantas />
      <Localizacao />
      <Contato />
      <Footer />
    </main>
  );
} 