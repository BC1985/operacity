import React, { useState } from "react";
import "./TicketsPurchaseForm.css";

function Tickets(props) {
  // commented so no errors show on refresh
  // const operaName = props.location.selectedShow[0];
  // const composer = props.location.selectedShow[1];
  // const showDate = props.location.selectedShow[2];
  // const showTime = props.location.selectedShow[3];
  // const infoContainerImage = props.location.selectedShow[4];

  const [ticketType, setTicketType] = useState([
    { type: "Regular", count: 0, price: 30 },
    { type: "Child", count: 0, price: 20 },
    { type: "Senior", count: 0, price: 20 }
  ]);
  const buttonStyle = {
    padding: "10px",
    background: "lightGray",
    margin: "5px",
    width: "150px"
  };

  const increment = () => {
    /*  Need logic for setTicketType that applies only to the "count" property 
   associated with the button that was cliked */
  };
  const decrement = () => {
    /*  Need logic for setTicketType that applies only to the "count" property 
   associated with the button that was cliked */
  };

  const TicketTypes = ({ ticketType }) => (
    <ul className="ticket-types">
      {ticketType.map((ticket, i) => (
        <li key={i}>
          {ticket.type}- ${ticket.price}
        </li>
      ))}
    </ul>
  );
  const NumberOfTickets = ({ ticketType }) => (
    <div className="tickets-quantity">
      {ticketType.map((ticket, i) => (
        <div key={i}>
          <h3>{ticket.type} </h3>
          <button onClick={increment} style={buttonStyle}>
            +
          </button>
          <button onClick={decrement} style={buttonStyle}>
            -
          </button>
          <h3>{ticketType[i].count}</h3>
        </div>
      ))}
    </div>
  );
  return (
    <div className="tickets-wrapper">
      <div
        className="cropped-image-container"
        // style={{ backgroundImage: `url(${infoContainerImage})` }}
      >
        <div className="image-overlay"></div>
      </div>

      <div className="show-info">
        <h2 className="inner_composer">Beethoven's</h2>
        <h1 className="inner_opera-name">Fidelio</h1>
        <p className="inner_show-date">December 25</p>
        <p className="inner_show-time">8pm</p>
      </div>
      <form className="form-container">
        <TicketTypes ticketType={ticketType} />
        <NumberOfTickets ticketType={ticketType} />
        <button className="tickets-btn">Purchase tickets</button>
      </form>
    </div>
  );
}

export default Tickets;
