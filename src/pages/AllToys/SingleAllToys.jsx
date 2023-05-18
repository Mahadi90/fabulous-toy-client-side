import React from "react";

const SingleAllToys = ({ singleToys, index}) => {

    const {toyName, subCategory, sellerName, email, quantity, price } = singleToys;
  return (
    <tr>
      <th>{index+ 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity} Pices Avialable</td>
      <td><button className="bg-red-500 py-1 px-3 font-semibold text-white">Details</button></td>
    </tr>
  );
};

export default SingleAllToys;
