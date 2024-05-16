import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Headers from "./../Component/Utilities/HeadersU-A";
import MyInvoices from "./../Component/InVoices/MyInvoices";

const InvoicePage = ({ open }) => {
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
        head="INVOICES"
        text="List of Invoice Balances"
        isbtn={false}
      />
      <MyInvoices open={open} screenWidth={screenWidth} />
    </Box>
  );
};

export default InvoicePage;
