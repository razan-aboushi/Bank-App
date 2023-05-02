import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="Main" element={<Main />}>
        </Route>
      </Routes>
      <Footer/>

    </BrowserRouter>
    
  )
}
