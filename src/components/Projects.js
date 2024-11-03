import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Projects.css";
import 'swiper/swiper-bundle.css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
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
import pro1En from '../assets/images/pro1-en.png'; // Nueva imagen en inglés
import pro2En from '../assets/images/pro2-en.png';
import pro3En from '../assets/images/pro3-en.png';
import pro4En from '../assets/images/pro4-en.png';
import pro4miniEn from '../assets/images/pro4-mini-en.png';
import pro1miniEn from '../assets/images/pro1-mini-en.png';
import pro2miniEn from '../assets/images/pro2-mini-en.png';
import pro3miniEn from '../assets/images/pro3-mini-en.png';
function Projects({ language }) {
    // Imágenes y enlaces en español
    const imagesLargeEs = [pro3, pro4, pro2, pro1];
    const imagesSmallEs = [pro3mini, pro4mini, pro2mini, pro1mini];
    const linksEs = [
        'https://seyr.netlify.app/',
        null,
        'https://oscarfuentes2027.github.io/HunnyGame/',
        null,
    ];
    // Imágenes y enlaces en inglés
    const imagesLargeEn = [pro3En, pro4En, pro2En, pro1En];
    const imagesSmallEn = [pro3miniEn, pro4miniEn, pro2miniEn, pro1miniEn];
    const linksEn = [
        'https://seyr-en.netlify.app/',
        null,
        'https://oscarfuentes2027.github.io/HunnyGame-en/',
        null,
    ];
    // Selecciona las imágenes y enlaces según el idioma
    const imagesLarge = language === 'en' ? imagesLargeEn : imagesLargeEs;
    const imagesSmall = language === 'en' ? imagesSmallEn : imagesSmallEs;
    const links = language === 'en' ? linksEn : linksEs;
    return (_jsxs("section", { id: "projects", className: "container-xxl my-5", children: [_jsx("h2", { className: "display-5 text-uppercase mb-5", children: language === 'en' ? 'Projects' : 'Proyectos' }), _jsx("div", { className: "d-none d-lg-block", children: _jsx(Swiper, { cssMode: true, navigation: true, pagination: true, mousewheel: true, keyboard: true, autoplay: { delay: 5000, disableOnInteraction: false }, modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay], className: "mySwiper", children: imagesLarge.map((image, index) => (_jsx(SwiperSlide, { children: links[index] ? (_jsx("a", { href: links[index], target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: image, alt: `Proyecto ${index + 1}`, className: "img-fluid" }) })) : (_jsx("img", { src: image, alt: `Proyecto ${index + 1}`, className: "img-fluid" })) }, index))) }) }), _jsx("div", { className: "d-lg-none ", children: _jsx(Swiper, { cssMode: true, navigation: true, pagination: true, mousewheel: true, keyboard: true, autoplay: { delay: 15000, disableOnInteraction: false }, modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay], className: "mySwiper", children: imagesSmall.map((image, index) => (_jsx(SwiperSlide, { children: links[index] ? (_jsx("a", { href: links[index], target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: image, alt: `Proyecto ${index + 1}`, className: "img-fluid" }) })) : (_jsx("img", { src: image, alt: `Proyecto ${index + 1}`, className: "img-fluid", style: { borderRadius: '0.25rem' } })) }, index))) }) })] }));
}
export default Projects;
