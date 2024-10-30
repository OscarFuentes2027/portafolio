import React, { useState } from "react";
import emailjs from "emailjs-com";
import izquierda from "../assets/Rectangle 17.svg";
import derecha from "../assets/Component 12.svg";
import emailIcon from "../assets/envelope-fill.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/github.svg";
import "./Footer.scss";

function Footer() {
  const [formData, setFormData] = useState({
    reply_to: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tus IDs de EmailJS
    const SERVICE_ID = 'default_service';
    const TEMPLATE_ID = 'template_4cgicha';
    const USER_ID = 'n5C7U3trzBPEtHkle'; // Aquí cambia tu user_id

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("Correo enviado!", response.status, response.text);
        alert("Correo enviado exitosamente!");
      })
      .catch((error) => {
        console.error("Hubo un problema al enviar el correo:", error);
        alert("Error al enviar el correo, intenta nuevamente.");
      });
  };

  return (
    <section className="my-section container-lg">
      <div className="row g-0 h-100 justify-content-center">
        {/* Columna izquierda con formulario superpuesto */}
        <div className="col-12 col-lg-6 d-flex justify-content-center position-relative">
          <img src={izquierda} alt="SVG Izquierdo" className="img-fluid svg-background" />
          <div className="form-overlay">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                className="form-control mb-3"
                value={formData.reply_to}
                onChange={handleChange}
              />
              <textarea
                name="descripcion"
                placeholder="Descripción"
                className="form-control mb-3"
                rows={10}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>

        {/* Columna derecha con información de contacto superpuesta */}
        <div className="col-12 col-lg-6 d-flex justify-content-center position-relative">
          <img src={derecha} alt="SVG Derecho" className="img-fluid svg-background" />
          <div className="contact-overlay">
            <div className="contact-item d-flex align-items-center mb-3">
              <img src={emailIcon} alt="Email Icon" className="icon" />
              <span>oswaldev.cs@outlook.com</span>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
              <img src={linkedin} alt="LinkedIn Icon" className="icon" />
              <span>oswaldev.cs@outlook.com</span>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
              <img src={git} alt="GitHub Icon" className="icon" />
              <span>oswaldev.cs@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
