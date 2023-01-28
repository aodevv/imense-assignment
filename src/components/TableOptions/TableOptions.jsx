import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import Search from "../MIX/Search";
import Select from "../MIX/Select";
import ExpandBtn from "../MIX/ExpandBtn";

import { BiChevronDown } from "react-icons/bi";

import "./Calendar.scss";
import "./DateRangePicker.scss";
import "./TableOptions.scss";

const TableOptions = () => {
  const [workers, setWorkers] = useState("");
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div className="table__options">
      <h3>P.P.E Violations Table</h3>
      <div className="table__options-controls">
        <Search
          value={workers}
          placeholder="Search workers"
          handleChange={setWorkers}
        />
        <DateRangePicker
          onChange={onChange}
          value={value}
          calendarIcon={<BiChevronDown />}
          clearIcon={null}
        />
        <Select label="All constractors" name="contractors" />
        <ExpandBtn />
      </div>
    </div>
  );
};

export default TableOptions;
