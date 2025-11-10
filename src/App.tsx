import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection'; 
import './index.css'; 
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection /> 
        <AboutSection /> 
         <ServicesSection /> 
        <ContactSection /> 
      </main>
      <Footer/>
    </div>
  );
};

export default App;