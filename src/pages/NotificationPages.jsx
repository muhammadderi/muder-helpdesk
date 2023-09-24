import React from 'react';
// import { useState } from 'react';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { TicketData } from '../utils/data';

function NotificationPages() {
  return (
    <div>
      <Navbar />
      <Notification />
      <Footer />
    </div>
  );
}

export default NotificationPages;
