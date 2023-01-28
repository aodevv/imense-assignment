import React from "react";

import "./ImageHeader.scss";

const ImageHeader = ({ id }) => {
  return (
    <div className="table-header">
      <div className="header-image">
        <img src={`./violations/${id}.png`} alt={id} />
      </div>
      <p>{id.split("_").join(" ")}</p>
    </div>
  );
};

export default ImageHeader;
