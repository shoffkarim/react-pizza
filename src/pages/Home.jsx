import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from "../components";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
    if(!items.length){
      dispatch(fetchPizzas());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
        ? items.map((obj) => <PizzaBlock key={obj.id}  isLoading={true} {...obj} />)
        : Array(12).fill(<PizzaLoadingBlock/>)
        }
      </div>
    </div>
  );
}

export default Home;
