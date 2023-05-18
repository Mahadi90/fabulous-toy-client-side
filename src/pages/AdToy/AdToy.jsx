import React from 'react';

const AdToy = () => {
    return (
        <div className='my-8'>
         <h2 className='text-3xl font-bold text-center'>Add your own Toy</h2>
            <p className='text-center text-gray-600 font-semibold'>This site provide all of car toys.You can add your own car toys</p>  
            <form className='w-full lg:w-3/4 mx-auto border p-10 rounded space-y-3 mt-4 bg-gray-200'>
              <div className='lg:flex justify-between gap-4'>
              <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered input-accent w-full" />
              <input type="text" placeholder="photo URL" name='photo' className="input input-bordered input-accent w-full mt-2 lg:mt-0" />
              </div>

              <div className='lg:flex justify-between gap-4'>
              <input type="text" placeholder="Seller name" name='sellerName' className="input input-bordered input-accent w-full" />
              <input type="email" placeholder="Seller Email" name='email' className="input input-bordered input-accent w-full mt-2 lg:mt-0" />
              </div>

              <div className='lg:flex justify-between gap-4'>
              <input type="text" placeholder="Price" name='price' className="input input-bordered input-accent w-full" />
              <input type="text" placeholder="Ratings" name='rating' className="input input-bordered input-accent w-full mt-2 lg:mt-0" />
              </div>

              <div className='lg:flex justify-between gap-4'>
              <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered input-accent w-full mt-2 lg:mt-0" />
              <select name='subCategory' className="select select-accent w-full max-w-xs">
                <option disabled selected>Select Sub category</option>
                <option>Sports Car Toys</option>
                <option>Regular Car Toys</option>
                <option>Truck</option>
                <option>Mini Fire Truck</option>
                <option>Mini Police car</option>
                </select>
              </div>

              <div className='lg:flex justify-between gap-4'>
              <input type="text" placeholder="Deatils Description" name='detail' className="input input-bordered input-accent py-12 w-full mt-2 lg:mt-0" />
              </div>
              <input type="submit" className='w-full bg-accent py-2 rounded-lg font-bold text-white' />
            </form>
        </div>
    );
};

export default AdToy;