import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const SingleAllToys = ({ singleToys, index}) => {

  


    const {toyName, subCategory, sellerName, quantity, price ,_id } = singleToys;
  return (
    <tr>
      <th>{index+ 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity} Pices Avialable</td>
      <td><Link to={`/singleToydetails/${_id}`}><button className="bg-red-500 py-1 px-3 font-semibold text-white">Details</button></Link></td>
    </tr>
  );
};

export default SingleAllToys;
