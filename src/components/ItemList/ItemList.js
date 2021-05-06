import React from "react";
import { Container } from "@material-ui/core";
import Item from "../Item/Item";

function ItemList({ itemsListProp }) {
return (
    <Container className="itemContainer">

        {itemsListProp.map((item) => (

            <Item key={item.id} item={item} />

        ))}

    </Container>
);
}

export default ItemList;
