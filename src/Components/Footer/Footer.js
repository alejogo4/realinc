import React from "react";
import "./footer.css";
import Stars from "./../Stars/Stars";
import { ReactComponent as CloudWhiteLeft } from "./../../resources/nube_izquierda.svg";
import { ReactComponent as CloudWhiteRight } from "./../../resources/nube_derecha.svg";
import { ReactComponent as Satellite } from "./../../resources/stelite.svg";
import { Parallax } from "react-scroll-parallax";
import emailjs from "emailjs-com";
import apiKey from "./../../config/apiKey";

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(apiKey.SERVICES_ID,apiKey.TEMPLATE_ID, {message:e.target[0].value}, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
  };
  return (
    <>
      <footer className="container-full bg-stars footer position-relative shadow-s">
        <h2 className="tittle color-white font-bold">TRABAJEMOS JUNTOS</h2>
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>
            <textarea name="message"></textarea>

            <button className="button-contact">Enviar</button>
          </form>
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
