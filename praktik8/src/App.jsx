import React from 'react';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About/>} />
    <Route path="Products" element={<Products/>} />
    <Route path="products/ :id" element={<ProductDetail/>} />
    <Route path="contact" element={<About/>} />
    <Route path="*" element={<NotFound/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
