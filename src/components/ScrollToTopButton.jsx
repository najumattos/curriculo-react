import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTopButton.css';

/**
 * ScrollToTopButton
 * - Componente reutilizável que aparece ao fazer scroll para baixo
 * - Clique para voltar ao topo com smooth scroll
 * - Responsivo e acessível
 */
export function ScrollToTopButton({ threshold = 300 }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollToTopButton;
