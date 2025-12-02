import React from 'react';
import { Phone } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <>
      {/* Flag Strip - Green, White, Black (per provided CSS) */}
      <div 
        className="h-1 w-full" 
        style={{
          background: 'linear-gradient(90deg, rgba(32, 121, 55, 1) 33%, #ffffff 33%, #ffffff 66%, black 66%)'
        }}
      />
      
      <div className="bg-gray-50 py-2 text-sm border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-brand-green transition-colors font-medium">À PROPOS DE NOUS</a>
            <a href="#" className="text-gray-700 hover:text-brand-green transition-colors font-medium">ACTUALITÉS</a>
            <a href="#" className="bg-brand-green text-white px-3 py-1 rounded hover:bg-opacity-90 transition-colors text-xs font-bold uppercase">
              Tous nos produits
            </a>
          </div>
          
          <div className="flex items-center ml-auto">
            <div className="flex items-center text-brand-green">
              <Phone className="w-4 h-4 mr-2" />
              <div className="text-right leading-tight">
                <div className="font-bold text-base">+ 33 7 85 06 42 44</div>
                <div className="text-xs text-gray-500 hidden sm:block">Appelez-nous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;