import React from "react";
import TableOptions from "../../components/TableOptions/TableOptions";
import ViolationsTable from "../../components/ViolationsTable/ViolationsTable";

import "./Body.scss";

const Body = ({ sidebar }) => {
  return (
    <div className={`body ${sidebar && "full-sidebar"}`}>
      <TableOptions />
      <div className="table__container">
        <ViolationsTable />
      </div>
    </div>
  );
};

export default Body;
