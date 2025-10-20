import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Areas from '@/components/sections/Areas';
import Atendimento from '@/components/sections/Atendimento';
import Equipe from '@/components/sections/Equipe';
import Sobre from '@/components/sections/Sobre';
import Valores from '@/components/sections/Valores';
import Depoimentos from '@/components/sections/Depoimentos';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Areas />
      <Atendimento />
      <Equipe />
      <Sobre />
      <Valores />
      <Depoimentos />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
