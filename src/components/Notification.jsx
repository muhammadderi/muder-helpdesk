import React, { useState } from 'react';
import { TicketData } from '../utils/data';

// const filterTicket = TicketData.filter((ticket) => ticket.status === 'Done');

function Notification() {
  const [notif, setNotif] = useState(TicketData);

  const deleteByItem = (value) => {
    setNotif((oldValues) => {
      return oldValues.filter((ticket) => ticket !== value);
    });
  };

  return (
    <div className="notifcation-helpdesk">
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>
      <div className="notification-main">
        {notif
          .filter((ticket) => ticket.status.includes('Done'))
          .map((ticket) => (
            <>
              <table className="notification-main-thead">
                <thead>
                  <th className="id">Id</th>
                  <th>Question</th>
                  <th>Detail Question</th>
                  <th className="id">Status</th>
                  <th className="id">Action</th>
                </thead>
                <tbody>
                  <td key={ticket.id}>{ticket.id}</td>
                  <td>{ticket.questions}</td>
                  <td>{ticket.detailquestion}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <button onClick={() => deleteByItem(ticket)}>X</button>
                  </td>
                </tbody>
              </table>
            </>
          ))}
      </div>
    </div>
  );
}

export default Notification;
