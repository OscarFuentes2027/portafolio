import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Abaut.scss";
import SvgImage from "../assets/Component1.svg";
import Oscar1 from "../assets/images/Oscar.png";
const Abaut = ({ language }) => {
    const cvFile = language === 'es'
        ? "/src/assets/OscarFuentes_CV_E.pdf"
        : "/src/assets/CV -OscarFuentes.pdf";
    return (_jsx("section", { id: "hero", className: "container-xxl my-5", children: _jsxs("div", { className: "row justify-content-center justify-content-lg-between", children: [_jsxs("div", { className: "col-lg-6 d-flex flex-column justify-content-start mb-5", children: [_jsx("h1", { className: "h1 mb-3 display-5", children: "OSCAR FUENTES" }), _jsx("p", { className: "mb-3" }), _jsx("p", { className: "mb-3", children: language === "es"
                                ? "Soy un apasionado artista y programador, con una especialización en tecnologías de la nube dentro de la ingeniería de sistemas computacionales. Mi enfoque se centra en combinar creatividad con habilidad técnica para ofrecer soluciones innovadoras y efectivas. Además de mi talento profesional, soy conocido por ser un gran amigo y colaborador, siempre dispuesto a apoyar a quienes me rodean. Con mi experiencia y dedicación, soy la opción que necesitas para garantizar el éxito de tu proyecto."
                                : "I'm a passionate artist and programmer, specializing in cloud technologies within computer systems engineering. My focus is on combining creativity with technical skill to provide innovative and effective solutions. Besides my professional talent, I'm known for being a great friend and collaborator, always ready to support those around me. With my experience and dedication, I'm the choice you need to ensure the success of your project." }), _jsx("div", { className: "mx-auto", children: _jsx("a", { href: cvFile, download: "Oscar_Fuentes_CV.pdf", className: "btn btn-secondary rounded-pill px-4", children: language === 'es' ? "Descarga mi CV" : "Download my CV" }) })] }), _jsxs("div", { className: "hero__images col-8 col-lg-6 ", children: [_jsx("img", { src: Oscar1, alt: "Oscar Fuentes", className: "hero__img img-fluid w-75" }), _jsx("img", { src: SvgImage, alt: "Habilidades principales", className: "img-fluid" })] })] }) }));
};
export default Abaut;
