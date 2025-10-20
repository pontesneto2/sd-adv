import '@/app/globals.css';
import Navbar from '@/components/layout/Navbar';
import WhatsFloat from '@/components/layout/WhatsFloat';
import BackToTop from '@/components/layout/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata = {
  metadataBase: new URL('https://silvaduarteadvogados.com'),
  title: 'Silva & Duarte Advocacia | Direito Trabalhista, Previdenciário e Cível',
  description:
    'Referência em Direito Trabalhista, Previdenciário e Cível. Advocacia especializada com atendimento humanizado. Entre em contato e descubra como podemos ajudar você.',
  keywords: [
    'advocacia',
    'advogado',
    'direito trabalhista',
    'direito previdenciário',
    'direito cível',
    'advogado trabalhista',
    'advogado previdenciário',
    'Silva e Duarte',
    'advocacia especializada',
  ],
  authors: [{ name: 'Silva & Duarte Advocacia' }],
  creator: 'Silva & Duarte Advocacia',
  publisher: 'Silva & Duarte Advocacia',
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://silvaduarteadvogados.com',
    siteName: 'Silva & Duarte Advocacia',
    title: 'Silva & Duarte Advocacia | Direito Trabalhista, Previdenciário e Cível',
    description: 'Referência em Direito Trabalhista, Previdenciário e Cível. Advocacia especializada com atendimento humanizado.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silva & Duarte Advocacia Especializada',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Silva & Duarte Advocacia | Direito Trabalhista, Previdenciário e Cível',
    description: 'Referência em Direito Trabalhista, Previdenciário e Cível. Advocacia especializada com atendimento humanizado.',
    images: ['/og-image.jpg'],
  },
  
  // Ícones
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
