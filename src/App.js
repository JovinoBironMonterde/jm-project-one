import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./components/Dashboard";
import Salesrep from "./pages/sales-rep/Salesrep";
import Category from "./pages/category/Category";
import Order from "./pages/order/Order";
import Leads from "./pages/leads/Leads";
// import { Routes, Route } from "react-router";
import { Box } from "@mui/system";

function App() {
  let componet;

  switch (window.location.pathname) {
    case "/dashboard":
    default:
      componet = <Dashboard />;
      break;

    case "/salesrep":
      componet = <Salesrep />;
      // default:
      break;

    case "/category":
      componet = <Category />;
      // default:
      break;
    case "/order":
      componet = <Order />;
      // default:
      break;

    case "/leads":
      componet = <Leads />;
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
