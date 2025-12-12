import React from 'react';
import styles from '../styles/modules/ContactSection.module.css'; 
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const ContactSection: React.FC = () => {
  
  const WHATSAPP_NUMBER: string = '81987206675'; 
  const PHONE_NUMBER: string = '(81) 98720-6675';
  const INSTAGRAM_LINK: string = 'https://instagram.com/sua_contabilidade';
  const LINKEDIN_LINK: string = 'https://linkedin.com/company/sua_contabilidade';

  return (
    <section id="contato" className={styles.contactContainer}>
      <h2>Fale com a RF Contábil</h2>
      <p className={styles.contactIntro}>Entre em contato hoje e comece a planejar o futuro financeiro do seu negócio.</p>
      
      <div className={styles.contactDetails}>
       
        <div className={styles.contactItem}>
          <h3>Telefone</h3>
          <p>{PHONE_NUMBER}</p>
          <a href={`tel:${PHONE_NUMBER.replace(/[()\s-]/g, "")}`} className={styles.contactLink}>Ligar Agora</a>
        </div>

        
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de uma consultoria contábil.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.whatsappButton}
        >
          <FaWhatsapp size={24} /> 
          FALE PELO WHATSAPP
        </a>
      </div>

      
      <div className={styles.socialLinks}>
        <h3>Siga-nos</h3>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={30} className={styles.socialIcon} />
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} className={styles.socialIcon} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;