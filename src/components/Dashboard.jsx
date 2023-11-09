import React, { useState } from "react";
import { TicketData } from "../utils/data";

function Dashboard({ theme }) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const datatotalTicket = TicketData.filter(
    (totalTicket) => totalTicket.status
  );
  const totalTicket = datatotalTicket.length;

  const ticketWait = TicketData.map(
    (tickdata) => tickdata.status === "Waiting"
  ).reduce((a, b) => a + b);

  const ticketOnProgress = TicketData.map(
    (onProgress) => onProgress.status === "OnProgress"
  ).reduce((c, d) => c + d);

  const ticketDone = TicketData.map(
    (tickDone) => tickDone.status === "Done"
  ).reduce((e, f) => e + f);

  const darkMode = theme === "dark" ? { color: "#000" } : {};

  return (
    <div className="dashboard-helpdesk">
      <h2>Dashboard</h2>
      <div className="dashboard-box" style={darkMode}>
        <div className="dashboard-count">
          <p>Total Ticket</p>
          <span>{totalTicket}</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket Waiting</p>
          <span className="dashboardcount-waiting">{ticketWait}</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket On Progress</p>
          <span className="dashboardcount-progress">{ticketOnProgress}</span>
        </div>
        <div className="dashboard-count">
          <p>Ticket Done</p>
          <span className="dashboardcount-done">{ticketDone}</span>
        </div>
      </div>

      <div className="dashboard-list-ticket">
        <div className="dashboard-list-head">
          <h2>List Tickets</h2>
          <button onClick={toggleShowAll}>Show All</button>
        </div>
        <div className="dashboard-list-table">
          <table>
            <thead className="dashboard-list-table-header">
              <tr>
                <th className="id-ticket">ID Ticket</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody className="dashboard-list-table-body" style={darkMode}>
              {showAll
                ? TicketData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.questions}</td>
                      <td
                        className={
                          item.status === "Waiting"
                            ? "dashboardcount-waiting"
                            : item.status === "OnProgress"
                            ? "dashboardcount-progress"
                            : item.status === "Done"
                            ? "dashboardcount-done"
                            : ""
                        }
                      >
                        {item.status}
                      </td>
                      <td>{item.createdat}</td>
                    </tr>
                  ))
                : TicketData.slice(0, 2).map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.questions}</td>
                      <td
                        className={
                          item.status === "Waiting"
                            ? "dashboardcount-waiting"
                            : item.status === "OnProgress"
                            ? "dashboardcount-progress"
                            : item.status === "Done"
                            ? "dashboardcount-done"
                            : ""
                        }
                      >
                        {item.status}
                      </td>
                      <td>{item.createdat}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
