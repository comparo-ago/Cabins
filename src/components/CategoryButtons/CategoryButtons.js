import React from 'react'
import {Link} from 'react-router-dom';

export default function CategoryButtons() {
    return (
        <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products`} className="link-text">Todos</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/Cabañas madera`} className="link-text">Madera</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/cabañas pre ensambladas`} className="link-text">Pre-ensambladas</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/Cabañas de Hormigon`} className="link-text">Hormigon</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/cabañas holandesas`} className="link-text">Holandesas</Link>
                </button>
                
            </div>
        </div>
    )
}
