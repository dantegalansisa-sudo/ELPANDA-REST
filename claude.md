# CLAUDE.md — EL PANDA RESTAURANT
## NEXIX Tech Studio · Proyecto Web Completo

---

## INSTRUCCIÓN INICIAL OBLIGATORIA

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee este CLAUDE.md completo y construye el proyecto sección por sección.
Detente después del Hero y muestra el resultado para aprobación.
```

---

## 1. DATOS DEL CLIENTE

```
Negocio:     El Panda Restaurant / Tours Monte Río El Panda
Asociado:    Restaurant San Miguel
Dueño:       Jose Miguel Matos
Ubicación:   Playa Monte Río, Azua, República Dominicana
WhatsApp:    849 886 4256
Instagram:   @elpandarest
Tours:       10 botes disponibles · $500 p/p
Destinos:    Playa El Barco · Cueva de los Piratas · Playa Blanca
```

---

## 2. CONCEPTO VISUAL — "PANDA DEL MAR"

Restaurante de playa tropical en Azua con identidad única: el panda marinero.
Energía vibrante, mariscos frescos, sol, mar y aventura en lancha.
La web transmite esa combinación de sabor dominicano + paraíso caribeño.

**Referencia directa:** bucheperico.com — cada categoría de menú abre su propia
ruta URL y presenta los platos en cards con imagen, nombre y descripción.

**Mood:** Tropical, energético, divertido, fresco. Azul océano + naranja vibrante.

---

## 3. PALETA DE COLORES

```css
:root {
  /* Principales */
  --color-primary:       #00B4D8;   /* turquesa océano */
  --color-primary-dark:  #0096B7;
  --color-primary-rgb:   0, 180, 216;
  --color-secondary:     #FF6B00;   /* naranja vibrante (logo) */
  --color-secondary-rgb: 255, 107, 0;
  --color-accent:        #FFD60A;   /* amarillo sol (logo) */

  /* Fondos */
  --color-dark:          #0D1B2A;   /* azul marino profundo */
  --color-dark-2:        #132233;
  --color-dark-3:        #1A2E45;
  --color-surface:       #0F2133;
  --color-card:          #16293D;

  /* Texto */
  --color-text:          #E8F4FD;
  --color-text-muted:    #8BAFCC;
  --color-white:         #FFFFFF;

  /* Utilitarios */
  --color-border:        rgba(0, 180, 216, 0.15);
  --color-overlay:       rgba(13, 27, 42, 0.75);
  --whatsapp-green:      #25D366;

  /* Sombras */
  --shadow-card:    0 8px 32px rgba(0, 180, 216, 0.12);
  --shadow-hover:   0 16px 48px rgba(0, 180, 216, 0.25);
  --shadow-primary: 0 8px 24px rgba(255, 107, 0, 0.35);

  /* Spacing */
  --section-padding: 120px 0;
  --container-max:   1320px;
  --container-pad:   0 64px;
  --radius-card:     20px;
  --radius-btn:      50px;

  /* Transiciones */
  --transition-fast:   0.2s ease;
  --transition-base:   0.35s ease;
  --transition-slow:   0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
```

---

## 4. TIPOGRAFÍA

```html
<!-- En index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* Escala tipográfica */
--font-display: 'Syne', sans-serif;       /* títulos, marca */
--font-body:    'Nunito', sans-serif;     /* body, descripciones */

/* Tamaños */
--text-hero:    clamp(3.2rem, 7vw, 6.5rem);
--text-h1:      clamp(2.4rem, 5vw, 4.5rem);
--text-h2:      clamp(1.8rem, 3.5vw, 3rem);
--text-h3:      clamp(1.2rem, 2.5vw, 1.6rem);
--text-body:    1rem;
--text-sm:      0.875rem;
--text-xs:      0.75rem;
```

---

## 5. ESTRUCTURA DE ARCHIVOS

```
el-panda-restaurant/
├── public/
│   └── images/
│       └── logo-panda.png        (logo del restaurante si disponible)
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── RevealText.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useParallax.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── MenuPage.tsx          (overview: grid de categorías)
│   │   ├── MenuCategory.tsx      (página individual de categoría)
│   │   ├── ToursPage.tsx
│   │   ├── EventosPage.tsx
│   │   └── ReservacionesPage.tsx
│   ├── data/
│   │   └── menuData.ts           (TODO el menú centralizado aquí)
│   ├── utils/
│   │   └── easings.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 6. DATOS DEL MENÚ — `src/data/menuData.ts`

```typescript
export interface MenuItem {
  name: string;
  description: string;
  emoji?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entradas',
    title: 'Entradas',
    subtitle: 'Para abrir el apetito',
    emoji: '🦐',
    color: '#FF6B00',
    items: [
      { name: 'Canastica Mixta', description: 'Lambí, camarones, bulgao o cangrejo' },
      { name: 'Bastoncitos de Mero', description: 'Crujientes bastoncitos de filete de mero' },
      { name: 'Salpicón de Mariscos', description: 'Mezcla fresca de mariscos del mar' },
      { name: 'Anillos de Calamares', description: 'Anillos de calamar dorados y crujientes' },
    ]
  },
  {
    id: 'pescados',
    title: 'Pescados',
    subtitle: 'Frescos del día',
    emoji: '🐟',
    color: '#00B4D8',
    items: [
      { name: 'Pescado Colorao', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Pescado Carite en Lonja', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Pescado Capitán', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Filete de Mero', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Chillo', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Lora', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
    ]
  },
  {
    id: 'caldos',
    title: 'Caldos y Sopas',
    subtitle: 'Calientes y reconfortantes',
    emoji: '🍲',
    color: '#FFD60A',
    items: [
      { name: 'Caldo de Pescado', description: 'Pescado colorao, carite, chillo, vegetales. Servido con tostones o arroz' },
      { name: 'Caldito de Camarones', description: 'Vegetales frescos. Servido con tostones o arroz' },
      { name: 'Full de Mariscos y Pescados', description: 'Vegetales frescos. Servido con tostones o arroz' },
      { name: 'Sopa de Carnes', description: 'Pollo, res, vegetales frescos. Servido con tostones o arroz' },
      { name: 'Casuela de Mariscos', description: 'Lambí, pulpo, bulgao, cangrejo, langostino, mejillones, calamar, camarones. Servido con tostones' },
      { name: 'Casuelita de Mariscos', description: 'Lambí, bulgao, cangrejo, calamar, camarones. Servido con tostones' },
    ]
  },
  {
    id: 'mariscos',
    title: 'Mariscos',
    subtitle: 'Del mar a tu mesa',
    emoji: '🦞',
    color: '#E63946',
    items: [
      { name: 'Camarones', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la crema, a la rabiaca, a la mayonesa, al limón, a la margarita o a la plancha' },
      { name: 'Lambí', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la crema, a la rabiaca, a la mayonesa, al limón, a la margarita o a la plancha' },
      { name: 'Bulgao', description: 'Al ajillo, a la criolla, a la vinagreta, a la rabiaca, al limón, a la margarita' },
      { name: 'Cangrejo', description: 'Al ajillo, a la criolla, a la rabiaca, a la margarita, al coco' },
      { name: 'Langostas', description: 'A la rabiaca, al termidor, al ajillo, a la criolla, al limón, a la plancha, rellena, a la vinagreta, al vino, a la bayonesa al coco' },
      { name: 'Salpicón de Mariscos', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la rabiaca, al limón, a la margarita' },
      { name: 'Sopa de Mariscos', description: 'A la marina, de pescado colorao, de carite o de pollo' },
    ]
  },
  {
    id: 'mofongos',
    title: 'Mofongos',
    subtitle: 'Sabor dominicano auténtico',
    emoji: '🫙',
    color: '#7B2D8B',
    items: [
      { name: 'Mofongo de Camarones', description: 'Plátano verde, ajo, chicharrón crijiente, camarones, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'SalpicóFONGO', description: 'Plátano verde, ajo, chicharrón crijiente, camarones, lambí y pulpo, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'LambiFONGO', description: 'Plátano verde, ajo, chicharrón crijiente, lambí, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'LangoFONGO', description: 'Plátano verde, ajo, chicharrón crijiente, langosta, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'PecaFONGO', description: 'Plátano verde, ajo, chicharrón crijiente, pescado, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'PolloFONGO', description: 'Plátano verde, ajo, chicharrón crijiente, pechuga de pollo, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
    ]
  },
  {
    id: 'carnes',
    title: 'Carnes',
    subtitle: 'Mar y tierra',
    emoji: '🥩',
    color: '#C0392B',
    items: [
      { name: 'Filete de Cerdo', description: 'Vegetales salteados, salsa de ajo. Guarnición: papas o tostones' },
      { name: 'Pechuga a la Plancha', description: 'Vegetales salteados, salsa de ajo. Guarnición: papas o tostones' },
      { name: 'Pechurina', description: 'Guarnición: papas o tostones' },
      { name: 'Pechuga al Coco', description: 'Guarnición: papas o tostones' },
      { name: 'Chuleta / Longaniza', description: 'Guarnición: papas o tostones' },
      { name: 'Churrasco', description: 'Guarnición: vegetales salteados' },
      { name: 'Parrillada Mar y Tierra', description: 'Calamar, camarones, langosta, churrasco y pechuga. Para 4 o 5 personas' },
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    subtitle: 'Frescas y naturales',
    emoji: '🥗',
    color: '#27AE60',
    items: [
      { name: 'Ensalada Verde', description: 'Lechuga, tomates y pepino' },
      { name: 'Ensalada de Vegetales', description: 'Coliflor, brócoli, papas, zanahorias y ají morrón' },
      { name: 'Ensalada de Mariscos', description: 'Lechuga, tomates, vegetales, camarones, langosta, lambí y mejillones' },
    ]
  },
  {
    id: 'arroces',
    title: 'Arroces',
    subtitle: 'La base perfecta',
    emoji: '🍚',
    color: '#F39C12',
    items: [
      { name: 'Paella de Mariscos', description: 'Camarones, lambí, mejillones, calamar y langostino' },
      { name: 'Moro de Guandúles', description: 'Con coco' },
      { name: 'Arroz Blanco', description: 'Arroz blanco esponjoso' },
    ]
  },
  {
    id: 'guarnicion',
    title: 'Guarnición',
    subtitle: 'Para acompañar',
    emoji: '🍟',
    color: '#E67E22',
    items: [
      { name: 'Papas fritas', description: 'Doradas y crujientes' },
      { name: 'Batata frita', description: 'Dulce y crujiente' },
      { name: 'Plátano Frito', description: 'Plátano maduro frito' },
      { name: 'Guineitos', description: 'Guineitos verdes' },
      { name: 'Yuca', description: 'Yuca hervida o frita' },
    ]
  },
];

export const toursData = {
  botes: 10,
  precioPorPersona: 500,
  moneda: 'DOP',
  destinos: [
    {
      name: 'Playa El Barco',
      description: 'Una playa virgen rodeada de acantilados. Aguas cristalinas y arena blanca.',
      emoji: '⚓',
    },
    {
      name: 'Cueva de los Piratas',
      description: 'Formación natural de cuevas con historia y misterio. Una aventura única.',
      emoji: '🏴‍☠️',
    },
    {
      name: 'Playa Blanca',
      description: 'Arena blanca y aguas turquesas. El paraíso caribeño en Azua.',
      emoji: '🏖️',
    },
  ],
  whatsapp: '18498864256',
};
```

---

## 7. COMPONENTES GLOBALES

### `src/components/ScrollProgress.tsx`
```tsx
import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '3px', scaleX, transformOrigin: '0%',
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
        zIndex: 9999,
      }}
    />
  );
}
```

### `src/components/WhatsAppButton.tsx`
```tsx
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/18498864256"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}
```

```css
/* WhatsApp FAB */
.whatsapp-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: 60px;
  background: var(--whatsapp-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 9000;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  text-decoration: none;
}
.whatsapp-fab svg { width: 30px; height: 30px; }
```

---

## 8. NAVBAR — `src/components/Navbar.tsx`

```tsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/menu', label: 'Menú' },
    { to: '/tours', label: 'Tours' },
    { to: '/eventos', label: 'Eventos' },
    { to: '/reservaciones', label: 'Reservaciones' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🐼</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">El Panda</span>
            <span className="navbar__logo-sub">Restaurant</span>
          </div>
        </Link>

        {/* Links desktop */}
        <ul className="navbar__links">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton
          href="https://wa.me/18498864256"
          className="navbar__cta"
        >
          📞 Reservar
        </MagneticButton>

        {/* Hamburger mobile */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/18498864256"
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              📞 Reservar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
```

```css
/* Navbar styles */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s ease;
}
.navbar--scrolled {
  background: rgba(13, 27, 42, 0.95);
  backdrop-filter: blur(20px);
  padding: 14px 0;
  border-bottom: 1px solid var(--color-border);
}
.navbar__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  display: flex;
  align-items: center;
  gap: 40px;
}
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}
.navbar__logo-icon { font-size: 2rem; }
.navbar__logo-main {
  display: block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-white);
  line-height: 1;
}
.navbar__logo-sub {
  display: block;
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.navbar__links {
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0; padding: 0;
  flex: 1;
  justify-content: center;
}
.navbar__link {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: var(--radius-btn);
  transition: all var(--transition-fast);
}
.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
  background: rgba(0, 180, 216, 0.08);
}
.navbar__cta {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-dark);
  background: var(--color-primary);
  padding: 10px 24px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  white-space: nowrap;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}
.navbar__cta:hover {
  background: var(--color-secondary);
  color: var(--color-white);
  transform: translateY(-2px);
}
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-left: auto;
}
.hamburger-line {
  display: block;
  width: 24px; height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.navbar__mobile-menu {
  background: var(--color-dark-2);
  border-top: 1px solid var(--color-border);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.navbar__mobile-link {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all var(--transition-fast);
}
.navbar__mobile-link:hover { background: rgba(0,180,216,0.1); color: var(--color-primary); }
@media (max-width: 900px) {
  .navbar__links, .navbar__cta { display: none; }
  .navbar__hamburger { display: flex; }
}
```

---

## 9. HOME — `src/pages/Home.tsx`

La página principal tiene estas secciones en orden:

### 9.1 HERO SECTION

```tsx
// Hero con video/imagen de fondo de la playa
// Parallax scroll zoom en el fondo
// RevealText en H1 y subtítulo
// Dos CTAs: "Ver Menú" y "Reservar Mesa"
// Overlay oscuro degradado de abajo hacia arriba

// Layout:
// - Fondo: imagen de la playa Monte Río con parallax
// - Overlay: linear-gradient(to top, #0D1B2A 0%, transparent 60%)
// - Centro: contenido
//   - Badge: "🌊 Playa Monte Río, Azua"
//   - H1: "Sabor del Mar en El Corazón del Caribe"
//   - Subtítulo: "Mariscos frescos, mofongos dominicanos y tours en lancha"
//   - CTAs: [Ver Menú completo] [📞 Reservar por WhatsApp]
// - Scroll indicator animado abajo

// Usar imagen de stock de playa caribeña (desde Pexels URL directa):
const HERO_IMAGE = 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920';
```

```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--color-white);
  text-align: center;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__bg img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(13, 27, 42, 1) 0%,
    rgba(13, 27, 42, 0.5) 50%,
    rgba(13, 27, 42, 0.2) 100%
  );
  z-index: 1;
}
.hero__content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 32px;
}
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 180, 216, 0.15);
  border: 1px solid rgba(0, 180, 216, 0.3);
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 28px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.05;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3em;
}
.hero__subtitle {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255,255,255,0.8);
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}
.hero__ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-dark);
  background: var(--color-primary);
  padding: 16px 36px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover {
  background: var(--color-secondary);
  color: var(--color-white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-primary);
}
.btn-secondary {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-white);
  background: transparent;
  padding: 16px 36px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-3px);
}
.hero__scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.5);
  font-size: 0.75rem;
  font-family: var(--font-body);
  letter-spacing: 0.1em;
}
.scroll-dot {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(0,180,216,0.8), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(0.7); }
}
```

### 9.2 STATS / DATOS RÁPIDOS

```tsx
// 4 datos rápidos con AnimatedCounter
// Fondo: var(--color-dark-2)
// Grid 4 columnas

const stats = [
  { value: 10, suffix: ' botes', label: 'Botes de Tour' },
  { value: 3, suffix: '', label: 'Playas Destino' },
  { value: 9, suffix: '+', label: 'Categorías en el Menú' },
  { value: 500, suffix: 'RD$', label: 'Tour por Persona', prefix: '' },
];
```

### 9.3 MENÚ PREVIEW

```tsx
// Sección que muestra las 9 categorías como grid de cards
// Cada card: emoji grande, nombre categoría, cantidad de platos, flecha →
// Al hacer click → navega a /menu/[categoria-id]
// Grid: 3 columnas desktop, 2 tablet, 1 mobile

// Usar stagger animation (containerVariants + cardVariants del skill)
// Botón al final: "Ver Menú Completo →" → /menu
```

```css
.menu-preview { padding: var(--section-padding); background: var(--color-dark); }
.menu-preview__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
}
.category-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 32px 28px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}
.category-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,180,216,0.05), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}
.category-card:hover::before { opacity: 1; }
.category-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}
.category-card__emoji {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border-radius: 16px;
}
.category-card__info { flex: 1; }
.category-card__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-white);
  margin-bottom: 4px;
}
.category-card__count {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.category-card__arrow {
  font-size: 1.2rem;
  color: var(--color-primary);
  transition: transform var(--transition-fast);
}
.category-card:hover .category-card__arrow { transform: translateX(4px); }
@media (max-width: 900px) {
  .menu-preview__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .menu-preview__grid { grid-template-columns: 1fr; }
}
```

### 9.4 TOURS SECTION

```tsx
// Sección con fondo de imagen de playa + overlay oscuro
// Título: "Tours en Lancha"
// Subtítulo: "10 botes disponibles · $500 RD por persona"
// 3 tarjetas de destino: Playa El Barco, Cueva de los Piratas, Playa Blanca
// CTA final grande: "Reservar Tour por WhatsApp" → wa.me/18498864256
```

```css
.tours-home {
  padding: var(--section-padding);
  background: var(--color-dark-2);
  position: relative;
}
.tours-home__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 60px;
  margin-bottom: 48px;
}
.tour-dest-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 40px 32px;
  text-align: center;
  transition: all var(--transition-base);
}
.tour-dest-card:hover {
  border-color: var(--color-secondary);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(255,107,0,0.2);
}
.tour-dest-card__emoji { font-size: 3rem; margin-bottom: 16px; display: block; }
.tour-dest-card__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--color-white);
  margin-bottom: 12px;
}
.tour-dest-card__desc {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
@media (max-width: 900px) {
  .tours-home__grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
}
```

### 9.5 EVENTOS SECTION (Preview)

```tsx
// Sección simple con fondo oscuro
// Título: "Próximos Eventos"
// Texto: "Fiestas de Palo, actividades especiales, pasa días en el Panda."
// CTA: "Ver todos los eventos" → /eventos
// Background: imagen del flyer de Fiesta de Palo o fondo oscuro con pattern
```

### 9.6 UBICACIÓN / CONTACTO

```tsx
// Sección con 2 columnas:
// Izquierda: datos de contacto (WhatsApp, ubicación, horarios)
// Derecha: mapa embed de Google Maps (Playa Monte Río, Azua)

const contactInfo = [
  { icon: '📍', label: 'Ubicación', value: 'Playa Monte Río, Azua, RD' },
  { icon: '📱', label: 'WhatsApp', value: '849 886 4256', href: 'https://wa.me/18498864256' },
  { icon: '📸', label: 'Instagram', value: '@elpandarest', href: 'https://instagram.com/elpandarest' },
];
```

---

## 10. MENÚ PAGE — `src/pages/MenuPage.tsx`

Página overview del menú. Muestra todas las categorías como grid grande.

```tsx
// URL: /menu
// Igual que la sección de preview del home pero más grande y con descripción
// Grid: 3 columnas
// Cada card navega a /menu/:categoryId
// Sin AppLayout wrapper — solo el contenido
```

---

## 11. MENÚ CATEGORY PAGE — `src/pages/MenuCategory.tsx`

```tsx
// URL: /menu/:categoryId
// Leer el categoryId desde useParams()
// Buscar en menuCategories el que tenga id === categoryId
// Si no existe → redirigir a /menu

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuCategories } from '../data/menuData';

export default function MenuCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = menuCategories.find(c => c.id === categoryId);

  if (!category) return <Navigate to="/menu" />;

  return (
    <div className="menu-cat-page">
      {/* Breadcrumb */}
      <div className="menu-cat__breadcrumb">
        <Link to="/">Inicio</Link> / <Link to="/menu">Menú</Link> / {category.title}
      </div>

      {/* Header */}
      <div className="menu-cat__header">
        <span className="menu-cat__emoji">{category.emoji}</span>
        <h1 className="menu-cat__title">{category.title}</h1>
        <p className="menu-cat__subtitle">{category.subtitle}</p>
      </div>

      {/* Grid de platos */}
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
            {/* Placeholder visual con emoji hasta tener fotos reales */}
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

      {/* CTA WhatsApp */}
      <div className="menu-cat__cta-wrap">
        <a
          href="https://wa.me/18498864256?text=Hola%2C%20quiero%20hacer%20un%20pedido"
          className="btn-primary"
          target="_blank"
        >
          📱 Ordenar por WhatsApp
        </a>
      </div>
    </div>
  );
}
```

```css
.menu-cat-page {
  min-height: 100vh;
  background: var(--color-dark);
  padding-top: 100px;
  padding-bottom: 80px;
}
.menu-cat__breadcrumb {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  padding-bottom: 0;
}
.menu-cat__breadcrumb a { color: var(--color-primary); text-decoration: none; }
.menu-cat__header {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 40px 64px 60px;
  text-align: center;
}
.menu-cat__emoji { font-size: 4rem; display: block; margin-bottom: 16px; }
.menu-cat__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-h1);
  color: var(--color-white);
  margin-bottom: 12px;
}
.menu-cat__subtitle {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--color-text-muted);
}
.menu-cat__grid {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.dish-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: all var(--transition-base);
}
.dish-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-card);
}
.dish-card__img {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dish-card__img-emoji { font-size: 4rem; }
.dish-card__body { padding: 20px 24px; }
.dish-card__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-white);
  margin-bottom: 8px;
}
.dish-card__desc {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}
.menu-cat__cta-wrap {
  max-width: var(--container-max);
  margin: 48px auto 0;
  padding: var(--container-pad);
  text-align: center;
}
@media (max-width: 900px) {
  .menu-cat__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .menu-cat__grid { grid-template-columns: 1fr; }
  .menu-cat__header { padding: 40px 24px 40px; }
}
```

---

## 12. TOURS PAGE — `src/pages/ToursPage.tsx`

```tsx
// URL: /tours
// Hero de página: "Tours Monte Río El Panda"
// Sección principal: 3 destinos en cards grandes con foto de playa (Pexels)
// Fotos recomendadas (URLs de Pexels para tropical beach):
//   Playa El Barco:   https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg
//   Cueva Piratas:    https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg
//   Playa Blanca:     https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg
// Info: 10 botes · $500 RD p/p
// CTA grande final: "Reservar Tour → WhatsApp"
// Sección de proceso: "¿Cómo funciona?" (3 pasos: Escríbenos → Coordinamos → ¡Disfruta!)
```

---

## 13. EVENTOS PAGE — `src/pages/EventosPage.tsx`

```tsx
// URL: /eventos
// Muestra eventos pasados y próximos
// Ejemplos conocidos:
//   - Fiesta de Palo - Patronales San Miguel (29 Sept, Playa Monterio)
//   - Gran Fiesta de Palo (05 Abr) — traba 701 Las Yavitas, Azua
// Cards de evento con fecha, nombre, descripción, sponsors (Presidente, Rafael Hidalgo)
// CTA: "¿Quieres organizar un evento aquí? Escríbenos"
```

---

## 14. RESERVACIONES PAGE — `src/pages/ReservacionesPage.tsx`

```tsx
// URL: /reservaciones
// Formulario visual (NO <form> HTML — usar controlled state en React)
// Campos:
//   - Nombre completo (input text)
//   - Teléfono / WhatsApp (input tel)
//   - Fecha de visita (input date)
//   - Número de personas (select: 1-2, 3-5, 6-10, +10)
//   - Tipo de visita (select: Solo comer, Tour + almuerzo, Evento privado)
//   - Mensaje adicional (textarea)
// Al enviar → construir mensaje de WhatsApp con todos los datos
//   → abrir wa.me/18498864256?text=...
// Mostrar también info directa: "O escríbenos directamente →"
```

---

## 15. APP.TSX Y ROUTING

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import MenuCategory from './pages/MenuCategory';
import ToursPage from './pages/ToursPage';
import EventosPage from './pages/EventosPage';
import ReservacionesPage from './pages/ReservacionesPage';

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:categoryId" element={<MenuCategory />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/reservaciones" element={<ReservacionesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

---

## 16. FOOTER — `src/components/Footer.tsx`

```tsx
// Estructura:
// Logo + tagline: "Sabor del Mar en Azua"
// 3 columnas: Navegación | Menú Rápido | Contacto
// Bottom bar: "© 2025 El Panda Restaurant · Playa Monte Río, Azua · Desarrollado por NEXIX Tech Studio"
// Fondo: var(--color-dark-2) con borde top primary
```

---

## 17. INDEX.CSS — ESTILOS GLOBALES

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Nunito:wght@400;500;600;700&display=swap');

/* Variables en :root (ver sección 3) */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
* { cursor: none !important; } /* Desactivar en mobile via media query */

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--color-dark);
  color: var(--color-text);
  overflow-x: hidden;
  line-height: 1.6;
}

/* Container universal */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
}

/* Section header universal */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}
.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.section-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 16px;
}
.section-subtitle {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Stagger animation variants (definir en utils/easings.ts también) */
/* containerVariants y cardVariants — ver NEXIX Taste Skill */

/* Mobile global */
@media (max-width: 768px) {
  * { cursor: auto !important; }
  :root {
    --container-pad: 0 24px;
    --section-padding: 80px 0;
  }
}

/* Scrollbar custom */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-dark-2); }
::-webkit-scrollbar-thumb { background: var(--color-primary); border-radius: 3px; }
```

---

## 18. IMÁGENES DE STOCK PARA HERO

Usar estas URLs de Pexels directamente en el código (no descargar):

```
Hero principal (playa caribeña):
https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920

Tour background:
https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920

Mariscos hero:
https://images.pexels.com/photos/3997603/pexels-photo-3997603.jpeg?auto=compress&cs=tinysrgb&w=1920
```

---

## 19. DEPENDENCIAS — `package.json`

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## 20. INSTRUCCIÓN FINAL PARA CLAUDE CODE

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee este CLAUDE.md completo.

Construye el proyecto El Panda Restaurant siguiendo exactamente este spec:
- Stack: React + TypeScript + Vite + Framer Motion + Vanilla CSS
- Concepto: "PANDA DEL MAR" — azul turquesa #00B4D8 + naranja #FF6B00
- Instalar react-router-dom para el routing multi-página del menú
- Crear menuData.ts con TODAS las categorías y platos especificados
- Cada categoría del menú tiene su propia URL: /menu/entradas, /menu/pescados, etc.
- Aplicar todos los niveles del NEXIX Taste Skill (cursor, reveal, parallax, magnetic, stagger)

ORDEN DE CONSTRUCCIÓN:
1. Setup (vite, dependencias, index.css con variables)
2. Componentes globales (CustomCursor, ScrollProgress, WhatsAppButton, RevealText, MagneticButton)
3. menuData.ts completo
4. Navbar + App.tsx con routing
5. Hero section de Home

DETENTE aquí y muestra el resultado para aprobación antes de continuar.
```

---

*NEXIX Tech Studio · El Panda Restaurant · "PANDA DEL MAR"*
*Generado para Claude Code — No modificar sin actualizar el spec*