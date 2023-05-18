import React from "react";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";


const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[110vh] lg:h-[90vh]  mt-2 ">
        {/* slider-1 */}
        <div id="item1" className="carousel-item w-full h-full relative">
          <img src={slider1} className="w-full rounded-xl" />
          <div className="absolute h-full lg:pt-24 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(26, 26, 26, 0)] text-white p-4">
            <div className="w-1/2 h-full">
            <h3 className="text-2xl font-bold text-red-500">Looking for car toys? This is the right place</h3>
          <h1 className="text-4xl font-bold my-2">Choose your favourite car <br /> Toys for our site</h1>
          <p className="text-gray-200">Toy cars can be used for all kinds of play: sensory play, learning, pretend play and outdoor time! So the next time your children get out their buckets of toy cars, roads, train tracks and vehicles of all sizes, shapes and colors, let these photos and ideas be an inspiration for your children!</p>
          <div className="mt-6 flex">
          <input type="text" className="rounded-full py-2 px-4"/>
          <input type="button" value="Search" className=" top-0 right-0 bg-red-500 px-8 py-2 rounded-full ms-2"/>
            </div>
          </div>
         </div>
        </div>

        {/* slider-2 */}
        <div id="item2" className="carousel-item w-full relative">
          <img src={slider2} className="w-full rounded-xl" />
          <div className="absolute h-full lg:pt-24 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(26, 26, 26, 0)] text-white p-4">
            <div className="w-1/2 h-full">
            <h3 className="text-2xl font-bold text-red-500">Looking for car toys? This is the right place</h3>
          <h1 className="text-4xl font-bold my-2">Choose your favourite car <br /> Toys for our site</h1>
          <p className="text-gray-200">Toy cars can be used for all kinds of play: sensory play, learning, pretend play and outdoor time! So the next time your children get out their buckets of toy cars, roads, train tracks and vehicles of all sizes, shapes and colors, let these photos and ideas be an inspiration for your children!</p>
          <div className="mt-6 flex">
          <input type="text" className="rounded-full py-2 px-4"/>
          <input type="button" value="Search" className=" top-0 right-0 bg-red-500 px-8 py-2 rounded-full ms-2"/>
            </div>
          </div>
         </div>
        </div>

        {/* slider-3 */}
        <div id="item3" className="carousel-item w-full relative">
          <img src={slider3} className="w-full rounded-xl" />
          <div className="absolute h-full lg:pt-24 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(26, 26, 26, 0)] text-white p-4">
            <div className="w-1/2 h-full">
            <h3 className="text-2xl font-bold text-red-500">Looking for car toys? This is the right place</h3>
          <h1 className="text-4xl font-bold my-2">Choose your favourite car <br /> Toys for our site</h1>
          <p className="text-gray-200">Toy cars can be used for all kinds of play: sensory play, learning, pretend play and outdoor time! So the next time your children get out their buckets of toy cars, roads, train tracks and vehicles of all sizes, shapes and colors, let these photos and ideas be an inspiration for your children!</p>
          <div className="mt-6 flex">
          <input type="text" className="rounded-full py-2 px-4"/>
          <input type="button" value="Search" className=" top-0 right-0 bg-red-500 px-8 py-2 rounded-full ms-2"/>
            </div>
          </div>
         </div>
        </div>
        {/* slider-4 */}
        <div id="item4" className="carousel-item w-full relative">
          <img src={slider4} className="w-full rounded-xl" />
          <div className="absolute h-full lg:pt-24 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(26, 26, 26, 0)] text-white p-4">
            <div className="w-1/2 h-full">
            <h3 className="text-2xl font-bold text-red-500">Looking for car toys? This is the right place</h3>
          <h1 className="text-4xl font-bold my-2">Choose your favourite car <br /> Toys for our site</h1>
          <p className="text-gray-200">Toy cars can be used for all kinds of play: sensory play, learning, pretend play and outdoor time! So the next time your children get out their buckets of toy cars, roads, train tracks and vehicles of all sizes, shapes and colors, let these photos and ideas be an inspiration for your children!</p>
          <div className="mt-6 flex">
          <input type="text" className="rounded-full py-2 px-4"/>
          <input type="button" value="Search" className=" top-0 right-0 bg-red-500 px-8 py-2 rounded-full ms-2"/>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
