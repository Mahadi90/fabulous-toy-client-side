import React, { useEffect, useState } from "react";
import DiscountCard from "./DiscountCard";

const Discount = () => {

  const [discountToys, setDiscountToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/gallery`)
    .then(res => res.json())
    .then(data => {
        setDiscountToys(data)
    })
  },[])

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center">Discount Area</h2>
      <p className="text-center text-gray-600 font-semibold">
       These All Toys have up to 70% discount.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-2 lg:mx-0">
        {
            discountToys.map(discountToy => <DiscountCard
            key={discountToy._id}
            discountToy={discountToy}
            ></DiscountCard>)
        }
      </div>
    </div>
  );
};

export default Discount;
