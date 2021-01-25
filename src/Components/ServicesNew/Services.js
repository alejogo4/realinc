import React, { useEffect, useState } from "react";
import "./services.css";

import { ReactComponent as Desarrollo } from "./../../resources/services/desarrollo_a_la_medida.svg";
import { ReactComponent as Diseno } from "./../../resources/services/diseno.svg";

const Services = () => {
  const [posX, setPosX] = useState(-100);
  const [posY, setPosY] = useState(100);

  useEffect(() => {
    window.addEventListener("scroll", scrollMove);
  }, []);

  const scrollMove = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    /*
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    
      const scrolled = winScroll / height*/

    setPosX(posX + winScroll * 0.1);
    setPosY(posY - winScroll * 0.1);
  };

  return (
    <section className="container-full services position-relative">
      <div className="container-service">
        <div className="left-content m-full-content">
          <h2 className="title">Desarrollo de sofware a la medida</h2>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ut corporis esse voluptas, error labore expedita veritatis in ipsum
            quasi ab explicabo tempore, fuga doloremque quam aperiam dicta
            aliquam unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ut corporis esse voluptas, error labore expedita
            veritatis in ipsum quasi ab explicabo tempore<br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ut corporis esse voluptas, error labore expedita veritatis in ipsum
            quasi ab explicabo tempore, fuga doloremque quam aperiam dicta
            aliquam unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ut corporis esse voluptas, error labore expedita
            veritatis in ipsum quasi ab explicabo tempore, fuga doloremque quam
            aperiam dicta aliquam unde!
          </p>
        </div>
        <div className="right-content">
          <img src="desarrollo.png" style={{ right: posX, top: posY }} />
        </div>
      </div>
      <div className="container-service">
        <div className="left-content">
          <img src="diseno.png" style={{ left: posX, top: posY }} />
        </div>
        <div className="right-content m-full-content">
          <h2 className="title">Diseño</h2>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ut corporis esse voluptas, error labore expedita veritatis in ipsum
            quasi ab explicabo tempore, fuga doloremque quam aperiam dicta
            aliquam unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ut corporis esse voluptas, error labore expedita
            veritatis in ipsum quasi ab explicabo tempore<br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ut corporis esse voluptas, error labore expedita veritatis in ipsum
            quasi ab explicabo tempore, fuga doloremque quam aperiam dicta
            aliquam unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ut corporis esse voluptas, error labore expedita
            veritatis in ipsum quasi ab explicabo tempore, fuga doloremque quam
            aperiam dicta aliquam unde!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
