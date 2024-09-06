// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/sidebar';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
// import Footer from './components/footer'
import Project from './components/project';
// import Skillspage from './pages/skillspage';
// import Homepage from './pages/homepage';
// import Aboutpage from './pages/aboutpage';
// import Projectpage from './pages/projectpage';
// import Contactpage from './pages/contactpage';
import Footer from './components/footer';



function App() {
  return (
      <>
      
       {<Header/>}

       

       {<Home/>}
       <br/>
       {<About/>}
       <br/>
        {<Skills/>}
      <br/>
      {<Project/>}
    <br/>
    {<Contact/>}
    {/* <br/> */}
    {/* {<Footer/>} */}

    {/* <BrowserRouter>
        <Routes>
          <Route path='/handleClickHome' element={<Homepage/>}/>

          <Route path='/handleClickAbout' element={<Aboutpage/>}/>

          <Route path='/handleClickSkills' element={<Skillspage/>}/>

          <Route path='/handleClickProjects' element={<Projectpage/>}/>
          
          <Route path='/handleClickContact' element={<Contactpage/>}/>
        </Routes>
    </BrowserRouter> */}
     <br/>
     {<Footer/>}
      </>
  );
}

export default App;
