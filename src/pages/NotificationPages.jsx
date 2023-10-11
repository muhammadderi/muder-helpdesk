import React from 'react';
// import { useState } from 'react';
import Notification from '../components/Notification';
import Footer from '../components/Footer';
// import { TicketData } from '../utils/data';
import Navbar from '../components/Navbar';

function NotificationPages() {
  // const [notif, setNotif] = useState(TicketData);
  return (
    <div className="notification-page">
      <Navbar />
      <Notification />
      <Footer />
    </div>
  );
}

export default NotificationPages;
