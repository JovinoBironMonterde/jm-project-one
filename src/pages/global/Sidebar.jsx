import { Box, IconButton, Typography, useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import { customStyle } from "../../style/Style";
import logo from "../../image/logo.png";

import "./global.css";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Sidebar() {
  return (
    <section className="sidebar-section">
      <div className="coname">
        <Box sx={customStyle.boxcontainer}>
          <Box sx={customStyle.profileimg}>
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
          <Box style={{ marginTop: "80px" }}>
            <a
              href="/dashboard"
              style={{
                textDecoration: "none",
              }}
            >
              <IconButton sx={customStyle.iconContainer}>
                <DashboardIcon />
                <Typography sx={customStyle.itemText}>Dashboard</Typography>
              </IconButton>
            </a>

            <a
              href="/salesrep"
              style={{
                textDecoration: "none",
              }}
            >
              <IconButton sx={customStyle.iconContainer}>
                <PeopleOutlinedIcon />
                <Typography sx={customStyle.itemText}>Sales Rep</Typography>
              </IconButton>
            </a>

            <a
              href="/category"
              style={{
                textDecoration: "none",
              }}
            >
              <IconButton sx={customStyle.iconContainer}>
                <CategoryIcon />
                <Typography sx={customStyle.itemText}>Category</Typography>
              </IconButton>
            </a>
            <a
              href="/order"
              style={{
                textDecoration: "none",
              }}
            >
              <IconButton sx={customStyle.iconContainer}>
                <ShoppingCartIcon />
                <Typography sx={customStyle.itemText}>Order</Typography>
              </IconButton>
            </a>

            <a
              href="/leads"
              style={{
                textDecoration: "none",
              }}
            >
              <IconButton sx={customStyle.iconContainer}>
                <LineAxisIcon />
                <Typography sx={customStyle.itemText}>Leads</Typography>
              </IconButton>
            </a>

            <IconButton sx={customStyle.iconContainer}>
              <CalendarTodayOutlinedIcon />
              <Typography sx={customStyle.itemText}>Calendar</Typography>
            </IconButton>

            <IconButton sx={customStyle.iconContainer}>
              <BarChartOutlinedIcon />
              <Typography sx={customStyle.itemText}>Chart</Typography>
            </IconButton>

            <IconButton sx={customStyle.iconContainer}>
              <ChatIcon />
              <Typography sx={customStyle.itemText}>Chat Managment</Typography>
            </IconButton>

            <IconButton sx={customStyle.iconContainer}>
              <HelpOutlinedIcon />
              <Typography sx={customStyle.itemText}>Help</Typography>
            </IconButton>

            <IconButton sx={customStyle.iconContainer}>
              <SettingsIcon />
              <Typography sx={customStyle.itemText}>Settings</Typography>
            </IconButton>

            <IconButton sx={customStyle.iconContainer}>
              <LogoutIcon />
              <Typography sx={customStyle.itemText}>Logout</Typography>
            </IconButton>
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default Sidebar;
