import CarFilter from "../../components/CarFilter/CarFilter";
import CatalogList from "../../components/CatalogList/CatalogList";

function CatalogPage() {
  return (
    <div className="container">
      <CarFilter />
      <CatalogList />
    </div>
  );
}

export default CatalogPage;
