import React from 'react';
import { Layout, ShoppingCart, Code, Globe, Server, Database } from 'lucide-react';

const specialtiesData = [
  {
    icon: <Code size={40} />,
    title: "Desenvolvimento Web",
    description: "Criação de sites modernos, performáticos e responsivos utilizando as tecnologias mais recentes do mercado como React e TypeScript."
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "Sistemas de Gestão",
    description: "Desenvolvimento de painéis administrativos, ERPs e sistemas complexos focados na otimização de processos empresariais."
  },
  {
    icon: <Layout size={40} />,
    title: "Website WordPress",
    description: "Implementação e personalização de temas WordPress, permitindo que você gerencie seu próprio conteúdo com facilidade."
  },
  {
    icon: <Globe size={40} />,
    title: "APIs RESTful",
    description: "Construção de APIs robustas e seguras para integrar diferentes serviços e alimentar aplicações front-end."
  },
  {
    icon: <Database size={40} />,
    title: "Banco de Dados",
    description: "Modelagem e gerenciamento de bancos de dados SQL (MySQL, PostgreSQL) e NoSQL para garantir integridade dos dados."
  },
  {
    icon: <Server size={40} />,
    title: "Backend",
    description: "Lógica de servidor sólida utilizando Node.js, PHP/Laravel ou Python para garantir que sua aplicação funcione perfeitamente."
  }
];

const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">MINHAS <span className="text-neon">ESPECIALIDADES.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas para levar o seu negócio para o próximo nível digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtiesData.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-dark-900 rounded-2xl border border-white/5 hover:border-neon/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-6 inline-flex p-4 bg-dark-800 rounded-xl text-neon group-hover:bg-neon group-hover:text-black transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;