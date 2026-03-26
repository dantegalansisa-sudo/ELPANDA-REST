import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

const eventos = [
  {
    day: '29',
    month: 'SEP',
    title: 'Fiesta de Palo — Patronales San Miguel',
    desc: 'Celebración de las patronales de San Miguel en Playa Monte Río. Música, baile y sabor dominicano toda la noche.',
    location: 'Playa Monte Río, Azua',
    sponsors: 'Presidente · Rafael Hidalgo',
    image: '/imagenes/29 palo.jpeg',
  },
  {
    day: '05',
    month: 'ABR',
    title: 'Gran Fiesta de Palo',
    desc: 'Una noche de tradición con palos, atabales y música folclórica dominicana. Comida, bebida y mucha energía.',
    location: 'Traba 701, Las Yavitas, Azua',
    sponsors: 'Presidente · Rafael Hidalgo',
    image: '/imagenes/05 palo.jpeg',
  },
  {
    day: '15',
    month: 'DIC',
    title: 'Pasa Día Navideño',
    desc: 'Día completo de playa, comida y tour en lancha. El combo perfecto para compartir en familia esta navidad.',
    location: 'Playa Monte Río, Azua',
    sponsors: 'El Panda Restaurant',
  },
];

export default function EventosPage() {
  return (
    <div className="eventos-page">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="section-label">Eventos</span>
          <h1 className="section-title">Próximos Eventos</h1>
          <p className="section-subtitle">
            Fiestas de Palo, actividades especiales, pasa días y más en
            El Panda Restaurant y Monte Río.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eventos.map((ev) => (
            <motion.div
              key={ev.title}
              className="evento-card"
              variants={cardVariants}
              whileHover={{ x: 6 }}
            >
              {ev.image && (
                <div className="evento-card__img">
                  <img src={ev.image} alt={ev.title} />
                </div>
              )}
              <div className="evento-card__date">
                <div className="evento-card__day">{ev.day}</div>
                <div className="evento-card__month">{ev.month}</div>
              </div>
              <div className="evento-card__info">
                <h3 className="evento-card__title">{ev.title}</h3>
                <p className="evento-card__desc">{ev.desc}</p>
                <span className="evento-card__loc">
                  📍 {ev.location} · {ev.sponsors}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 60 }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '48px',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            <h3
              className="section-title"
              style={{ fontSize: 'var(--text-h3)', marginBottom: 12 }}
            >
              ¿Quieres organizar un evento aquí?
            </h3>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              Tenemos el espacio perfecto frente al mar. Escríbenos para coordinar.
            </p>
            <MagneticButton
              href="https://wa.me/18498864256?text=Hola%2C%20quiero%20organizar%20un%20evento%20en%20El%20Panda"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Escríbenos por WhatsApp
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
