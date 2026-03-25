import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dotPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    let rafId: number;
    const animate = () => {
      if (cursorRef.current) {
        const cx = parseFloat(cursorRef.current.style.left || '0');
        const cy = parseFloat(cursorRef.current.style.top || '0');
        const nx = cx + (pos.current.x - cx) * 0.15;
        const ny = cy + (pos.current.y - cy) * 0.15;
        cursorRef.current.style.left = `${nx}px`;
        cursorRef.current.style.top = `${ny}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll('a, button, [data-magnetic]');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-magnetic]');
      els.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? 'custom-cursor--hover' : ''}`}
        style={{ left: 0, top: 0 }}
      />
      <div ref={dotRef} className="cursor-dot" style={{ left: 0, top: 0 }} />
    </>
  );
}
