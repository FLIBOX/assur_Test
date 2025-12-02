import React from 'react';
import FadeIn from './FadeIn';

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Form Container */}
        <div className="max-w-4xl mx-auto mb-20">
          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-brand-green text-center mb-10">DEMANDEZ UN DEVIS GRATUIT</h2>
              
              {/* 
                IMPORTANT: Replace 'https://formspree.io/f/mqkrvpgy' with your actual Formspree Endpoint URL.
                You can get this by registering at https://formspree.io
              */}
              <form action="https://formspree.io/f/mqkrvpgy" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Votre Nom *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                      placeholder="Nom complet"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                      placeholder="exemple@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Choisissez Service *</label>
                    <select 
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-white"
                      required
                    >
                      <option value="">--- Choisissez ---</option>
                      <optgroup label="- Particuliers -">
                          <option value="Assurance Auto">Assurance Auto Annuelle</option>
                          <option value="Assurance Moto">Assurance Moto</option>
                          <option value="Habitation">Multirisque Habitation</option>
                          <option value="Sante">Mutuelle Santé</option>
                      </optgroup>
                      <optgroup label="- Professionnels -">
                          <option value="RC Pro">Responsabilité Civile Pro</option>
                          <option value="Multirisque Pro">Multirisques Professionnels</option>
                          <option value="Flotte Auto">Flottes auto</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Dites-nous en plus sur votre besoin..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button 
                    type="submit" 
                    className="bg-black text-white font-bold py-4 px-12 rounded hover:bg-white hover:text-black border-2 border-black transition-all duration-300 shadow-lg"
                  >
                    ENVOYER
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Info & Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={100} className="h-full">
            <div className="bg-brand-green text-white p-10 rounded-xl h-full flex flex-col justify-center text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4 uppercase">Pas sûr de ce dont vous avez besoin ?</h3>
              <p className="mb-8 opacity-90 text-lg">Demandez des Informations. Souscription en agence ou à distance : à vous de choisir !</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm opacity-75 uppercase tracking-wider mb-1">Bureau</div>
                  <div className="text-xl font-bold">+33 (0) 1 40 11 68 43</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm opacity-75 uppercase tracking-wider mb-1">Mobile</div>
                  <div className="text-xl font-bold">+33 (0) 7 85 06 42 44</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="h-full">
            <div className="bg-brand-bg-light p-10 rounded-xl h-full border border-gray-200 shadow-lg flex flex-col justify-center relative">
              <div className="text-6xl text-brand-green/20 absolute top-4 left-6 font-serif">"</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Avis de nos clients</h3>
              <p className="text-lg italic text-gray-600 leading-relaxed relative z-10">
                "Depuis 2013, le cabinet Prestige Assurance est au service des assurés protégeant les entreprises et les particuliers avec un professionnalisme exemplaire. Une réactivité impressionnante."
              </p>
              <div className="mt-6 text-right font-bold text-brand-green">
                - Un Client Satisfait
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;