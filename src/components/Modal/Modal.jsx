import s from "./Modal.module.css";
import { Icon } from "../../image/Icon.jsx";

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

  let addressParts = address.split(", ");
  let addressWithoutStreet = addressParts.slice(1).join(", ");

  const rentalConditionsArray = rentalConditions.split("\n");
  const conditionAge = rentalConditionsArray[0];
  const conditionLicense = rentalConditionsArray[1];
  const conditionRequired = rentalConditionsArray[2];

  const ageMatch = conditionAge.match(/\d+/);
  const age = ageMatch ? ageMatch[0] : null;

  const formattedMileage = new Intl.NumberFormat("en-US").format(mileage);

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
      <div className={s.modal}>
        <button onClick={closeModal} className={s.closeBtn}>
          <Icon id="close" size={20} className={s.closeIcon} />
        </button>
        <img className={s.img} src={img} alt={model} width="461" height="248" />
        <div className={s.info_wrapper}>
          <div className={s.title_wrapper}>
            <h3 className={s.title}>
              {make} <span className={s.model}>{model}</span>, {year}
            </h3>
          </div>
          <p className={s.text}>
            {addressWithoutStreet} | Id: {id} | Year: {year} | Type: {type} |
            Fuel consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.accessories_wrapper}>
          <h3 className={s.title_accessories}>
            Accessories and functionalities:
          </h3>
          <p className={s.text_accessories}>
            {functionalities.join(" | ")} <br></br> {accessories.join(" | ")}
          </p>
        </div>
        <div className={s.conditions_wrapper}>
          <h3 className={s.title_accessories}>Rental Conditions:</h3>
          <div className={s.conditions_inner}>
            <div className={s.conditions_flex}>
              <p>
                Minimum age: <span className={s.age}>{age}</span>
                {conditionLicense}
              </p>
            </div>
            <div className={s.conditions_flex}>
              <p>{conditionRequired}</p>
              <p>
                Mileage:<span>{formattedMileage}</span>
              </p>
              <p>
                Price:<span>{rentalPrice}</span>
              </p>
            </div>
          </div>
        </div>
        <a href="tel:+380730000000" className={s.btn}>
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
