import Icons from '@/components/icons/Icons';
import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

export default function Areas() {
  const areas = [
    {
      Icon: Icons.Briefcase,
      title: 'Direito Trabalhista',
      description: 'Verbas rescisórias, trabalho sem registro, acidente de trabalho, horas extras.',
    },
    {
      Icon: Icons.Shield,
      title: 'Direito Previdenciário',
      description: 'Aposentadoria, BPC LOAS (Idoso e Deficiente), Auxilio por incapacidade.',
    },
    {
      Icon: Icons.FileText,
      title: 'Direito Civil e Contratual',
      description: 'Revisional de Contrato, Contratos de compra e venda, aluguel ou doação, Execuções.',
    },
    {
      Icon: Icons.ShoppingCart,
      title: 'Direito do Consumidor',
      description: 'Ações indenizatórias, Ações Bancárias, Vício Oculto, Cobrança e/ou Negativação indevida.',
    },
    {
      Icon: Icons.Home,
      title: 'Direito Imobiliário',
      description: 'Usucapião, despejo, locação e regularização de imóvel.',
    },
    {
      Icon: Icons.Users,
      title: 'Família e Sucessões',
      description: 'Divórcio, guarda, alimentos, inventário e união estável.',
    },
  ];

  return (
    <section id="areas" className="bg-[#1a1f1d] py-32 text-white">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-gray-300">
              Atuação estratégica e humanizada em questões trabalhistas, previdenciárias, cíveis, imobiliárias e de família.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12" staggerDelay={150}>
          {areas.map((area, index) => {
            const IconComponent = area.Icon;
            return (
              <div
                key={index}
                className="bg-[#252a28] rounded-2xl p-8 border border-gray-700/50 hover:border-sd-gold/70 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sd-gold/20 text-center"
              >
                <div className="text-sd-gold mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={600}>
          <div className="text-center">
            <a
              href="https://wa.me/5585994404197"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-normal bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-sd-gold-2 hover:to-sd-gold"
            >
              Consulte um advogado
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
