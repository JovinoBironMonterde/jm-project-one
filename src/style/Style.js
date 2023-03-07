import { hover } from "@testing-library/user-event/dist/hover";
import Sidebar from "../pages/global/Sidebar";

export const customStyle = {
  profileimg: {
    width: "100px",
    height: "100px",
    margin: "10% auto",
    borderRadius: 80,
    marginbottom: "230px",
  },
  boxcontainer: {
    width: "250px",
    height: "100vh",
    padding: "10px",
    boxShadow:
      "0 2px 8px 2px rgba(0, 0, 0, 0.2), 0 0px 4px 2px rgba(0, 0, 0, 0.19)",
    position: "fixed",
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
    color: "white",
    marginbottom: "40px",
  },

  itemText: {
    marginLeft: 2,
  },
};
