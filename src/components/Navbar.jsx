import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
            <a href="#a">Notification</a>
          </li>
        </ul>
      </nav>
      <h3>User</h3>
    </div>
  );
}

export default Navbar;
