import React from "react";
import "./dashboard.css";
import "../App.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";
import charts from "./charts";
import BarChart from "./Barchart";

// import { Chart } from "chart.js";

// import { Chart } from "chart.js/dist";

function Dashboard() {
  return (
    <section className="dasboard-section ">
      <h1>Dashboard</h1>

      <div className="dashboard-container">
        <div className="div-card">
          <div className="box global-card">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">23</span>
              <span className="icon">
                <TrendingFlatIcon className="icons" />
              </span>
            </div>
          </div>

          <div className="box global-card">
            <div className="div-top">
              <span>Total of Product</span>
              <span className="icon">
                <CategoryIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">2321</span>
              <span className="icon">
                <TrendingFlatIcon className="icons" />
              </span>
            </div>
          </div>

          <div className="box global-card">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">2132</span>
              <span className="icon">
                <TrendingFlatIcon className="icons" />
              </span>
            </div>
          </div>

          <div className="box global-card">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">565</span>
              <span className="icon">
                <TrendingFlatIcon className="icons" />
              </span>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="div-chart-container">
            <h1> Income Overview</h1>
            <div className="div-chart-box global-card">
              <BarChart />
            </div>
          </div>

          <div className="div-box  ">
            <h1>Page Views by Page Title</h1>
            <div className="box global-card">
              <div>
                <span className="title">Admin Home</span>
                <span className="price">775</span>
              </div>
              <div>
                <span className="title">Demo/adminindex.html</span>
                <span className="price">31.74%</span>
              </div>
            </div>
            <div className="box global-card">
              <div>
                <span className="title">Admin Home</span>
                <span className="price">775</span>
              </div>
              <div>
                <span className="title">Demo/adminindex.html</span>
                <span className="price">31.74%</span>
              </div>
            </div>
            <div className="box global-card">
              <div>
                <span className="title">Admin Home</span>
                <span className="price">775</span>
              </div>
              <div>
                <span className="title">Demo/adminindex.html</span>
                <span className="price">31.74%</span>
              </div>
            </div>
            <div className="box global-card">
              <div>
                <span className="title">Admin Home</span>
                <span className="price">775</span>
              </div>
              <div>
                <span className="title">Demo/adminindex.html</span>
                <span className="price">31.74%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
