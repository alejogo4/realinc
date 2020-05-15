import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Do from './Components/Do/Do';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';


import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
function App() {
  
  return (
      <ParallaxProvider>
        <Header titulo="Noticia 1"/>
         <Projects/>
         <Do/>
         <Services/>
        <Footer/>
     </ParallaxProvider>
  );
}

export default App;
