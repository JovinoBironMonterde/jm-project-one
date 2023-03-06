import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Sidebar() {
  return (
    <Box sx={{ display: "block", width: "20%" }}>
      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <HomeOutlinedIcon />
        <Typography>Home</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <PeopleOutlinedIcon />
        <Typography>Profile</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <ContactsOutlinedIcon />
        <Typography>Contact</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <ReceiptOutlinedIcon />
        <Typography>Receipt</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <PersonOutlinedIcon />
        <Typography>User</Typography>
      </IconButton>

      <IconButton>
        <CalendarTodayOutlinedIcon />
        <Typography>Calendar</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <HelpOutlinedIcon />
        <Typography>Help</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <BarChartOutlinedIcon />
        <Typography>Bar Chart</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <PieChartOutlinedIcon />
        <Typography>Pie Chart</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <TimelineOutlinedIcon />
        <Typography>Timeline</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <MenuOutlinedIcon />
        <Typography>Menu</Typography>
      </IconButton>

      <IconButton sx={{ width: "100%", justifyContent: "left" }}>
        <MapOutlinedIcon />
        <Typography>Map</Typography>
      </IconButton>
    </Box>
  );
}

export default Sidebar;
