import { Component } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import './App.css';

import { connect } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

// function App() {
//   const [pizzas, setPizzas] = useState([])

//   useEffect(() => {
//     Axios.get("http://localhost:3000/db.json").then(({data}) => {
//       setPizzas(data.pizzas);
//     })
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header/>
//       <div className="content">
//         <Route exact path="/" render={() => <Home items={pizzas}/>}/>
//         <Route exact path="/cart" component={Cart}/>
//       </div>
//     </div>

//   );
// }


class App extends Component {
  componentDidMount(){
    Axios.get("http://localhost:3000/db.json").then(({data}) => {
      this.props.setPizzas(data.pizzas);
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
