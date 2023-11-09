import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ticket from "../components/Ticket";
import { useTheme } from "../components/ThemeContext";

function MyTicket() {
  const { theme } = useTheme();
  return (
    <div className="my-ticket" id={theme}>
      <Navbar />
      <Ticket theme={theme} />
      <Footer />
    </div>
  );
}

export default MyTicket;
