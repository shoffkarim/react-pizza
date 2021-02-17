import Axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = () => dispatch => {
  dispatch(setLoaded(false));
  Axios.get("http://localhost:3001/pizzas").then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});