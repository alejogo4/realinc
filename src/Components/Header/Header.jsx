import React from 'react';
import Stars from './../Stars/Stars';
import './header.css';
import Logo from './../Logo/Logo';

import { ReactComponent as CloudWhiteLeft  } from './../../resources/nube_izquierda.svg';
import { ReactComponent as CloudBlackLeft  } from './../../resources/nube_osc_izquierda.svg';
import { ReactComponent as CloudWhiteRight  } from './../../resources/nube_derecha.svg';
import { ReactComponent as CloudBlackRight  } from './../../resources/nube_osc_derecha.svg';
import { ReactComponent as GradientMiddle  } from './../../resources/gradient_middle-01.svg';


import { Parallax } from 'react-scroll-parallax';

function Header(){
    return(

        <header className="header bg-stars">
            <Parallax className="parallax-item logo"  y={['0px', '200px']}>
                <Logo/>
            </Parallax>
            <Stars/>
         
            <GradientMiddle className="gradient-middle middle"/>
            <Parallax className="cloud cloud-black-left"  y={[-20, 40]}>
                <CloudBlackLeft className="cloud-parallax"/>
            </Parallax>
            
            <CloudWhiteLeft className="cloud cloud-white-left"/>

            <Parallax className="cloud cloud-black-right" y={[-25, 40]}>
                <CloudBlackRight className="cloud-parallax"/>
            </Parallax>
    
            <CloudWhiteRight className="cloud cloud-white-right"/>
            
        </header>
    );
}

export default Header;