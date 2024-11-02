import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Projects.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import pro1 from '../assets/images/pro1.png';
import pro2 from '../assets/images/pro2.png';
import pro3 from '../assets/images/pro3.png';
import pro4 from '../assets/images/pro4.png';
import pro4mini from '../assets/images/pro4-mini.png';
import pro1mini from '../assets/images/pro1-mini.png';
import pro2mini from '../assets/images/pro2-mini.png';
import pro3mini from '../assets/images/pro3-mini.png';

function Projects() {
  const imagesLarge = [pro3, pro4, pro2, pro1];
  const imagesSmall = [pro3mini, pro4mini, pro2mini, pro1mini];

  const links = [
    'https://seyr.netlify.app/', 
    null,                       
    'https://oscarfuentes2027.github.io/HunnyGame/', 
    null,
  ];

  return (
    <section id="projects" className="container-xxl my-5">
      <h2 className="display-5 text-uppercase mb-5">Proyectos</h2>

      <div className="d-none d-lg-block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {imagesLarge.map((image, index) => (
            <SwiperSlide key={index}>
              {links[index] ? (
                <a href={links[index]} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={`Proyecto ${index + 1}`} className="img-fluid" />
                </a>
              ) : (
                <img src={image} alt={`Proyecto ${index + 1}`} className="img-fluid" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="d-lg-none">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {imagesSmall.map((image, index) => (
            <SwiperSlide key={index}>
              {links[index] ? (
                <a href={links[index]} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={`Proyecto ${index + 1}`} className="img-fluid" />
                </a>
              ) : (
                <img src={image} alt={`Proyecto ${index + 1}`} className="img-fluid" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
