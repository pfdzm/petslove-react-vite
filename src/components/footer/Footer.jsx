import React from "react";
import "./footer.css";
import logo from "../../assets/images/Logo.png";
import fb from "../../assets/images/fb.png";
import line from "../../assets/images/line.png";
import ig from "../../assets/images/ig.png";

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
          <div className="container-lg d-flex justify-content-between align-items-center">
            <h1 className="logo">
              <a href="index.html">
                <img src={logo} alt="logo" /> Pet's snack
              </a>
            </h1>
            <ul className="social d-flex ">
              <li>
                <a href="#"></a>
                <img src={fb} alt="fb" />
              </li>
              <li>
                <a href="#"></a>
                <img src={ig} alt="ig" />
              </li>
              <li>
                <a href="#"></a>
                <img src={line} alt="line" />
              </li>
            </ul>
          </div>
          <div className="copyRight text-center">©2023 By Yen</div>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
