import React from "react";

import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import './App.css';

import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();



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
