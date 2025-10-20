import Icons from '@/components/icons/Icons';
import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

export default function Atendimento() {
  const modalidades = [
    {
      Icon: Icons.Globe,
      title: 'Alcance Nacional',
      description: 'Atendemos clientes em todo o Brasil, onde quer que você esteja.',
    },
    {
      Icon: Icons.Building,
      title: 'Atendimento Presencial',
      description: 'Escritório localizado no Rio Mar Kennedy Empresarial, Fortaleza/CE.',
    },
    {
      Icon: Icons.Monitor,
      title: 'Atendimento Virtual',
      description: 'Consultoria online por videochamada, e-mail e WhatsApp.',
    },
  ];

  return (
    <section id="atendimento" className="bg-gradient-to-br from-sd-paper to-gray-100 py-32">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-sd-green">
              Nosso Atendimento
            </h2>
            <p className="text-gray-700 text-lg">
              Assessoria completa, com acompanhamento personalizado em todas as etapas do processo.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12" staggerDelay={150}>
          {modalidades.map((modalidade, index) => {
            const IconComponent = modalidade.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-sd-gold flex flex-col h-full"
              >
                <div className="text-sd-gold mb-4 flex justify-center">
                  <IconComponent className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sd-green text-center">{modalidade.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center flex-grow">
                  {modalidade.description}
                </p>
              </div>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={500}>
          <div className="relative bg-gradient-to-br from-sd-green via-[#0c1814] to-sd-green rounded-3xl p-10 max-w-3xl mx-auto text-center shadow-2xl border-2 border-sd-gold/50 overflow-hidden">
            {/* Efeito de brilho sutil */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-48 h-48 bg-sd-gold rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-48 h-48 bg-sd-gold-2 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-200 mb-6 text-lg">
                Converse agora com um advogado especialista e receba orientação clara para o seu caso.
              </p>
              <a
                href="https://wa.me/5585994404197"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sd-gold/50 hover:from-sd-gold-2 hover:to-sd-gold text-lg"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
