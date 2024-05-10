import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { Icon } from "../../img/Icon";

const Header = () => {
  return (
    <section className={s.header}>
      <ul>
        <li>
          <Link to="/">
            <Icon size={24} id="logo" />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
