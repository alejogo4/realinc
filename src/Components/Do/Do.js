import React from 'react'
import './do.css';
import Stars from './../Stars/Stars';
import { ReactComponent as PlanetRight  } from './../../resources/plante_circle.svg';
import { ReactComponent as PlanetLeft  } from './../../resources/planet_squared.svg';

import { Parallax } from 'react-scroll-parallax';
const Doe = () => {
    return (
        <section className="container-full bg-stars do position-relative">
            <div>
                <Stars/>
                <div className="content-text">
                    <h2 className="tittle color-white font-bold">¿QUE HACEMOS?</h2>
                    <p className="paragraph">Cuando se trata de proyectos digitales, Tenemos el toque</p>
                    <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem fuga quibusdam exercitationem. Odio sunt perspiciatis quae aliquam perferendis praesentium, minus commodi hic consequuntur dignissimos fugit voluptate quod iure illum.</p>
                </div>
                <Parallax className="position-absolute planet-left"  y={[-20, 40]}>
                    <PlanetLeft className="planets"/>
                </Parallax>
                <Parallax className="position-absolute planet-right"  y={[-20, 5]}>
                    <PlanetRight className="planets"/>
                </Parallax>
                </div>
        </section>
    )
}

export default Doe
