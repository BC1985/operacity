import React, { useState } from "react";
import "./TicketsPurchaseForm.css";

function Tickets(props) {
  const operaName = props.location.selectedShow[0];
  const composer = props.location.selectedShow[1];
  const showDate = props.location.selectedShow[2];
  const showTime = props.location.selectedShow[3];

  const [ticketType, setTicketType] = useState([
    {
      type: "regular",
      count: "",
      price: 30
    },
    { type: "child", count: "", price: 20 },
    {
      type: "Senior/Student",
      count: "",
      price: 20
    }
  ]);
  const onChange = (index, val) => {
    setTicketType(
      ticketType.map((ticket, i) =>
        i === index ? { ...ticket, count: val } : ticket
      )
    );
  };

  const NumberOfTickets = ({ ticketType }) => (
    <ul className="ticket-types">
      {ticketType.map((ticket, i) => (
        <li key={i}>
          <p>
            {ticket.type}- ${ticket.price}
            <input
              type="text"
              value={ticket.count}
              onChange={e => onChange(i, parseInt(e.target.value) || 0)}
            />
          </p>
        </li>
      ))}
    </ul>
  );
  const Total = ({ ticketType }) => (
    <h3>
      Total: ${ticketType.reduce((sum, i) => (sum += i.count * i.price), 0)}
    </h3>
  );

  return (
    <div className="tickets-wrapper">
      <h1 className="opera-name">{operaName}</h1>
      <h2 className="composer">{composer}</h2>
      <p className="show-date">{showDate}</p>
      <p className="show-time">{showTime}</p>
      <div className="form-container">
        <form className="ticket-price-form">
          <p>Please enter number of tickets of each type</p>
          <NumberOfTickets ticketType={ticketType} onChange={onChange} />
          <Total ticketType={ticketType} />
          <button className="tickets-btn">Purchase tickets</button>
        </form>
      </div>
    </div>
  );
}

export default Tickets;
