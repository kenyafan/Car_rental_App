import { useToggle } from "../../hooks/useToggle";
import { Icon } from "../../image/Icon";
import Modal from "../Modal/Modal";
import s from "./CatalogItem.module.css";

function CatalogItem({ item }) {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = item;

  const { openModal, closeModal, isOpen } = useToggle();
  let addressParts = address.split(", ");
  let addressWithoutStreet = addressParts.slice(1).join(", ");

  return (
    <li className={s.item}>
      <>
        <img className={s.img} src={img} alt={model} width="274" height="268" />
        <Icon id="favorite" size={24} className={s.icon_favorite} />

        <div className={s.wrapper}>
          <h3 className={s.title}>
            {make} <span className={s.model}>{model}</span>, {year}
          </h3>
          <p className={s.price}>{rentalPrice}</p>
        </div>

        <div>
          <p className={s.text}>
            {addressWithoutStreet} | {rentalCompany} | {type} | {model} |{" "}
            {mileage} | {functionalities[0]}
          </p>
          <button className={s.btn} onClick={openModal}>
            Learn more
          </button>
        </div>
      </>
      {isOpen && <Modal closeModal={closeModal} item={item} />}
    </li>
  );
}

export default CatalogItem;
