import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";

export default function ItemListContainer({ greeting }) {
const [items, setItems] = useState([]);

const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
};

useEffect(() => {
    setTimeout(() => {
    fetch("data.json", {
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, 2000);
}, []);

return (
    <div>
    <h3 className="title">{greeting}</h3>
    <ItemList itemsListProp={items} />
    {<ItemCount initial={1} stock={5} onAdd={onAdd} /> }
    </div>
);
}
