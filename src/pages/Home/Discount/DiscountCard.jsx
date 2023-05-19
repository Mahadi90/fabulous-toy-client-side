import React from 'react';

const DiscountCard = ({discountToy}) => {

   const {title, image_url} = discountToy;

    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img className='h-64 rounded w-full' src={image_url}alt="toy" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>This toy has 70% discount for you</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DiscountCard;