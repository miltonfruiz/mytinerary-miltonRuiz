import React from "react";
import "./App.css";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout />,
    children: [{ path: "/home", element: <Home /> }],
  },
  {
    path: "/cities",
    element: <Layout />,
    children: [{ path: "/cities", element: <Cities /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
