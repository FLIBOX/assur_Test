import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { products } from '../data';

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">Nos gammes de produits d’assurance</h2>
            <p className="text-gray-500 text-lg">Des solutions pour tous les besoins</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100} className="h-full">
              <Link to={`/produit/${product.slug}`} className="block h-full">
                <div className="group relative h-[300px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.imageUrl}')` }}
                  />
                  
                  {/* Overlay - Initially Dark, becomes Green on Hover */}
                  <div className="absolute inset-0 bg-black/80 group-hover:bg-brand-green/90 transition-colors duration-300 flex flex-col justify-center items-center text-center p-8 border-2 border-transparent group-hover:border-white">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <product.icon className="w-12 h-12 text-white mb-4 mx-auto" />
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{product.title}</h3>
                      <p className="text-gray-300 group-hover:text-white text-sm mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <span 
                        className="inline-block border-2 border-white text-white py-2 px-6 font-semibold text-sm hover:bg-white hover:text-brand-green transition-colors rounded"
                      >
                        {product.linkText}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/produit/assurance-auto" className="inline-block bg-brand-green text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-black transition-colors transform hover:-translate-y-1">
            TOUS NOS PRODUITS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;