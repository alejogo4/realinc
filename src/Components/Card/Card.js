import React, { cloneElement, Component } from "react";
import PropTypes from "prop-types";
import './card.css';

function Card(props) {
  const { children, image, content,width } = props;
  console.log(children, image, content);
  return (
    <div className="card" style={{width:width+"%"}}>
      {cloneElement(image, {
        ...image.props,
        children,
      })}
      <div className="content">
        {content}
      </div>
    </div>
  );
}

Card.propTypes = {
    image: PropTypes.element,
};

Card.defaultProps = {
    image: <div />,
};
export default Card;
