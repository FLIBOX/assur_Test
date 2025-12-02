import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-8">
            Prestige Assurance - La garantie d'une solution immédiate !
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Prestige Assurance développe, en partenariat avec les plus grandes compagnies françaises et européennes (Allianz, Generali...), une offre adaptée à tous :
            Assurance Auto Jeune Permis, Assurance Auto Malussé, Assurance Auto Résilié Non Paiement, Assurance Auto Risque Aggravé, Assurance pour Véhicule de Prestige, Assurance Maison, Appartement, Assurance Permis Etranger...
          </p>
          <div className="bg-brand-bg-light p-6 rounded-lg inline-block shadow-sm border border-gray-100">
            <p className="text-brand-green font-semibold text-lg">
              Notre équipe se tient toujours à votre disposition sur nos deux agences:<br/>
              <span className="text-gray-700 mt-2 block">9 rue Verdi 06000 NICE et<br/>
              107 rue Du Docteur Bauer 93400 SAINT OUEN SUR SEINE</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;