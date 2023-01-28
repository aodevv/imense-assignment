import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import ColumnToggle from "../ColumnToggle/ColumnToggle";
import ImageHeader from "../ImageHeader/ImageHeader";
import Worker from "../Worker/Worker";
import Violations from "../Violations/Violations";

import "./ViolationsTable.scss";

const ViolationsTable = () => {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        worker: {
          name: "Blaise DEFLOO",
          img: "./blaise.png",
          position: "Manager",
          company: "./biowanze.png",
        },
        protective_gloves: 2,
        safety_glasses: 0,
        ear_protection: 0,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 1,
        hivis_jackets: 0,
        safety_harness: 0,
        face_shield: 3,
        hard_hat: 0,
        welding_helmet: 0,
      },
      {
        id: 2,
        worker: {
          name: "Blaise DEFLOO",
          img: "./blaise.png",
          position: "Manager",
          company: "./biowanze.png",
        },
        protective_gloves: 0,
        safety_glasses: 2,
        ear_protection: 0,
        mask_protection: 0,
        knee_pads: 0,
        safety_shoes: 10,
        coverall: 0,
        hivis_jackets: 1,
        safety_harness: 0,
        face_shield: 0,
        hard_hat: 0,
        welding_helmet: 3,
      },
      {
        id: 3,
        worker: {
          name: "Blaise DEFLOO",
          img: "./blaise.png",
          position: "Manager",
          company: "./biowanze.png",
        },
        protective_gloves: 2,
        safety_glasses: 0,
        ear_protection: 0,
        mask_protection: 10,
        knee_pads: 0,
        safety_shoes: 0,
        coverall: 1,
        hivis_jackets: 0,
        safety_harness: 0,
        face_shield: 3,
        hard_hat: 0,
        welding_helmet: 0,
      },
      {
        id: 4,
        worker: {
          name: "Blaise DEFLOO",
          img: "./blaise.png",
          position: "Manager",
          company: "./biowanze.png",
        },
        protective_gloves: 0,
        safety_glasses: 2,
        ear_protection: 0,
        mask_protection: 0,
        knee_pads: 0,
        safety_shoes: 10,
        coverall: 0,
        hivis_jackets: 1,
        safety_harness: 0,
        face_shield: 0,
        hard_hat: 0,
        welding_helmet: 3,
      },
    ],
    []
  );

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
        Header: () => (
          <ImageHeader id="protective_gloves" name="Protective gloves" />
        ),
        accessor: "protective_gloves",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="safety_glasses" name="Safety" />,
        accessor: "safety_glasses",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => (
          <ImageHeader id="mask_protection" name="Protective gloves" />
        ),
        accessor: "mask_protection",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="knee_pads" name="Protective gloves" />,
        accessor: "knee_pads",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => (
          <ImageHeader id="safety_shoes" name="Protective gloves" />
        ),
        accessor: "safety_shoes",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="coverall" name="Protective gloves" />,
        accessor: "coverall",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => (
          <ImageHeader id="hivis_jackets" name="Protective gloves" />
        ),
        accessor: "hivis_jackets",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => (
          <ImageHeader id="safety_harness" name="Protective gloves" />
        ),
        accessor: "safety_harness",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="face_shield" name="Protective gloves" />,
        accessor: "face_shield",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => <ImageHeader id="hard_hat" name="Protective gloves" />,
        accessor: "hard_hat",
        Cell: ({ value }) => <Violations count={value} />,
      },
      {
        Header: () => (
          <ImageHeader id="welding_helmet" name="Protective gloves" />
        ),
        accessor: "welding_helmet",
        Cell: ({ value }) => <Violations count={value} />,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable({ columns, data });
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