import React from 'react';
import FadeIn from './FadeIn';
import { TimelineEntry, EducationEntry } from '../types';

interface TimelineProps {
  id: string;
  title: string;
  type: 'experience' | 'education';
  data: (TimelineEntry | EducationEntry)[];
  bgColor?: string;
}

const Timeline: React.FC<TimelineProps> = ({ id, title, type, data, bgColor = 'bg-stone-50' }) => {
  
  const isExperience = (item: TimelineEntry | EducationEntry): item is TimelineEntry => {
    return (item as TimelineEntry).role !== undefined;
  };

  return (
    <section id={id} className={`py-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:text-center">
             <h2 className="font-serif text-3xl md:text-4xl text-stone-800">{title}</h2>
             <div className="w-12 h-px bg-gold-400 md:mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="relative border-l border-stone-300 ml-4 md:ml-1/2 space-y-12">
          {data.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative pl-8 md:pl-0">
                {/* Dot */}
                <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-gold-500 ring-4 ring-stone-50"></div>
                
                <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {isExperience(item) ? (
                      // Experience Item
                      <div>
                        <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 text-xs font-bold tracking-widest uppercase mb-2 rounded-sm">
                          {item.period}
                        </span>
                        <h3 className="font-serif text-xl text-stone-800 font-medium mb-1">{item.role}</h3>
                        <p className="text-gold-700 font-medium mb-1">{item.company}</p>
                        {item.location && <p className="text-stone-500 text-sm mb-2">{item.location}</p>}
                        {item.description && <p className="text-stone-500 text-sm italic mb-2">{item.description}</p>}
                        {item.awards && (
                          <div className="mt-2 space-y-1">
                            {item.awards.map((award, i) => (
                              <p key={i} className="text-xs text-gold-600 font-semibold">• {award}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      // Education Item
                      <div>
                        <span className="text-gold-600 font-bold text-sm block mb-1">{item.year}</span>
                        <h3 className="font-serif text-lg text-stone-800 font-medium">{item.degree}</h3>
                        <p className="text-stone-600 mt-1">{item.institution}</p>
                        {item.details && <p className="text-stone-400 text-sm mt-1 italic">{item.details}</p>}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;