import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export function Layout() {
  return (
    <div>
      <div>
        <Navbar />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
