import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Headers from "./../Component/Utilities/HeadersU-A";
import MyFaq from "../Component/FAQ/MyFaq";
const FAQPage = ({ open }) => {
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
        head="FAQ"
        text="Frequently Asked Questions Page"
        isbtn={false}
      />
      <MyFaq screenWidth={screenWidth} open={open} />
    </Box>
  );
};

export default FAQPage;
