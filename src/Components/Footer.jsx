import React from 'react';
import FOOTERTOP from './footer/FOOTERTOP';
import FOOTERMAIN from './footer/FOOTERMAIN';
import './footer/footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FOOTEREND from './footer/FOOTEREND';
import Footercatalog from './footer/Footercatalog';

const Footer=()=>{
  const data = [
    { title: "katalog avto" },
    { title: "avtosprobegom" },
    { title: "katalog avto" },
  ]
 
  return (

    <footer>
 
      <BrowserRouter>
        <FOOTERTOP />
      <Routes>
          <Route path='/footer-catalog' element={<FOOTERMAIN/>}/>
          <Route path='/avtosprobegom'  element={<Footercatalog />}/>
          <Route path='/kredit'         element={<FOOTERMAIN />} />
      </Routes>
      </BrowserRouter>
    <FOOTEREND/>
    </footer>
  )
}
export default Footer