import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./container/ItemListPage/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailPage/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <CartContext.Provider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Todos nuestros productos: " />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/category/:categoryId">
            <ItemListContainer greeting="Category: " />
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
