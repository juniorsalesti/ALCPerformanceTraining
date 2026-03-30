import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, TESTIMONIALS, WHATSAPP_LINK } from '../constants';
import { Dumbbell, Video, Activity, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      if (progress < duration) {
        // Ease out logic: starts fast, slows down at the end
        const percentage = 1 - Math.pow(1 - (progress / duration), 3);
        setCount(Math.floor(end * percentage));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Hero: React.FC = () => (
  <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
        alt="Centro de Treinamento ALC Performance" 
        className="w-full h-full object-cover opacity-30 grayscale" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full mt-16">
      <span className="inline-block py-1 px-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-primary text-xs font-bold uppercase tracking-widest mb-6">
        ALC Performance Training
      </span>
      <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
        SUA EVOLUÇÃO <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">COMEÇA AGORA</span>
      </h1>
      <p className="text-xl sm:text-2xl text-zinc-300 mb-10 max-w-2xl font-light">
        Metodologia validada para quem busca resultados reais. Consultoria Online e Personal Training com foco em alta performance.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#servicos" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-black bg-primary hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-yellow-900/20">
          Ver Planos & Consultoria
          <ArrowRight className="ml-2" size={20} />
        </a>
        <a href="#sobre" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border border-zinc-700 hover:bg-zinc-900 transition-all">
          Conheça a Metodologia
        </a>
      </div>
      
      {/* Desktop Static View */}
      <div className="hidden md:flex mt-16 items-center gap-8 text-zinc-500 text-sm font-semibold uppercase tracking-widest">
        <span className="flex items-center"><CheckCircle2 size={16} className="text-primary mr-2"/> Bodybuilding</span>
        <span className="flex items-center"><CheckCircle2 size={16} className="text-primary mr-2"/> Emagrecimento</span>
        <span className="flex items-center"><CheckCircle2 size={16} className="text-primary mr-2"/> Preparação Física</span>
      </div>

      {/* Mobile Infinite Carousel View */}
      <div className="md:hidden mt-12 w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/80 to-transparent z-10"></div>
        <div className="flex w-max">
          {/* First Copy */}
          <div className="flex animate-marquee shrink-0 items-center gap-8 pr-8">
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Bodybuilding</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Emagrecimento</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Preparação Física</span>
          </div>
           {/* Second Copy (for loop) */}
          <div className="flex animate-marquee shrink-0 items-center gap-8 pr-8">
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Bodybuilding</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Emagrecimento</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Preparação Física</span>
          </div>
          {/* Third Copy (safety for wider mobile screens) */}
          <div className="flex animate-marquee shrink-0 items-center gap-8 pr-8">
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Bodybuilding</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Emagrecimento</span>
             <span className="flex items-center text-zinc-500 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"><CheckCircle2 size={16} className="text-primary mr-2"/> Preparação Física</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const About: React.FC = () => (
  <section id="sobre" className="py-24 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-lg"></div>
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
            alt="Centro de Treinamento ALC Performance" 
            className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white mb-6 uppercase">A Metodologia</h2>
          <h3 className="text-xl text-primary font-bold mb-6">ALC Performance - Ciência e Prática</h3>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              A <strong>ALC Performance</strong> nasceu da necessidade de unir a disciplina do esporte de alto rendimento com a ciência do treinamento físico.
            </p>
            <p>
              Nossa abordagem vai além de "passar treino". Nós desenhamos uma estratégia completa (periodização) que considera sua biomecânica, seu histórico e seus objetivos, seja para subir no palco, melhorar no esporte ou transformar seu estilo de vida.
            </p>
            <p>
              Liderada por Gabriel Alc, especialista em performance e lutas, nossa missão é entregar o planejamento exato para você sair da estagnação.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border border-zinc-800">
              <span className="block text-3xl font-black text-white mb-1">
                <AnimatedCounter end={500} prefix="+" />
              </span>
              <span className="text-sm text-zinc-500 uppercase">Atletas Atendidos</span>
            </div>
            <div className="bg-card p-4 rounded-lg border border-zinc-800">
              <span className="block text-3xl font-black text-white mb-1">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="text-sm text-zinc-500 uppercase">Individualizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IconMap = {
  dumbell: Dumbbell,
  video: Video,
  activity: Activity,
  calendar: Calendar
};

const Services: React.FC = () => (
  <section id="servicos" className="py-24 bg-black border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4 uppercase">Nossos Planos</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Soluções para todos os níveis de exigência. Escolha como você quer evoluir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => {
          const Icon = IconMap[service.icon];
          return (
            <div key={service.id} className="bg-card p-8 rounded-2xl hover:bg-zinc-900 transition-colors border border-zinc-900 hover:border-primary/50 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={100} className="text-primary" />
              </div>
              <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center mb-6 text-primary border border-zinc-800 group-hover:border-primary transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center">
                Saber valores <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section id="depoimentos" className="py-24 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-black text-white mb-16 text-center uppercase">Resultados do Team ALC</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-card p-8 rounded-2xl border border-zinc-900 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <img src={t.imageUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary" />
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <span className="text-primary text-xs font-bold uppercase">{t.result}</span>
              </div>
            </div>
            <p className="text-zinc-300 italic text-sm leading-relaxed">"{t.text}"</p>
            <div className="flex mt-4 text-primary">
              {'★★★★★'}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-zinc-500 mb-6 font-medium">🔥 Junte-se ao time que mais cresce em Curitiba</p>
        <a href={WHATSAPP_LINK} className="inline-block bg-card text-white font-bold py-3 px-8 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors">
          Ver mais transformações no Instagram
        </a>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contato" className="py-24 bg-black border-t border-zinc-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
        Pronto para evoluir?
      </h2>
      <p className="text-zinc-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light">
        Não perca tempo. Clique abaixo e fale comigo no WhatsApp para agendar sua avaliação.
      </p>
      
      <div className="flex flex-col items-center justify-center space-y-8">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noreferrer" 
          className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-black text-white transition-all duration-200 bg-[#25D366] rounded-full hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <WhatsAppIcon className="w-8 h-8 mr-3 animate-bounce" />
          <span className="relative uppercase tracking-wider">Chamar no WhatsApp Agora</span>
        </a>
        
        <p className="text-zinc-600 text-sm font-medium uppercase tracking-widest">
          Resposta em até 2 horas • Vagas Limitadas
        </p>
      </div>
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};