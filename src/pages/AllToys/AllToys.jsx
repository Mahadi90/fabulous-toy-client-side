import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleAllToys from "./SingleAllToys";

const AllToys = () => {

   const allToys = useLoaderData()
//    console.log(allToys)

  return (
    <div className="my-8 mx-2 lg:mx-8">
      <h2 className="text-3xl font-bold text-center">All Toys Are Here</h2>
      <p className="text-center text-gray-600 font-semibold">
        You can choose any kinds of toys and buy anything.
      </p>
      
      <div className="flex justify-center my-6">
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      <input type="submit" value='Search'  className="rounded-lg bg-indigo-500 px-10 ms-2 font-semibold text-white cursor-pointer"/>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantityy</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
           {
            allToys.map((singleToys, index) => <SingleAllToys
            key={singleToys._id}
            singleToys = {singleToys}
            index={index}
            ></SingleAllToys>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

