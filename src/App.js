import { useEffect, useState } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import './App.css';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3000/db.json").then(({data}) => {
      setPizzas(data.pizzas);

    })
  }, [])
  console.log(pizzas);
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>

  );
}

export default App;
