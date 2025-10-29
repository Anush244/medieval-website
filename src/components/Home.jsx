import React, { useState, useEffect } from 'react';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Imagebg2 from '../assets/imgbg2.jpg'; 
import Horse from '../assets/horse1.jpg';
import Page2 from '../assets/imgb2i1.jpg';
import Crown from '../assets/crown.jpg';
import Horse2 from '../assets/horserid.jpg';
import Bottom1 from '../assets/bottom1.jpg';
import Bottom2 from '../assets/bottom2.png';
import Castle2 from '../assets/castle2.png';
import Chest from '../assets/chest.png';
import Scroll from '../assets/scroll.png';
import Music from '../assets/music.png';
import Ax from '../assets/ax.png';
import Bottom3 from '../assets/bottom3.jpg';
import Bottom31 from '../assets/bottom31.png';
import Bottom4 from '../assets/bottom4.jpg';
import Bottom5 from '../assets/bottom5.jpg';
import Bottombet from '../assets/bottombet.jpg';
import Kg from  '../assets/nav.jpg';
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import Pic5 from  '../assets/pic5.jpg';
import Z1 from '../assets/z1.png';
import Z2 from '../assets/z2.png';

function Home1() {
  const images = [Img1, Img2, Img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
     
      <div className="relative w-full  overflow-hidden  w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[900px]">
        
        {images.map((img, index) => (
          <div
            key={index}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='pt-20 sm:pt-24 md:pt-30 lg:pt-33 xl:pt-50'>
              
 <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center ">

        <div className="flex flex-row items-center justify-center space-x-4 flex-wrap">
          <img
            src={Z1}
            alt="Left Decoration"
            className=" relative w-15 sm:w-32 md:w-40 lg:w-48 xl:w-100 h-auto"
          />
          <h1 className="text-[#e9d2b4] font-serif text-1lg sm:text-6xl md:text-7xl lg:text-8xl font-bold  ">
            KINGS
            <br />
            <span className="text-1lg sm:text-3xl md:text-4xl lg:text-5xl">AND</span>
            <br />
            <span className=''>
            Queens</span>
          </h1>

          <img
            src={Z2}
            alt="Right Decoration"
            className="w-8 sm:w-32 md:w-40 lg:w-48 xl:w-auto h-auto"
          />
        </div>
        <p className="mt-6  text-hidden sm:text-sm md:text-lg font-medium max-w-2xl text-gray-300  ">
          Compete with your teammates and learn from the best reenactment experts at our club!
        </p>
      </div>
</div>
            </div>
            
        ))}
      </div>

      
      
      
          <div className="w-full h-auto" style={{ backgroundImage: `url(${Imagebg2})` }} >
            
       
          <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-10">
            <img src={Page2} className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0" alt="Page2" />
            <div className='md:ml-10 max-w-2xl'>
              <div className='flex items-center'>
                <img src={Crown} className='h-8 w-8' alt="crown" />
                <h1 className='font-bold text-yellow-500 ml-3 text-lg md:text-xl'>welcome</h1>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-serif mt-6'>
                Historical <br />Reenactment <br />Group
              </h1>
              <p className='mt-5 text-yellow-500 text-sm md:text-base'>
                We specialise in the high Medieval period. Founded in 2005 in and around Manchester, we now have members from all over the UK. Our interests cover the period from the early middle ages up to the Renaissance.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-6 md:px-20 py-10">
            <div className="z-10 max-w-xl">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-serif mt-10 md:mt-20">
                We are fun, friendly, <br />
                family orientated medieval <br />
                reenactors
              </p>
              <p className="text-yellow-500 mt-5 text-sm md:text-base">
                We do not rest even when the winter winds start howling. Every Saturday we get together to hone our skills. A strong sense of community is a large part of what makes re-enactment so fun.
              </p>
            </div>

            <div className="relative mt-10 md:mt-0 md:ml-10 lg:ml-20 w-full md:w-400 lg:w-1/3">
              <img src={Horse2} alt="Sketch of knight" className="w-full h-auto" />
            
</div>

      

      
      
    </div>
     <div className="w-full mt-10 h-18 bg-no-reapt" style={{ backgroundImage: `url(${Bottom2})`, }} ></div>
 
   
   </div>
      
  <div className="bg-[#e9d2b4] min-h-screen h-auto w-full "  >

 <div className='flex justify-center items-center '>
  <p className="text-yellow-700 uppercase tracking-widest font-semibold mb-2 text-center "><img src={Crown}></img>
    Events
  </p></div>
  <h2 className="text-2xl md:text-5xl font-bold mb-4 font-serif text-center  italic">Kingdom Event <br></br>Calendars</h2>
  <p className="text-gray-700 max-w-xl mx-auto mb-12 text-center">
    The Kings And Queens group has several types of events. All of<br></br> which are listed on the Calendar.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
    
    
   <div className="flex flex-col items-center  hover:rounded-xl p-4 transition duration-300">
  <div className="w-20 h-20 bg-[#f5e6d0] hover:bg-yellow-700 rounded-full flex items-center justify-center mb-4 text-yellow-900 hover:text-white text-3xl transition duration-300">
  <img src={Castle2}></img>
  </div>
  <h3 className="font-bold text-lg mb-2 ">SHOWS</h3>
  <p className="text-sm text-gray-800 max-w-xs text-center mt-2">Full contact combat displays, archery demonstrations, dance displays and our medieval encampment</p>
</div>


   
    <div className="flex flex-col items-center mt-4">
      <div className="w-20 h-20 bg-[#f5e6d0] hover:bg-yellow-700 rounded-full flex items-center justify-center mb-4 text-yellow-900 hover:text-white text-3xl transition duration-300">
          <img src={Ax}></img>
      </div>
      <h3 className="font-bold text-lg mb-2 ">TRAINING</h3>
      <p className="text-sm text-gray-800 max-w-xs text-center mt-2">
        During the winter months we train on a regular basis to keep skills fresh
      </p>
    </div>

   
    <div className="flex flex-col items-center mt-4">
      <div className="w-20 h-20 bg-[#f5e6d0] hover:bg-yellow-700 rounded-full flex items-center justify-center mb-4 text-yellow-900 hover:text-white text-3xl transition duration-300">
          <img src={Music}></img>
      </div>
      <h3 className="font-bold text-lg mb-2">SOCIAL EVENTS</h3>
      <p className="text-sm text-gray-800 max-w-xs text-center mt-2">
        Give us the chance to let our hair down and relax a little. Anything from a banquet to a planned trip to the pub.
      </p>
    </div>

    
    <div className="flex flex-col items-center mt-4">
      <div className="w-20 h-20 bg-[#f5e6d0] hover:bg-yellow-700 rounded-full flex items-center justify-center mb-4 text-yellow-900 hover:text-white text-3xl transition duration-300">
          <img src={Scroll}></img>
      </div>
      <h3 className="font-bold text-lg mb-2">SPECIAL EVENTS</h3>
      <p className="text-sm text-gray-800 max-w-xs text-center mt-2">
        Special events can be anything, a lecture, film work, even a parade!
      </p>
    </div>

    
    <div className="flex flex-col items-center mt-4">
      <div className="w-20 h-20 bg-[#f5e6d0] hover:bg-yellow-700 rounded-full flex items-center justify-center mb-4 text-yellow-900 hover:text-white text-3xl transition duration-300">
          <img src={Chest}></img>
      </div>
      <h3 className="font-bold text-lg mb-2">MARKETS</h3>
      <p className="text-sm text-gray-800 max-w-xs text-center mt-2">
        The opportunities throughout the year for re-enactors to get together and purchase the equipment
      </p>
    </div>
    
  </div>
<div className='flex justify-center'><button
    type="submit"class=" right-1 top-1 bottom-1 px-6 bg-yellow-600 text-white font-semibold rounded-full hover:bg-[#d9ba98] transition"  >
    SHOW ALL EVENTS
  </button></div>

      </div >
      <div className="w-full  h-auto bg-no-reapt" style={{ backgroundImage: `url(${Bottom3})`, }} >
        <img src={Bottom31} className='w-full h-18 '></img>
        <div className='grid grid-cols-1 sm: grid-cols-1 md: grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
          <div></div>
          <div>
        <div className='text-[#f5e6d0] pt-50  '>
        <div className='flex justify-start'><img src={Crown} className='h-5 w-5'></img><p className='font-bold text-yellow-700 text-lg ml-5'>Next Events</p></div>
        <p className='italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-serif flex justify-start'>Aberdeen Highland Games</p>
        <p className='mt-15 ml-10 text-[#f5e6d0]-600 flex  justify-start '>A medieval reenactment is a form of historical reenactment that focuses on re-enacting European history in the period from the fall of Rome to about the end of the 15th century. The 2nd is the Middle Ages.</p>
        <div className='flex justify-center'><button className='border h-10 w-50 border-yellow-600 rounded-full hover:bg-yellow-600 mt-35  border-3'>T A K E  P A R T</button>
      </div></div></div>
       
    </div>
      
        <div className="w-full  h-15 mt-16 bg-no-reapt" style={{ backgroundImage: `url(${Bottombet})`, }} ></div>
        </div>
        <div className="w-full  h-auto bg-no-reapt pb-20" style={{ backgroundImage: `url(${Bottom4})`, }} >
          <p className='italic text-2xl md:text-5xl font-bold text-[#f5e6d0] text-center pt-5'>Join Our Community</p>
       <div class="relative w-full max-w-md mx-auto mt-20">
  <input type="email" placeholder="Your Email Address"className="w-full pl-4 pr-28 py-3 rounded-full bg-[#f5e6d0]  text-black  "  />
  <div className='flex justify-center'><button
    type="submit"class="absolute right-1 top-1 bottom-1 px-6 bg-[#e5cdb2] text-white font-semibold rounded-full hover:bg-[#d9ba98] transition"  >
    SUBMIT
  </button></div>

</div>
<div className="w-full  h-20  bg-no-reapt" style={{ backgroundImage: `url(${Bottombet})`, }} ></div>
  
</div>



          
        

      
     <div
      className="w-full bg-[#f1dfc6] bg-no-repeat bg-cover h-auto"
      style={{ backgroundImage: `url(${Bottom5})` }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={Crown} alt="Crown" className="h-5 w-5" />
            <p className="font-bold text-yellow-700 tracking-widest">GALLERY</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold italic text-black leading-tight mb-8 font-serif">
            Pictures From<br />Shows and Events
          </h2>

  
          <p className="text-yellow-700 mb-8 leading-relaxed">
            Kings and Queens recreate chivalric foot<br />
            tournaments of the Nobility and Knights in all their<br />
            splendor and glory. Leap into the fray or simply enjoy<br />
            the spectacle!
          </p>

        
          <button className="bg-yellow-600 hover:bg-black text-[#f5e6d0] border-2 border-yellow-700 px-6 py-2 rounded-full transition duration-300">
            MORE PICTURES
          </button>

      
          <div className="mt-10 w-full max-w-xs">
            <img
              src={Pic2}
              alt="Gallery Decorative"
              className="transition duration-300 transform hover:scale-105 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img
            src={Pic3}
            alt="Event 1"
            className="mt-24 rounded-lg shadow-md w-full max-w-xs transition duration-300 transform hover:scale-105"
          />
          <img
            src={Pic1}
            alt="Event 2"
            className="rounded-lg shadow-md w-full max-w-xs transition duration-300 transform hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img
            src={Pic4}
            alt="Event 3"
            className="mt-10 rounded-lg shadow-md w-full max-w-xs transition duration-300 transform hover:scale-105"
          />
          <img
            src={Pic5}
            alt="Event 4"
            className="rounded-lg shadow-md w-full max-w-xs transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>
       <div
        className="w-full h-20 sm:h-32 md:h-30  bg-no-repeat bg-cover bg-center  filter brightness-0 contrast-200 "
        style={{ backgroundImage: `url(${Bottom2})` }}
      ></div>
    </div>


       
       
      
       
        
              <div className="bg-black text-stone-500  w-full">
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
    
  );
}

export default Home1;
