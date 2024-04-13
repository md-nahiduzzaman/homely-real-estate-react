import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    image,
    estate_title,
    productId,
    segment,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = product;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex gap-3 mt-6 mb-4">
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
              {facilities[0]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
              {facilities[1]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
              {facilities[1]}
            </p>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={`/product/${productId}`}>
              <button className="btn btn-primary">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
