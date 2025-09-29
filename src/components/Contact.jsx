import React from 'react'
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import Kg from  '../assets/nav.jpg';
import Crown from '../assets/crown.jpg';
import Bot from '../assets/header1.png'
function Contact() {
  return (
    <div>
                 <div
                        className="relative w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
                        style={{ backgroundImage: `url(${Ab1})` }}>
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
                          contacts
                          </h1>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
                            Home / <span className="text-yellow-600"> contacts</span>
                          </p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full z-10">
                          <img
                            src={Bottom2}
                            className="w-full h-auto object-cover pointer-events-none"/>
                        </div>
                      </div>

                     <div className="bg-[#e8d1af] w-auto">
                      <div className='py-20 px-5'>
  
                      <div className="flex items-center justify-center space-x-3">
                        <img src={Crown} alt="Crown Icon" className="h-8 w-12" />
                        <p className="font-bold text-yellow-500 uppercase text-xl">Have a Question?</p>
                      </div>

                      
                      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase mt-8">
                        Drop a Line
                      </h1>


                      <div className="mt-14 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                          <input type="text" placeholder="Enter Your Name"className="rounded-full px-5 py-3 w-full border border-gray-300 bg-[#f5e6d3]"/>
                          <input type="email" placeholder="Enter Your Email" className="rounded-full px-5 py-3 w-full border border-gray-300  bg-[#f5e6d3]" />
                        </div>

                        <div className="mt-6">
                          <textarea placeholder="Enter Your Message" rows="6" className="w-full rounded-2xl px-6 py-4 border border-gray-300 bg-[#f5e6d3]"></textarea>
                        </div>
                        <div className="text-center mt-8">
                          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                            Send Message
                          </button>
                        </div>
                      </div>
                      </div>
                      <div className='w-auto h-10 md:h-15 lg:18  xl:h-20    bg-cover bg-center'style={{backgroundImage:`url(${Bot})`}}></div>

                      </div>
                      <div className='bg-[#f5e6d3] h-auto'>
                        
                         <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">CONTACT DETAILS</h2>

    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-10">
     
      <div className="w-full xl:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.795066938036!2d-74.02840932403616!3d40.76634893532874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5feff373cfd%3A0x2b2c1d6d75b1d4f!2s1209%20New%20York%20Ave%2C%20Union%20City%2C%20NJ%2007087%2C%20USA!5e0!3m2!1sen!2sin!4v1630458291244!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md w-full"
        ></iframe>
      </div>

      
      <div className="w-full xl:w-1/2 space-y-6 text-center xl:text-left">
        <div>
          <h3 className="text-lg font-bold">ADDRESS</h3>
          <p>44 Shirley Ave.<br />West Chicago, IL 60185</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">PHONE</h3>
          <p>0 (800) 123 45 67</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">MAIL</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
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

export default Contact