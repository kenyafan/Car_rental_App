import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={s.content_wrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
