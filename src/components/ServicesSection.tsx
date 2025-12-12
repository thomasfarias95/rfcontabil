import React from 'react';
import styles from '../styles/modules/ServicesSection.module.css'; 
import { GiReceiveMoney, GiFiles, GiCalendar, GiFactory } from 'react-icons/gi'; 


interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: GiReceiveMoney,
    title: "Gestão Fiscal e Tributária",
    description: "Planejamento e apuração de impostos com foco na redução da carga tributária, garantindo total conformidade legal.",
  },
  {
    icon: GiFiles,
    title: "Abertura e Legalização de Empresas",
    description: "Agilidade e segurança no processo de formalização do seu negócio, desde o MEI até grandes corporações.",
  },
  {
    icon: GiCalendar,
    title: "Departamento Pessoal (RH)",
    description: "Gestão completa de folha de pagamento, eSocial, férias e obrigações trabalhistas, mantendo sua equipe em dia.",
  },
  {
    icon: GiFactory,
    title: "Consultoria Estratégica",
    description: "Análise de viabilidade e suporte na tomada de decisões financeiras para o crescimento sustentável da sua empresa.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className={styles.servicesContainer}>
      <h2>Nossos Serviços **Essenciais**</h2>
      <p className={styles.sectionSubtitle}>Da rotina fiscal à estratégia de crescimento, cuidamos do que realmente importa.</p>
      
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <service.icon className={styles.serviceIcon} size={48} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
        Ver todos os serviços
      </a>
    </section>
  );
};

export default ServicesSection;