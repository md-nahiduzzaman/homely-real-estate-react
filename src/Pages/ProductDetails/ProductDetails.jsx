import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  useEffect(() => {
    document.title = `Homely | ${estate_title}`;
  }, []);

  const products = useLoaderData();
  const { id } = useParams();

  const product = products.find((product) => product.productId == id);

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
      <div className="container mx-auto">
        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full   dark:bg-gray-50">
          <img
            src={image}
            alt=""
            className="object-cover w-full  rounded sm:h-[500px] "
          />
          <div className="p-6 space-y-2 mb-10">
            <div className="pb-6">
              <h1 className="font-bold text-5xl mb-4">{estate_title}</h1>
              <p className="font-semibold text-5xl ">{price}</p>
            </div>

            <hr />

            <div className="pt-2 pb-2">
              <h1 className="font-bold">{segment}</h1>
            </div>
            <hr />
            <div className="pt-2 pb-2">
              <p className="text-base ">
                <span className="font-bold">Description: </span>
                {description}
              </p>
            </div>
            <hr />
            <div className="pt-2 pb-2">
              <h3 className="font-bold pb-4 ">Facilities</h3>
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
            <div className="pt-2 pb-2">
              <h3 className="font-bold pb-4">Specification</h3>
              <div className="overflow-x-auto">
                <table className="table sm:w-[50%] ">
                  <tbody className="">
                    <tr className="border-none">
                      <td className="p-0 pb-4">Status:</td>
                      <td className="p-0 pb-4 font-semibold">{status}</td>
                    </tr>

                    <tr className="border-none">
                      <td className="p-0 pb-4">Area:</td>
                      <td className="p-0 pb-4 font-semibold">{area}</td>
                    </tr>

                    <tr className="border-none">
                      <td className="p-0 pb-4">Location:</td>
                      <td className="p-0 pb-4 font-semibold">{location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
