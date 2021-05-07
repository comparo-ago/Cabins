import React, { useState } from "react";
import { Button } from "@material-ui/core";
import '../ItemCount/ItemCount.css'

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
        class="unselectable"
        id="counterContainerLeft"
        onClick={decrementCounter}
        >
        -
        </a>
        <h6 id="counterContainerMiddle">{counter}</h6>
        <a 
        class="unselectable"
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
            : () => alert("Producto fuera de stock.")
        }
    >
        Add to cart
    </Button>
    </div>
);
}

export default ItemCount;
