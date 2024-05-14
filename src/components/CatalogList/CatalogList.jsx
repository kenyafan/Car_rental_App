import {
  incrementPage,
  selectCars,
  selectPage,
} from "../../redux/advertsSlice";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";

function CatalogList() {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const itemsPerPage = 12;

  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    dispatch(incrementPage());
    dispatch(fetchCars({ page: page }));
  };

  const isLastPage = cars.length === itemsPerPage * page;

  return (
    <>
      <ul className={s.list}>
        {cars.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </ul>
      {!isLastPage && (
        <button onClick={handleLoadMoreClick} className={s.btn}>
          Load more
        </button>
      )}
    </>
  );
}

export default CatalogList;
