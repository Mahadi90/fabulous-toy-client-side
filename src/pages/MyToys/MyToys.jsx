import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authproviders";
import SingleMyToys from "./SingleMyToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div className="my-8 mx-2 lg:mx-8">
      <h2 className="text-3xl font-bold text-center">My Toys</h2>
      <p className="text-center text-gray-600 font-semibold">
        All of your toys are here which are added by you.
      </p>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full mt-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            myToys.map((myToy,index) => <SingleMyToys
            key={myToy._id}
            myToy={myToy}
            index={index}
            ></SingleMyToys>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
