import React, { useState, useEffect } from 'react'; 
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false); 


 useEffect(() => {
 if (isMenuOpen) {
document.body.classList.add('noScroll');
} else {
 document.body.classList.remove('noScroll');
}

 return () => {
  document.body.classList.remove('noScroll');
};
 }, [isMenuOpen]); 
 
 const handleLinkClick = () => {
setIsMenuOpen(false);
 };

return (
 <header className={styles.headerContainer}>
 <div className={styles.logoArea}>

 <img src="/rfcontabil.png" alt="RF Contábil - Rosivaldo Farias" className={styles.logo} />
 </div>

 <button 
 className={styles.menuToggle}
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
 >
 {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
 </button>
<nav className={`${styles.navMenu} ${styles.desktopNav}`}>
 
 <a href="#servicos">Serviços</a>
 <a href="#sobre">Sobre</a>
 </nav>
<a href="#contato" className={`${styles.ctaButton} ${styles.headerCta} ${styles.desktopCta}`}>
Fale Conosco
 </a>

{isMenuOpen && (
 <nav className={`${styles.navMenu} ${styles.navMenuActive}`}>

<a href="#servicos" onClick={handleLinkClick}>Serviços</a>
 <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
 <a href="#contato" onClick={handleLinkClick} className={`${styles.ctaButton} ${styles.mobileCta}`}>
Fale Conosco
</a>
 </nav>
 )}
 </header>
 );
};

export default Header;