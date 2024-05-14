import { useEffect } from "react";
import { selectCars, selectPage } from "../../redux/advertsSlice";
import { fetchCars, fetchNextCarsPage } from "../../redux/operations";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";

function CatalogList() {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const itemsPerPage = 12;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!cars.length) {
      dispatch(fetchCars());
    }
  }, [dispatch, cars.length]);

  const handleLoadMore = () => {
    dispatch(fetchNextCarsPage());
  };

  const isLastPage = cars.length === itemsPerPage * page;

  return (
    <>
      <ul className={s.list}>
        {cars.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </ul>
      {isLastPage && (
        <button onClick={handleLoadMore} className={s.btn}>
          Load more
        </button>
      )}
    </>
  );
}

export default CatalogList;
