import React from "react";
import "./footer.css";
import Stars from "./../Stars/Stars";
import { ReactComponent as CloudWhiteLeft } from "./../../resources/nube_izquierda.svg";
import { ReactComponent as CloudWhiteRight } from "./../../resources/nube_derecha.svg";
import { ReactComponent as Satellite } from "./../../resources/stelite.svg";
import { Parallax } from "react-scroll-parallax";

const Footer = () => {
  return (
    <>
      <footer className="container-full bg-stars footer position-relative">
        <h2 class="tittle color-white font-bold">TRABAJEMOS JUNTOS</h2>
        <div className="form-container">
          <textarea></textarea>

          <button className="button-contact">Enviar</button>
        </div>

        <Stars />
        <Parallax className="cloud cloud-white-left" x={[20, 0]}>
          <CloudWhiteLeft className="cloud-parallax" />
        </Parallax>
        <Parallax className="cloud cloud-white-right" x={[0, 20]}>
          <CloudWhiteRight className="cloud-parallax" />
        </Parallax>

        <Parallax className="satelite" y={[20, 90]} x={[0, 10]}>
          <Satellite className="cloud-parallax" />
        </Parallax>
      </footer>
      <div className="copyright">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
    </>
  );
};

export default Footer;
