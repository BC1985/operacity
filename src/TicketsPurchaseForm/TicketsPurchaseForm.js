import React, { useState } from "react";
import "./TicketsPurchaseForm.css";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
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
  const [boughtTickets, setBoughtTickets] = useState(false);
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

  const disabledButton = count === 0 ? true : false;

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
              disabled={isLoading}
            >
              {count > 0 ? "Added!" : "Add to cart"}
            </button>
            {count > 0 && (
              <button
                className="remove-button"
                onClick={removeClickHandler}
                disabled={isLoading}
              >
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
    setBoughtTickets(true);
  };
  const TooltipAdd = () => (
    <div className="animation-box">
      <div className="tooltip-add">Added to cart</div>
    </div>
  );

  const ThankYou = () => {
    return (
      <div className="thank-you-wrapper">
        <i className="fas fa-theater-masks" id="thank-you-logo"></i>

        <h1>Thank you!</h1>

        <p>
          <Link to="/program">Click here to return to the program</Link>
        </p>
      </div>
    );
  };
  const TooltipRemove = () => (
    <div className="animation-box">
      <div className="tooltip-remove">Removed from cart</div>
    </div>
  );
  const CartItem = () => {
    return (
      <div className="cart">
        <h2>Checkout</h2>
        <h3>Quantity: {count}</h3>
        <div className="button-div">
          <p>Total: ${count * 30}</p>
          <button
            id="place-order-btn"
            onClick={placeOrder}
            disabled={disabledButton ? true : isLoading}
          >
            {buttonText}
          </button>
        </div>
        {isLoading && <Spinner />}
      </div>
    );
  };
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
        <h2 className="inner_composer">{composer}'s</h2>
        <h1 className="inner_opera-name">{operaName}</h1>
        <p className="inner_show-date">{showDate}</p>
        <p className="inner_show-time">{showTime}</p>
      </div>
      <div style={{ marginTop: "10vh" }}>
        {!boughtTickets ? (
          <>
            <NumberOfTickets ticketType={ticketType} />
            <CartItem />
          </>
        ) : (
          <ThankYou />
        )}
      </div>
      {addButtonClick === true && <TooltipAdd />}
      {removeButtonClick === true && <TooltipRemove />}
    </div>
  );
}

export default Tickets;
