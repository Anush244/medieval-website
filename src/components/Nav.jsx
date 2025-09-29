import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/nav.jpg";
import Arrow from "../assets/rightbutton.png";
import Castle from "../assets/castlelogo.png";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 pt-auto pb-auto lg:pt-5 lg:pb-5 transition-colors duration-200 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-8xl mx-auto xl:px-8 flex items-center justify-between h-16">
        <Link to="/">
        <div className="flex items-center ">
          <img src={Image1} alt="King" className="w-32 h-12 md:w-40 md:h-14" />
        </div></Link>

        
        <ul className="hidden xl:flex space-x-20 items-center">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">AboutUs</Link></li>
          <li><Link to="/events" className="hover:text-yellow-500">Events</Link></li>
          <li><Link to="/blog" className="hover:text-yellow-500">Blog</Link></li>
          <li><Link to="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
          <li><Link to="/shop" className="hover:text-yellow-500">Shop</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>

    
        <Link to='/contact' className="hidden xl:flex items-center gap-2 border border-yellow-500 text-yellow-500 rounded-full px-5 py-2 hover:bg-yellow-500 hover:text-black transition duration-300">
          <img src={Castle} alt="Castle" className="h-5 w-5" />
          Become a Member
        </Link>

     
        <button
          className="xl:hidden flex items-center text-yellow-500 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

     
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black border-t border-yellow-500 px-4 py-4 flex justify-center">
          <ul className="space-y-3">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">AboutUs</Link></li>
            <li><Link to="/events" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Events</Link></li>
            <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Blog</Link></li>
            <li><Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Gallery</Link></li>
            <li><Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Shop</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-yellow-500 font-semibold">Contact</Link></li>
            <li className="pt-4">
             <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 border border-yellow-500 text-yellow-500 rounded-full px-4 py-2 hover:bg-yellow-500 hover:text-black transition duration-300">
              <img src={Castle} alt="Castle" className="h-5 w-5" />
              Become a Member
            </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
