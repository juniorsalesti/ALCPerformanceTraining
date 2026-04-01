import React, { useState } from 'react';
import { Menu, X, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, INSTAGRAM_HANDLE, WHATSAPP_LINK } from '../constants';

export const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const FloatingWhatsApp: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
    aria-label="Fale conosco no WhatsApp"
  >
    <WhatsAppIcon size={32} />
  </a>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 relative">
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <a href="#home" className="flex items-center">
              <img 
                src="https://i.ibb.co/TMm7SWhd/alc.jpg" 
                alt="ALC Performance Logo" 
                className="h-16 w-auto object-contain" 
              />
            </a>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider text-zinc-300"
                >
                  {link.name}
                </a>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-primary hover:bg-white text-black font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105">
                Começar Agora
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-zinc-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block w-full text-center bg-primary text-black font-bold py-3 mt-4 rounded">
                Agendar Consultoria
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <img 
                src="https://i.ibb.co/TMm7SWhd/alc.jpg" 
                alt="ALC Performance Logo" 
                className="h-24 w-auto object-contain" 
              />
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Elevando o padrão do treinamento. Metodologia focada em resultados reais, saúde e performance atlética.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Contato</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center text-zinc-400 hover:text-primary transition-colors">
                <WhatsAppIcon size={18} className="mr-2" /> (19) 99628-2565
              </a>
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center text-zinc-400 hover:text-primary transition-colors">
                <Instagram size={18} className="mr-2" /> {INSTAGRAM_HANDLE}
              </a>
              <span className="flex items-center text-zinc-400">
                <MapPin size={18} className="mr-2" /> Campinas - SP / Online
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Team ALC</h4>
            <p className="text-zinc-500 text-sm mb-4">Acesse seu treino e avaliação no app.</p>
            <button className="border border-zinc-700 text-zinc-300 hover:border-primary hover:text-primary px-6 py-2 rounded transition-colors uppercase text-sm font-bold">
              Área do Atleta
            </button>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 text-center space-y-2">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em] font-medium">
            Desenvolvido por <a href="https://portfolio.apexflow.com.br" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-primary transition-colors">ApexFlow</a>
          </p>
        </div>
      </div>
    </footer>
  );
};