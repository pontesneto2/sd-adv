import { WHATS_URL } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { FadeIn, ScaleIn } from '@/components/ui/Animations';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-sd-green via-[#0c1814] to-sd-green relative overflow-hidden">
      {/* Padrão de fundo animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-sd-gold rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-sd-gold-2 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-sd-gold rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10 text-center">
        <ScaleIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como posso te ajudar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para analisar seu caso gratuitamente. 
            Não deixe seus direitos para depois — quanto antes agir, melhor!
          </p>
        </ScaleIn>
        
        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href={WHATS_URL} 
              target="_blank" 
              rel="noopener"
              className="text-lg px-8 py-4 bg-sd-gold hover:bg-sd-gold-2"
            >
              FALE COM UM ESPECIALISTA AGORA
            </Button>
            <a
              href="#contato"
              className="text-white hover:text-sd-gold transition-colors font-semibold text-lg border-2 border-white/30 hover:border-sd-gold px-8 py-4 rounded-full"
            >
              Conhecer o escritório
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Consulta Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sd-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sem Burocracia</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
