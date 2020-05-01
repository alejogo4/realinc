import React from "react";
import "./services.css";
import Card from "./../Card/Card";
import { ReactComponent as Mobile } from "./../../resources/icono1.svg";
import { ReactComponent as Desktop } from "./../../resources/icono2.svg";
import { ReactComponent as Multimedia } from "./../../resources/icono3.svg";
import { ReactComponent as Ico1 } from "./../../resources/l1.svg";
import { ReactComponent as Ico2 } from "./../../resources/l2.svg";
import { ReactComponent as Ico3 } from "./../../resources/l3.svg";
import { ReactComponent as Ico4 } from "./../../resources/l4.svg";
import { ReactComponent as Ico5 } from "./../../resources/l5.svg";
import { ReactComponent as Ico6 } from "./../../resources/l6.svg";
import { ReactComponent as Ico7 } from "./../../resources/l7.svg";
import { ReactComponent as Ico8 } from "./../../resources/l8.svg";
import { ReactComponent as Ico9 } from "./../../resources/l9.svg";
import { ReactComponent as Ico10 } from "./../../resources/l10.svg";
import { ReactComponent as Ico11 } from "./../../resources/l11.svg";
import { ReactComponent as Ico12 } from "./../../resources/l12.svg";
import { ReactComponent as Ico13 } from "./../../resources/l13.svg";

const Services = () => {
  return (
    <section className="container-full services position-relative">
      <div className="container-cards">
        <Card
          width={20}
          image={<Desktop style={{width:'40%'}}/>}
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores rerum nobis ducimus, impedit commodi magni quod ad labore temporibus a pariatur eaque iusto non, debitis illum blanditiis quos voluptates aut!"
        />
        <Card
          width={20}
          image={<Mobile />}
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores rerum nobis ducimus, impedit commodi magni quod ad labore temporibus a pariatur eaque iusto non, debitis illum blanditiis quos voluptates aut!"
        />
        <Card
          width={20}
          image={<Multimedia style={{width:'46%'}}/>}
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores rerum nobis ducimus, impedit commodi magni quod ad labore temporibus a pariatur eaque iusto non, debitis illum blanditiis quos voluptates aut!"
        />
      </div>
      <div className="tools">
        <h3 className="subttitle">¿QUE USAMOS PARA LOGRARLO?</h3>
        <div className="col-2-tools">
            <div className="col-1">
                <p>Desarrollamos con</p>
                <div className="flex">
                    <Ico6/>
                    <Ico7/>
                    <Ico8/>
                    <Ico9/>
                    <Ico10/>
                    <Ico11/>
                    <Ico12/>
                    <Ico13/>
                </div>
            </div>
            <div className="col-2">
                <p>Y le damos las figuras y formas con</p>
                <div className="flex">
                    <Ico3/>
                    <Ico4/>
                    <Ico5/>
                    <Ico1/>
                    <Ico2/>
                </div>
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default Services;
