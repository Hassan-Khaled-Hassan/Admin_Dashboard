import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import FristRow from './FristRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
const Mysecond = ({ open, screenWidth }) => {
  const theme=useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
      }}
    >
     <FristRow/>
     <SecondRow open={open} screenWidth={screenWidth}/>
    <ThirdRow open={open} screenWidth={screenWidth}/>
     </Box>
  );
};

export default Mysecond;
