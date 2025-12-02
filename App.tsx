import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Partners />
    <Products />
    <ContactForm />
  </>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-brand-green selection:text-white">
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;