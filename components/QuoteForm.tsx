import React from 'react';

interface QuoteFormProps {
  defaultService?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ defaultService = "" }) => {
  return (
    <div className="bg-white p-8 rounded shadow-sm border-t-4 border-brand-green h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">Devis Gratuit</h2>
      <p className="text-gray-500 text-sm mb-6">
        Vous cherchez un assureur pour souscrire un contrat pas cher ? Remplissez en deux minutes le formulaire ci-dessous et nous vous appelons dans les plus brefs délais pour vous présenter nos offres.
      </p>

      {/* 
        IMPORTANT: Replace 'https://formspree.io/f/YOUR_FORM_ID' with your actual Formspree Endpoint URL.
        You can get this by registering at https://formspree.io
      */}
      <form action="https://formspree.io/f/mqkrvpgy" method="POST" className="space-y-4">
        <div>
          <label className="block text-brand-green font-bold text-sm mb-1">Votre Nom *</label>
          <input 
            type="text" 
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            placeholder="Name"
            required
          />
        </div>

        <div>
          <label className="block text-brand-green font-bold text-sm mb-1">Email *</label>
          <input 
            type="email" 
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label className="block text-brand-green font-bold text-sm mb-1">Votre téléphone</label>
          <input 
            type="tel" 
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            placeholder="(0)_ __ __ __ __"
          />
        </div>

        <div>
          <label className="block text-brand-green font-bold text-sm mb-1">Choisissez Service *</label>
          <select 
            name="service"
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white"
            defaultValue={defaultService}
            required
          >
            <option value="">--- Choisissez ---</option>
            <optgroup label="- Particuliers -">
                <option value="Assurance Auto">Assurance Auto Annuelle</option>
                <option value="Assurance Moto">Assurance Moto</option>
                <option value="Habitation">Multirisque Habitation</option>
                <option value="Santé">Mutuelle Santé</option>
                <option value="Sante International">Santé International</option>
            </optgroup>
            <optgroup label="- Professionnels -">
                <option value="RC Pro">Responsabilité Civile Pro</option>
                <option value="Multirisque Pro">Multirisques Professionnels</option>
                <option value="Flotte Auto">Flottes auto</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-brand-green font-bold text-sm mb-1">Message</label>
          <textarea 
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none"
            placeholder="Message"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#0069b4] text-white font-bold py-3 px-4 rounded hover:bg-[#005a9e] transition-colors uppercase tracking-wide"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;