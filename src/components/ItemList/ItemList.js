import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";
import "./ItemsList.css";

function ItemsList({ itemsListProp }) {
  return (
    <Container className="itemslist-container">
      <Row>
        {itemsListProp.map((item) => (
          <Col>
            <Item key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemsList;
