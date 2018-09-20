import React from "react";

export default props => (
  <img
    src={props.svg}
    alt={props.name}
    width={props.width || "20"}
    className="shadow-sm"
  />
);
