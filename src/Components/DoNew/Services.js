import React from "react";
import "./services.css";

import { ReactComponent as Desktop } from "./../../resources/services/icon_1.svg";
import { ReactComponent as Mobile } from "./../../resources/services/icon_2.svg";
import { ReactComponent as Ecommerce } from "./../../resources/services/icon_3.svg";
import { ReactComponent as Videogames } from "./../../resources/services/icon_4.svg";

import { ReactComponent as AR } from "./../../resources/services/icon_5.svg";
import { ReactComponent as Brand } from "./../../resources/services/icon_6.svg";
import { ReactComponent as Illustration } from "./../../resources/services/icon_7.svg";
import { ReactComponent as Animation } from "./../../resources/services/icon_8.svg";

const DoNew = () => {
  return (
    <section className="container-full services">
      <div className="container-cards position-relative">
        <div>
          <Desktop className="icons-product" />
        </div>
        <div>
          <Mobile className="icons-product" />
        </div>
        <div>
          <Ecommerce className="icons-product" />
        </div>
        <div>
          <Videogames className="icons-product" />
        </div>
        <div className="container-cards position-absolute card-text">
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
        </div>
      </div>

      <div className="container-cards position-relative">
        <div>
          <AR className="icons-product" />
        </div>
        <div>
          <Brand className="icons-product" />
        </div>
        <div>
          <Illustration className="icons-product" />
        </div>
        <div>
          <Animation className="icons-product" />
        </div>
        <div className="container-cards position-absolute card-text">
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
          <div>
            <h4>DESARROLLO WEB</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoNew;
