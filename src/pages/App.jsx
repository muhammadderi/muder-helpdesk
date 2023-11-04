import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import "../assets/css/style.css";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import { ThemeContext } from "../components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="helpdesk-app" id={theme}>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
