import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Outlet />
    </div>
  );
}
