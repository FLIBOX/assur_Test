import React from 'react';
import { Send } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Overlay - Gradient as per CSS logic */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(32, 121, 55, 0.9), rgba(14, 165, 1, 0.4))'
        }}
      />

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight drop-shadow-lg">
              Sur la route, personne n'est à l'abri d'un imprévu
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 font-light max-w-2xl drop-shadow-md">
              Nous vous proposons des garanties à la carte en fonction de la valeur du véhicule et de vos besoins spécifiques.
            </p>
            <a 
              href="#contact-form"
              className="inline-flex items-center bg-brand-green border border-white/30 text-white text-lg font-bold px-8 py-4 rounded hover:bg-white hover:text-brand-green transition-all duration-300 shadow-xl"
            >
              <Send className="mr-3 w-5 h-5" />
              DEMANDE DE DEVIS
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;