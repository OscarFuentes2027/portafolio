import React from "react";
import "./Abaut.scss"; // archivo CSS opcional para estilos adicionales
import SvgImage from "../assets/Component1.svg";
import Oscar1 from "../assets/images/Oscar.png";

const Abaut = () => {
  return (
    <section id="hero" className="container-xxl my-5">
      <div className="row justify-content-center justify-content-lg-between">
        <div className="col-lg-6 d-flex flex-column justify-content-start mb-5">
          <h1 className="h1 mb-3 display-5">OSCAR FUENTES</h1>

          <p className="mb-3">
            Soy un apasionado artista y programador, con una especialización en
            tecnologías de la nube dentro de la ingeniería de sistemas
            computacionales. Mi enfoque se centra en combinar creatividad con
            habilidad técnica para ofrecer soluciones innovadoras y efectivas.
            Además de mi talento profesional, soy conocido por ser un gran amigo
            y colaborador, siempre dispuesto a apoyar a quienes me rodean. Con
            mi experiencia y dedicación, soy la opción que necesitas para
            garantizar el éxito de tu proyecto.
          </p>
          <div className="mx-auto">
            <a
              href="../assets/OscarFuentes_CV_E.pdf" 
              download="Oscar_Fuentes_CV.pdf" 
              className="btn btn-secondary rounded-pill px-4"
            >
              Descarga mi CV
            </a>
          </div>
        </div>

        {/* Columna derecha: Imagen SVG */}
        <div className="hero__images col-8 col-lg-6 ">
          <img
            src={Oscar1}
            alt="Tu descripción"
            className="hero__img img-fluid w-75"
          />
          <img src={SvgImage} alt="Tu descripción" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Abaut;
