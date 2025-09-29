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
import Bgking from '../assets/bgking.jpg';
import Sc1  from '../assets/sc1.png';
import Sc2  from '../assets/sc2.png';
import Sc3  from '../assets/sc3.png';
import Sc4  from '../assets/sc4.png';
import Sc5  from '../assets/sc5.png';
import Sc6  from '../assets/sc6.png';
import H2b2  from '../assets/h2bg2.jpg';
import H2b3  from '../assets/h2b3.jpg';
import K1  from '../assets/k1.jpg';
import K2  from '../assets/k2.jpg';
import K3  from '../assets/k3.jpg';
import K4  from '../assets/k4.jpg';

function Home2() {
  const images = [ Img2,Img3, Img1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer); 
  }, []);

   
  const image = [Pic1, Pic2, Pic3, Pic4, Pic5]; 
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [image.length]);
  //  const image3 = [Sc1, Sc2, Sc3, Sc4, Sc5, Sc6];
  





  return (
    <div>
     
      <div className="relative w-full h-220 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
                          EVENTS
                          </h1>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
                            Home / <span className="text-yellow-600"> Events</span>
                          </p>
                          </div>
          </div>
        ))}
      </div>

     
        <div className='bg-[#f5e6d0] w-full h-auto'>
          <div className='   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-3 gap-10 pt-4 pr-10 pl-10  items-start '>
            <div className='pt-40 '>
               <div className="flex items-center justify-center space-x-3">
                  <img src={Crown} alt="Crown Icon" className="h-4 w-4" />
    <p className="font-bold text-yellow-500 uppercase ">fight</p>
                                    </div>
        
              <h1 className='uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-bold text-center pt-10'>Eager To <br></br> Fight? </h1>
              <p className='pt-10 text-center '>There are armoured fighting organizations throughout <br></br>the world, with more groups forming every day. Here<br></br> you will find resources for getting equipment and training.</p>
            <div className=' flex justify-center'>  <button className='border h-10 w-50  bg-yellow-600 rounded-full hover:bg-black hover:text-white border-3 mt-15 m-center '>MORE DETAILS</button>
            </div></div>
            <div className='flex items-center justify-center space-x-3'>
              <img src={Horse} className='mt-30  '/>
            </div>
            <div className='mt-40 '>
              <div className="flex items-center justify-center space-x-3">
                  <img src={Crown} alt="Crown Icon" className="h-4 w-4" />
    <p className="font-bold text-yellow-500 uppercase ">watch</p>
                                    </div>
              
              
               <p className='uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-bold text-center pt-10'>Want To <br></br>Watch?</p>
               
              <p className='pt-10 text-center'>Most armored fighting events are open to the public,<br></br> including multi-day events and festivals. Here you <br></br>will find everything from local fights to International<br></br> fights with official national teams.</p>
              <div className='flex justify-center'>  <button className='border h-10 w-50  bg-yellow-600 rounded-full hover:bg-black hover:text-white border-3 mt-15 mr-15'>MORE DETAILS</button>
              </div></div>
              </div>
             <div >
  <div className="w-full h-30 bg-no-repeat bg-cover bg-center"style={{ backgroundImage: `url(${Bottom2})` }}></div>
  </div>
 <div className='bg-[#e9d2b4] w-full    '>
  
 
  <div className="mb-10">
    <p className="text-yellow-800 font-semibold tracking-widest text-sm uppercase flex justify-center items-center gap-2">
      <img src={Crown} alt="icon" className="w-4 h-4" />
      Events
    </p>
    <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 text-center">Battle Championship</h2>
  </div>

  

  <div className="relative w-[50%] h-100 mx-auto ">  
  {image.map((pic, index) => (
    <div
      key={index}
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === imgIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
      }`}
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  ))}
</div>


  

  <div className="text-center pt-10">
    <button className="bg-yellow-600 hover:bg-black text-white font-semibold py-2 px-6 rounded-full transition ">
      MORE INFO
    </button> 
  </div>


      <img src={Bottom2} class="w-full filter brightness-0 contrast-200  " />
</div>
    
<div className='w-full h-auto bg-black ' style={{ backgroundImage: `url(${Bgking})`, }}>
  <div className='  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-20  '>
    <div>

    </div>
    <div className='mt-20 pl-10 pr-5 md:pl-20 '>
    <div className='   flex '>
              <img src={Crown} className='h-5 w-5  mr-5 '/>
              <p className='font-bold text-yellow-600 '>B A T T L E</p></div>
    <p className='uppercase text-[#e9d2b4] text-6xl italic  mt-15'>How Do I Get To Fight?</p>
    <p className='text-[#e9d2b4] pt-10' >Armoured fight clubs are forming all over the world. These clubs will be able to help<br/> guide you through proper training and equipment use. What you will find most often<br/> is that these groups also house a variety of other lighter western martial arts forms in<br/> addition to steel Armoured fights.</p>
    <div className='flex justify-center'><button className='border h-10 w-60  bg-black rounded-full hover:bg-yellow-600 text-white border-3 mt-15 m-center border-yellow-600'>N a t i o n a l   T e a m s </button>
  </div></div></div>
          <img src={Bottombet} className='mt-40' />
</div>

 <div
   className="bg-cover bg-no-repeat h-[30rem] sm:h-[38rem] md:h-[30rem] xl:h-[24rem] lg:h-[22rem]"
   style={{ backgroundImage: `url(${Bottom4})` }}
 >
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-10 lg:px-20 pt-10 sm:pt-16 lg:pt-20 justify-items-center items-center">
     <img src={Sc1} alt="Sc1" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
     <img src={Sc2} alt="Sc2" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
     <img src={Sc3} alt="Sc3" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
     <img src={Sc4} alt="Sc4" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
     <img src={Sc5} alt="Sc5" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
     <img src={Sc6} alt="Sc6" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
   </div>
 </div>
 </div>
 
   <div
   className="w-full h-auto"
   style={{ backgroundImage: `url(${H2b2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
 >
 
   <div className="flex justify-center items-center space-x-3">
     <img src={Crown} className="h-5 w-5" alt="Crown" />
     <p className="font-bold text-yellow-600 tracking-widest">T E A M</p>
   </div>
 
   <p className="uppercase font-bold text-4xl sm:text-5xl text-center mt-5">Team Members</p>
 
   <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 sm:px-10 md:px-20">
   
     <div className="bg-[#f5e6d3] rounded-lg shadow-lg overflow-hidden text-center p-5 transition hover:scale-105 duration-300 ease-in-out">
       <img src={K1} alt="James Hillton" className="w-full h-72 object-cover mb-4" />
       <p className="text-yellow-600 italic font-bold text-xl hover:text-black">James Hillton</p>
       <p className="text-gray-500">Country: <span className="text-yellow-600">United Kingdom</span></p>
       <p className="text-gray-500">Club: <span className="text-yellow-600">Kings And Queens</span></p>
     </div>
 
    
     <div className="bg-[#f5e6d3] rounded-lg shadow-lg overflow-hidden text-center p-5 transition hover:scale-105 duration-300 ease-in-out">
       <img src={K2} alt="John Morrison" className="w-full h-72 object-cover mb-4" />
       <p className="text-yellow-600 italic font-bold text-xl hover:text-black">John Morrison</p>
       <p className="text-gray-500">Country: <span className="text-yellow-600">United Kingdom</span></p>
       <p className="text-gray-500">Club: <span className="text-yellow-600">Kings And Queens</span></p>
     </div>
 
     <div className="bg-[#f5e6d3] rounded-lg shadow-lg overflow-hidden text-center p-5 transition hover:scale-105 duration-300 ease-in-out">
       <img src={K3} alt="Walter Jacobs" className="w-full h-72 object-cover mb-4" />
       <p className="text-yellow-600 italic font-bold text-xl hover:text-black">Walter Jacobs</p>
       <p className="text-gray-500">Country: <span className="text-yellow-600">United Kingdom</span></p>
       <p className="text-gray-500">Club: <span className="text-yellow-600">Kings And Queens</span></p>
     </div>
 
    
     <div className="bg-[#f5e6d3] rounded-lg shadow-lg overflow-hidden text-center p-5 transition hover:scale-105 duration-300 ease-in-out">
       <img src={K4} alt="Ryland Johnson" className="w-full h-72 object-cover mb-4" />
       <p className="text-yellow-600 italic font-bold text-xl hover:text-black">Ryland Johnson</p>
       <p className="text-gray-500">Country: <span className="text-yellow-600">United Kingdom</span></p>
       <p className="text-gray-500">Club: <span className="text-yellow-600">Kings And Queens</span></p>
     </div>
     </div>
      <img
           src={Bottom2}
           className="w-full h-20 object-cover  "/>
 
</div>
{/* <div className="bg-[#e9cfaf]">
  
</div> */}



 <div className='w-full h-auto  ' style={{ backgroundImage: `url(${H2b3})`, }}>
  <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 pl-10 pr-8 '>
    <div className='pr-6'>
  <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase flex  gap-2 pt-30 ">
      <img src={Crown} alt="icon" className="w-4 h-4" />
      Events
    </p>
    <p className=' uppercase font-bold text-xl   italic mt-10'>Requirements</p>
    <p className=' text-gray-500 pt-10'>Most armored fight clubs follow the Historical Medieval Battles ruleset or some variation of these basic rules.</p>
    
    
      
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
            Head</p><p className='text-gray-500 pt-5'>
            The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
           </div>
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
            Torso, Arms, Legs</p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>hands
            </p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
      </div>

   

      <div className=' pl-6 xl:pt-40'>
        <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
               What are the rules for singles fights?</p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
            What are the rules for group fights?</p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
            What are the rules for pro fights?</p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
           <div className='bg-[#f5e6d3] p-10  rounded-full mt-5'><p className='font-semibold uppercase '>
            Who are those guys in yellow robes?</p><p className='text-gray-500 pt-5'>The fighter’s head has to be protected with a metal helmet, safety features and specifications of which comply with the same parameters of a helmet made of steel ST3 2 mm thick.</p>
            
           </div>
      </div>
      
  </div>
  <div
  className="w-full h-24 sm:h-32 md:h-40 bg-no-repeat bg-cover bg-center  filter brightness-0 contrast-200 "
  style={{ backgroundImage: `url(${Bottom2})` }}
></div> 
 
</div >

 
  
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


 

      
    
    );
}

export default Home2;

