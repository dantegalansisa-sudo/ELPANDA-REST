import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-name">
              <img
                src="/imagenes/logo restaurante.jpeg"
                alt="El Panda Restaurant"
                className="footer__logo-img"
              />
            </div>
            <p className="footer__brand-tagline">
              Sabor del Mar en Azua. Mariscos frescos, mofongos dominicanos y tours en lancha por las playas más hermosas de Monte Río.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Inicio</Link></li>
              <li><Link to="/menu" className="footer__link">Menú</Link></li>
              <li><Link to="/tours" className="footer__link">Tours</Link></li>
              <li><Link to="/eventos" className="footer__link">Eventos</Link></li>
              <li><Link to="/reservaciones" className="footer__link">Reservaciones</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Menú Rápido</h4>
            <ul className="footer__links">
              <li><Link to="/menu/entradas" className="footer__link">Entradas</Link></li>
              <li><Link to="/menu/pescados" className="footer__link">Pescados</Link></li>
              <li><Link to="/menu/mariscos" className="footer__link">Mariscos</Link></li>
              <li><Link to="/menu/mofongos" className="footer__link">Mofongos</Link></li>
              <li><Link to="/menu/carnes" className="footer__link">Carnes</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__links">
              <li>
                <a href="https://wa.me/18498864256" className="footer__link" target="_blank" rel="noopener noreferrer">
                  📱 849 886 4256
                </a>
              </li>
              <li>
                <a href="https://instagram.com/elpandarest" className="footer__link" target="_blank" rel="noopener noreferrer">
                  📸 @elpandarest
                </a>
              </li>
              <li>
                <span className="footer__link">
                  📍 Playa Monte Río, Azua
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          © 2025 El Panda Restaurant · Playa Monte Río, Azua · Desarrollado por{' '}
          <a href="https://nexixtech.com" target="_blank" rel="noopener noreferrer">
            NEXIX Tech Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
