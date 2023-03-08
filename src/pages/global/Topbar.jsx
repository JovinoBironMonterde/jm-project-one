import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./global.css";

function Topbar() {
  return (
    <section className="topbar-section">
      <div className="logo">
        <form>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
          {/* <label>
            <input type="checkbox" /> Only show products in stock
          </label> */}
        </form>
      </div>

      <ul style={{ margin: "0" }}>
        {/* <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li> */}
        <div className="icon">
          <AccountCircleIcon />
        </div>

        <InfoIcon />
      </ul>
    </section>
  );
}

export default Topbar;
