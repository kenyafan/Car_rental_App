import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

import "./index.css";

const FavoritesPage = lazy(() =>
  import("./pages/FavoritesPage/FavoritesPage.jsx")
);
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
