import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Doe from "./Components/Do/Do";
import Services from "./Components/ServicesNew/Services";
import DoNew from "./Components/DoNew/Do";
import Footer from "./Components/Footer/Footer";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <Header titulo="Noticia 1" />
      <Services />
      <Doe />
      <DoNew />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
