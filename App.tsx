import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Expertise from './components/Expertise';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { EXPERIENCE_DATA, EDUCATION_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline 
          id="experience" 
          title="Professional Experience" 
          type="experience" 
          data={EXPERIENCE_DATA} 
          bgColor="bg-stone-50"
        />
        <Timeline 
          id="education" 
          title="Education & Credentials" 
          type="education" 
          data={EDUCATION_DATA} 
          bgColor="bg-white"
        />
        <Expertise />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;