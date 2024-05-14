import s from "./CarFilter.module.css";
import carsData from "../../assets/makes.json";

const CarFilter = () => {
  return (
    <div className={s.filter}>
      <label htmlFor="make" className={s.label}>
        Car brand:
        <select id="make" className={s.select}>
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
