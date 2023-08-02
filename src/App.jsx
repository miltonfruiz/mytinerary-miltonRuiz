import React from "react";
import Layouts from "./layouts/Layouts";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layouts>
        <Home />
      </Layouts>
    </>
  );
}

export default App;
