import React, { ReactElement, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import data from "../utils/data";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

export default function Table():ReactElement {
  //define the column header for our table in a local state
  const [columnDefs] = useState([
    { field: "country", rowGroup: true, enableRowGroup: true, hide: true },
    { field: "sectors", rowGroup: true, enableRowGroup: true, hide: true },
    {
      headerName: "Activity Details",
      children: [
        { field: "title", enableRowGroup: true },
        { field: "date", enableRowGroup: true },
      ],
    },
    {
      headerName: "Values",
      children: [{ field: "signed amount" }],
    },
  ]);

  //define the properties of our tables columns
  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };

  //define the minimum width for a column group
  const autoGroupColumnDef = {
    minWidth: 200,
  };

  return (
    <div className={`ag-theme-alpine-dark w-full h-screen shadow-md`}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        autoGroupColumnDef={autoGroupColumnDef}
        animateRows={true}
        rowGroupPanelShow={"always"}
      ></AgGridReact>
    </div>
  );
}
