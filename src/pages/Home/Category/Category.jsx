import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import toys1 from '../../../assets/images/sports.jpeg'
import toys2 from '../../../assets/images/truckcar.jpeg'
import toys3 from '../../../assets/images/carreg.webp'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authproviders";
import Swal from "sweetalert2";

const Category = () => {

  const {user} = useContext(AuthContext)

  const [trucks, setTrucks] = useState([])
  const [sportCars, setSportCars] = useState([])
  const [regularCars, setRegularCars] = useState([])

  const handleAlert = () => {
    {!user ? Swal.fire({
      icon: 'warning',
      title: 'Oops Sorry',
      text: 'You have to login to see deatils!',
    }) : '' }
  }

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(() => {
    fetch('https://fabulous-toys-server.vercel.app/trucktoys')
    .then(res => res.json())
    .then(data => setTrucks(data))
  },[])

  useEffect(() => {
    fetch('https://fabulous-toys-server.vercel.app/regularcartoys')
    .then(res => res.json())
    .then(data => setRegularCars(data))
  },[])

  useEffect(() => {
    fetch('https://fabulous-toys-server.vercel.app/sportsCar')
    .then(res => res.json())
    .then(data => setSportCars(data))
  },[])

  return (
    <div data-aos="fade-right" className="my-12">
      <h2 className="text-3xl font-bold text-center">Shop By Category</h2>
      <p className="text-center text-gray-600 font-semibold">
        There are some sub categroy that you can go to visit
      </p>

      <Tabs>
        <TabList className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Tab className='w-full'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                className="w-full h-52"
                  src={toys1}
                  alt="Car toys"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sports car</h2>
              </div>
            </div>
          </Tab >
          <Tab className='w-full'><div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                className="w-full h-52"
                  src={toys2}
                  alt="Car toys"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Truck toys</h2>
              </div>
            </div></Tab>
          <Tab className='w-full'><div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                className="w-full h-52"
                  src={toys3}
                  alt="Car toys"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Regular car</h2>
              </div>
            </div></Tab>
        </TabList>

        <TabPanel>
        <h2 className="text-3xl font-bold text-center my-4 bg-red-500 rounded text-white py-4">Available toys of this category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        
            {sportCars.map(item => (
            
              <li className="flex w-full gap-4 items-center" key={item._id}>
                <img className="h-52 w-60 rounded" src={item.picture} alt={item.name} />
                <div className="ms-2 space-y-4">
                <p className="text-gray-500 font-semibold">Name: {item.name}</p>
                <p className="text-gray-500 font-semibold">Price: {item.price}</p>
                <p className="text-gray-500 font-semibold">Rating: {item.rating}</p>
                <Link to={`/singlecategory/${item._id}`}><button onClick={handleAlert} className="bg-red-500 mt-4 px-4 py-2 font-bold text-white">View details</button></Link>
                </div>
              </li>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <h2 className="text-3xl font-bold text-center my-4 bg-red-500 rounded text-white py-4">Available toys of this category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
       
        {trucks.map(item => (
        
          <li className="flex w-full gap-4 items-center" key={item._id}>
            <img className="h-52 w-60 rounded" src={item.picture} alt={item.name} />
            <div className="ms-2 space-y-4">
            <p className="text-gray-500 font-semibold">Name: {item.name}</p>
            <p className="text-gray-500 font-semibold">Price: {item.price}</p>
            <p className="text-gray-500 font-semibold">Rating: {item.rating}</p>
            <Link to={`/singlecategory3/${item._id}`}><button onClick={handleAlert} className="bg-red-500 px-4 mt-4 py-2 font-bold text-white">View details</button></Link>
            </div>
          </li>
        ))}
      </div>
        </TabPanel>
        <TabPanel>
        <h2 className="text-3xl font-bold text-center my-4 bg-red-500 rounded text-white py-4">Available toys of this category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        
            {regularCars.map(item => (
            
              <li className="flex w-full gap-4 items-center" key={item._id}>
                <img className="h-52 w-60 rounded" src={item.picture} alt={item.name} />
                <div className="ms-2 space-y-4">
                <p className="text-gray-500 font-semibold">Name: {item.name}</p>
                <p className="text-gray-500 font-semibold">Price: {item.price}</p>
                <p className="text-gray-500 font-semibold">Rating: {item.rating}</p>
                <Link to={`/singlecategory2/${item._id}`}><button onClick={handleAlert} className="bg-red-500 px-4 mt-4 py-2 font-bold text-white">View details</button></Link>
                </div>
              </li>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
