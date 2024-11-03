import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import emailjs from "emailjs-com";
import izquierda from "../assets/Rectangle 17.svg";
import derecha from "../assets/Component 12.svg";
import emailIcon from "../assets/envelope-fill.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/github.svg";
import "./Footer.scss";
function Footer() {
    const [formData, setFormData] = useState({
        reply_to: "", // Cambiado a reply_to
        message: "", // Cambiado a message
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const SERVICE_ID = "default_service";
        const TEMPLATE_ID = "template_4cgicha";
        const USER_ID = "n5C7U3trzBPEtHkle";
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
    return (_jsx("section", { className: "my-section container-lg", children: _jsxs("div", { className: "row g-0 h-100 justify-content-center", children: [_jsx("h2", { className: "display-5 text-uppercase mb-5", children: "Contactame" }), _jsxs("div", { className: "col-12 col-lg-6 d-none d-lg-flex justify-content-center position-relative", children: [_jsx("img", { src: izquierda, alt: "SVG Izquierdo", className: "img-fluid svg-background" }), _jsx("div", { className: "form-overlay", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "reply_to" // Cambiado a reply_to
                                        , placeholder: "Asunto", className: "form-control mb-3", value: formData.reply_to, onChange: handleChange }), _jsx("textarea", { name: "message" // Cambiado a message
                                        , placeholder: "Mensaje", className: "form-control mb-3", rows: 10, value: formData.message, onChange: handleChange }), _jsx("button", { type: "submit", className: "btn btn-primary", children: "Enviar" })] }) })] }), _jsxs("div", { className: "col-12 col-lg-6 d-flex justify-content-center position-relative", children: [_jsx("img", { src: derecha, alt: "SVG Derecho", className: "img-fluid svg-background" }), _jsxs("div", { className: "contact-overlay", children: [_jsxs("div", { className: "contact-item d-flex align-items-center mb-3", children: [_jsx("img", { src: emailIcon, alt: "Email Icon", className: "icon" }), _jsx("span", { children: "oswaldev.cs@outlook.com" })] }), _jsxs("div", { className: "contact-item d-flex align-items-center mb-3", children: [_jsx("img", { src: linkedin, alt: "LinkedIn Icon", className: "icon" }), _jsx("span", { children: "oswaldev.cs@outlook.com" })] }), _jsxs("div", { className: "contact-item d-flex align-items-center mb-3", children: [_jsx("img", { src: git, alt: "GitHub Icon", className: "icon" }), _jsx("span", { children: "oswaldev.cs@outlook.com" })] })] })] })] }) }));
}
export default Footer;
