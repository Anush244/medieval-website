import React from 'react';
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import Grid from '../assets/grid.png';
import ListIcon from '../assets/list.png'; 
import S1 from '../assets/s1.jpg';
import S2 from '../assets/s2.jpg';
import S3 from '../assets/s3.jpg';
import S4 from '../assets/s4.jpg';
import S5 from '../assets/s5.jpg';
import S6 from '../assets/s6.jpg';
import S7 from '../assets/s7.jpg';
import S8 from '../assets/s8.jpg';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
        style={{ backgroundImage: `url(${Ab1})` }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
            SHOP
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
            Home / <span className="text-yellow-600"> Shop</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <img
            src={Bottom2}
            className="w-full h-auto object-cover pointer-events-none"
            alt="Bottom Decoration"
          />
        </div>
      </div>

     
      <div className="bg-[#e8d1af] h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
          <div>
         
            <div className="pl-20 pt-10 pr-10">
              <div className="bg-[#f5e6d0] text-center">
                <h1 className="uppercase font-bold pt-10 text-2xl md:text-3xl">Your Cart</h1>
                <p className="text-gray-500 pt-5 pb-10">No products in the cart.</p>
              </div>
            </div>

   
            <div className="pl-20 pt-10 pr-10">
              <div className="bg-[#f5e6d0] text-center">
                <h1 className="uppercase font-bold pt-10 text-2xl md:text-3xl">Price Filter</h1>
                <hr className="border-t-5 border-[#e8d1af] w-30 md:w-60 mx-auto mt-10" />
                <p className="text-yellow-600 pt-5 pb-10 font-semibold">Price: $40 — $120</p>
                <div className='pb-10'><p className="inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition ">
                  FILTER
                </p></div>
              </div>
            </div>

    
            <div className="pl-20 pt-10 pr-10">
              <div className="bg-[#f5e6d0] text-center">
                <h1 className="uppercase font-bold pt-10 text-2xl md:text-3xl">Categories</h1>
                <p className="text-gray-500 pt-5">Gloves</p>
                <p className="text-gray-500">Gowns</p>
                <p className="text-gray-500">Helmets</p>
                <p className="text-gray-500 pb-10">Shields</p>
              </div>
            </div>

            <div className="pl-20 pt-10 pr-10">
              <div className="bg-[#f5e6d0] text-center">
                <h1 className="uppercase font-bold pt-10 text-2xl md:text-3xl">Tags</h1>
                <div className="gap-4 pt-10 pb-10 space-y-2">
                  {['armour', 'carnival', 'clothing', 'fight', 'medieval'].map((tag) => (
                    <a
                      href="#"
                      key={tag}
                      className="inline-block px-4 py-2 m-1 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          <div className="pt-10 ">
            <Link to="/list">
              <img src={ListIcon} alt="List view" className="h-7 w-7" />
            </Link>
            <Link to="/grid">
              <img src={Grid} alt="Grid view" className="h-7 w-7" />
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-rows-1 xl:grid-rows-1 gap-4'>
            <div>
               <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex justify-start p-4 mt-8'>
              <img src={S1}  alt="Product Image" className='h-48 w-auto object-cover mb-4'/></div>


            </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
