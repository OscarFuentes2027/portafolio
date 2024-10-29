import SvgImage from "../assets/Component 6.svg";
import SvgImage2 from "../assets/Component 3.svg";
import SvgImage3 from "../assets/Component 7.svg";
import "./Skills.css";

const Skills = () => {
  return (
<section className="skills container-lg">
  <div className="row g-0 h-100 justify-content-center justify-content-lg-between">
    <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-lg-0 mb-5 d-flex flex-column">
      <h2 className="display-5 text-uppercase mb-5">Frontend</h2>
      <img className="img-fluid mt-auto" src={SvgImage} alt="Tu descripción" />
    </div>
    <div className="d-none d-lg-flex col-12 col-sm-10 col-md-8 col-lg-4 d-flex flex-column">
      <img src={SvgImage2} alt="Tu descripción" className="img-fluid mt-auto" />
    </div>
    <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-lg-0 mb-5 d-flex flex-column">
      <h2 className="display-5 text-uppercase mb-5">Backend</h2>
      <img className="img-fluid mt-auto" src={SvgImage3} alt="Tu descripción" />
    </div>
  </div>
</section>

  );
};

export default Skills;
