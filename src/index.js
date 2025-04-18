import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Shop from './Shop';
import Home from './Home';
import Furniture from './Furniture';
import Electronics from './Electronics';
import Sale from './Sale';
import ContactUs from './ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

