// import { useState } from "react";
import logo from "../assets/logo.jpeg";
import bag from "../assets/solar_bag-linear.png";
const Navbar = () => {
  // const [active, setActive] = useState("#");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand p-0" to="#home">
          <img src={logo} alt={logo} className="logo-img " />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* means */}
        <div className="collapse navbar-collapse align-middle" id="navbarNav">
          <ul className="navbar-nav ms-auto nav_ul align-items-center">
            <li className="nav-item">
              <a className="nav-link" to="/about">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/services">
                About us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" to="/contact">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/contact">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/contact">
                Contact Us
              </a>
            </li>

            <div className="bag-icon">
              <img src={bag} alt={bag} />
            </div>

            <div className="mx-3 batch-btn">
              <button type="button" className="login-btn mx-2">
                Sign in
              </button>
              <button type="button" className="login-btn mx-2">
                Register
              </button>
            </div>
          </ul>
        </div>
        {/* end */}
      </div>
    </nav>
  );
};

export default Navbar;
