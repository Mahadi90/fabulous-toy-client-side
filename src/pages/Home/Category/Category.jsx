import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCategoryDeatils from "./SingleCategoryDeatils";
const Category = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);



  

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center">Shop By Category</h2>
      <p className="text-center text-gray-600 font-semibold">
        There are some sub categroy that you can go to visit
      </p>

      <Tabs className="my-8">
        <TabList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Tab key={category._id}>
              <div className="card w-full h-52 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={category.img} alt="Sports Car" />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>
              </div>
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
        <TabPanel key={index}>
          <h2 className="text-3xl font-bold text-center my-4 bg-red-500 rounded text-white py-4">{category.name}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
            {category.items.map((item, itemIndex) => (
            
              <li className="flex w-full gap-4 items-center" key={itemIndex}>
                <img className="h-52 w-60 rounded" src={item.image_url} alt={item.title} />
                <div className="ms-2 space-y-4">
                <p className="text-gray-500 font-semibold">Name: {item.title}</p>
                <p className="text-gray-500 font-semibold">Price: ${item.price}</p>
                <p className="text-gray-500 font-semibold">Rating: {item.rating}</p>
                <button className="bg-red-500 px-4 py-2 text-white font-bold"><Link to='/singlecategory'>View Details</Link></button>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
      ))}
      </Tabs>

      {
        categories.map(category => {
          category.items.map(item => <SingleCategoryDeatils
          key={item.id}
          item={item}
          ></SingleCategoryDeatils>)
        })
      }
    </div>
  );
};

export default Category;


