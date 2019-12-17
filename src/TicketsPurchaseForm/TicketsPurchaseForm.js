import React, { useState } from "react";
import "./TicketsPurchaseForm.css";

function Tickets(props) {
  const operaName = props.location.selectedShow[0];
  const composer = props.location.selectedShow[1];
  const showDate = props.location.selectedShow[2];
  const showTime = props.location.selectedShow[3];
  const infoContainerImage = props.location.selectedShow[4];

  const ticketType = [{ type: "Regular", count: 0, price: 30 }];
  const [count, setCount] = useState(0);
  const [addButtonClick, setAddButtonClick] = useState(false);
  const [removeButtonClick, setRemoveButtonClick] = useState(false);

  const addClickHandler = () => {
    setCount(count + 1);
    setAddButtonClick(true);
    setRemoveButtonClick(false);
  };

  const removeClickHandler = () => {
    setCount(count - 1);
    setRemoveButtonClick(true);
    setAddButtonClick(false);
  };
  const NumberOfTickets = ({ ticketType }) => (
    <div className="ticket-container">
      <h1>Get your ticket today!</h1>
      {ticketType.map((ticket, i) => (
        <div key={ticket.type}>
          <h3>
            {ticket.type}- ${ticket.price}
            <button
              onClick={addClickHandler}
              className={count > 0 ? "added-to-cart " : "ticket-btn-default"}
            >
              {count > 0 ? "Added!" : "Add to cart"}
            </button>
            {count > 0 && (
              <button className="remove-button" onClick={removeClickHandler}>
                Remove
              </button>
            )}
          </h3>
        </div>
      ))}
    </div>
  );

  const TooltipAdd = () => (
    <div className="animation-box">
      <div className="tooltip-add">Added to cart</div>
    </div>
  );
  const TooltipRemove = () => (
    <div className="animation-box">
      <div className="tooltip-remove">Removed from cart</div>
    </div>
  );
  function CartItem() {
    return (
      <div className="cart">
        <h2>Checkout</h2>
        <h3>Quantity: {count}</h3>
        <p>Total: ${count * 30}</p>
      </div>
    );
  }

  return (
    <div className="tickets-wrapper">
      <div
        className="cropped-image-container"
        style={{ backgroundImage: `url(${infoContainerImage})` }}
      >
        <div className="image-overlay"></div>
      </div>

      <div className="show-info">
        <h2 className="inner_composer">{composer}</h2>
        <h1 className="inner_opera-name">{operaName}</h1>
        <p className="inner_show-date">{showDate}</p>
        <p className="inner_show-time">{showTime}</p>
      </div>
      <div>
        <NumberOfTickets ticketType={ticketType} />
        <CartItem />
        <button className="tickets-btn">Purchase tickets</button>
      </div>
      {addButtonClick === true && <TooltipAdd />}
      {removeButtonClick === true && <TooltipRemove />}
    </div>
  );
}

export default Tickets;
