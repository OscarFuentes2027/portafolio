import SvgImage from "../assets/Component 6.svg";
import SvgImage2 from "../assets/Component 3.svg";
import SvgImage3 from "../assets/Component 7.svg";

const Skills = () => {
  return (
    <section className="container">
        <div className="row g-0">

      <div className="col-4 col-lg-4 aling-">
        <h2 className="display-5 text-uppercase  ">Frontend</h2>
        <img className="" src={SvgImage} alt="Tu descripción" className="img-fluid" />
      </div>
      <div className="col-4 col-lg-4 ">
        <img src={SvgImage2} alt="Tu descripción" className="img-fluid" />
      </div>
      <div className="col-4 col-lg-4 aling-">
        <h2 className="display-5 text-uppercase  ">Backend</h2>
        <img className="" src={SvgImage3} alt="Tu descripción" className="img-fluid" />
      </div>
        </div>
    </section>
  );
};

export default Skills;
