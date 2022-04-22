import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import NavbarItem from "../components/NavbarItem";
import { ReactChild, ReactNode } from "react";

export default function Home():ReactChild {
  return (
    <div>
      <Head>
        <title>Ag grid with next js</title>
        <meta name="description" content="Ag grid created with next js" />
      </Head>
      <div className="w-full h-full flex bg-[#151718] gap-1 p-1 font-primary">
        <Sidebar>
          <NavbarItem to={"/"}>country</NavbarItem>
          <NavbarItem to={"/"} cls="opacity-60">sectors</NavbarItem>
          <NavbarItem to={"/"} cls="opacity-60">signed amount</NavbarItem>
          <NavbarItem to={"/"} cls="opacity-60">date</NavbarItem>
        </Sidebar>
        <Table />
      </div>
    </div>
  );
}
