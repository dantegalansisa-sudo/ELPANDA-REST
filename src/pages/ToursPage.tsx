import { motion } from 'framer-motion';
import { toursData } from '../data/menuData';
import MagneticButton from '../components/MagneticButton';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

const TOUR_HERO =
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920';

const destImages = [
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const steps = [
  {
    num: '01',
    title: 'Escríbenos',
    desc: 'Envíanos un mensaje por WhatsApp con la fecha y cantidad de personas.',
  },
  {
    num: '02',
    title: 'Coordinamos',
    desc: 'Confirmamos disponibilidad, horarios y destinos para tu grupo.',
  },
  {
    num: '03',
    title: '¡Disfruta!',
    desc: 'Llega a Playa Monte Río, súbete al bote y vive la aventura.',
  },
];

export default function ToursPage() {
  return (
    <div className="tours-page">
      <div className="container">
        <motion.div
          className="tours-page__hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <img src={TOUR_HERO} alt="Tours Monte Río" />
          <div className="tours-page__hero-overlay">
            <img
              src="/imagenes/logo tour.jpeg"
              alt="Tours Monte Río El Panda"
              className="tours-page__hero-logo"
            />
            <h1 className="tours-page__hero-title">
              Tours Monte Río El Panda
            </h1>
            <p className="tours-page__hero-sub">
              {toursData.botes} botes disponibles · ${toursData.precioPorPersona} RD por persona
            </p>
          </div>
        </motion.div>

        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">Destinos</span>
          <h2 className="section-title">Explora el Paraíso</h2>
          <p className="section-subtitle">
            Tres destinos increíbles accesibles en lancha desde Playa Monte Río.
          </p>
        </motion.div>

        <motion.div
          className="tours-dest-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {toursData.destinos.map((dest, i) => (
            <motion.div
              key={dest.name}
              className="tours-dest-card-full"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <img src={destImages[i]} alt={dest.name} />
              <div className="tours-dest-card-full__overlay">
                <span className="tours-dest-card-full__emoji">{dest.emoji}</span>
                <h3 className="tours-dest-card-full__name">{dest.name}</h3>
                <p className="tours-dest-card-full__desc">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', marginBottom: 80 }}
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

        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">Proceso</span>
          <h2 className="section-title">¿Cómo funciona?</h2>
        </motion.div>

        <motion.div
          className="tours-process"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              className="tours-process__step"
              variants={cardVariants}
            >
              <div className="tours-process__num">{step.num}</div>
              <h3 className="tours-process__title">{step.title}</h3>
              <p className="tours-process__desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
