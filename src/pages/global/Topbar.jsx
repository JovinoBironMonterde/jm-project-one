import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ColorModeContext, tokens, colors } from "../../Theme";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/icons-material/InputBase";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import "../../App.css";
import "./global.css";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  const theme = useTheme();

  return (
    <section className="topbar-section global-card">
      <div className="logo">
        <form style={{ position: "relative" }}>
          <SearchIcon
            sx={{
              position: "absolute",
              left: "10px",
              fontSize: "30px",
              margin: "10px 0px",
              color: "lightgrey",
            }}
          />
          <input type="text" placeholder="Search..." />
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
          <div className="div-icon">
            <AccountCircleIcon sx={{ fontSize: "35px" }} />
          </div>
          <div className="div-icon">
            <MailIcon sx={{ fontSize: "35px" }} />
          </div>
          <div className="div-icon">
            <NotificationsIcon sx={{ fontSize: "35px" }} />
          </div>
          <div className="div-icon">
            <InfoIcon sx={{ fontSize: "35px" }} />
          </div>
          <div className="div-icon">
            <MoreIcon sx={{ fontSize: "35px" }} />
          </div>
        </div>
      </ul>

      {/* <IconButton>
        <DarkModeOutlinedIcon />

        <LightModeOutlinedIcon />
      </IconButton> */}
    </section>
  );
}

export default Topbar;
