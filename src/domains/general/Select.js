import React from "react";
import omit from "omit";
import Select from "react-select";
import AsyncSelect from "react-select/lib/Async";
import "./Select.css";

export default props => {
  const Component = props.async ? AsyncSelect : Select;

  return (
    <Component
      className="general-select"
      classNamePrefix="general-select"
      {...omit(["async"], props)}
    />
  );
};
