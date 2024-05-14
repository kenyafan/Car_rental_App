import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import { selectCars } from "../../redux/advertsSlice";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";

function CatalogList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {cars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default CatalogList;
