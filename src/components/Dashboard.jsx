import React from "react";
import "./dashboard.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";
// import { Chart } from "chart.js";

// import { Chart } from "chart.js/dist";

function Dashboard() {
  return (
    <section className="dasboard-section ">
      <h1>Dashboard</h1>

      <div className="dashboard-container">
        <div className="div-card">
          <div className="box">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">120</span>
              <TrendingFlatIcon />
            </div>
          </div>

          <div className="box">
            <div className="div-top">
              <span>Total of Product</span>
              <span className="icon">
                <CategoryIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">147</span>
              <TrendingFlatIcon />
            </div>
          </div>

          <div className="box">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">2342</span>
              <TrendingFlatIcon />
            </div>
          </div>

          <div className="box">
            <div className="div-top">
              <span>Total of Orders</span>
              <span className="icon">
                <SellIcon />
              </span>
            </div>
            <div className="div-bottom">
              <span id="demo">213</span>
              <TrendingFlatIcon />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="div-chart">
            <h1>Chart</h1>
          </div>

          <div className="div-box">
            <div className="box">
              <h1>Box 1</h1>
            </div>
            <div className="box">
              <h1>Box 1</h1>
            </div>
            <div className="box">
              <h1>Box 1</h1>
            </div>
            <div className="box">
              <h1>Box 1</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
