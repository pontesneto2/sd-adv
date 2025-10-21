'use client';
import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-sd-gold">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#0f1312] py-32 text-white">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 animate-fade-in">
            Resultados em Números
          </h2>
          <p className="text-gray-300 mb-12 animate-fade-in-delay">
            Transparência e experiência reconhecida. Confira os indicadores públicos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Card Dr. Gabriel */}
            <div className="bg-[#1a1f1d] rounded-2xl p-8 border border-gray-700/50 hover:border-sd-gold/70 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sd-gold/20 animate-slide-up">
              <div className="mb-3">
                <Counter end={7000} suffix="+" />
              </div>
              <div className="text-lg mb-2">Processos do Dr. Gabriel</div>
              <div className="text-sm text-gray-400">
                Fonte:{' '}
                <a
                  href="https://www.jusbrasil.com.br/busca?q=gabriel+oliveira+da+silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sd-gold hover:text-sd-gold-2 hover:underline transition-colors"
                >
                  Jusbrasil
                </a>
              </div>
            </div>

            {/* Card Atendimento 24H */}
            <div className="bg-[#1a1f1d] rounded-2xl p-8 border border-gray-700/50 hover:border-sd-gold/70 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sd-gold/20 animate-slide-up-delay">
              <div className="mb-3">
                <Counter end={24} suffix="H" />
              </div>
              <div className="text-lg mb-2">Atendimento digital e presencial</div>
              <div className="text-sm text-gray-400">
                WhatsApp com resposta rápida
              </div>
            </div>
          </div>

          <div className="mt-12 animate-fade-in-delay-3">
            <a
              href="https://wa.me/5585994404197"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-normal bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-sd-gold-2 hover:to-sd-gold"
            >
              Falar com um especialista agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
