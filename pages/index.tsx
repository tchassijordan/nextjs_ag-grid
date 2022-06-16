import Head from "next/head";
import Sidebar from "../components/Sidebar";
import React, { useState, ReactChild } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import data from "../utils/data";
import SidebarItem from "../components/SidebarItem";
import ClockSolid from "../components/icons/ClockSolid"
import FlagSolid from "../components/icons/FlagSolid"
import SackDollarSolid from "../components/icons/SackDollarSolid"
import ShapesSolid from "../components/icons/ShapesSolid"

export default function Home(): ReactChild {
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

  //define our meun list 
  const menuOptions = [
    {
      link: "/",
      text: "country",
      icon: FlagSolid,
    },
    {
      link: "/",
      text: "sectors",
      icon: ShapesSolid,
    },
    {
      link: "/",
      text: "signed amount",
      icon: SackDollarSolid,
    },
    {
      link: "/",
      text: "date",
      icon: ClockSolid,
    },
  ];

  return (
    <div>
      <Head>
        <title>A simple Ag grid table with next js</title>
        <meta name="description" content="Ag grid created with next js" />
      </Head>
      <div className="w-full h-full flex bg-tertiary gap-1 p-1 font-primary">
        <Sidebar>
          {menuOptions.map((item, index) => (
            <SidebarItem key={index} to={item.link}>
              <>
                {item.icon && <item.icon cls="h-3 w-3 opacity-60 mr-1" fillColor="white" />}
                {item.text}
              </>
            </SidebarItem>
          ))}
        </Sidebar>
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
      </div>
    </div>
  );
}
