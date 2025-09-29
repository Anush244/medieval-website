import React from 'react';
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import K1 from '../assets/k1.jpg';
import K2 from '../assets/k2.jpg';
import K3 from '../assets/k3.jpg';
import K4 from '../assets/k4.jpg';
import K5 from '../assets/k4.jpg'; 
import Blog1 from '../assets/blog1.jpg';
import Blog3 from '../assets/blog3.jpg';
import Blog4 from '../assets/blog4.jpg';
import Blog5 from '../assets/blog5.jpg';
import Blog6 from '../assets/blog6.jpg';
import Blog7 from '../assets/blog7.jpg';
import Blog8 from '../assets/blog8.jpg';
import Kg from  '../assets/nav.jpg';

function Blogs() {
  return (
    <div>
      
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
        style={{ backgroundImage: `url(${Ab1})` }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
            All Posts
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
            Home / <span className="text-yellow-600">All Posts</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <img
            src={Bottom2}
            className="w-full h-auto object-cover pointer-events-none"/>
        </div>
      </div>

     <div className='bg-[#e8d1af] h-auto   w-full'>
      <div className=" container ">
       <div className="grid grid-cols-1 md:grid-cols-12 ">
  <div className="md:col-start-3 md:col-span-8">

        
          <div className=" pt-10 ">
            <div className='  bg-[#f5e6d0]  '>
            <img className="w-full  h-100  rounded-lg " src={Blog1}  />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 ">Introducing Our Fanciest Knight Kit Ever</h2>
              <p className="text-sm text-[#cba66d] mb-4">News & Updates / 24 Jan 2018</p>
              <p className="text-base mb-4">
               Be prepared to travel around the country to various castles and camps and basically follow the trail of multiple medieval crusades. It can be interesting not just for adults, but also for children. However, fight participants must be eighteen and older.
              </p>
              <a href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition">
                Read More
              </a>
            </div>
          </div>
</div>
        <div className=" pt-10 ">
          <div className=" bg-[#f5e6d0]  ">
            <img className="w-full h-100 object-cover rounded-lg" src={Blog3} alt="Halberdiers Armour" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Halberdiers Armour “Hound Of War”</h2>
              <p className="text-sm  mb-4 text-[#cba66d]">News & Updates / 20 Jan 2018</p>
              <p className="text-base mb-4">
                Be prepared to travel around the country to various castles and camps and basically follow the trail of multiple medieval crusades. It can be interesting not just for adults, but also for children. However, fight participants must be eighteen and older.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>
          </div>
          <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg x">
           
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Castles of Germany, A Short Visit</h2>
              <p className="text-sm mb-4 text-[#cba66d]">Markets, Training / 16 Jan 2018</p>
              <p className="text-base mb-4">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…


              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>

         <div className=" pt-10 ">
          <div className=" bg-[#f5e6d0] rounded-lg ">
            <img className="w-full h-100 object-cover" src={K4} alt="Sky Sports HD" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Sky Sports HD Ryder Cup</h2>
              <p className="text-sm mb-4 text-[#cba66d]">New Features, Shows / 12 Jan 2018</p>
              <p className="text-base mb-4">
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>

          <div className='pt-10'>
          <div className="bg-[#f5e6d0] rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-100 object-cover" src={Blog8} alt="Time Traveller’s Guide" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">The Time Traveller’s Guide to Medieval England</h2>
              <p className="text-sm mb-4 text-[#cba66d]">History, Culture / 10 Jan 2018</p>
              <p className="text-base mb-4">
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…
   
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>
          </div>
          <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg x">
              <div class="aspect-video w-full max-w-4xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg">
         <iframe
    title="vimeo-player"
    src="https://player.vimeo.com/video/44683622?h=533387c8df"
    frameborder="0"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    allowfullscreen
    class="w-full h-full"
  ></iframe>
</div>
           
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">What Is Armoured Fighting?</h2>
              <p className="text-sm mb-4 text-[#cba66d]">Markets, Training / 16 Jan 2018</p>
              <p className="text-base mb-4">
              Shire of Standing Stones Event Offical Promo Video from Byron Abt on Vimeo. Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit,…

              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>

        <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg ">
            <img className="w-full h-100 object-cover rounded-lg" src={Blog4} alt="Time Traveller’s Guide" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Choosing Armour for a Universal Fighter</h2>
              <p className="text-sm mb-4 text-[#cba66d]">News & Updates 26 Dec 2017</p>
              <p className="text-base mb-4">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…


              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>


          <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg x">
            <img className="w-full h-100 object-cover" src={Blog5} alt="Time Traveller" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Medieval French Castles for Battles of Modern Knights
</h2>
              <p className="text-sm mb-4 text-[#cba66d]">News & Updates 22 Dec 2017</p>
              <p className="text-base mb-4">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…


              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>


          <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg x">
            <img className="w-full h-100 object-cover" src={Blog6} alt="Time Traveller" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Top Armour Fight Moves for Beginners</h2>
              <p className="text-sm mb-4 text-[#cba66d]"> News & Updates 18 Dec 2017</p>
              <p className="text-base mb-4">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…


              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div></div>


          <div className=" pt-10 ">
          <div className="bg-[#f5e6d0] rounded-lg x">
            <img className="w-full h-100 object-cover" src={Blog7} alt="Time Traveller" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
Safety and Comfort while Wearing Armour</h2>
              <p className="text-sm mb-4 text-[#cba66d]">News & Updates 14 Dec 2017</p>
              <p className="text-base mb-4">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam…


              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 border border-[#cba66d] text-[#cba66d] rounded-full hover:bg-[#cba66d] hover:text-white transition">
                Read More
              </a>
            </div>
          </div></div>
        

</div>
        </div>
        
      </div>
       <div
  className="w-full h-24 sm:h-32 md:h-40 bg-no-repeat bg-cover bg-center  filter brightness-0 contrast-200 "
  style={{ backgroundImage: `url(${Bottom2})` }}
></div> 
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
      </div>


  );
}

export default Blogs;
