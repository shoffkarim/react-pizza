const InitialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = InitialState, action) => {
  if(action.type === 'SET_PIZZAS'){
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    }
  }
  return state;
};

export default pizzas