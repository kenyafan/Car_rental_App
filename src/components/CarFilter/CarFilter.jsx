import { setFilter } from "../../redux/advertsSlice";
import { filterCars } from "../../redux/operations";
import s from "./CarFilter.module.css";
import carsData from "../../assets/makes.json";
import { useDispatch } from "react-redux";

const CarFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
    dispatch(filterCars(event.target.value));
  };

  return (
    <div className={s.filter}>
      <label htmlFor="make" className={s.label}>
        Car brand:
        <select id="make" className={s.select} onChange={handleFilterChange}>
          <option value="">All makes</option>
          {carsData.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CarFilter;
