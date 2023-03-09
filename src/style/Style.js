import zIndex from "@mui/material/styles/zIndex";
import { hover } from "@testing-library/user-event/dist/hover";
import Sidebar from "../pages/global/Sidebar";

export const customStyle = {
  profileimg: {
    width: "100%",
    paddingBottom: "30px",
    borderBottom: "1px solid gray",
  },
  boxcontainer: {
    width: "250px",
    height: "100vh",
    padding: "10px",
    boxShadow:
      "0 2px 8px 2px rgba(0, 0, 0, 0.2), 0 0px 4px 2px rgba(0, 0, 0, 0.19)",

    background: "#1e1e1e;",
    zIndex: "99999999",
  },
  iconContainer: {
    borderRadius: 0,
    display: "block",
    padding: 2,
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    width: "100% !important",
    justifyContent: "flex-start",
    color: "lightgray",
    marginbottom: "40px",
  },

  itemText: {
    marginLeft: 2,
  },
};
