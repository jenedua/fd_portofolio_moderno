import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center border border-neon/30">
             <Code2 className="text-neon w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">Agencia<span className="text-neon">FD</span></span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-white hover:text-neon transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contato" 
            className="px-6 py-2.5 bg-neon text-black font-bold rounded-full hover:bg-neon-dim transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,8,0.3)]"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neon transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-light hover:text-neon transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-neon text-black text-xl font-bold rounded-full"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;