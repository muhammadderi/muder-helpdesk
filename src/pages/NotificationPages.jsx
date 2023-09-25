import React from 'react';
import { useState } from 'react';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TicketData } from '../utils/data';

function NotificationPages() {
  const [notif, setNotif] = useState(TicketData);
  return (
    <div className='notification-page'>
      <Navbar notif={notif} />
      <Notification notif={notif} setNotif={setNotif} />
      <Footer />
    </div>
  );
}

export default NotificationPages;
