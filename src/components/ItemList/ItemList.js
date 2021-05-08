import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ ItemListProp }) {
  console.log(ItemListProp);
  return (
    <Container className="ItemList-container">
      <Row>
        {ItemListProp.map((item) => (
          <Col>
            <Item key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
