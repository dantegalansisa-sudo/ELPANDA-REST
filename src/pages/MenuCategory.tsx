import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuCategories } from '../data/menuData';
import { containerVariants, cardVariants } from '../utils/easings';

export default function MenuCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = menuCategories.find((c) => c.id === categoryId);

  if (!category) return <Navigate to="/menu" />;

  return (
    <div className="menu-cat-page">
      <div className="menu-cat__breadcrumb">
        <Link to="/">Inicio</Link> / <Link to="/menu">Menú</Link> /{' '}
        {category.title}
      </div>

      <motion.div
        className="menu-cat__header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="menu-cat__emoji">{category.emoji}</span>
        <h1 className="menu-cat__title">{category.title}</h1>
        <p className="menu-cat__subtitle">{category.subtitle}</p>
      </motion.div>

      <motion.div
        className="menu-cat__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {category.items.map((item, i) => (
          <motion.div
            key={i}
            className="dish-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div
              className="dish-card__img"
              style={{ background: `${category.color}20` }}
            >
              <span className="dish-card__img-emoji">{category.emoji}</span>
            </div>
            <div className="dish-card__body">
              <h3 className="dish-card__name">{item.name}</h3>
              <p className="dish-card__desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="menu-cat__cta-wrap">
        <a
          href={`https://wa.me/18498864256?text=${encodeURIComponent(
            `Hola, quiero hacer un pedido de ${category.title}`
          )}`}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Ordenar por WhatsApp
        </a>
      </div>
    </div>
  );
}
