import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function RevealText({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: RevealTextProps) {
  const Tag = motion[as] as typeof motion.div;

  return (
    <div style={{ overflow: 'hidden' }}>
      <Tag
        className={className}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </Tag>
    </div>
  );
}
