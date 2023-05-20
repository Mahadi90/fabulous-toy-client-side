
import { useLoaderData } from "react-router-dom";


const SingleCategoryDeatils = () => {

 const data = useLoaderData()
//  console.log(data)
  return (
    <div className="my-8 mx-2 lg:mx-8">
    <h2 className="text-3xl font-bold text-center">
      See the Details of {data.name}
    </h2>
    <p className="text-center text-gray-600 font-semibold">
      There have all of information about {data.name}
    </p>

    <div className="hero h-full bg-base-200 mt-6">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={data.picture}
          className="max-w-sm rounded-lg shadow-2xl h-60"
        />
        <div>
          <h1 className="text-4xl font-bold">{data.name}</h1>
       
          <div className="flex space-x-4 my-4">
          <p className="font-semibold text-gray-700">
            Rating : <span className="font-normal">{data.rating}</span>
          </p>
            <p className="font-semibold text-gray-700">
              Price : <span className="font-normal">{data.price}</span>
            </p>
          </div>
          <p className="font-semibold text-gray-700">
              Details : <span className="font-normal">{data.description}</span>
            </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleCategoryDeatils;
