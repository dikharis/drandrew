import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <FadeIn delay={200}>
            <span className="block text-gold-600 font-bold tracking-widest text-sm uppercase mb-4">
              Est. 2008
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
              Best Botox, Filler, Acupuncture & <span className="italic text-stone-600">Threadlift</span> Experience.
            </h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed max-w-lg mb-8">
              Feel good about yourself — don't let your age judge you. Harmonizing mind, body, and heart for natural rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button>Book Appointment</Button>
              </a>
              <a href="#about">
                <Button variant="outline">Meet Dr. Andrew</Button>
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={400} className="pt-12 flex gap-8 border-t border-stone-200 mt-12">
            <div>
              <p className="font-serif text-3xl text-stone-800">15+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-stone-800">2</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Premium Locations</p>
            </div>
          </FadeIn>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 relative">
          <FadeIn delay={300} className="relative z-10">
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl shadow-stone-200">
               {/* Placeholder for Doctor's Portrait - using a professional abstract/person placeholder */}
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Dr. Andrew Uidjaja" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold-300 z-[-1] hidden md:block"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;