import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { dataTeams } from './data';

export default function TeamData({ open, screenWidth }) {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 240,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "age",
      type: "number",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: screenWidth > 600 ? 1 : "auto",
      width: screenWidth > 600 ? "auto" : 220,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="99px"
            m="0 auto"
            p="5px"
            borderRadius="3px"
            textAlign={"center"}
            display="flex"
            justifyContent="space-evenly"
            backgroundColor={
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                ? theme.palette.secondary.dark
                : "#3da58a"
            }
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "User" && <LockOpenIcon sx={{ color: "white" }} />}
            <Typography sx={{ mt: "3px", fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      sx={{
        height: 625,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: 596,
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
        <DataGrid
          rows={dataTeams}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          align="center"
        />
      </Box>
    </Box>
  );
}
