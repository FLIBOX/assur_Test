import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { 
      label: 'Particulier', 
      subItems: [
        { label: 'Assurance Auto', href: '/produit/assurance-auto' },
        { label: 'Moto / Scooter', href: '/produit/assurance-moto' },
        { label: 'Habitation', href: '/produit/multirisque-habitation' },
        { label: 'Santé', href: '/produit/mutuelle-sante' },
      ]
    },
    { 
      label: 'Professionnel', 
      subItems: [
        { label: 'RC Pro', href: '/produit/multirisques-pro' },
        { label: 'Multirisque Pro', href: '/produit/multirisques-pro' },
        { label: 'Flotte Auto', href: '/produit/assurance-auto' },
        { label: 'Santé Collective', href: '/produit/mutuelle-sante' },
      ]
    },
    { label: 'Changement Carte Grise', href: '#' },
    { label: 'Nous Contacter', href: '#contact-form' },
  ];

  return (
    <>
      <header className="bg-white py-4 shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <Link to="/" className="flex items-center">
              <div className="mr-3">
                 {/* Placeholder for Logo */}
                 <div className="w-16 h-16 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    PA
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-brand-green leading-none tracking-tight">
                  PRESTIGE
                </span>
                <span className="text-xl md:text-2xl font-black text-black leading-none tracking-tight">
                  ASSURANCE
                </span>
                <span className="text-[0.65rem] md:text-xs text-gray-500 tracking-wider mt-1 uppercase">
                  Assurances toujours à vos côtés
                </span>
              </div>
            </Link>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#contact-form" 
                className="bg-black hover:bg-white hover:text-black border-2 border-black text-white px-6 py-2 rounded font-bold transition-all duration-300"
              >
                DEMANDEZ UN DEVIS
              </a>
              <a 
                href="#" 
                className="bg-brand-green hover:bg-green-800 text-white px-6 py-2 rounded font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Payez en ligne
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-brand-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar (Desktop) */}
      <nav className="bg-brand-green hidden lg:block sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center">
            {navLinks.map((item) => (
              <li key={item.label} className="group relative">
                {item.href && !item.subItems ? (
                  <Link 
                    to={item.href} 
                    className="block text-white font-medium uppercase py-4 px-6 hover:bg-black/10 transition-colors flex items-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="block text-white font-medium uppercase py-4 px-6 hover:bg-black/10 transition-colors flex items-center cursor-pointer">
                    {item.label}
                    {item.subItems && <ChevronDown size={14} className="ml-1 opacity-70" />}
                  </span>
                )}
                
                {/* Dropdown */}
                {item.subItems && (
                  <ul className="absolute left-0 top-full bg-white shadow-xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link 
                          to={sub.href} 
                          className="block px-6 py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 border-b border-gray-100 last:border-0 font-medium text-sm"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Drawer) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full z-30 shadow-xl">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label} className="border-b border-gray-100 last:border-0">
                 {item.subItems ? (
                   <div>
                     <button 
                       onClick={() => toggleDropdown(item.label)}
                       className="w-full text-left py-4 px-6 text-brand-dark font-bold flex justify-between items-center bg-gray-50"
                     >
                       {item.label}
                       <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                     </button>
                     {activeDropdown === item.label && (
                       <ul className="bg-gray-100">
                         {item.subItems.map(sub => (
                           <li key={sub.label}>
                             <Link to={sub.href} className="block py-3 px-10 text-gray-600 text-sm hover:text-brand-green" onClick={() => setIsMenuOpen(false)}>
                               {sub.label}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     )}
                   </div>
                 ) : (
                    <Link 
                      to={item.href || '#'} 
                      className="block py-4 px-6 text-brand-dark font-bold hover:bg-gray-50 hover:text-brand-green transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                 )}
              </li>
            ))}
            <li className="p-4 space-y-3 bg-gray-50">
               <a href="#contact-form" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-black text-white py-3 rounded font-bold">
                 DEMANDEZ UN DEVIS
               </a>
               <a href="#" className="block w-full text-center bg-brand-green text-white py-3 rounded font-bold">
                 PAYEZ EN LIGNE
               </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;