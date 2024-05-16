import { useTheme } from '@mui/material';
import React from 'react'
import { data1, data2, data3, data4 } from "./data";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TrafficIcon from "@mui/icons-material/Traffic";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import MyCard from "./MyCard";
import { Email } from "@mui/icons-material";
import { Stack } from "@mui/material";
const FristRow = () => {
     const theme = useTheme();
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <MyCard
        icon={
          <Email
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <MyCard
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />

      <MyCard
        icon={
          <PersonAddAlt1Icon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <MyCard
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
}

export default FristRow