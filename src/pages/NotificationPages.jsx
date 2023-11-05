import React from "react";
// import { useState } from 'react';
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../components/ThemeContext";

function NotificationPages() {
  // const [notif, setNotif] = useState(TicketData);
  const { theme } = useTheme();
  return (
    <div className="notification-page" id={theme}>
      <Navbar />
      <Notification theme={theme} />
      <Footer />
    </div>
  );
}

export default NotificationPages;
