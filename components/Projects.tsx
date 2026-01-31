import React from 'react';
import { Github, ExternalLink, Code, ArrowRight } from 'lucide-react';

const projectsData = [
  {
    title: "Gerenciador de Contas",
    tech: "Laravel 10 • PHP • MySQL",
    description: "Sistema completo para gestão financeira e controle de contas.",
    link: "https://github.com/jenedua/laravel-10-Gerenciarcontas",
    image: "https://picsum.photos/id/1/600/400"
  },
  {
    title: "HDC Events",
    tech: "JavaScript • HTML • CSS",
    description: "Plataforma de eventos interativa com funcionalidades de agendamento.",
    link: "https://github.com/jenedua/HDCEVENTS/tree/master",
    image: "https://picsum.photos/id/20/600/400"
  },
  {
    title: "Fedner Store",
    tech: "React • Context API",
    description: "E-commerce moderno com carrinho de compras e checkout.",
    link: "https://github.com/jenedua/fedner-store",
    image: "https://picsum.photos/id/119/600/400"
  },
  {
    title: "Decorators TS",
    tech: "TypeScript • POO",
    description: "Exploração avançada de padrões de projeto e decorators.",
    link: "https://github.com/jenedua/decorators-typescript/tree/master",
    image: "https://picsum.photos/id/60/600/400"
  },
  {
    title: "Vue Router & Axios",
    tech: "Vue.js • Node.js",
    description: "Aplicação SPA consumindo APIs externas com roteamento dinâmico.",
    link: "https://github.com/jenedua/vue-router-e-axios",
    image: "https://picsum.photos/id/3/600/400"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">MEUS <span className="text-neon">PROJETOS.</span></h2>
            <p className="text-gray-400 mt-4">Uma seleção dos meus trabalhos recentes.</p>
          </div>
          <a 
            href="https://github.com/jenedua" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon hover:text-white transition-colors border-b border-neon pb-1"
          >
            Ver Github Completo <ArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group relative bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-neon/30 transition-all duration-300">
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                 <div className="mb-4">
                    <span className="text-xs font-bold text-neon tracking-wider uppercase">{project.tech}</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-neon transition-colors">{project.title}</h3>
                 </div>
                 <p className="text-gray-400 text-sm mb-6">
                    {project.description}
                 </p>
                 <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neon transition-colors"
                 >
                    <Github size={18} /> Ver Código
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;