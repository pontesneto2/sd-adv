'use client';
import { useEffect, useState } from 'react';
import Icons from '@/components/icons/Icons';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra apenas após rolar 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 bg-sd-gold hover:bg-sd-gold/80 text-sd-green rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Voltar ao topo"
    >
      <Icons.ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}
