import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { menuCategories, toursData } from '../data/menuData';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

const HERO_IMAGE =
  'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920';

/* ───── HOME ───── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const contactInfo = [
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Playa Monte Río, Azua, RD',
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '849 886 4256',
      href: 'https://wa.me/18498864256',
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@elpandarest',
      href: 'https://instagram.com/elpandarest',
    },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" ref={heroRef}>
        <motion.div className="hero__bg" style={{ scale: heroScale }}>
          <img src={HERO_IMAGE} alt="Playa Monte Río" />
        </motion.div>
        <div className="hero__overlay" />
        <motion.div className="hero__content" style={{ opacity: heroOpacity }}>
          <RevealText delay={0.3}>
            <span className="hero__badge">
              🌊 Playa Monte Río, Azua
            </span>
          </RevealText>

          <RevealText delay={0.5} as="h1" className="hero__title">
            Sabor del Mar en El Corazón del Caribe
          </RevealText>

          <RevealText delay={0.7}>
            <p className="hero__subtitle">
              Mariscos frescos, mofongos dominicanos y tours en lancha por
              playas vírgenes de Azua
            </p>
          </RevealText>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <MagneticButton href="/menu" className="btn-primary">
              Ver Menú completo
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/18498864256"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📞 Reservar por WhatsApp
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>SCROLL</span>
          <div className="scroll-dot" />
        </motion.div>
      </section>

      {/* ─── TOUR PROMO ─── */}
      <section className="tour-promo">
        <motion.div
          className="tour-promo__inner"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/imagenes/logo tour.jpeg"
            alt="Tours Monte Río El Panda"
            className="tour-promo__logo"
          />
          <div className="tour-promo__content">
            <h2 className="tour-promo__title">Tours en Lancha por Playas Vírgenes</h2>
            <p className="tour-promo__desc">
              10 botes disponibles · 3 destinos paradisíacos · Desde <strong>$500 RD</strong> por persona
            </p>
            <div className="tour-promo__tags">
              <span className="tour-promo__tag">🏝️ Playa El Barco</span>
              <span className="tour-promo__tag">🏴‍☠️ Cueva de los Piratas</span>
              <span className="tour-promo__tag">🌊 Playa Blanca</span>
            </div>
          </div>
          <MagneticButton
            href="https://wa.me/18498864256?text=Hola%2C%20quiero%20reservar%20un%20tour%20en%20lancha"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚤 Reservar Tour
          </MagneticButton>
        </motion.div>
      </section>

      {/* ─── MENU PREVIEW ─── */}
      <section className="menu-preview">
        <div className="container">
          <motion.div
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">Nuestro Menú</span>
            <h2 className="section-title">Del Mar a Tu Mesa</h2>
            <p className="section-subtitle">
              9 categorías de sabor dominicano auténtico, preparados con
              los ingredientes más frescos de la costa de Azua.
            </p>
          </motion.div>

          <motion.div
            className="menu-preview__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {menuCategories.map((cat) => (
              <motion.div key={cat.id} variants={cardVariants}>
                <Link to={`/menu/${cat.id}`} className="category-card">
                  <div className="category-card__emoji">{cat.emoji}</div>
                  <div className="category-card__info">
                    <div className="category-card__name">{cat.title}</div>
                    <div className="category-card__count">
                      {cat.items.length} platos
                    </div>
                  </div>
                  <span className="category-card__arrow">→</span>
                </Link>
              </motion.div>
            ))}

            {/* Bebidas Card */}
            <motion.div variants={cardVariants}>
              <Link to="/cocteleria" className="category-card category-card--bebidas">
                <div className="category-card__emoji">🍹</div>
                <div className="category-card__info">
                  <div className="category-card__name">Bebidas</div>
                  <div className="category-card__count">
                    Cócteles y más
                  </div>
                </div>
                <span className="category-card__arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: 48 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MagneticButton href="/menu" className="btn-primary">
              Ver Menú Completo →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── TOURS ─── */}
      <section className="tours-home">
        <div className="container">
          <motion.div
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="/imagenes/logo tour.jpeg"
              alt="Tours Monte Río El Panda"
              className="tours-home__logo"
            />
            <span className="section-label">Aventura</span>
            <h2 className="section-title">Tours en Lancha</h2>
            <p className="section-subtitle">
              {toursData.botes} botes disponibles · ${toursData.precioPorPersona} RD
              por persona. Descubre playas vírgenes y cuevas misteriosas.
            </p>
          </motion.div>

          <motion.div
            className="tours-home__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {toursData.destinos.map((dest) => (
              <motion.div
                key={dest.name}
                className="tour-dest-card"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <span className="tour-dest-card__emoji">{dest.emoji}</span>
                <h3 className="tour-dest-card__name">{dest.name}</h3>
                <p className="tour-dest-card__desc">{dest.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Galería de experiencia */}
          <motion.div
            className="tour-experience"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="tour-experience__title">La Experiencia</h3>
            <p className="tour-experience__subtitle">
              Vive la aventura y disfruta los mejores mariscos del Caribe
            </p>

            <div className="tour-experience__gallery">
              {/* Video principal */}
              <div className="tour-experience__video">
                <video
                  controls
                  poster="/imagenes/plato-paella.jpeg"
                  className="tour-video"
                >
                  <source src="/imagenes/tour-video.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              {/* Grid de fotos */}
              <div className="tour-experience__photos">
                <img src="/imagenes/plato-paella.jpeg" alt="Paella de mariscos" />
                <img src="/imagenes/plato-langosta.jpeg" alt="Langosta" />
                <img src="/imagenes/plato-langosta-criolla.jpeg" alt="Langosta criolla" />
                <img src="/imagenes/plato-pescado-frito.jpeg" alt="Pescado frito" />
                <img src="/imagenes/plato-bandeja.jpeg" alt="Bandeja de mariscos" />
                <img src="/imagenes/plato-pescado-tostones.jpeg" alt="Pescado con tostones" />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: 48 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MagneticButton
              href="https://wa.me/18498864256?text=Hola%2C%20quiero%20reservar%20un%20tour%20en%20lancha"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚤 Reservar Tour por WhatsApp
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── EVENTOS PREVIEW ─── */}
      <section className="eventos-preview">
        <div className="eventos-preview__inner">
          <motion.div
            className="eventos-preview__content"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">Próximamente</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Próximos Eventos
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 36 }}>
              Fiestas de Palo, actividades especiales, pasa días en El
              Panda. Síguenos en Instagram para enterarte primero.
            </p>
            <MagneticButton href="/eventos" className="btn-secondary">
              Ver todos los eventos →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACTO / UBICACION ─── */}
      <section className="contact-section">
        <div className="container">
          <motion.div
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">Encuéntranos</span>
            <h2 className="section-title">Ubicación y Contacto</h2>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((item) => {
                const Comp = item.href ? 'a' : 'div';
                return (
                  <motion.div key={item.label} variants={cardVariants}>
                    <Comp
                      className="contact-item"
                      {...(item.href
                        ? {
                            href: item.href,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {})}
                    >
                      <span className="contact-item__icon">{item.icon}</span>
                      <div>
                        <div className="contact-item__label">{item.label}</div>
                        <div className="contact-item__value">{item.value}</div>
                      </div>
                    </Comp>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="contact-map"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.44!2d-70.73!3d18.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPlaya+Monte+Rio!5e0!3m2!1ses!2sdo!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación El Panda Restaurant"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
