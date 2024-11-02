import LogoHeader from "../assets/logo.svg";
import LogoOffcanvas from "../assets/logoNara.svg";

function Header() {
  return (
    <header className="container-xxl sticky-top pt-2">
      <nav className="navbar navbar-expand-lg bg-primary rounded-pill p-2">
        <div className="container-fluid">
          {/* Logo del header */}
          <a className="navbar-brand me-auto p-0" href="#">
            <img src={LogoHeader} alt="Logo Header" className="img-fluid" style={{ maxHeight: "40px" }} />
          </a>

          {/* Botón de menú para pantallas pequeñas */}
          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú Offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* Logo diferente en el offcanvas */}
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={LogoOffcanvas} alt="Logo Offcanvas" className="img-fluid" style={{ maxHeight: "30px" }} />
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
                  <a className="nav-link mx-lg-2 active text-black d-lg-none" href="#hero">
                    Inicio
                  </a>
                  <a className="nav-link mx-lg-2 active text-white d-none d-lg-block" href="#hero">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 text-black d-lg-none" href="#skills">
                    Habilidades
                  </a>
                  <a className="nav-link mx-lg-2 text-white d-none d-lg-block" href="#skills">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 text-black d-lg-none" href="#projects">
                    Proyectos
                  </a>
                  <a className="nav-link mx-lg-2 text-white d-none d-lg-block" href="#projects">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 text-black d-lg-none" href="#">
                    Contactame
                  </a>
                  <a className="nav-link mx-lg-2 text-white d-none d-lg-block" href="#">
                    Contactame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
