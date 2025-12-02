import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <div className="text-white text-2xl font-black mb-4">PRESTIGE ASSURANCE</div>
            <p className="mb-6 leading-relaxed">
              Votre partenaire de confiance pour toutes vos solutions d'assurance. Nous nous engageons à vous protéger, vous et vos biens.
            </p>
            <a href="#contact-form" className="inline-block w-full text-center bg-brand-green text-white py-3 rounded font-bold hover:bg-white hover:text-brand-green transition-colors">
              Rappelle-moi !
            </a>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-white">
              NOTRE CABINET
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">À propos de Nous</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-white">
              ASSURANCE
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Particuliers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professionnels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carte Grise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devis en ligne</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-white">
              NOUS CONTACTER
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-brand-green mr-3 mt-1 flex-shrink-0" size={18} />
                <span>9 rue Verdi, 06000 NICE</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-brand-green mr-3 mt-1 flex-shrink-0" size={18} />
                <span>+ 33 (0) 7 85 06 42 44</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-brand-green mr-3 mt-1 flex-shrink-0" size={18} />
                <span>10h00 à 18h00<br/>du Lundi au Vendredi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 Prestige Assurance | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;