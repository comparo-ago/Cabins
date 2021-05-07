import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

export default function ItemListContainer({ greeting }) {
const [items, setItems] = useState([]);

useEffect(() => {
    setTimeout(() => {
    fetch('https://github.com/comparo-ago/Cabins/blob/main/public/data.json', {
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
    </div>
);
}
