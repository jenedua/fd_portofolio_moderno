import React from 'react';
import { Instagram, Youtube, Linkedin, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-neon rounded-2xl rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/10">
               <img 
                 src="https://picsum.photos/600/800?grayscale" 
                 alt="Fedner Dabady" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              MUITO PRAZER, <br />
              <span className="text-neon">SOU FEDNER DABADY</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify">
              <p>
                Sou um desenvolvedor de sistema de informação com mais de cinco anos de experiência na área, sempre buscando aprimorar meus conhecimentos e aplicá-los na prática.
              </p>
              <p>
                Trabalhei em diversos projetos de alto padrão realizando análise, implementações de novas funcionalidades, melhorias e manutenção, interagindo com várias pessoas técnicas e não técnicas, a fim de garantir a qualidade e entrega contínua do produto.
              </p>
              <div className="bg-dark-800 p-6 rounded-xl border-l-4 border-neon">
                <p className="text-white text-sm font-semibold mb-2">Formação Acadêmica</p>
                <p className="text-sm">Ciência da Computação - Universidade das Ciências Modernas do Haiti (UNASMOH)</p>
              </div>
              <p>
                Minha stack inclui <strong className="text-neon">TypeScript, React, Next.js, Vue.js, Node.js</strong>, além de experiência sólida com PHP (Laravel) e bancos de dados SQL.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/feddyfeddabady/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon hover:text-black hover:border-neon transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UC2KxtNJhLeRvomL9GpO7fpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon hover:text-black hover:border-neon transition-all"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/fedner-dabady/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon hover:text-black hover:border-neon transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              <button className="ml-auto px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Download size={18} /> Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;