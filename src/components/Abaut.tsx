import React from 'react';
import './Abaut.css'; // archivo CSS opcional para estilos adicionales
import SvgImage from '../assets/Component1.svg'; 

const Abaut = () => {
    return (
        <section id='hero' className="container-xxl my-5">
          {/* esto va hacer que se*/}
          <div className="row justify-content-center justify-content-lg-between">
            {/* Columna izquierda: Información personal */}
            <div className="col-lg-6 d-flex flex-column justify-content-start mb-5">
              <h1 className="h1 mb-3 display-5">OSCAR FUENTES</h1>
              <p className="mb-3">Aquí va una breve descripción sobre ti.</p>
              <div className='mx-auto'>
              <a className="btn btn-secondary rounded-pill px-4">Descarga mi CV</a>
              </div>
            </div>
    
            {/* Columna derecha: Imagen SVG */}
            <div className="col-8 col-lg-6 ">
              <img src={SvgImage} alt="Tu descripción" className="img-fluid" />
            </div>
          </div>
        </section>
      );
    };

export default Abaut;
