import React from 'react';
import styles from '../styles/modules/HeroSection.module.css'; 

const HeroSection: React.FC = () => {
  
  const WHATSAPP_LINK: string = 'https://wa.me/SEUNUMERO?text=Olá! Gostaria de uma consultoria contábil.';

  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>RF Contábil: Sua Contabilidade, Nosso Crescimento.</h1>
        <p className={styles.subtitle}>
          Serviços personalizados e consultoria estratégica para garantir a conformidade e maximizar o potencial financeiro do seu negócio.
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.ctaButton} ${styles.heroCta}`}
        >
          QUERO MINHA CONSULTORIA GRÁTIS
        </a>
      </div>
      
    </section>
  );
};

export default HeroSection;