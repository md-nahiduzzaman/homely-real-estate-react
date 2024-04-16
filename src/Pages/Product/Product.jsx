import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";

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
    <>
      <div className="max-w-sm w-96 mx-auto group dark:bg-gray-50 border rounded p-6">
        <div className="relative">
          <div className="absolute top-2 left-2 rounded">
            <p className="py-2 px-4 bg-green-500 rounded font-bold uppercase">
              {status}
            </p>
          </div>
          <img
            role="presentation"
            className="object-cover w-full h-44 dark:bg-gray-500 rounded"
            src={image}
          />
        </div>

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold ">{estate_title}</h3>

          <hr />
          <div className="font-semibold">
            <p className="flex gap-2 items-center text-2xl">
              <AiFillDollarCircle />
              <span>{price}</span>
            </p>
          </div>
          <hr />
          <div>
            <h3 className="font-semibold">Facilities</h3>
            <p>
              #<span>{facilities[0]}</span>
            </p>
            <p>
              #<span>{facilities[1]}</span>
            </p>
            <p>
              #<span>{facilities[2]}</span>
            </p>
          </div>
          <hr />
          <div>
            <Link to={`/product/${productId}`}>
              <button className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img src={image} alt="Shoes" className="rounded-xl" />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{estate_title}</h2>
    //       <div className="flex gap-3 mt-6 mb-4">
    //         <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
    //           {facilities[0]}
    //         </p>
    //         <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
    //           {facilities[1]}
    //         </p>
    //         <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium text-xs">
    //           {facilities[1]}
    //         </p>
    //       </div>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions">
    //         <Link to={`/product/${productId}`}>
    //           <button className="btn btn-primary">View Property</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
