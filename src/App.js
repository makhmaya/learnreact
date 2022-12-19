import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import Catalog from './Components/Katalog.jsx';

import {Button, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
<div className="wraper">
<div className="appwraper">
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/catalog" element={<Main/>}/>
  </Routes>
  </BrowserRouter>
          </div>
  <Main />


<Footer />
</div>

  )
}
export default App;
