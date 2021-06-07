import React, {useContext} from "react";
import Cart from "../Cart/Cart";
import { CartContext } from '../../context/cartContext';

export default function CartList() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);

    const cartOrder = ["Cabaña de Cemento", "Cabaña Holandesa", "Cabaña Caribeña"]
    const sortedCart = Object.keys(cart).map(key => cart[key]);
    sortedCart.sort((a, b) => cartOrder.indexOf(a.categoria) - cartOrder.indexOf(b.categoria));

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Categoría</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCart.map(item => (
                        <Cart key={item.id} itemSale={item} />
                    ))}
                </tbody>
                <tfoot>
                    { cart.length === 0 ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="5">Carrito vacío </th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <td></td>
                            <td></td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">u$d <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
        </div>
        );
    }