import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

export default function Depoimentos() {
  const testimonials = [
    {
      text: 'Fui muito bem orientada e meu caso foi resolvido com atenção e rapidez. Recomendo!',
      author: 'Cliente satisfeito',
    },
    {
      text: 'Equipe técnica e humana. Senti confiança do início ao fim.',
      author: 'Cliente satisfeito',
    },
    {
      text: 'Atendimento transparente e resultados concretos.',
      author: 'Cliente satisfeito',
    },
  ];

  return (
    <section id="depoimentos" className="bg-gradient-to-br from-sd-paper to-gray-50 py-32">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-sd-green">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-700">
              A melhor recomendação vem de quem já confiou em nosso trabalho.
            </p>
          </div>

          {/* Avaliação Google */}
          <div className="flex justify-center items-center gap-2 mb-12">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-500 text-3xl">⭐</span>
              ))}
            </div>
            <span className="text-2xl font-bold text-sd-green">5.0</span>
            <span className="text-gray-600">no Google</span>
          </div>
        </FadeIn>

        {/* Cards de depoimentos */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12" staggerDelay={150}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-sd-gold relative"
            >
              {/* Aspas decorativas */}
              <div className="absolute -top-4 -left-4 text-6xl text-sd-gold/20 font-serif">&ldquo;</div>
              
              <p className="text-gray-700 italic mb-4 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-sd-green font-semibold text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5585994404197"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-normal bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-sd-gold-2 hover:to-sd-gold text-lg"
          >
            Quero conversar agora
          </a>
        </div>
      </div>
    </section>
  );
}
