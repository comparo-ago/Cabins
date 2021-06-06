import React from 'react'
import {Link} from 'react-router-dom';

export default function CategoryButtons() {
    return (
        <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products`} className="link-text">Todas nuestras Cabañas</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/cemento`} className="link-text">Cabaña de Cemento</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/holandesa`} className="link-text">Cabaña Holandesa</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/caribenia`} className="link-text">Cabaña Caribeña</Link>
                </button>
            </div>
        </div>
    )
}
