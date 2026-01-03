import React from 'react';
import FadeIn from './FadeIn';
import { GALLERY_IMAGES } from '../constants';
import Button from './Button';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Results & Lifestyle</h2>
          <p className="text-stone-500">Glimpses into our clinic atmosphere and happy clients.</p>
        </FadeIn>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="relative group overflow-hidden bg-stone-100 break-inside-avoid">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" className="gap-2">
               <Instagram size={18} />
               More on Instagram
             </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Gallery;