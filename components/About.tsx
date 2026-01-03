import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-4">Philosophy</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8 leading-snug">
            "Beauty is not just about correcting flaws, but harmonizing the mind, body, and heart."
          </h3>
          <div className="w-16 h-px bg-gold-400 mx-auto mb-10"></div>
          <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
            <p>
              With a practice established in 2008, I have dedicated my career to mastering the delicate art of non-surgical rejuvenation. My journey has taken me from general practice to becoming a Diplomate of the American Board of Anti-Aging & Regenerative Medicine.
            </p>
            <p>
              Serving a diverse, multinational clientele in Bali and Jakarta, I believe in subtle, personalized results that enhance your natural features rather than mask them. As a registered Yoga teacher, I integrate a holistic perspective into every treatment, ensuring that you leave not just looking better, but feeling centered and confident.
            </p>
          </div>
          <div className="mt-12">
            <img 
              src="https://picsum.photos/150/80?grayscale&blur=2" 
              alt="Signature" 
              className="h-16 mx-auto opacity-60" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;