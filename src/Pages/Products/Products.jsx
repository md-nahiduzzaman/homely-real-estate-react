import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col items-center mb-12">
          <h1 className="font-bold text-3xl">Explore Our Estate Collection</h1>
          <p className="mt-6 w-[60%] text-center">
            Discover a curated selection of premier properties tailored to your
            lifestyle and preferences. From luxurious estates to charming
            cottages, find your dream home with us.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
