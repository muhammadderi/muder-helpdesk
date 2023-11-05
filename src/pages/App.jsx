import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/style.css";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="helpdesk-app" id={theme}>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
