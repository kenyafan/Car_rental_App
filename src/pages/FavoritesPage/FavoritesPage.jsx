import { useSelector } from "react-redux";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { selectCars } from "../../redux/advertsSlice";
import s from "./FavoritesPage.module.css";

function FavoritesPage() {
  const cars = useSelector(selectCars);
  const favoriteCars = cars.filter((item) => item.favorite);
  return favoriteCars.length ? (
    <ul className={s.list}>
      {favoriteCars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  ) : (
    <h3 className={s.message}>No favorite cars.</h3>
  );
}

export default FavoritesPage;
