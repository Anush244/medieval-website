import React from 'react';
import Ab1 from '../assets/ab1.jpg';
import Bottom2 from '../assets/bottom2.png';
import Page2 from '../assets/imgb2i1.jpg';
import H2bg2 from '../assets/h2bg2.jpg';
import Pic1 from '../assets/pic1.jpg';
import Crown from '../assets/crown.jpg';
import Y1 from '../assets/y1.png';
import Y2 from '../assets/y2.png'
import Y3 from '../assets/y3.webp';
import Ob2 from '../assets/ob2.jpg';
import Bottom4 from '../assets/bottom4.jpg' ;
import Sc1  from '../assets/sc1.png';
import Sc2  from '../assets/sc2.png';
import Sc3  from '../assets/sc3.png';
import Sc4  from '../assets/sc4.png';
import Sc5  from '../assets/sc5.png';
import Sc6  from '../assets/sc6.png';
import Bottombet from '../assets/bottombet.jpg';
import H2b2  from '../assets/h2bg2.jpg';
import H2b3  from '../assets/h2b3.jpg';
import K1  from '../assets/k1.jpg';
import K2  from '../assets/k2.jpg';
import K3  from '../assets/k3.jpg';
import K4  from '../assets/k4.jpg';
import Kg from  '../assets/nav.jpg';
function About() {
  const stories = [
  {
    image: Y1,
    year: "2017",
    title: "Our Story",
    text: "Medieval period oriented living history groups and reenactors focus on recreating civilian or military life in the period of the Middle Ages. It is very popular in Europe. The goal of the reenactor and their group is to portray an accurate interpretation of a person who credibly could exist at a specific plac.",
  },
  {
    image: Y2,
    year: "2001",
    title: "Our Story",
    text: "With such a wide range of eras most medieval reenactment groups focus on a smaller time period, sometimes restricting their interest to a particular century, or even a specific decade, series of battles, or monarch, depending on how authentic the reenactment and encampment is intended to be.",
  },
  {
    image: Y3,
    year: "2009",
    title: "Our Story",
    text: "Founded by a group of enthusiastic people who wanted to enjoy fighting and re-enacting the Medieval period to raise money for charity. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];


  return (
    
    
 <div
  className="relative w-full bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
  style={{ backgroundImage: `url(${Ab1})` }}
>


  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d0] italic mb-4">
      OUR STORY
    </h1>
    <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-yellow-600">
      Home / <span className="text-yellow-600">Our Story</span>
    </p>
  </div>

  
  <div className="absolute bottom-0 left-0 w-full z-10">
    <img
      src={Bottom2}
      className="w-full h-auto object-cover pointer-events-none"
    />
  </div>

  <div className=" h-auto mx-auto relative " style={{backgroundImage:`url(${H2bg2})`}}>
  <div >
   
  <div className="flex flex-col md:flex-row  justify-center gap-10 relative xl:pl-20 xl:pt-10 pt-10 ">

  <div className="relative w-full xl:w-[600px] space-y-6 pr-5 pl-5">
 
  <div className="w-full h-auto md:h-60 lg:h-72 xl:h-80">
    <img
      src={Page2}
      alt="Main"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  
  <div className="w-full aspect-video">
    <iframe
      title="vimeo-player"
      src="https://player.vimeo.com/video/44683622?h=533387c8df"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-xl"
    ></iframe>
  </div>
</div>


  
  <div className="w-full xl:w-1/2 px-4 xl:py-10  item-center">
   <div className='   flex mx-auto  xl:ml-0  gap-2 '>
                <img src={Crown} className='h-5 w-5   '/>
                <p className='font-bold text-yellow-600'>W A T C H</p></div>
    <h2 className="text-lg xl:text-5xl font-bold uppercase gap-10 italic lg:text-2xl">Historical <br></br>Reenactment<br></br> Group</h2>
    <p className="mt-4 text-gray-700">
   We specialise in the high Medieval period. Founded in <br></br>2005 in and around Manchester, we now have members from all over the <br></br>UK. Our interests cover the period from the early middle ages<br></br> and up to the Renaissance.
    </p>
  </div>

</div>


      <img
      src={Bottom2}
      className="w-full h-20 object-cover  "
    />
      
    </div>
    
  </div>

  <div className='bg-[#e8d1af] '>
        <div className="h-screen w-full  overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scroll-smooth no-scrollbar">
  {stories.map((story, index) => (
    <section key={index} className="flex-shrink-0 w-screen h-screen bg-sand text-ink flex flex-col justify-center items-center text-center px-6 snap-start">
       <div className='   flex mx-auto  gap-2 text-center item-center '>
                <img src={Crown} className='h-5 w-5   '/>
                <p className='font-bold text-yellow-600 uppercase '>story</p></div>
      <h1 className="text-4xl font-bold mb-4">{story.title}</h1>

      
      <img
      src={story.image} className="h-60 w-auto my-4 mx-auto object-contain rounded"/>

      <p className="max-w-xl text-gray-700">{story.text}</p>
      <span className="mt-4 text-gold text-lg font-semibold">{story.year}</span>
     
    </section>
 
  ))}
 
</div>
 <img src={Bottom2} class="w-full filter brightness-0 contrast-200 " />
</div>
  <div className=' h-200 w-full bg-cover bg-no-reapt' style={{backgroundImage:`url(${Ob2}`}}>
<div className='  flex-row justify-center items-center text-center object-center pt-40 xl:pr-200 '>
    <div className='  mx-auto '>
                {/* <img src={Crown} className='h-5 w-5   '/> */}
                <p className='font-bold text-yellow-600 uppercase '>Committee</p></div>
                <p className=' text-3xl xl:text-6xl text-[#f5e6d0] font-bold italic pt-5'>Meet the Committee</p>
                <p className='text-[#f5e6d0] pt-10'>The committee is elected each year. To contact them please email. Lorem ipsum dolor sit<br/> amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet<br/> dolore magna.</p>
              <button className='border h-10 w-auto border-yellow-600 rounded-full hover:bg-yellow-600 mt-35 pl-5 pr-5 border-3 uppercase text-white '>send mail</button>
</div>

<img
  src={Bottombet}
  alt="Torn Edge"
  className="mt-52 xl:mt-44 lg:mt-56 md:mt-60 sm:mt-60 w-full"
/>
</div>
<div>
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
  className="w-full py-auto"
  style={{ backgroundImage: `url(${H2b2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
>

  <div className="flex justify-center items-center space-x-3">
    <img src={Crown} className="h-5 w-5" alt="Crown" />
    <p className="font-bold text-yellow-600 tracking-widest">T E A M</p>
  </div>

  <p className="uppercase font-bold text-4xl sm:text-5xl text-center mt-5">Team Members</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-6 sm:px-10 md:px-20">
  
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
 <div className="w-full flex justify-center pt-10">
  <button className="border border-yellow-600 bg-yellow-600 text-white rounded-full px-6 py-3 text-sm md:text-base font-semibold hover:bg-black transition duration-300">
    More Members
  </button> 

  </div>
    <img
      src={Bottom2}
      className="w-full h-auto object-cover     "
    /> 
</div> 


<div className="bg-[#e8d1af] h-auto w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 pt-10">CONTACT DETAILS</h2>

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
  className="w-full h-24 sm:h-32 md:h-40 bg-no-repeat bg-cover bg-center object-cover filter brightness-0 contrast-200  flex-none"
  style={{ backgroundImage: `url(${Bottom2})` }}
></div>
</div>


{/* <div
  className="w-full h-24 sm:h-32 md:h-40 bg-no-repeat bg-cover bg-center  filter brightness-0 contrast-200 "
  style={{ backgroundImage: `url(${Bottom2})` }}
></div> */}

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
    
    
  );
}

export default About;
