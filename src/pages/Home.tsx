import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { menuCategories, toursData } from '../data/menuData';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

const HERO_IMAGE =
  'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920';

/* ───── Animated Counter ───── */
function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-item__value">
      {prefix}
      {count}
      <span className="stat-suffix">{suffix}</span>
    </div>
  );
}

/* ───── HOME ───── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { value: 10, suffix: ' botes', label: 'Botes de Tour' },
    { value: 3, suffix: '', label: 'Playas Destino' },
    { value: 9, suffix: '+', label: 'Categorías en el Menú' },
    { value: 500, suffix: ' RD$', label: 'Tour por Persona' },
  ];

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

      {/* ─── STATS ─── */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />
              <div className="stat-item__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
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

          <motion.div
            style={{ textAlign: 'center' }}
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
