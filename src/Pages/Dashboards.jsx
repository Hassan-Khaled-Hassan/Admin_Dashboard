import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Mysecond from "./../Component/Home/Mysecond";
import Headers from './../Component/Utilities/HeadersU-A';
const Dashboards = ({ open }) => {
  const drawerWidth = 240;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      className="dashboard"
      width={`${
        open
          ? screenWidth > 600
            ? `calc(100% - ${drawerWidth}px)`
            : "100%"
          : "100%"
      }`}
      component={"main"}
      sx={{
        display: "block",
        ml: screenWidth < 600 ? "auto" : open ? `${drawerWidth}px` : 0,
        mt: "30px",
      }}
    >
      <Headers
        screenWidth={screenWidth}
        open={open}
        head="DASHBOARD"
        text="Welcome to your dashboard"
        isbtn={true}
      />
      <Mysecond open={open} screenWidth={screenWidth} />
    </Box>
  );
};

export default Dashboards;






