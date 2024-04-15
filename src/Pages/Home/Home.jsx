import Hero from "../../Components/Hero/Hero";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <Hero></Hero>
      </div>
      <div className="mt-28 mb-28">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
