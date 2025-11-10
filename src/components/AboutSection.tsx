import React from 'react';
import styles from './AboutSection.module.css'; 

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h2>Rosivaldo Farias: Experiência e Confiança</h2>
        <p className={styles.mainText}>
          A RF Contábil é construída sobre uma base sólida de **experiência e excelência** no setor contábil. Entendemos que cada cliente é único, e é por isso que nossa abordagem é sempre **personalizada e consultiva**.
        </p>
        <p className={styles.secondaryText}>
          Com Rosivaldo Farias à frente, garantimos um serviço que vai além da simples apuração de impostos. Somos parceiros estratégicos, dedicados a orientar sua empresa em direção ao sucesso financeiro, com total **transparência e ética** em cada processo.
        </p>
      </div>
      
      <div className={styles.quoteBlock}>
        <p className={styles.quote}>
          "Nosso compromisso é transformar a complexidade contábil em clareza estratégica, permitindo que você foque no crescimento do seu negócio."
        </p>
        <span className={styles.quoteAuthor}>— Rosivaldo Farias, Fundador da RF Contábil</span>
      </div>
    </section>
  );
};

export default AboutSection;