import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { Container, Spinner } from "react-bootstrap";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";

const { getProducts } = require("../../services/getProducts");

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  
  useEffect(() => {
    // console.log(categoryId);
    setLoading(true);
    getProducts().then((data) => {
      !categoryId
        ? setItems(data)
        : setItems(data.filter((item) => item.categoryId === categoryId));
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      <h3 id="greeting-message" className="title">
      <CategoryButtons/> 
      </h3>
      {loading ? (
        <Container className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </Container>
      ) : (
        <ItemList ItemListProp={items} />
      )}
    </div>

   
  );
}