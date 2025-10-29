
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import About from './components/About';

import Home from './components/Home';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Gallery from'./components/Gallery';
import Contact from './components/Contact';
import Shop from './components/shop';
import List from './components/list';
import Grid from './components/grid';
function App() {
  return (
    <Router>
      <Nav />
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/home1" element={<Home1 />} /> */}
        {/* <Route path="/home2" element={<Home2 />} /> */}
        {/* <Route path="/home3" element={<Home3 />} /> */}
        {/* <Route path="/ecommerce" element={<Ecommerce />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/ourteam" element={<Ourteam />} /> */}
        {/* <Route path="/rules" element={<Rules />} /> */}
        {/* <Route path="/typography" element={<Typography />} /> */}
        {/* <Route path="/shortcodes" element={<Shortcodes />} /> */}
        {/* <Route path="/serviceplus" element={<Serviceplus />} /> */}
        {/* <Route path="policy" element={<Policy />} /> */}
        <Route path="/events" element={<Events/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        {/* <Route path="/grid" element={<Grid/>}/> */}
        {/* <Route path="/list" element={<List/>}/> */}

    </Routes>
    </Router>
  );
}

export default App;