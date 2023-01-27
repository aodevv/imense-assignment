import React from "react";
import "./Worker.scss";

const Worker = ({ worker }) => {
  const { name, img, position, company } = worker;
  return (
    <div className="worker">
      <div className="worker__details">
        <img className="worker__img" src={img} alt="worker-img" />
        <div className="worker__details-text">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>

      <img src={company} alt="worker-company" className="worker__company" />
    </div>
  );
};

export default Worker;
