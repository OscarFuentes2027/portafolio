import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

function Header() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            pe-0
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Logo
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
                    className="nav-link mx-lg-2 active"
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">
                    Contactame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;