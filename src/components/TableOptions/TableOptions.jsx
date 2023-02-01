import React, { useState } from "react";

import Search from "../MIX/Search";
import Select from "../MIX/Select";
// import ExpandBtn from "../MIX/ExpandBtn";
import DateRangePicker from "../DateRangePicker/DateRangePicker";

import "./Calendar.scss";
import "./DateRangePicker.scss";
import "./TableOptions.scss";

const TableOptions = () => {
  const [workers, setWorkers] = useState("");

  return (
    <div className="table__options">
      <h3>P.P.E Violations Table</h3>
      <div className="table__options-controls">
        <Search
          value={workers}
          placeholder="Search workers"
          handleChange={setWorkers}
        />
        <DateRangePicker />
        <Select label="All constractors" name="contractors" />
      </div>
    </div>
  );
};

export default TableOptions;
