import React from "react";
import InfoIcon from "@mui/icons-material/Info";

function Topbar() {
  return (
    <div className="conatiner">
      <div className="logo">
        <h1>MyLogo</h1>
      </div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">Product</a>
        </li>
        <li>
          <InfoIcon />
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
