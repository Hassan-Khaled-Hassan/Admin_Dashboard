import React from 'react'
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import MyGeoChart from './../GeoChart/MyGeoChart';
import MyPieCharts from './../PieCharts/MyPieCharts';
import MyBarChart from './../CHarts/MyBarChart';
const ThirdRow = ({ open, screenWidth }) => {
  const theme = useTheme();
  return (
    <Stack className="thirdRow" gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}pb={"15px"}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <MyPieCharts open={open} screenWidth={screenWidth} isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

        <MyBarChart open={open} screenWidth={screenWidth} isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <MyGeoChart open={open} screenWidth={screenWidth} isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default ThirdRow