import { motion } from 'framer-motion';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

const cocteles = [
  {
    category: 'Especial de la Casa',
    emoji: '🐼',
    items: [
      'THE Panda',
      'Monteño con el Sol Afuera',
      'Oasis Calibre Azuano',
      'Aperol Spritz',
      '19 de Marzo',
    ],
  },
  {
    category: 'Dulce y Tropical',
    emoji: '🍹',
    items: [
      'Piña Colada',
      'Margarita (Limón · Chinola)',
      'Sangria Playera',
    ],
  },
  {
    category: 'Los Clásicos Refrescantes',
    emoji: '🍸',
    items: [
      'Mojito (Lima · Chinola)',
      'Caipiriña (Limón · Piña)',
      'Cuba Libre',
      'Gin y Tonic (Ántony)',
    ],
  },
];

const bebidasSinAlcohol = [
  {
    category: 'Jugos Naturales',
    emoji: '🥤',
    items: [
      'Chinola',
      'Limón',
      'Naranja',
      'Sandía con Limón',
      'Melón con Piña',
      'Verde',
    ],
  },
  {
    category: 'Gaseosas',
    emoji: '🥤',
    items: ['Coca Cola', 'Pepsi', 'Silvestre'],
  },
  {
    category: 'Aguas',
    emoji: '💧',
    items: [
      'Agua Natural',
      'Agua Con Gas',
      'Canada Dry',
      'Enriquillo',
      'Agua Tónica',
    ],
  },
];

export default function CocteleriaPage() {
  return (
    <div className="cocteleria-page">
      <div className="container">
        {/* Hero */}
        <motion.div
          className="cocteleria-hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="section-label">Mitología y Coctelería</span>
          <h1 className="cocteleria-hero__title">Bebidas del Panda</h1>
          <p className="cocteleria-hero__subtitle">
            Cócteles artesanales, tragos clásicos y bebidas refrescantes con
            sabor caribeño
          </p>
        </motion.div>

        {/* SECCIÓN A — CÓCTELES */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="cocteleria-section-title">Cócteles</h2>
        </motion.div>

        <motion.div
          className="cocteleria-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cocteles.map((cat) => (
            <motion.div
              key={cat.category}
              className="cocteleria-card"
              variants={cardVariants}
            >
              <div className="cocteleria-card__header">
                <span className="cocteleria-card__emoji">{cat.emoji}</span>
                <h3 className="cocteleria-card__title">{cat.category}</h3>
              </div>
              <ul className="cocteleria-card__list">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Tragos Placeholder */}
          <motion.div
            className="cocteleria-card cocteleria-card--placeholder"
            variants={cardVariants}
          >
            <div className="cocteleria-card__header">
              <span className="cocteleria-card__emoji">🥃</span>
              <h3 className="cocteleria-card__title">Tragos</h3>
            </div>
            <p className="cocteleria-card__placeholder-text">
              Próximamente disponible
            </p>
          </motion.div>
        </motion.div>

        {/* SECCIÓN B — BEBIDAS SIN ALCOHOL */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: 80 }}
        >
          <h2 className="cocteleria-section-title">Bebidas Sin Alcohol</h2>
        </motion.div>

        <motion.div
          className="cocteleria-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Agua de Coco Destacado */}
          <motion.div
            className="cocteleria-card cocteleria-card--featured"
            variants={cardVariants}
          >
            <div className="cocteleria-card__header">
              <span className="cocteleria-card__emoji">🥥</span>
              <h3 className="cocteleria-card__title">Agua de Coco</h3>
            </div>
            <p className="cocteleria-card__featured-desc">
              Directamente del coco, fresca y natural
            </p>
          </motion.div>

          {bebidasSinAlcohol.map((cat) => (
            <motion.div
              key={cat.category}
              className="cocteleria-card"
              variants={cardVariants}
            >
              <div className="cocteleria-card__header">
                <span className="cocteleria-card__emoji">{cat.emoji}</span>
                <h3 className="cocteleria-card__title">{cat.category}</h3>
              </div>
              <ul className="cocteleria-card__list">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
