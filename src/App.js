import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import Footer from './components/footer';
import NewProject from './pages/NewProject';
import Empresa from './pages/Empresa';

export default function App() {
   return (
    <>
      <h1>Front Beginner</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Sobre/>}/>
        <Route path='/contact' element={<Contato/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/newproject' element={<NewProject/>}/>
        <Route path='/company' element={<Empresa/>}/>
      </Routes>
      <Footer/>
    </>
   );
}