import React from "react";

import "./SubPages.scss";

const SubPages = () => {
  return (
    <div className="subpages">
      <p className="subpages__heading">SITES</p>
      <ul className="subpages__sites">
        <li className="active">ALL</li>
        <li>Site 1</li>
        <li>Site 2</li>
        <li>Site 3</li>
        <li>Site 4</li>
      </ul>
    </div>
  );
};

export default SubPages;
