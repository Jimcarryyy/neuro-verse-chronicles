
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import QuotesTicker from '../components/QuotesTicker';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedArticles />
        <QuotesTicker />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
