import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
             <FadeIn>
               <h2 className="font-serif text-4xl text-stone-800 mb-6">Start Your Journey</h2>
               <p className="text-stone-600 text-lg leading-relaxed mb-8">
                 Ready to feel your best? Book a consultation for a personalized assessment in Bali or Jakarta.
               </p>
               
               <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-600 mr-4 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-stone-800 mb-1">Bali Clinic</h4>
                      <p className="text-stone-600 font-medium">Moii Aesthetic Clinic</p>
                      <p className="text-stone-500 text-sm">Umalas Kerobokan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-600 mr-4 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-stone-800 mb-1">Jakarta Clinic</h4>
                      <p className="text-stone-600 font-medium">Cure Clinic</p>
                      <p className="text-stone-500 text-sm">Griya Cure Level 6, Jakarta Pusat</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-600 mr-4 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-stone-800 mb-1">Direct Contact</h4>
                      <p className="text-stone-600">contact@drandrew.xyz</p>
                      <p className="text-stone-500 text-sm mt-1">Response within 24 hours</p>
                    </div>
                  </div>
               </div>
             </FadeIn>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 shadow-xl shadow-stone-200/50 rounded-sm">
            <FadeIn delay={200}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500 font-bold">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-stone-50 border-b border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-stone-500 font-bold">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full bg-stone-50 border-b border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="+62 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-stone-50 border-b border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-stone-500 font-bold">Interested In</label>
                  <select 
                    id="subject"
                    className="w-full bg-stone-50 border-b border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors text-stone-600"
                  >
                    <option>Botox & Anti-Wrinkle</option>
                    <option>Dermal Fillers</option>
                    <option>Thread Lift</option>
                    <option>Acupuncture / Holistic</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone-500 font-bold">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-stone-50 border-b border-stone-300 p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <Button type="submit" fullWidth className="mt-4">Send Message</Button>
                <p className="text-xs text-stone-400 text-center mt-4">
                  * Appointments subject to city schedule availability.
                </p>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;