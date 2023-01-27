import React from "react";

const ImageHeader = ({ img, name }) => {
  return (
    <div className="table-header">
      <div className="header-image">
        <img src={`./violations/${img}.png`} alt={img} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ImageHeader;
