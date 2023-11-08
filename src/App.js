import React from 'react';
import HeroSection from './components/MainContent/HeroSection/HeroSection';
import Speakers from './components/MainContent/Speakers/Speakers';
import Sponsorship from './components/MainContent/Sponsorship/Sponsorship';
import Travel from './components/MainContent/Travel/Travel';
import FAQ from './components/MainContent/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <Speakers />
      <Sponsorship />
      <Travel />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
