'use client';
import { useState } from 'react';
import Icons from '@/components/icons/Icons';
import { FadeIn, StaggerContainer } from '@/components/ui/Animations';

const faqs = [
  {
    question: 'Quanto custa uma consulta?',
    answer: 'A primeira consulta é gratuita! Durante esse encontro, avaliamos seu caso e apresentamos as melhores estratégias jurídicas para sua situação.'
  },
  {
    question: 'Quanto tempo leva um processo trabalhista?',
    answer: 'O tempo varia conforme a complexidade do caso e a vara trabalhista. Em média, processos podem levar de 6 meses a 2 anos. Trabalhamos para acelerar ao máximo cada etapa.'
  },
  {
    question: 'Atendo em todo o Brasil?',
    answer: 'Sim! Atuamos presencialmente em Fortaleza/CE e virtualmente em todo território nacional, garantindo atendimento de excelência onde você estiver.'
  },
  {
    question: 'Como funciona o pagamento de honorários?',
    answer: 'Trabalhamos com diferentes modalidades: honorários fixos, percentuais sobre o resultado ou combinações. Tudo é definido de forma transparente na primeira consulta.'
  },
  {
    question: 'Posso entrar com ação mesmo estando empregado?',
    answer: 'Sim, você tem direito de reclamar verbas devidas mesmo trabalhando. Orientamos sobre a melhor estratégia para proteger seus direitos sem comprometer sua relação de trabalho.'
  },
  {
    question: 'Quanto tempo tenho para entrar com uma ação trabalhista?',
    answer: 'O prazo é de 2 anos após o término do contrato de trabalho. Dentro desse período, você pode cobrar verbas dos últimos 5 anos. Não perca seus direitos!'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-sd-paper relative overflow-hidden">
      {/* Ornamento decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sd-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sd-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sd-green mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços jurídicos
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-4" staggerDelay={100}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sd-green text-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-sd-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>

        <FadeIn delay={600}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-sd-gold hover:bg-sd-gold-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Entre em contato
              <Icons.ArrowUp className="w-4 h-4 rotate-90" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
