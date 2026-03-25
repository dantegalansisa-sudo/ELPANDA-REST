import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        scaleX,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
        zIndex: 9999,
      }}
    />
  );
}
