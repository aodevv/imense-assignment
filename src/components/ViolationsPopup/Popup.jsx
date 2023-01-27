import React from "react";

import { HiOutlineClock } from "react-icons/hi";

import "./Popup.scss";

const ViolationsPopup = ({ violations }) => {
  return (
    <div className="violations-popup">
      {violations.map((violation, idx) => {
        const { id, img, date, comment } = violation;
        return (
          <div className="violation" key={`vln-${idx}`}>
            <img src={img} alt={`violation-${id}`} />
            <div className="violation__details">
              <h3>Comment</h3>
              <div className="violation__details-right">
                <span>
                  <HiOutlineClock />
                </span>
                <span>{date}</span>
                <h4>{id}</h4>
              </div>
            </div>
            <p>{comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViolationsPopup;
