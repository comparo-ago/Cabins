import React from "react";
import { Jumbotron, Container, Row, Col, Image, Badge } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
    <div>
      <div>
        <Container className="item-detail">
          <Jumbotron>
            <Row>
              <Col className="item-detail-left">
                <Image
                  className="item-detail--image"
                  src={item.pictureUrl}
                  rounded
                />
              </Col>
              <Col className="item-detail-right">
                <h2 className="item-detail--title">{item.title}</h2>
                <Badge className="item-detail--badge" pill variant="success">
                  stock
                </Badge>
                Quantity: {item.stock}
                <h3 className="item-detail--price">$USD {item.price}</h3>
                <p className="item-detail--description">{item.description}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    </div>
  );
}
