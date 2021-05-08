import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const incrementCounter = () => {
    if (counter <= stock) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <div id="counterContainer">
        <a
          className="unselectable"
          id="counterContainerLeft"
          onClick={decrementCounter}
        >
          -
        </a>
        <h6 id="counterContainerMiddle">{counter}</h6>
        <a
          className="unselectable"
          id="counterContainerRight"
          onClick={counter < stock ? incrementCounter : null}
        >
          +
        </a>
      </div>
      <Button
        id="addToCartBtn"
        variant="primary"
        onClick={
          counter <= stock
            ? () => onAdd(counter)
            : () => alert("Producto out of stock. Please try a lower number.")
        }
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ItemCount;
