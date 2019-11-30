import React, { useState } from "react";
import "./TicketsPurchaseForm.css";

function Tickets(props) {
  const operaName = props.location.selectedShow[0];
  const composer = props.location.selectedShow[1];
  const showDate = props.location.selectedShow[2];
  const showTime = props.location.selectedShow[3];
  const infoContainerImage = props.location.selectedShow[4];

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
      <div
        className="cropped-image-container"
        style={{ backgroundImage: `url(${infoContainerImage})` }}
      >
        <div className="image-overlay"></div>
      </div>

      <div className="show-info">
        <h1 className="inner_opera-name">{operaName}</h1>
        <h2 className="inner_composer">{composer}</h2>
        <p className="inner_show-date">{showDate}</p>
        <p className="inner_show-time">{showTime}</p>
      </div>
      <form className="form-container">
        <p>Please enter number of tickets of each type</p>
        <NumberOfTickets ticketType={ticketType} onChange={onChange} />
        <Total ticketType={ticketType} />
        <button className="tickets-btn">Purchase tickets</button>
      </form>
    </div>
  );
}

export default Tickets;
