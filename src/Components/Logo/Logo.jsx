import React from 'react'
import './logo.css';
import { ReactComponent as LogoSvgIco  } from './../../resources/logo_ico.svg';
import { ReactComponent as LogoSvgText  } from './../../resources/logo_txt.svg';

function Logo() {
    return (
        <>
            <div className="logo">
                <LogoSvgIco className="logo-ico"/>
                <LogoSvgText  className="logo-text"/>
            </div>
        </>
    )
}

export default Logo;
