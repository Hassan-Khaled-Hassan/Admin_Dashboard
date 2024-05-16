import "./App.css";
import MyFirst from "./Component/Utilities/Navbars";
import MiniDrawer from "./Component/Utilities/MyDrawer";
import { useEffect, useState } from "react";
import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboards from "./Pages/Dashboards";
import TeamPage from "./Pages/TeamPage";
import ContactsPage from "./Pages/ContactsPage";
import InvoicePage from "./Pages/InvoicePage";
import FormPage from "./Pages/FormPage";
import CalenderPage from "./Pages/CalenderPage";
import FAQPage from "./Pages/FAQPage";
import BarChartPage from "./Pages/BarChartPage";
import PieChartPage from "./Pages/PieChartPage";
import LineChartPage from "./Pages/LineChartPage";
import GeoChartPage from './Pages/GeoChartPage';
function App() {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.className = mode === "dark" ? "dark-mode" : "";
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const Newtheme = createMuiTheme({
    palette: {
      mode: mode,
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={Newtheme}>
        <>
          <MyFirst
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            drawerWidth={drawerWidth}
            toggleMode={toggleMode}
          />
          <MiniDrawer
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            setOpen={setOpen}
          />
          <Routes>
            <Route path="/" element={<Dashboards open={open} />} />
            <Route path="/team" element={<TeamPage open={open} />} />
            <Route path="/contacts" element={<ContactsPage open={open} />} />
            <Route path="/invoices" element={<InvoicePage open={open} />} />
            <Route path="/form" element={<FormPage open={open} />} />
            <Route path="/calendar" element={<CalenderPage open={open} />} />
            <Route path="/faq" element={<FAQPage open={open} />} />
            <Route path="/bar" element={<BarChartPage open={open} />} />

            <Route path="/pie" element={<PieChartPage open={open} />} />
            <Route path="/line" element={<LineChartPage open={open} />} />
            <Route path="/geography" element={<GeoChartPage open={open} />} />
          </Routes>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
