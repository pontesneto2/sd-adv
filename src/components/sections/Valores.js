import Icons from '@/components/icons/Icons';
import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

export default function Valores() {
  const items = [
    {
      Icon: Icons.Target,
      title: 'Missão',
      description: 'Exercer a advocacia com empatia, excelência técnica e propósito.',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500',
    },
    {
      Icon: Icons.Eye,
      title: 'Visão',
      description: 'Ser referência em soluções jurídicas humanizadas e eficazes.',
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500',
    },
    {
      Icon: Icons.Award,
      title: 'Valores',
      description: 'Ética, fé, comprometimento, verdade e respeito.',
      color: 'from-sd-gold/20 to-yellow-600/20',
      borderColor: 'border-sd-gold/30',
      hoverBorder: 'hover:border-sd-gold',
    },
  ];

  return (
    <section id="valores" className="bg-[#1a1f1d] py-32 text-white">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Nossos Pilares
            </h2>
            <p className="text-gray-300">
              Os princípios que guiam cada decisão e cada atendimento.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
          {items.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-3xl p-8 border-2 ${item.borderColor} ${item.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden`}
              >
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Ícone animado */}
                <div className="mb-4 transform group-hover:scale-110 transition-all duration-300 flex justify-center">
                  <IconComponent className="w-16 h-16 text-sd-gold" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sd-gold transition-colors text-center">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-300 leading-relaxed text-center">
                  {item.description}
                </p>

                {/* Linha decorativa */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-sd-gold to-transparent transition-all duration-500 mx-auto"></div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
