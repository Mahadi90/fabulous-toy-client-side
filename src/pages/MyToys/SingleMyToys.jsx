import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const SingleMyToys = ({myToy, index}) => {

    const {toyName, subCategory, sellerName, email, quantity, price } = myToy;    
    return (
        <tr>
      <th>{index+ 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity} Pices</td>
      <td>{email}</td>
      <td><button className=" p-2 font-semibold text-white"><FaEdit className='w-6 h-6 text-green-500'></FaEdit></button>
      <button className="p-2 font-semibold text-white"><FaTrashAlt className='w-6 h-6 text-red-500'></FaTrashAlt></button></td>
    </tr>
    );
};

export default SingleMyToys;