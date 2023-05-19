import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/Authproviders";
import SingleMyToys from "./SingleMyToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  
  useTitle('My Toys')

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  
  // console.log(users)

 const handleDeleteToy = _id => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/allToys/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
        if(data.deletedCount > 0){
            Swal.fire({
                icon: 'success',
                title: 'Done',
                text: 'Your Toy deleted successfully!',
              })
          const remaining = myToys.filter(toy => toy._id !== _id);
          setMyToys(remaining)
        }
    })
    }
  })
 
 }


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
            handleDeleteToy={handleDeleteToy}
            ></SingleMyToys>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
