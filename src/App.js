import React from "react";
import Axios from "axios";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import './App.css';

import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    Axios.get("http://localhost:3000/db.json").then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>

  );
}

export default (App);
