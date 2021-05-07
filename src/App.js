import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/NavBar";

import ItemsListContainer from "./container/ItemDetailPage/ItemDetailContainer";
import ItemDetailContainer from "./container/ItemDetailPage/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <CartContext.Provider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemsListContainer greeting="All our products: " />
          </Route>

          <Route path="/category/:categoryId">
            <ItemsListContainer greeting="Category: " />
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
