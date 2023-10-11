import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navbarUser from '../assets/img/navbaruser.jpg';
import { CounterContext } from './CounterContext';

// import { TicketData } from '../utils/data';

function Navbar() {
  // const countDone = notif
  //   .map((countNotif) => countNotif.status === 'Done')
  //   .reduce((a, b) => a + b);

  const countDone = useContext(CounterContext);
  console.log(countDone);
  // const countDone =
  //   notif && Array.isArray(notif)
  //     ? notif.filter((countNotif) => countNotif.status === 'Done').length
  //     : 0;

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
              Notification{' '}
              <sup>{countDone > 0 ? <sup>{countDone}</sup> : ''}</sup>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="dropdown">
        <button className="dropbtn">
          <img src={navbarUser} alt="fgsLogo" className="navbar-fgslogo" />
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to={'/'}>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
