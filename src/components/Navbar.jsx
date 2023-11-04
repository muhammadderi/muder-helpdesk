import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarUser from "../assets/img/login.png";
import { TicketData } from "../utils/data";

// const NotifContext = createContext(null);

function Navbar() {
  const [notif, setNotif] = useState(TicketData);

  const countDone =
    setNotif && Array.isArray(notif)
      ? notif.filter((countNotif) => countNotif.status === "Done").length
      : 0;

  const userLogin = localStorage.getItem("username");
  function dropUser() {
    localStorage.removeItem("username");
  }

  return (
    // <NotifContext.Provider value={notif}>
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
              Notifications <sup>{countDone}</sup>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="dropdown">
        <button className="dropbtn">
          <img src={navbarUser} alt="fgsLogo" className="navbar-fgslogo" />
          <p>{userLogin}</p>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to={"/"} onClick={dropUser}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
