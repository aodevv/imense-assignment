import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ elRef, children, className }) => {
  return (
    <div className={`dropdown ${className}`} ref={elRef}>
      <ul>{children}</ul>
    </div>
  );
};

export default Dropdown;
