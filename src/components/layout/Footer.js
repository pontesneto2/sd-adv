import Image from 'next/image';
import Link from 'next/link';
import { WHATS_URL, ADDRESS, SOCIAL, MAPS_URL } from '@/lib/constants';
import Icons from '@/components/icons/Icons';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0f1312] text-gray-300 py-20 border-t border-sd-gold/20">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Grid principal - 4 colunas com espaçamento igual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col">
            <Link href="#hero" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="Silva & Duarte Advocacia" 
                width={240} 
                height={80}
                className="hover:opacity-80 transition-opacity w-56"
              />
            </Link>
            <p className="leading-relaxed mb-6">
              Silva & Duarte Advocacia Especializada — Com propósito.
            </p>
            <div className="flex gap-4 mt-auto">
              <a 
                href={SOCIAL.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-sd-gold transition-colors"
                aria-label="Instagram"
              >
                <Icons.Instagram className="w-6 h-6" />
              </a>
              <a 
                href={WHATS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-sd-gold transition-colors"
                aria-label="WhatsApp"
              >
                <Icons.WhatsApp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-sd-gold font-semibold mb-2">
                  <Icons.MapPin className="w-4 h-4" />
                  <span>Endereço</span>
                </div>
                <p className="leading-relaxed text-gray-300">{ADDRESS}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sd-gold font-semibold mb-2">
                  <Icons.Phone className="w-4 h-4" />
                  <span>Telefones</span>
                </div>
                <p className="text-gray-300">(85) 9 9440-4197</p>
                <p className="text-gray-300">(85) 98854-5051</p>
                <p className="text-gray-300">(85) 9 9822-4041</p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Redes e OAB */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Siga-nos</h3>
            <div className="space-y-2 mb-8">
              <a 
                href={SOCIAL.natalia}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-sd-gold transition-colors text-gray-300"
              >
                @nataliaduarte.adv
              </a>
              <a 
                href={SOCIAL.gabriel}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-sd-gold transition-colors text-gray-300"
              >
                @gabrieloliveira.adv1
              </a>
              <a 
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-sd-gold transition-colors text-gray-300"
              >
                @SD.advs_
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sd-gold font-semibold mb-3">
                <Icons.Scale className="w-4 h-4" />
                <span>OAB/CE</span>
              </div>
              <p className="text-gray-300">Natalia Duarte: 46.040</p>
              <p className="text-gray-300">Gabriel Oliveira: 44.119</p>
            </div>
          </div>

          {/* Coluna 4: Google Maps */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Localização</h3>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-sd-gold/30 hover:border-sd-gold/60 transition-all duration-300 shadow-lg">
              <iframe
                src={MAPS_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <a 
              href="https://www.google.com/maps/dir//Rio+Mar+Kennedy+Empresarial+-+Av.+Sargento+Herm%C3%ADnio+Sampaio,+3100+-+Presidente+Kennedy,+Fortaleza+-+CE,+60355-512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sd-gold hover:text-sd-gold-2 transition-colors"
            >
              <span>Ver rotas no Google Maps</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2025 Silva & Duarte Advocacia Especializada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
