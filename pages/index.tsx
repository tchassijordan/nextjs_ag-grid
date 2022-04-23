import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import NavbarItem from "../components/NavbarItem";
import { ReactChild } from "react";
import ClockSolid from "../components/icons/ClockSolid"
import FlagSolid from "../components/icons/FlagSolid"
import SackDollarSolid from "../components/icons/SackDollarSolid"
import ShapesSolid from "../components/icons/ShapesSolid"

export default function Home():ReactChild {
  return (
    <div>
      <Head>
        <title>A simple Ag grid table with next js</title>
        <meta name="description" content="Ag grid created with next js" />
      </Head>
      <div className="w-full h-full flex bg-[#151718] gap-1 p-1 font-primary">
        <Sidebar>
          <NavbarItem to={"/"}>country <FlagSolid cls="h-3 w-3 opacity-60 ml-1" fillProp="white" /></NavbarItem>
          <NavbarItem to={"/"} cls="">sectors <ShapesSolid cls="h-3 w-3 opacity-60 ml-1" fillProp="white" /></NavbarItem>
          <NavbarItem to={"/"} cls="">signed amount <SackDollarSolid cls="h-3 w-3 opacity-60 ml-1" fillProp="white" /></NavbarItem>
          <NavbarItem to={"/"} cls="">date <ClockSolid cls="h-3 w-3 opacity-60 ml-1" fillProp="white" /></NavbarItem>
        </Sidebar>
        <Table />
      </div>
    </div>
  );
}
