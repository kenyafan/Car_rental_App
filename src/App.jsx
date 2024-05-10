import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { refreshThunk } from "./redux/auth/operations.js";
import Layout from "./components/Layout/Layout.jsx";

import "./index.css";
import Loader from "./components/Loader/Loader.jsx";
import { selectIsRefreshing } from "./redux/auth/authSlice.js";

const HomePage = lazy(() => import("./pages/Home/Home"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} />
          <Route
            path="catalog"
            element={}
          />
          <Route
            path="favorites"
            element={}
          /> */}
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
