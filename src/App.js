import React from 'react';
import styled from 'styled-components'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact/index.jsx'

function App() {
  const AppMainContainer=styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  `
  const AppContainer=styled.div`
  width:100%;
  max-width:1460px;
  margin: 0 auto;
  `
  return (
    <AppMainContainer>
    <AppContainer>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
    </BrowserRouter>
    </AppContainer>
    </AppMainContainer>
  );
}

export default App;
