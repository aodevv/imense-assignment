import React from "react";

import ViolationsTable from "../../components/ViolationsTable/ViolationsTable";

import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <h3>P.P.E Violations Table</h3>
      <ViolationsTable />
    </div>
  );
};

export default Body;
