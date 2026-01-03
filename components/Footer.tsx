import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="font-serif text-2xl tracking-tight mb-8">
          Dr. Andrew Uidjaja
        </div>

        <div className="flex space-x-8 mb-10">
          <a href="#" className="text-stone-400 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-stone-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-stone-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm text-stone-400 uppercase tracking-widest">
          <a href="#about" className="hover:text-gold-500 transition-colors">Philosophy</a>
          <a href="#experience" className="hover:text-gold-500 transition-colors">Experience</a>
          <a href="#expertise" className="hover:text-gold-500 transition-colors">Treatments</a>
          <a href="#contact" className="hover:text-gold-500 transition-colors">Book Now</a>
        </nav>

        <div className="border-t border-stone-800 w-full max-w-xs mb-8"></div>

        <p className="text-stone-500 text-xs">
          © {new Date().getFullYear()} Andrew Uidjaja — Your trusted aesthetic & acupuncture doctor in Bali & Jakarta.
        </p>
      </div>
    </footer>
  );
};

export default Footer;