import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "../../redux/adverts/operations";
import { selectCars } from "../../redux/adverts/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";

function CatalogList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  console.log(cars);
  useEffect(() => {
    dispatch(fetchAllCars());
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
