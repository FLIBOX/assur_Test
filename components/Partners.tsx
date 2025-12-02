import React from 'react';
import FadeIn from './FadeIn';

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h3 className="text-xl font-bold text-brand-green mb-8 uppercase tracking-widest">Nos Partenariats</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using Placeholders for logos since local assets are not available */}
            <div className="opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-2xl font-bold text-gray-400">Balcia</span>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-2xl font-bold text-gray-400">Europ Assistance</span>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-2xl font-bold text-gray-400">Hiscox</span>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-2xl font-bold text-gray-400">SwissLife</span>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-2xl font-bold text-gray-400">Allianz</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Partners;