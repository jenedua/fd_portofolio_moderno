import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10 order-2 md:order-1">
          <div className="inline-block px-4 py-1 border border-neon/30 rounded-full bg-neon/5">
            <span className="text-neon text-sm font-medium tracking-wide">PORTFOLIO DEVELOPER</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            TRANSFORMANDO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">IDEIAS EM</span> <br />
            <span className="text-neon">REALIDADE DIGITAL.</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed border-l-4 border-neon pl-6">
            Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante e funcionalidade intuitiva, estou pronto para criar sua presença online.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contato" 
              className="group px-8 py-4 bg-neon text-black font-bold rounded-full flex items-center gap-2 hover:bg-neon-dim transition-all shadow-[0_0_20px_rgba(0,255,8,0.2)] hover:shadow-[0_0_30px_rgba(0,255,8,0.4)]"
            >
              Entre em contato
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projetos" 
              className="px-8 py-4 bg-dark-800 border border-gray-700 text-white font-semibold rounded-full hover:bg-dark-700 hover:border-gray-500 transition-all"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Image/Visual */}
        <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-md aspect-square">
                {/* Decorative circles */}
                <div className="absolute inset-0 border-2 border-neon/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Container */}
                <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-dark-800 shadow-2xl animate-float">
                    <img 
                        src="https://picsum.photos/800/800?grayscale" 
                        alt="Fedner Dabady" 
                        className="w-full h-full object-cover filter brightness-110 contrast-125 hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-4 -left-4 bg-dark-800/90 backdrop-blur border border-gray-700 p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <p className="text-neon font-bold text-xl">5+ Anos</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Experiência</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;