import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleMyToys = ({myToy, index, handleDeleteToy}) => {
    const {toyName, subCategory, sellerName, email, quantity, price, _id } = myToy; 
    // console.log(_id)   
    

    return (
        <tr>
      <th>{index+ 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity} Pices</td>
      <td>{email}</td>
      <td><Link to={`/updateToy/${_id}`}><button className=" p-2 font-semibold text-white"><FaEdit className='w-6 h-6 text-green-500'></FaEdit></button></Link>
      <button onClick={() => handleDeleteToy(_id)} className="p-2 font-semibold text-white"><FaTrashAlt className='w-6 h-6 text-red-500'></FaTrashAlt></button></td>
    </tr>
    );
};

export default SingleMyToys;