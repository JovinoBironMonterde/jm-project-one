import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router";
import { Box } from "@mui/system";

function App() {
  let componet;

  switch (window.location.pathname) {
    case "/dashboard":
      componet = <Dashboard />;
      break;

    case "/about":
      componet = <About />;
      // default:
      break;
  }

  return (
    <switch>
      <Topbar />
      <Box display={"flex"}>
        <Sidebar />

        {componet}
      </Box>
    </switch>
  );
}

export default App;
