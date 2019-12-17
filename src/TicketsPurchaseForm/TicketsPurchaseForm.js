import React, { useState } from "react";
import "./TicketsPurchaseForm.css";
import Spinner from "../Spinner/Spinner";
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
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Place order");

  const addClickHandler = () => {
    setCount(count + 1);
    setAddButtonClick(true);
    setTimeout(() => {
      setAddButtonClick(false);
    }, 2000);
    setRemoveButtonClick(false);
  };

  const removeClickHandler = () => {
    setCount(count - 1);
    setRemoveButtonClick(true);
    setTimeout(() => {
      setRemoveButtonClick(false);
    }, 2000);
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

  const checkout = () => {
    setCount(0);
    setAddButtonClick(false);
    setRemoveButtonClick(false);
  };
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

  const placeOrder = () => {
    setButtonText("Placing order...");
    setIsLoading(true);
    setTimeout(() => {
      checkout();
      setIsLoading(false);
      setButtonText("Place order");
    }, 3000);
  };
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
        <div className="button-div">
          <button id="place-order-btn" onClick={placeOrder}>
            {buttonText}
          </button>
          {isLoading && <Spinner />}
        </div>
      </div>
      {addButtonClick === true && <TooltipAdd />}
      {removeButtonClick === true && <TooltipRemove />}
    </div>
  );
}

export default Tickets;
