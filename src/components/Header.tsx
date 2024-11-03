import LogoHeader from "../assets/logo.svg";
import LogoOffcanvas from "../assets/logoNara.svg";

interface HeaderProps {
  toggleLanguage: () => void; // Función que no recibe parámetros y no devuelve nada
  language: 'es' | 'en'; // Define los tipos posibles para 'language'
}

function Header({ toggleLanguage, language }: HeaderProps) {
  return (
    <header className="container-xxl sticky-top pt-2">
      <nav className="navbar navbar-expand-lg bg-primary rounded-pill p-2">
        <div className="container-fluid">
          <a className="navbar-brand me-auto p-0" href="#">
            <img
              src={LogoHeader}
              alt="Logo Header"
              className="img-fluid"
              style={{ maxHeight: "40px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1} // Cambiado a número
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src={LogoOffcanvas}
                  alt="Logo Offcanvas"
                  className="img-fluid"
                  style={{ maxHeight: "30px" }}
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link mx-lg-2 active text-black d-lg-none"
                    href="#hero"
                  >
                    {language === "es" ? "Inicio" : "Home"}
                  </a>
                  <a
                    className="nav-link mx-lg-2 active text-white d-none d-lg-block"
                    href="#hero"
                  >
                    {language === "es" ? "Inicio" : "Home"}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-lg-2 text-black d-lg-none"
                    href="#skills"
                  >
                    {language === "es" ? "Habilidades" : "Skills"}
                  </a>
                  <a
                    className="nav-link mx-lg-2 text-white d-none d-lg-block"
                    href="#skills"
                  >
                    {language === "es" ? "Habilidades" : "Skills"}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-lg-2 text-black d-lg-none"
                    href="#projects"
                  >
                    {language === "es" ? "Proyectos" : "Projects"}
                  </a>
                  <a
                    className="nav-link mx-lg-2 text-white d-none d-lg-block"
                    href="#projects"
                  >
                    {language === "es" ? "Proyectos" : "Projects"}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-lg-2 text-black d-lg-none"
                    href="#contact"
                  >
                    {language === "es" ? "Contáctame" : "Contact"}
                  </a>
                  <a
                    className="nav-link mx-lg-2 text-white d-none d-lg-block"
                    href="#contact"
                  >
                    {language === "es" ? "Contáctame" : "Contact"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={toggleLanguage}
            className="btn btn-light me-3"
            style={{ color: "orange" }}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
