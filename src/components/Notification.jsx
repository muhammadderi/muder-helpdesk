import React from 'react';
import Trush from '../assets/img/trush.png';

function Notification({ notif, setNotif }) {
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
                <tbody key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.questions}</td>
                  <td>{ticket.detailquestion}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <button onClick={() => deleteByItem(ticket)}>
                      <img className="trush-button" src={Trush} alt="trush" />
                    </button>
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
