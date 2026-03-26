import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuCategories } from '../data/menuData';
import { containerVariants, cardVariants, fadeInUp } from '../utils/easings';

export default function MenuPage() {
  return (
    <div className="menu-page">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="section-label">Nuestro Menú</span>
          <h1 className="section-title">Menú Completo</h1>
          <p className="section-subtitle">
            9 categorías de sabor dominicano auténtico. Elige una
            categoría para ver todos los platos disponibles.
          </p>
        </motion.div>

        <motion.div
          className="menu-page__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuCategories.map((cat) => (
            <motion.div key={cat.id} variants={cardVariants}>
              <Link to={`/menu/${cat.id}`} className="category-card">
                <div className="category-card__emoji">{cat.emoji}</div>
                <div className="category-card__info">
                  <div className="category-card__name">{cat.title}</div>
                  <div className="category-card__count">
                    {cat.items.length} platos · {cat.subtitle}
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
                  Cócteles, jugos y más
                </div>
              </div>
              <span className="category-card__arrow">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
