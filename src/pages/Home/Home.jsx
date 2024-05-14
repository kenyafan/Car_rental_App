import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <h1>Welcome to Car Rental</h1>
      <img
        className={s.img}
        src="https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-vs-car-sharing/car-keys.jpg"
        alt="car-keys"
      />
    </div>
  );
};

export default Home;
