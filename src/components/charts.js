import { Box } from "@mui/material";
import Header from "./Header";
import BarChart from "./Barchart";

const charts = () => {
  return (
    <Box m="20px">
      <Header title="charts Chart" subtitle="Simple charts Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default charts;
