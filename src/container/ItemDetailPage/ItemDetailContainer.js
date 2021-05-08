import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
/*import { getSingleProduct } from "../../services/getSingleProduct";*/
import { Spinner, Container } from "react-bootstrap";



function ItemDetailContainer() {
  const { getSingleProduct} = require('../../services/getSingleProduct');
  const { itemId,setItemId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(typeof itemId);

  useEffect(() => {
    getSingleProduct(itemId).then((item) => {
      setItem(item);
      setLoading(false);
      console.log(loading);
    });
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <Container className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
}

export default ItemDetailContainer;