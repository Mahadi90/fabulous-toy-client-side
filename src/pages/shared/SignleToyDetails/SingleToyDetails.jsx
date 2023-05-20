import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toydeatils = useLoaderData();

  // console.log(toydeatils);
  return (
    <div className="my-8 mx-2 lg:mx-8">
      <h2 className="text-3xl font-bold text-center">
        See the Details of {toydeatils.toyName}
      </h2>
      <p className="text-center text-gray-600 font-semibold">
        There have all of information about {toydeatils.toyName}
      </p>

      <div className="hero h-full bg-base-200 mt-6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={toydeatils.photo}
            className="max-w-sm rounded-lg shadow-2xl h-60"
          />
          <div>
            <h1 className="text-4xl font-bold">{toydeatils.toyName}</h1>
            <div className="flex space-x-4 my-4">
              <p className="font-semibold text-gray-700">
                Seller Name :{" "}
                <span className="font-normal">{toydeatils.sellerName}</span>
              </p>
              <p className="font-semibold text-gray-700">
                Seller Email :{" "}
                <span className="font-normal">{toydeatils.email}</span>
              </p>
            </div>
            <div className="flex space-x-4 my-4">
              <p className="font-semibold text-gray-700">
                Available Quantity :{" "}
                <span className="font-normal">{toydeatils.quantity}</span>
              </p>
              <p className="font-semibold text-gray-700">
                Price : <span className="font-normal">{toydeatils.price}</span>
              </p>
            </div>
            <p className="font-semibold text-gray-700">
              Rating : <span className="font-normal">{toydeatils.rating}</span>
            </p>
            <p className="font-semibold text-gray-700 mt-4">
              Details : <span className="font-normal">{toydeatils.detail}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
