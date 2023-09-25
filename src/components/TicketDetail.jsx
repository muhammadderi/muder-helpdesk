// In TicketDetail.js
import React, { useEffect, useState } from 'react';
import { TicketData } from '../utils/data'; // Import your data source
import { useParams } from 'react-router-dom';

function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Fetch ticket details based on the ID
    const selectedTicket = TicketData.find((item) => item.id === id);

    if (selectedTicket) {
      setTicket(selectedTicket);
    }
  }, [id]);

  return (
    <div className="ticket-detail">
      <h2>Ticket Details</h2>
      {ticket ? (
        <div>
          <strong>ID:</strong> {ticket.id}
          {/* Display other ticket details here */}
        </div>
      ) : (
        <p>Ticket not found.</p>
      )}
    </div>
  );
}

export default TicketDetail;
