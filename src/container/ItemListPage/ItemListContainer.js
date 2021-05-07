import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemsListContainer.css";
import ItemsList from "../../components/ItemsList/ItemsList";
import { Container, Spinner } from "react-bootstrap";

const { getProducts } = require("../../services/getProducts");

export default function ItemsListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    // console.log(categoryId);
    setLoading(true);
    getProducts().then((data) => {
      !categoryId
        ? setItems(data)
        : setItems(data.filter((item) => item.categoryId == categoryId));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // console.log(categoryId);
    setLoading(true);
    getProducts().then((data) => {
      !categoryId
        ? setItems(data)
        : setItems(data.filter((item) => item.categoryId == categoryId));
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      <h3 id="greeting-message" className="title">
        {greeting} {categoryId}
      </h3>
      {loading ? (
        <Container className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <ItemsList itemsListProp={items} />
      )}
    </div>
  );
}