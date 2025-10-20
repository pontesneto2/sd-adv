import '@/app/globals.css';
import Navbar from '@/components/layout/Navbar';
import WhatsFloat from '@/components/layout/WhatsFloat';
import BackToTop from '@/components/layout/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata = {
  title: 'Silva & Duarte Advocacia',
  description:
    'Referência em Direito Trabalhista, Previdenciário e Cível. Entre em contato e descubra como podemos ajudar você.',
  openGraph: { images: ['/og.jpg'] },
  icons: {
    icon: '/favicon.png',
  },
};

export default function SiteLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>
          {children}
        </main>
        <WhatsFloat />
        <BackToTop />
      </body>
    </html>
  );
}
