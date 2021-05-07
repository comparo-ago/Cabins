import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import "./item.css";

function Item({ item }) {
  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
    <Card className="item-container" style={{ width: "18rem" }}>
      <Link to={`/item/${item.id}`}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title className="item-container--title">
            {item.title}
          </Card.Title>
          <Card.Text className="item-container--price">
            USD$ {item.price}
          </Card.Text>
          {/* <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> */}
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Item;