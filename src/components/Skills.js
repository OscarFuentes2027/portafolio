import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SvgImage from "../assets/Component 6.svg";
import SvgImage2 from "../assets/Component 3.svg";
import SvgImage3 from "../assets/Component 7.svg";
import Oscar2 from "../assets/images/Oscar3.png";
import "./Skills.scss";
const Skills = () => {
    return (_jsx("section", { id: "skills", className: "skills container-lg", children: _jsxs("div", { className: "row g-0 h-100 justify-content-center justify-content-lg-between", children: [_jsxs("div", { className: "col-12 col-sm-10 col-md-8 col-lg-4 mb-lg-0 mb-5 d-flex flex-column", children: [_jsx("h2", { className: "display-5 text-uppercase mb-5", children: "Frontend" }), _jsx("img", { className: "img-fluid mt-auto", src: SvgImage, alt: "Habilidades Frontend" })] }), _jsxs("div", { className: "d-none d-lg-flex col-12 col-sm-10 col-md-8 col-lg-4 d-flex flex-column hero__images", children: [_jsx("img", { src: Oscar2, alt: "Oscar Fuentes", className: "hero__img mt-auto oscar2-large" }), _jsx("img", { src: SvgImage2, alt: "Habilidades Extras", className: "img-fluid" })] }), _jsxs("div", { className: "col-12 col-sm-10 col-md-8 col-lg-4 mb-lg-0 mb-5 d-flex flex-column", children: [_jsx("h2", { className: "display-5 text-uppercase mb-5", children: "Backend" }), _jsx("img", { className: "img-fluid mt-auto", src: SvgImage3, alt: "Habilidades Backend" })] })] }) }));
};
export default Skills;
