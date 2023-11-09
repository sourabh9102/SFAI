import React from 'react';
import HeroSection from './components/MainContent/HeroSection/HeroSection';
import Speakers from './components/MainContent/Speakers/Speakers';
import Sponsorship from './components/MainContent/Sponsorship/Sponsorship';
import Travel from './components/MainContent/Travel/Travel';
import FAQ from './components/MainContent/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/MainContent/WelcomePage/WelcomePage';
import Register from './components/MainContent/Register/Register';

function App() {
  return (
    <>
      <HeroSection />
      <WelcomePage />
      <Speakers />
      <Sponsorship />
      <Travel />
      <FAQ />
      <Register />
      <Footer />
    </>
  );
}

export default App;
