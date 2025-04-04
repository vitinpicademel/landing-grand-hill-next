'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Plantas() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const plantas = [
    {
      id: 1,
      nome: 'ONE FLAT',
      area: '55,55m²',
      imagem: '/Book Grand Hill Ana Luisa_page-0033.jpg',
      descricao: 'Apartamento com sala e cozinha integradas, área gourmet, dormitório, banheiro e lavanderia.',
      specs: [
        { icon: 'fas fa-bed', text: '1 Dormitório' },
        { icon: 'fas fa-bath', text: '1 Banheiro' },
        { icon: 'fas fa-utensils', text: 'Área Gourmet' },
        { icon: 'fas fa-tshirt', text: 'Lavanderia' },
      ],
    },
    {
      id: 2,
      nome: 'LOFT',
      area: '82,45m²',
      imagem: '/Book Grand Hill Ana Luisa_page-0034.jpg',
      descricao: 'Apartamento duplex com sala e cozinha integradas, área gourmet, lavanderia, suíte no pavimento superior e pé direito duplo.',
      specs: [
        { icon: 'fas fa-bed', text: '1 Suíte' },
        { icon: 'fas fa-bath', text: '2 Banheiros' },
        { icon: 'fas fa-utensils', text: 'Área Gourmet' },
        { icon: 'fas fa-tshirt', text: 'Lavanderia' },
        { icon: 'fas fa-arrows-alt-v', text: 'Pé Direito Duplo' },
      ],
    },
    {
      id: 3,
      nome: 'TWO HILL',
      area: '83,84m²',
      imagem: '/Book Grand Hill Ana Luisa_page-0035.jpg',
      descricao: 'Apartamento com sala e cozinha integradas, área gourmet, lavanderia, 1 suíte, 1 dormitório e 2 banheiros, com hall de distribuição.',
      specs: [
        { icon: 'fas fa-bed', text: '1 Suíte + 1 Dormitório' },
        { icon: 'fas fa-bath', text: '2 Banheiros' },
        { icon: 'fas fa-utensils', text: 'Área Gourmet' },
        { icon: 'fas fa-tshirt', text: 'Lavanderia' },
        { icon: 'fas fa-door-open', text: 'Hall' },
      ],
    },
    {
      id: 4,
      nome: 'TWO LOUNGE',
      area: '83,75m²',
      imagem: '/Book Grand Hill Ana Luisa_page-0036.jpg',
      descricao: 'Apartamento com sala e cozinha integradas, área gourmet, lavanderia, 1 suíte, 1 dormitório e 2 banheiros, com hall de distribuição.',
      specs: [
        { icon: 'fas fa-bed', text: '1 Suíte + 1 Dormitório' },
        { icon: 'fas fa-bath', text: '2 Banheiros' },
        { icon: 'fas fa-utensils', text: 'Área Gourmet' },
        { icon: 'fas fa-tshirt', text: 'Lavanderia' },
        { icon: 'fas fa-door-open', text: 'Hall' },
      ],
    },
    {
      id: 5,
      nome: 'DUPLEX',
      area: '145,62m²',
      imagem: '/Book Grand Hill Ana Luisa_page-0038.jpg',
      descricao: 'Apartamento duplex com pavimento inferior contendo 1 suíte e 2 dormitórios, copa, lavanderia e 3 banheiros. Pavimento superior com ampla área social, cozinha gourmet e SPA privativo. Pé direito duplo na área social.',
      specs: [
        { icon: 'fas fa-bed', text: '1 Suíte + 2 Dormitórios' },
        { icon: 'fas fa-bath', text: '3 Banheiros' },
        { icon: 'fas fa-hot-tub', text: 'SPA' },
      ],
    },
  ];

  return (
    <section id="plantas" className="plantas-section">
      <div className="container">
        <div className="separator-large fade-in">
          <span className="separator-line-large"></span>
          <i className="fas fa-square-full"></i>
          <span className="separator-line-large"></span>
        </div>
        <h2>Plantas</h2>
        <div className="plantas-grid">
          {plantas.map((planta) => (
            <div key={planta.id} className="planta-card" onClick={() => setSelectedImage(planta.imagem)}>
              <Image
                src={planta.imagem}
                alt={planta.nome}
                width={300}
                height={200}
                className="planta-img"
              />
              <p className="planta-texto">{planta.descricao}</p>
              <div className="planta-descricao-box">
                <h3>{planta.nome} - {planta.area}</h3>
                <div className="planta-specs">
                  {planta.specs.map((spec, index) => (
                    <span key={index} className="planta-spec-item">
                      <i className={spec.icon}></i> {spec.text}
                    </span>
                  ))}
                </div>
                <p className="planta-descricao">{planta.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <Image
              src={selectedImage}
              alt="Planta em tamanho maior"
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </section>
  );
} 