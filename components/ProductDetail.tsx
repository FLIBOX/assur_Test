import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import QuoteForm from './QuoteForm';
import FadeIn from './FadeIn';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
        <Link to="/" className="text-brand-green hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  // Determine default service for the form select based on current product title
  const defaultService = product.title
    .replace('ASSURANCE ', '')
    .replace('MULTIRISQUE ', '')
    .replace('MUTUELLE ', '')
    .replace('MULTIRISQUES ', '');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mini Hero */}
      <div 
        className="relative bg-brand-green py-16 text-white overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(rgba(32, 121, 55, 0.9), rgba(32, 121, 55, 0.8)), url('${product.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{product.title}</h1>
          <div className="mt-4 text-sm font-medium opacity-80 uppercase tracking-widest">
            <Link to="/" className="hover:text-white hover:underline">Accueil</Link> / {product.title}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-white p-8 rounded shadow-sm border-l-4 border-gray-200 min-h-[500px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                  {product.contentTitle}
                </h2>
                
                <div 
                  className="prose prose-lg text-gray-600 max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.longDescription }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-1">
            <FadeIn delay={200}>
              <div className="sticky top-24">
                <QuoteForm defaultService={product.title} />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;