import React from 'react'
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import G1 from '../assets/g1.jpg';
import G2 from '../assets/g2.jpg';
import G4 from '../assets/g4.jpg';
import G5 from '../assets/g5.jpg';
import G6 from '../assets/g6.jpg';
import G7 from '../assets/g7.jpg';
import G8 from '../assets/g8.jpg';
import G9 from '../assets/g9.jpg';
import G10 from '../assets/g10.jpg';
import G11 from '../assets/g11.jpg';
import G12 from '../assets/g12.jpg';
import G13 from '../assets/g13.jpg';
import G14 from '../assets/gc21.jpg';
import Kg from  '../assets/nav.jpg';
import Crown from '../assets/crown.jpg';




function Gallery() {
  return (
    <div>
        <div
                className="relative w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
                style={{ backgroundImage: `url(${Ab1})` }}
              >
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
                  Gallery
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
                    Home / <span className="text-yellow-600"> Gallery</span>
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-10">
                  <img
                    src={Bottom2}
                    className="w-full h-auto object-cover pointer-events-none"/>
                </div>
              </div>

              <div className='bg-[#e8d1af] h-auto   w-full'>
                <div className='flex justify-center'>
                      <img src={Crown} className='h-8 w-8   '></img><h1 className=' font-bold text-yellow-500 ml-5 mt-2 text-xl uppercase'>gallery</h1></div>
                      <h1 className='uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-bold text-center'>Pictures From Shows and <br></br> Events</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-3 gap-10 pt-4 pr-10 pl-10'>
                    <div className=' h-auto w-auto'>
                        <img src={G5} className='pt-5'/>
                         <img src={G2}  className='pt-5'/>
                          <img src={G13}  className='pt-5'/>
                           <img src={G4}  className='pt-5'/>


                    </div>
                    <div>
                        <img src={G1}  className='pt-5'/>
                         <img src={G6}  className='pt-5'/>
                          <img src={G7}  className='pt-5'/>
                           <img src={G8}  className='pt-5'/>
                           <img src={G14}  className='pt-5'/>


                    </div><div>
                        <img src={G9}  className='pt-5'/>
                         <img src={G10}  className='pt-5'/>
                          <img src={G11}  className='pt-5'/>
                           <img src={G12}  className='pt-5'/>


                    </div>


                </div>
                <div className=' flex justify-center pt-8'>
                <a href='#' className='inline-block px-4 py-2 border border-yellow-600 text-[#cba66d] uppercase rounded-full bg-black hover:bg-[#cba66d] hover:text-white transition '>More Pictures</a>
                 </div>
                 <div
                   className="w-auto h-10 md:h-15 lg:18  xl:h-20    bg-cover bg-center  filter brightness-0 contrast-200 "
                   style={{ backgroundImage: `url(${Bottom2})` }}
                 ></div> 
              </div>
              <div className="bg-black text-stone-500 py-12 w-full">
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

export default Gallery