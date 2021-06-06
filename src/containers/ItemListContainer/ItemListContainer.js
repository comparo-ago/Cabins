import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';


const { getPosts } = require('../../services/postService');

export default function ItemListContainer({name, greeting}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(res))
    },[])

    return(
        <div className="product-body">
            <div className="header-greeting">
                <p className="header-text">{greeting}</p>
            </div>
            <div>
                <CategoryButtons />
            </div>
            <div>
                <ItemList dataInput={data}/>
            </div>
        </div>
    )
}