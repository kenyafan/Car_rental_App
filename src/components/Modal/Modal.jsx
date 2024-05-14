import s from "./Modal.module.css";

import { useCallback, useEffect } from "react";

const Modal = ({ item, closeModal }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,

    type,
    mileage,
    functionalities,
    description,
    id,
    engineSize,
    fuelConsumption,
    accessories,
    rentalConditions,
  } = item;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button onClick={closeModal} className={s.closeBtn}>
          X
        </button>
        <img className={s.img} src={img} alt={model} width="461" height="248" />
        <div className={s.top_wrapper}>
          <div className={s.title_wrapper}>
            <h3>
              {make} {model}, {year}
            </h3>
            <p>{rentalPrice}</p>
          </div>
          <p>
            {address} | Id: {id} | Year: {year} | Type: {type} | Fuel
            consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
          <p>{description}</p>
        </div>
        <div>
          <h3>Accessories and functionalities:</h3>
          <p>
            {functionalities.join(" | ")} | {accessories.join(" | ")}
          </p>
        </div>
        <div>
          <h3>Rental Conditions:</h3>
          <p>
            {rentalConditions.split("/n")} Mileage: {mileage} Price:
            {rentalPrice}
          </p>
        </div>
        <a href="tel:+380730000000" className={s.btn}>
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
