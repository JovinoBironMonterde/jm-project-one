import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import { Routes, Route } from "react-router";

function App() {
  let componet;

  switch (window.location.pathname) {
    case "/home":
      componet = <Home />;
      break;

    case "/about":
      componet = <About />;
      // default:
      break;
  }
  return (
    <switch>
      <Sidebar />
      <Topbar />
      {componet}
    </switch>
  );
}

export default App;
