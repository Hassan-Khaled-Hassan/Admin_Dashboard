import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, mockDataContacts } from "./conData";

const MyContact = ({ open, screenWidth }) => {
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
          rows={mockDataContacts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          // checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default MyContact;
