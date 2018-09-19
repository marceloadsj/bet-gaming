import React from "react";
import Select from "react-select";
import "./Select.css";

export default props => (
  <Select
    className="general-select"
    classNamePrefix="general-select"
    {...props}
  />
);
