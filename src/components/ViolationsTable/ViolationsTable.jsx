import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import ColumnToggle from "../ColumnToggle/ColumnToggle";
import ImageHeader from "../ImageHeader/ImageHeader";
import Worker from "../Worker/Worker";
import Violations from "../Violations/Violations";

import { violations_count } from "./tableData";

import "./ViolationsTable.scss";

const ViolationsTable = () => {
  const data = React.useMemo(() => violations_count, [violations_count]);

  const columns = useMemo(
    () => [
      {
        Header: (obj) => <ColumnToggle obj={obj} />,
        accessor: "id",
      },
      {
        Header: "Workers",
        accessor: "worker",
        Cell: ({ value }) => <Worker worker={value} />,
      },
      {
        Header: () => <ImageHeader id="protective_gloves" />,
        accessor: "protective_gloves",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="safety_glasses" />,
        accessor: "safety_glasses",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="ear_protection" />,
        accessor: "ear_protection",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="mask_protection" />,
        accessor: "mask_protection",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="knee_pads" />,
        accessor: "knee_pads",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="safety_shoes" />,
        accessor: "safety_shoes",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="coverall" />,
        accessor: "coverall",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="hivis_jackets" />,
        accessor: "hivis_jackets",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="safety_harness" />,
        accessor: "safety_harness",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="face_shield" />,
        accessor: "face_shield",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="hard_hat" />,
        accessor: "hard_hat",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="welding_helmet" />,
        accessor: "welding_helmet",
        Cell: ({ value }) => <Violations count={value} />,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ViolationsTable;
