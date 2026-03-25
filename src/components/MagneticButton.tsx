import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const props = {
    ref: ref as React.Ref<HTMLAnchorElement>,
    className,
    onMouseMove: handleMouse,
    onMouseLeave: handleLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 200, damping: 15, mass: 0.5 },
    'data-magnetic': true,
  };

  if (href) {
    return (
      <motion.a {...props} href={href} target={target} rel={rel}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...(props as React.ComponentProps<typeof motion.button>)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
