import React from "react";
import holandesa from '../../assets/images/cabaniaholandesa.jpg';
import caribeña from '../../assets/images/cabaniacaribenia.jpg';
import cemento from '../../assets/images/cabaniacemento.jpg';
import cemento2 from '../../assets/images/cabaniacemento2.jpg';
import './HomePageContainer.css';
import {Link} from 'react-router-dom';

export default function HomePageContainer() {
    return(
        <div className="home-body">
            <div className="d-flex flex-row">
                <img src={holandesa} className="d-block w-25 h-26" alt="Holandesa"/>
                <img src={caribeña} className="d-block w-25 h-26" alt="caribeña"/>
                <img src={cemento2} className="d-block w-25 h-26"  alt="cemento2"/>
                <img src={cemento} className="d-block w-25 h-26"  alt="cemento"/>
            </div>
            <div className="card w-50 mx-auto home-card">
                <div className="card-body">
                    <h5 className="card-title text-center home-card-title">Bienvenidos a nuestra Pagina</h5>
                    <p className="card-text home-card-text">Bienvenid@s a Kusikuy. Un lugar donde podes hacer tu sueño realidad!! </p>
                    <p className="card-text home-card-text">Te invitamos a que descubras tu proximo hogar! </p>
                </div>
                <div className="card-body d-flex flex-row justify-content-around align-items-center">
                    <button type="button" className="btn btn-secondary">
                        <Link to={`/products`} className="home-link">Productos</Link>
                    </button>
                    <button type="button" className="btn btn-secondary">
                        <Link to={`/contact`} className="home-link">Contacto</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}