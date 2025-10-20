import { WHATS_URL, SOCIAL } from '@/lib/constants';

export default function Loading() {
  return (
    <div className="min-h-screen bg-sd-green flex items-center justify-center">
      <div className="text-center">
        {/* Logo animado */}
        <div className="mb-8 animate-pulse">
          <div className="w-48 h-16 bg-sd-gold/20 rounded-lg mx-auto mb-4"></div>
        </div>
        
        {/* Spinner dourado */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-sd-gold/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-sd-gold rounded-full animate-spin"></div>
        </div>
        
        <p className="text-sd-gold text-lg font-semibold animate-pulse">
          Carregando Silva & Duarte Advocacia...
        </p>
      </div>
    </div>
  );
}
