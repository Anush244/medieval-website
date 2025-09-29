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
          ></div>
        ))}
      </div>

     
        <div className='bg-[#f5e6d0] w-full h-200'>
          <div className='  grid grid-cols-3  items-start'>
            <div className='pl-30'>
        <div className='flex  text-center mt-40 ml-10'>
          <img src={Crown} className='h-5 w-5  ml-25 '></img>
              <p className='font-bold text-yellow-500 ml-5'>F I G H T</p></div>
              <p className='font-bold text-6xl pt-10 italic ml-10 text-center'>EAGER TO<br/> FIGHT ?</p>
              <p className='pt-10 text-center '>There are armoured fighting organizations throughout <br></br>the world, with more groups forming every day. Here<br></br> you will find resources for getting equipment and training.</p>
              <button className='border h-10 w-50  bg-yellow-600 rounded-full hover:bg-black hover:text-white border-3 mt-15 ml-15'>MORE DETAILS</button>
            </div>
            <div>
              <img src={Horse} className='mt-30 ml-15'/>
            </div>
            <div className='flex mt-40 grid'>
              <div className='   flex ml-15 '>
              <img src={Crown} className='h-5 w-5  mr-5 '/>
              <p className='font-bold text-yellow-500'>W A T C H</p></div>
              
               <p className='font-bold text-6xl  italic text-center mt-8 mr-50'>Want To <br></br>Watch?</p>
               
              <p className='pt-10 text-center mr-30'>Most armored fighting events are open to the public,<br></br> including multi-day events and festivals. Here you <br></br>will find everything from local fights to International<br></br> fights with official national teams.</p>
                <button className='border h-10 w-50  bg-yellow-600 rounded-full hover:bg-black hover:text-white border-3 mt-15 ml-15'>MORE DETAILS</button>
              </div>
              </div>
             <div >
  <div className="w-full h-30 bg-no-repeat bg-cover bg-center"style={{ backgroundImage: `url(${Bottom2})` }}></div>
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
    
<div className='w-full h-[1000px] bg-black ' style={{ backgroundImage: `url(${Bgking})`, }}>
  <div className='pl-[60%] pt-[20%]'>
    <div className='   flex '>
              <img src={Crown} className='h-5 w-5  mr-5 '/>
              <p className='font-bold text-yellow-600 '>B A T T L E</p></div>
    <p className='uppercase text-[#e9d2b4] text-6xl italic  mt-15'>How Do I Get To Fight?</p>
    <p className='text-[#e9d2b4] mt-50px mt-15' >Armoured fight clubs are forming all over the world. These clubs will be able to help<br/> guide you through proper training and equipment use. What you will find most often<br/> is that these groups also house a variety of other lighter western martial arts forms in<br/> addition to steel Armoured fights.</p>
    <button className='border h-10 w-60  bg-black rounded-full hover:bg-yellow-600 text-white border-3 mt-15 ml-15 border-yellow-600'>N a t i o n a l   T e a m s </button>
  </div>
          <img src={Bottombet} className='mt-40' />
</div>
<div className=' w-full h-[350px]' style={{backgroundImage:`url(${Bottom4})`}}>

    <div class="block w-full  py-4 ml-10 pt-10">
  <img src={Sc1} alt="Sc1" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc2} alt="Sc2" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc3} alt="Sc3" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc4} alt="Sc4" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc5} alt="Sc5" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc6} alt="Sc5" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc2} alt="Sc5" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  <img src={Sc3} alt="Sc3" class="h-40 inline-block mx-4 rounded-lg shadow-md" />
  </div>
 </div>
 <div>
<div className='w-full h-[800px] bg-black ' style={{ backgroundImage: `url(${H2b2})`, }}>
<div className='  flex justify-center items-center pt-10'>
              <img src={Crown} className='h-5 w-5  mr-5 '/>
              <p className='font-bold text-yellow-600 '>T E A M</p></div>
            <p className='uppercase font-bold text-5xl   mt-10 text-center'>Team Members</p>
           
     <div className='grid grid-cols-4 pl-30 pt-20 '>

<div className='bg-[#f5e6d3] h-100 w-70 font-bold italic text-center text-yellow-600  hover:text-black' >
<img src={K1}/>
<p>James Hillton</p>
<div className='flex justify-center pt-5'>
  <p className='text-gray-500'>Country</p><p className=' text-yellow-600'>: United Kingdom</p></div>
  <div className='flex justify-center'>
  <p className='text-gray-500' >Club</p><p className=' text-yellow-600'>: Kings And Queens</p>
  </div>
</div>
<div className='bg-[#f5e6d3]  w-70 font-bold italic text-center text-yellow-600  hover:text-black  h-100'>
<img src={K2}/>
<p>John Morrison</p>
<div className='flex justify-center pt-5'>
  <p className='text-gray-500'>Country</p><p className=' text-yellow-600'>: United Kingdom</p></div>
  <div className='flex justify-center'>
  <p className='text-gray-500' >Club</p><p className=' text-yellow-600'>: Kings And Queens</p>
  </div>
  
  <div>
  <p></p>
</div>
</div>
<div className='bg-[#f5e6d3] h-100 w-70 font-bold italic text-center text-yellow-600  hover:text-black  '>
<img src={K3}/>
<p>Walter Jacobs</p>
<div className='flex justify-center pt-5'>
  <p className='text-gray-500'>Country</p><p className=' text-yellow-600'>: United Kingdom</p></div>
  <div className='flex justify-center'>
  <p className='text-gray-500' >Club</p><p className=' text-yellow-600'>: Kings And Queens</p>
  </div>
</div>
<div className='bg-[#f5e6d3] h-100 w-70 font-bold italic text-center text-yellow-600  hover:text-black  '>
<img src={K4}/>
<p>Ryland Johnson</p>
<div className='flex justify-center pt-5'>
  <p className='text-gray-500 '>Country</p><p className=' text-yellow-600'>: United Kingdom</p></div>
  <div className='flex justify-center'>
  <p className='text-gray-500' >Club</p><p className=' text-yellow-600'>: Kings And Queens</p>
  </div>
</div>

   
    </div>
    <div className='flex justify-center'>
    <button className='border h-10 w-60  bg-yellow-600 rounded-full hover:bg-black text-white border-3 mt-15 ml-15 border-yellow-600  pt-1 uppercase '>More Members</button>
</div>
 </div>
<div className="bg-[#e9cfaf]">
  
</div>



 <div className='w-full h-[800px] bg-black ' style={{ backgroundImage: `url(${H2b3})`, }}>
  <div className='grid grid-cols-2 pl-30'>
    <div>
  <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase flex  gap-2 pt-30 ">
      <img src={Crown} alt="icon" className="w-4 h-4" />
      Events
    </p>
    <p className=' uppercase font-bold text-5xl  italic mt-10'>Requirements</p>
    </div>
  
</div>
<img src={Bottom2} class="w-full filter brightness-0 contrast-200 pt-130" />
 </div>

 <div>
      
  
  </div>
   </div>
  
        <div>
         
         <div className='bg-black h-100 w-full'> 
          <div class="bg-black text-stone-500 py-12">
    <div class="ml-40">
     
      <div class="flex justify-center  ">
       
          <img src={Kg} class="h-20 w-70 mt-20 " />
          </div>
        
  
    
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mt-15">
        
        <div>
          <h1 className="font-bold mb-4 text-[#f5e6d0] ">ABOUT US</h1>
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
  </div>
      <div className="border-t border-gray-700 mt-20 pt-6 text-center text-gray-500 text-xs">
      It's me © 2025. All rights reserved.
      </div>
    </div>
 </div>
</div>
</div>
</div>

 </div>

      
    
    );
}

export default Home2;

