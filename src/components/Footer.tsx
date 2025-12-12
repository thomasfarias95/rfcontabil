import React from 'react';
import styles from '../styles/modules/Footer.module.css';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {

  
  const EMAIL: string = "rosivaldo.fariascontabilidade@outlook.com.br";
  const PHONE_NUMBER: string = "(81) 9 8720-6675";
  const WHATSAPP_LINK: string = "https://wa.link/gpnbde"; 
  const INSTAGRAM_LINK: string = 'https://www.instagram.com/rf.consultoriacontabil?igsh=em1rM2J5Nmhpbmpu&utm_source=qr';
  const LINKEDIN_LINK: string = 'https://www.linkedin.com/in/rosivaldo-farias-46917268/';

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        
        <div className={styles.footerBlock}>
          
          <img src="/rfcontabil.png" alt="RF Contábil - Rosivaldo Farias" className={styles.logoFooter} />
          <p className={styles.description}>
            Excelência e seriedade na gestão contábil do seu negócio.
          </p>
        </div>

        
        <div className={styles.footerBlock}>
          <h3>Contato Rápido</h3>
          <ul className={styles.contactList}>
            <li><FaEnvelope className={styles.icon} /> {EMAIL}</li>
            <li><FaPhone className={styles.icon} /> {PHONE_NUMBER}</li>
          </ul>
        </div>

        
        <div className={styles.footerBlock}>
          <h3>Acesso</h3>
          <ul className={styles.accessLinks}>
            <li><a href="#servicos">Nossos Serviços</a></li>
            <li><a href="#sobre">Sobre a RF Contábil</a></li>
          </ul>
          
          <div className={styles.socialLinks}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={22} /></a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={22} /></a>
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
          </div>
        </div>

      </div>

      <div className={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} RF Contábil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;