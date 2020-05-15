import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Projects = () => {
  return (
    <section className="container-full projects position-relative">
      <h2 class="tittle color-gray font-bold">LOS MEJORES PROYECTOS</h2>
      <div className="slider">
        <Carousel
          indicators={false}
          interval={null}
          nextIcon={<FaAngleRight className="icon-slide" />}
          prevIcon={<FaAngleLeft className="icon-slide" />}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="move-slide-content">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>

            <Carousel.Caption className="move-slide-content-left">
              <Carousel controls={false} interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="move-slide-content">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>

            <Carousel.Caption className="move-slide-content-left">
              <Carousel controls={false} interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="move-slide-content">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>

            <Carousel.Caption className="move-slide-content-left">
              <Carousel controls={false} interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-2.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="http://dinter.com.hn/wp-content/uploads/2014/04/slider-3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
