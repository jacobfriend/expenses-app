import "./Card.css";
import React from "react";

function Card(props) {
  // acts as shell to multiple components
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
