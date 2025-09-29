
import React from 'react'
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import Grid from '../assets/grid.png';
import List from '../assets/list.png';
import S1 from '../assets/s1.jpg';
import S2 from '../assets/s2.jpg';
import S3 from '../assets/s3.jpg';
import S4 from '../assets/s4.jpg';
import S5 from '../assets/s5.jpg';
import S6 from '../assets/s6.jpg';
import S7 from '../assets/s7.jpg';
import S8 from '../assets/s8.jpg';
import { Link } from 'react-router-dom';
import Kg from  '../assets/nav.jpg';
function shop() {
  
  return (
    <div>
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
                            className="w-full h-auto object-cover pointer-events-none"/>
                        </div>
                      </div>
                      <div className='bg-[#e8d1af] h-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                          <div>
   
                   
                            <div className='pl-20 pt-10 pr-10'>
                              <div className='bg-[#f5e6d0] text-center '>
                               <h1 className='uppercase font-bold pt-10 text-2xl md:text-3xl '>Your Cart</h1>
                               <p className='text-gray-500 pt-5 pb-10'>No products in the cart.</p>
                              </div>
                              </div>
                              <div>
                                <div className='pl-20 pt-10  pr-10'>
                              <div className='bg-[#f5e6d0] text-center '>
                               <h1 className='uppercase font-bold pt-10 text-2xl md:text-3xl '>Price Filter</h1>
                               <hr class="border-t-5 border-[#e8d1af] w-30 md:w-60 mx-auto mt-10" />

                               <p className='text-yellow-600 pt-5 pb-10 text-semibold '>Price: $40 — $120</p>
                               <p className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '>FILLTER</p>
                               <p>.</p>
                              </div>
                              </div>
                              </div>
                              <div className='pl-20 pt-10  pr-10 '>
                              <div className='bg-[#f5e6d0] text-center '>
                               <h1 className='uppercase font-bold pt-10 text-2xl md:text-3xl '>Categories
                               </h1>
                                <p></p>
                               <p className='text-gray-500 pt-5 '> Gloves</p>
                                <p className='text-gray-500  '>Gowns</p>
                                 <p className='text-gray-500  '> Helmets</p>
                                  <p className='text-gray-500 pb-10 '>Shields</p>
                                   
                              </div>
                              </div>
                              <div className='pl-20 pt-10  pr-10 '>
                              <div className='bg-[#f5e6d0] text-center '>
                               <h1 className='uppercase font-bold pt-10 text-2xl md:text-3xl '>Tags
                               </h1>
                               <div className='gap-10 pt-10 pb-10'>
                                   
                                <a href="#" className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '> 
                                  armour</a>
                                <a href="#" className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '>carnival </a>
                                <a href="#" className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '>clothing </a>
                                <a href="#" className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '> fight</a>
                              
                                  <a href="#" className='inline-block px-4 py-2 border border-[#cba66d] text-white rounded-full bg-[#cba66d] hover:bg-[#f5e6d0] hover:text-white transition '> medieval</a>
                                   
                              </div>
                              </div>
                              </div>
                            </div>
                            <div>
                              <div className='pt-10 flex '>
                         <Link to='/list' >
                              <img src={List} alt="List icon" className="h-7 w-7" />
                           </Link>
                            
                          <Link to='/grid'>
                              <img src={Grid} alt="List icon" className="h-7 w-7" />
                            </Link>
                              </div>
                             <div className='pl-10 pt-8'>
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S3} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$120</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                        Medieval Crusader Great Helm - Steel Armor
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S4} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$55</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                       Medieval Lady Dress  Layered Summer Gown
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S5} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$60</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                      Medieval Knight Gauntlets Functional Steel Armor Gloves
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S6} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$100</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                       Knight Gauntlet Functional Steel Armor Glove
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    </div>
                                    </div>
                           <div className='pl-10 pt-16'>
                                 <div class="relative inline-block text-left group">
                                <button
                                  class="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                                  Sort by latest
                                </button>

                                <div
                                  class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                >
                                  <div class="py-1 text-sm text-gray-700">
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sort by popularity</a>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sort by average rating</a>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sort by latest</a>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sort by price: low to high</a>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sort by price: high to low</a>
                                  </div>
                                </div>
                              </div>

                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S1} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$40</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                        Jacobite Linen Ghillie Shirt – Black
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S2} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$55</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                       Historical Medieval Viking Helmet Battle Armour
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S7} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$60</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                      Medieval Knight Gauntlets Functional Steel Armor Gloves
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>
                                    
                                    <div className='bg-[#f2e6d9] h-auto w-auto lg:w-80 flex flex-col items-center p-4 mt-8'>
                                      <img src={S8} alt="Product Image" className='h-48 w-auto object-cover mb-4' />
                                      <p className='text-yellow-600 font-serif font-bold text-lg'>$100</p>
                                      <p className='text-gray-800 font-serif text-center mt-2'>
                                       Knight Gauntlet Functional Steel Armor queen -Glove
                                      </p>
                                      <a href='#' className='mt-4 bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition '>
                                        BUY NOW
                                      </a>
                                    </div>


                                    </div>
                                     
                              </div>
                    <div
                                      className="w-full h-24 sm:h-32 md:h-40 bg-no-repeat bg-cover bg-center  filter brightness-0 contrast-200 "
                                      style={{ backgroundImage: `url(${Bottom2})` }}
                                    ></div> 
                                  </div>
                                 
<div className="bg-black text-stone-500 h-auto w-full">
  <div className="flex justify-center py-8">
    <img src={Kg} className="h-20 w-auto" />
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 md:px-20 mt-10 text-sm">
 
    <div>
      <h1 className="font-bold mb-4 text-[#f5e6d0]">ABOUT US</h1>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">Our Story</a></li>
        <li><a href="#" className="hover:text-yellow-500">Rules</a></li>
        <li><a href="#" className="hover:text-yellow-500">Our Team</a></li>
        <li><a href="#" className="hover:text-yellow-500">Events</a></li>
        <li><a href="#" className="hover:text-yellow-500">Gallery</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4 text-[#f5e6d0]">EVENTS</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">News & Updates</a></li>
        <li><a href="#" className="hover:text-yellow-500">Shows</a></li>
        <li><a href="#" className="hover:text-yellow-500">New Features</a></li>
        <li><a href="#" className="hover:text-yellow-500">Markets</a></li>
        <li><a href="#" className="hover:text-yellow-500">Training</a></li>
        <li><a href="#" className="hover:text-yellow-500">Special Events</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4 text-[#f5e6d0]">INFORMATION</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">Caelaverock Castle Tour</a></li>
        <li><a href="#" className="hover:text-yellow-500">Blackness Castle Tour</a></li>
        <li><a href="#" className="hover:text-yellow-500">East Anglia Medieval Fayre</a></li>
        <li><a href="#" className="hover:text-yellow-500">Magna Carta Convention</a></li>
        <li><a href="#" className="hover:text-yellow-500">Caelaverock Castle</a></li>
        <li><a href="#" className="hover:text-yellow-500">Aberdeen Highland Games</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4 text-[#f5e6d0]">GET SOCIAL</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">Facebook</a></li>
        <li><a href="#" className="hover:text-yellow-500">X</a></li>
        <li><a href="#" className="hover:text-yellow-500">YouTube</a></li>
        <li><a href="#" className="hover:text-yellow-500">Behance</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4 text-[#f5e6d0]">CONTACT US</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">Shop</a></li>
        <li><a href="#" className="hover:text-yellow-500">Gallery</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contacts</a></li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-700 mt-20 pt-6 text-center text-gray-500 text-xs">
    It's me © 2025. All rights reserved.
  </div>
</div>

                            </div>
                           

                       
                     

  


                      
    
  )
}

export default shop