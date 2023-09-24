import React from 'react';
import { Link } from 'react-router-dom';
import navbarUser from '../assets/img/navbaruser.jpg';
import { TicketData } from '../utils/data';
// import { TicketData } from '../utils/data';

function Navbar({ notif }) {
  const countDone = TicketData.map(
    (countNotif) => countNotif.status === 'Done'
  ).reduce((a, b) => a + b);
  return (
    <div className="navbar-helpdesk">
      <h3>
        <Link to="/app">FGS Infotama</Link>
      </h3>
      <nav className="nav-help">
        <ul>
          <li>
            <Link to="/ticket">My Tickets</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/notification">
              Notification
              {countDone > 0 ? <sup>{countDone}</sup> : ''}
            </Link>
          </li>
        </ul>
      </nav>
      <div class="dropdown">
        <button class="dropbtn">
          <img src={navbarUser} alt="fgsLogo" className="navbar-fgslogo" />
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <Link to={'/'}>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
