import React from 'react';
import './Footer.css';
import logo from '../../assets/images/KusikuyLogo.png';
import {NavLink} from 'react-router-dom';

export default function Footer () {
    return(
        <footer>
            <div className="row">
                <div className="d-flex flex-row justify-content-around align-items-center footer">
                    <div className="p-2">
                        <NavLink to={`/`} className="navbar-brand">
                            <img src={logo} className="navbar-logo" width="120" height="45" alt="Kusikuy" loading="lazy"/>
                        </NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/products`} className="nav-link footer-link">Productos</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/carrito`} className="nav-link footer-link">Carrito</NavLink>
                    </div>
                    <div className="p-2">
                        <NavLink to={`/contact`} className="nav-link footer-link">Contacto</NavLink>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright">© Copyright - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}