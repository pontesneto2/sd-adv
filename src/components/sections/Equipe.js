import Image from 'next/image';
import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

export default function Equipe() {
  const team = [
    {
      name: 'Dra. Natalia Duarte',
      role: 'Direito Trabalhista, Previdenciário, Cível e Imobiliário.',
      oab: 'OAB 46.040',
      photo: '/natalia.jpeg',
      whatsapp: '5585994404197',
      isParceira: false,
    },
    {
      name: 'Dr. Gabriel Silva',
      role: 'Direito Trabalhista, Previdenciário e Empresarial.',
      oab: 'OAB 44.119',
      photo: '/gabriel.jpeg',
      whatsapp: '5585994404197',
      isParceira: false,
    },
    {
      name: 'Dra. Jessica Lima',
      role: 'Especialista em Direito do Consumidor e Família.',
      oab: 'OAB 46.376',
      photo: '/jessica.jpeg',
      whatsapp: '5585994404197',
      isParceira: true,
    },
    {
      name: 'Dra. Sabrinny Coutinho',
      role: 'Especialista em Previdenciário e Licitações.',
      oab: 'OAB 47.221',
      photo: '/sabrinny.jpeg',
      whatsapp: '5585994404197',
      isParceira: true,
    },
  ];

  return (
    <section id="equipe" className="bg-[#0f1312] py-32 text-white">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Equipe
            </h2>
            <p className="text-gray-300">
              Conheça quem estará ao seu lado em cada etapa.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" staggerDelay={150}>
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a1f1d] to-[#252a28] rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sd-gold/30 flex flex-col h-full"
            >
              {/* Tag Parceira - Canto superior direito */}
              {member.isParceira && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/90 to-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold text-white shadow-lg z-10">
                  Adv. Parceira
                </div>
              )}

              {/* Foto */}
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sd-gold/30 group-hover:border-sd-gold transition-all duration-300 flex-shrink-0">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Badge OAB */}
              <div className="flex justify-center mb-3 flex-shrink-0">
                <span className="px-4 py-1 rounded-full text-xs font-semibold bg-sd-gold/20 text-sd-gold border border-sd-gold/30">
                  {member.oab}
                </span>
              </div>

              {/* Nome */}
              <h3 className="text-xl font-bold text-center mb-2 group-hover:text-sd-gold transition-colors flex-shrink-0">
                {member.name}
              </h3>

              {/* Especialidade - área que cresce */}
              <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed flex-grow min-h-[3rem]">
                {member.role}
              </p>

              {/* Botão CTA */}
              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full px-4 py-3 font-normal bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm flex-shrink-0"
              >
                Falar com {member.name.split(' ')[1]}
              </a>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
