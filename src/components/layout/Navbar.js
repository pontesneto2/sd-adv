'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { WHATS_URL, SOCIAL } from '@/lib/constants';
import Icons from '@/components/icons/Icons';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 8);
      setShowTopBar(window.scrollY < 50); // Esconde a barra ao rolar
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Faixa Superior Fixa */}
      <div 
        className={`${showTopBar ? 'h-8 opacity-100' : 'h-0 opacity-0'} overflow-hidden transition-all duration-300 bg-sd-gold border-b border-sd-gold/30 hidden md:block fixed inset-x-0 top-0 z-[60]`}
      >
        <div className="container mx-auto px-6 h-8 flex items-center justify-end">
          <div className="flex items-center gap-6 text-xs text-sd-green">
            <span className="font-semibold">Silva & Duarte Advocacia Especializada</span>
            <span className="text-sd-green/40">|</span>
            <a 
              href="tel:+5585994404197" 
              className="hover:text-sd-green/80 transition-colors flex items-center gap-1.5"
            >
              <Icons.Phone className="w-3 h-3" />
              (85) 9 9440-4197
            </a>
            <span className="text-sd-green/40">|</span>
            <div className="flex items-center gap-3">
              <a 
                href={SOCIAL.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sd-green/80 transition-colors"
                aria-label="Instagram"
              >
                <Icons.Instagram className="w-4 h-4" />
              </a>
              <a 
                href={WHATS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sd-green/80 transition-colors"
                aria-label="WhatsApp"
              >
                <Icons.WhatsApp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <nav
        className={`${solid ? 'backdrop-blur-lg bg-sd-green/90 shadow' : 'bg-transparent'} ${showTopBar ? 'md:mt-8' : 'md:mt-0'} fixed inset-x-0 top-0 z-50 transition-all duration-300`}
      >
      <div className="container flex h-20 items-center gap-6 px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-3 text-white" onClick={closeMenu}>
          <Image src="/logogolden.png" alt="Silva & Duarte" width={120} height={40} className="w-28 md:w-32" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center text-white md:flex">
          <a href="#hero" className="hover:text-sd-gold transition-colors px-4">Início</a>
          <div className="h-4 w-px bg-sd-gold/30"></div>
          <a href="#stats" className="hover:text-sd-gold transition-colors px-4">Resultados</a>
          <div className="h-4 w-px bg-sd-gold/30"></div>
          <a href="#areas" className="hover:text-sd-gold transition-colors px-4">Atuação</a>
          <div className="h-4 w-px bg-sd-gold/30"></div>
          <a href="#equipe" className="hover:text-sd-gold transition-colors px-4">Equipe</a>
          <div className="h-4 w-px bg-sd-gold/30"></div>
          <a href="#sobre" className="hover:text-sd-gold transition-colors px-4">História</a>
          <div className="h-4 w-px bg-sd-gold/30"></div>
          <a href="#contato" className="hover:text-sd-gold transition-colors px-4">Contato</a>
          <div className="h-4 w-px bg-sd-gold/30 ml-4"></div>
          <div className="ml-4">
            <Button href={WHATS_URL} target="_blank" rel="noopener">Fale Conosco</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto md:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <Icons.Close className="w-6 h-6" />
          ) : (
            <Icons.Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sd-green/95 backdrop-blur-lg border-t border-sd-gold/20">
          <div className="container px-4 py-6 flex flex-col gap-4">
            <a href="#hero" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">Início</a>
            <a href="#stats" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">Resultados</a>
            <a href="#areas" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">Atuação</a>
            <a href="#equipe" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">Equipe</a>
            <a href="#sobre" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">História</a>
            <a href="#contato" onClick={closeMenu} className="text-white hover:text-sd-gold transition-colors py-2">Contato</a>
            <Button href={WHATS_URL} target="_blank" rel="noopener" onClick={closeMenu}>Fale Conosco</Button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
