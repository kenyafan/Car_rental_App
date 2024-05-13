import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { Icon } from "../../image/Icon.jsx";

const Header = () => {
  return (
    <section className={s.header}>
      <div>
        <Link to="/" className={s.logo_link}>
          <Icon size={40} id="logo" />
          <p className={s.title}>Car Rental</p>
        </Link>
      </div>
      <ul className={s.list}>
        <li className={s.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={s.link}>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className={s.link}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
