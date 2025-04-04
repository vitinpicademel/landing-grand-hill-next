'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Grand Hill</h3>
            <p>A arte de viver em grande estilo</p>
          </div>
          <div className="footer-social">
            <Link href="https://www.instagram.com/grandhill" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://www.facebook.com/grandhill" target="_blank">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="https://wa.me/553433339576" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Grand Hill. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 