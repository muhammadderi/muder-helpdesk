import React from 'react';

const TicketDetail = ({ isOpen, ticketData, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="ticket-detail-modal">
      <div className="ticket-detail-content">
        <h3>Ticket Details</h3>
        <p>
          <strong>ID:</strong> {ticketData.id}
        </p>
        <p>
          <strong>Question:</strong> {ticketData.questions}
        </p>
        <p>
          <strong>Detail:</strong> {ticketData.detailquestion}
        </p>
        <p>
          <strong>Divisions:</strong> {ticketData.divisions}
        </p>
        <p>
          <strong>Status:</strong> {ticketData.status}
        </p>
        <p>
          <strong>Created:</strong> {ticketData.createdat}
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TicketDetail;
