import React from 'react';
import styles from "../styles/modules/TestimonialsCarousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import StarRating from './StarRating'; // Ajuste o caminho conforme a estrutura de pastas

interface Testimonial {
    id: number;
    text: string;
    author: string;
    title?: string; 
    rating: number; 
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "A consultoria estratégica mudou o jogo para o nosso negócio. Análises precisas e suporte rápido. Recomendo!",
    author: "Aldisio S.",
    title: "CEO, CT Ferroviário",
    rating: 5,
  },
  {
    id: 2,
    text: "Agilidade incrível na abertura da minha empresa. O processo foi muito mais rápido e sem burocracia do que eu esperava.",
    author: "Thomas F.",
    title: "Empreendedora MEI, Tasf Log&Transp",
    rating: 4.5, 
  },
  {
    id: 3,
    text: "A gestão fiscal é impecável. Finalmente conseguimos otimizar a carga tributária com total segurança legal.",
    author: "Espaço Vida",
    rating: 4,
  },
];

const CommentsCarousel: React.FC = () => {
  return (
    <section id="comentario" className={styles.commentsSection}>
      <div className={styles.container}>
        <h2>O que dizem os nossos clientes</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className={styles.mySwiper}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.depoimentoCard}>
                
                <StarRating rating={item.rating} />
                
                <p className={styles.depoimentoTexto}>"{item.text}"</p>
                <div className={styles.depoimentoAutor}>
                  <span className={styles.autorNome}>{item.author}</span>
                  {item.title && <span className={styles.autorCargo}>{item.title}</span>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CommentsCarousel;