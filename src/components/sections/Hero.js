import Button from '@/components/ui/Button';
import { WHATS_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <header id="hero" className="relative grid h-screen place-items-center text-white bg-sd-green">
      <video
        className="absolute inset-0 h-full w-full object-cover contrast-[1.1] brightness-50"
        autoPlay muted loop playsInline
        poster="/og.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative mx-auto max-w-3xl px-4 md:px-5 text-center">
        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur-md">
          SILVA & DUARTE ADVOCACIA
        </span>
        <h1 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight [text-wrap:balance] font-bold">
          Nosso compromisso é com a justiça!
        </h1>
        <p className="mt-8 text-sd-gold font-bold text-xl sm:text-2xl md:text-3xl tracking-wide px-4 drop-shadow-lg">
          Referência em Direito Trabalhista, Previdenciário e Cível
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={WHATS_URL} variant="primary" target="_blank" rel="noopener">
            Fale com um advogado
          </Button>
          <Button href="#areas" variant="ghost">Conheça nossas áreas</Button>
        </div>
      </div>
    </header>
  );
}
