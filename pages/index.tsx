import React, { useState, useMemo } from "react";
import Head from "next/head";
import { AgGridReact } from "ag-grid-react";
import data from "../utils/data";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Sidebar from "../components/Sidebar";

export default function Home() {
  //define the column header for our table in a local state
  const [columnDefs, setColumnDefs] = useState([
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
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };
  }, []);

  //define the minimum width for a column group
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Ag grid with next js</title>
        <meta name="description" content="Ag grid created with next js" />
      </Head>
      <div className="w-full h-full flex">
        <Sidebar></Sidebar>
        <div className="ag-theme-alpine-dark w-4/5 h-screen">
          <AgGridReact
            rowData={data}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            animateRows={true}
            rowGroupPanelShow={"always"}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}
