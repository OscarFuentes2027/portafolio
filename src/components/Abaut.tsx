import React from 'react';
import './Abaut.css'; // archivo CSS opcional para estilos adicionales
import SvgImage from '../assets/Component1.svg'; 

const Abaut = () => {
    return (
        <div className="container my-5">
          <div className="row">
            {/* Columna izquierda: Información personal */}
            <div className="col-md-6 d-flex flex-column justify-content-start">
              <h1 className="mb-3">OSCAR FUENTES</h1>
              <p className="mb-3">Aquí va una breve descripción sobre ti.</p>
              <button className="btn">Contactar</button>
            </div>
    
            {/* Columna derecha: Imagen SVG */}
            <div className="col-md-6 d-flex justify-content-start">
              <img src={SvgImage} alt="Tu descripción" className="img-fluid" />
            </div>
          </div>
        </div>
      );
    };

export default Abaut;
