import React, { useState } from "react";
import Trush from "../assets/img/trush.png";
import { TicketData } from "../utils/data";

function Notification({ theme }) {
  const [notif, setNotif] = useState(TicketData);

  const deleteByItem = (value) => {
    setNotif((oldValues) => {
      return oldValues.filter((ticket) => ticket !== value);
    });
  };

  return (
    <div className="notifcation-helpdesk">
      <div
        className="notification-header"
        id={`${theme === "light" ? "special-light" : "dark"}`}
      >
        <h2>Notifications</h2>
      </div>
      <div className="notification-main">
        {notif
          .filter((ticket) => ticket.status.includes("Done"))
          .map((ticket, i) => (
            <table className="notification-main-thead" id={theme} key={i}>
              <thead>
                <tr>
                  <th
                    className="id"
                    id={`${theme === "light" ? "light" : "dark"}`}
                  >
                    Id
                  </th>
                  <th id={`${theme === "light" ? "light" : "dark"}`}>
                    Question
                  </th>
                  <th id={`${theme === "light" ? "light" : "dark"}`}>
                    Detail Question
                  </th>
                  <th
                    id={`${theme === "light" ? "light" : "dark"}`}
                    className="id"
                  >
                    Status
                  </th>
                  <th
                    id={`${theme === "light" ? "light" : "dark"}`}
                    className="id"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{ticket.id}</td>
                  <td>{ticket.questions}</td>
                  <td>{ticket.detailquestion}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <button onClick={() => deleteByItem(ticket)}>
                      <img className="trush-button" src={Trush} alt="trush" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
      </div>
    </div>
  );
}

export default Notification;
