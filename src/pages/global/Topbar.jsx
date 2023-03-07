import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./global.css";

function Topbar() {
  return (
    <section className="topbar-section">
      <div className="logo">
        <div className="icon">
          <AccountCircleIcon />
        </div>
        <h1>MyLogo</h1>
      </div>
      <ul>
        {/* <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li> */}

        <li>
          <InfoIcon />
        </li>
      </ul>
    </section>
  );
}

export default Topbar;
