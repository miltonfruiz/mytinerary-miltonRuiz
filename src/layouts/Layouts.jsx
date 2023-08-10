import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "../pages/Cities";

export default function Layouts() {
  return (
    <>
      <Outlet />
    </>
  );
}
