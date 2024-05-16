import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Chip, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  GroupOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { NavLink, useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;

var array1 = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HomeOutlined />,
    link: "/",
  },
  {
    id: 2,
    name: "Manage Team",
    icon: <GroupOutlined />,
    link: "/team",
  },
  {
    id: 3,
    name: "Contacts Information",
    icon: <ContactsOutlined />,
    link: "/contacts",
  },
  {
    id: 4,
    name: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    link: "/invoices",
  },
];
var array2 = [
  {
    id: 1,
    name: "Profile Form",
    icon: <PersonOutlinedIcon />,
    link: "/form",
  },
  {
    id: 2,
    name: "Calender",
    icon: <CalendarTodayOutlined />,
    link: "/calendar",
  },
  {
    id: 3,
    name: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    link: "/faq",
  },
];
var array3 = [
  {
    id: 1,
    name: "Bar Chart",
    icon: <BarChartOutlined />,
    link: "/bar",
  },
  {
    id: 2,
    name: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    link: "/pie",
  },
  {
    id: 3,
    name: "Line Chart",
    icon: <TimelineOutlined />,
    link: "/line",
  },
  {
    id: 4,
    name: "Geography",
    icon: <MapOutlined />,
    link: "/geography",
  },
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer({ handleDrawerOpen, open, setOpen }) {
  const theme = useTheme();
  const location = useLocation();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const [variant, setVariant] = useState(isXs ? "temporary " : "permanent");

  useEffect(() => {
    setVariant(isXs ? "temporary" : "permanent");
  }, [isXs]);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />
      <Drawer
        variant={variant}
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: false }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ marginRight: "15px" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Avatar
            sx={{
              mx: open ? "auto" : "5px",
              my: 1,
              width: open ? 88 : 50,
              height: open ? 88 : 50,
              border: "2px solid grey",
            }}
            alt="Remy Sharp"
            src="https://iili.io/JGbBCox.jpg"
          />
          <Typography align="center" sx={{ fontSize: open ? "17px" : "0px" }}>
            Layla Ali <Chip label="Primum" color="primary" />
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: open ? "17px" : "0px",
              color: theme.palette.info.main,
            }}
          >
            Admin
          </Typography>
          <Divider />
          <List>
            {array1.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.link
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {array2.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.link
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {array3.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={NavLink}
                  to={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.link
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0, fontWeight: "500" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
