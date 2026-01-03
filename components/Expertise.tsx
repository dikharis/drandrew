import React from 'react';
import FadeIn from './FadeIn';
import { SERVICES_DATA } from '../constants';
import { Sparkles, Syringe, Activity, Heart, ArrowRight } from 'lucide-react';

const Expertise: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index % 4) {
      case 0: return <Sparkles className="w-6 h-6 text-gold-500" />;
      case 1: return <Syringe className="w-6 h-6 text-gold-500" />;
      case 2: return <Activity className="w-6 h-6 text-gold-500" />;
      case 3: return <Heart className="w-6 h-6 text-gold-500" />;
      default: return <Sparkles className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn>
            <h2 className="text-gold-500 font-bold tracking-widest text-xs uppercase mb-4">Our Services</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white">Curated Expertise</h3>
          </FadeIn>
          <FadeIn delay={200}>
             <p className="text-stone-400 max-w-md text-right md:text-left">
               Precision-based treatments tailored to your unique anatomy.
             </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="group h-full bg-stone-800 p-8 hover:bg-stone-700 transition-colors duration-500 border border-stone-700 hover:border-gold-800/50 flex flex-col">
                <div className="mb-6 bg-stone-900/50 w-12 h-12 flex items-center justify-center rounded-sm">
                  {getIcon(index)}
                </div>
                <h4 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-stone-400 mb-6 text-sm leading-relaxed border-b border-stone-700 pb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.details.slice(0, 4).map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-300">
                      <span className="mr-2 text-gold-500 text-xs mt-1">●</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                    <span className="inline-flex items-center text-xs tracking-widest uppercase text-gold-500 font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;