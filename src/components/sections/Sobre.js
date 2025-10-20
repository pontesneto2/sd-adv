import Image from 'next/image';
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/ui/Animations';

export default function Sobre() {
  return (
    <section id="sobre" className="bg-gradient-to-br from-sd-paper to-white py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <SlideInLeft className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Moldura decorativa */}
                <div className="absolute inset-0 rounded-full border-8 border-sd-gold/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-4 border-sd-gold"></div>
                
                {/* Foto */}
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/casal.jpeg"
                    alt="Silva & Duarte"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </SlideInLeft>

            {/* Texto */}
            <SlideInRight className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-sd-green">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  A <strong className="text-sd-gold">Silva & Duarte</strong> nasceu do sonho de dois advogados determinados a transformar o Direito em instrumento de dignidade e conclusão.
                </p>
                <p>
                  O que um dia pareceu impossível tornou-se propósito: <strong>exercer a advocacia com fé, maturidade e excelência</strong>.
                </p>
                <p className="text-sd-green font-semibold italic">
                  &ldquo;Nosso compromisso é com a verdade, com a justiça e com cada história que passa por nós.&rdquo;
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5585994404197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-normal bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-sd-gold-2 hover:to-sd-gold"
                >
                  Conheça nossa equipe
                </a>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
}
