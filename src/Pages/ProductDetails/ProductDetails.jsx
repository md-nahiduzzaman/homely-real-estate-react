import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
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
    <div className="">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-5xl mb-4">{estate_title}</h1>
          <p className="font-medium text-xl">{price}</p>
        </div>
        <hr className="mt-6 mb-4" />

        <div>
          <p className="text-base mb-6">{description}</p>
          <div className="flex gap-6 font-bold items-center ">
            <h1>Tag</h1>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              {facilities[0]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              {facilities[1]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              {facilities[2]}
            </p>
          </div>
          <hr className="mt-6 mb-6" />
          <div>
            <div className="overflow-x-auto">
              <table className="table w-[50%] ">
                <tbody className="">
                  {/* row 1 */}
                  <tr className="border-none pb-6">
                    <td className="p-0 pb-4">Segment:</td>
                    <td className="p-0 pb-4 font-semibold">{segment}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-none">
                    <td className="p-0 pb-4">Status:</td>
                    <td className="p-0 pb-4 font-semibold">{status}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="border-none">
                    <td className="p-0 pb-4">Area:</td>
                    <td className="p-0 pb-4 font-semibold">{area}</td>
                  </tr>
                  {/* row 4 */}
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
  );
};

export default ProductDetails;
