import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateToy = () => {
    const id = useParams()
    // console.log(id)

    const handleUpdateToy = event => {
        event.preventDefault()

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        
      const updateInfo = { price, quantity, detail}
      console.log(updateInfo)
      fetch(`http://localhost:5000/allToys/${id}`, {
        method : 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updateInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
    return (
        <div className='my-8'>
        <h2 className='text-3xl font-bold text-center'>Update Your Toy</h2>
           <p className='text-center text-gray-600 font-semibold'>Update price,Available quantity and details anything you need to change.</p>  
           <form onSubmit={handleUpdateToy}  className='w-full lg:w-3/4 mx-auto border p-10 rounded-lg space-y-3 mt-4 bg-gray-200'>


             <div className='lg:flex justify-between gap-4'>
             <input type="text" placeholder="Price" name='price' className="input input-bordered input-accent w-full" />
             <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered input-accent w-full mt-2 lg:mt-0" />
             </div>

         

             <div className='lg:flex justify-between gap-4'>
             <input type="text" placeholder="Details Description" name='detail' className="input input-bordered input-accent py-12 w-full mt-2 lg:mt-0" />
             </div>
             <input type="submit" className='w-full bg-accent py-2 rounded-lg font-bold text-white' />
           </form>
       </div>
    );
};

export default UpdateToy;