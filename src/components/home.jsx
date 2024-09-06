import React from 'react'
import '../css/home.css';
// import pdfFile from './ANSHIKA.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

const Home = ()=>{
  return (
    <>


        <section class="section">
          <div class="section_container">
            <div class="content">
              <p class="subtitle">HELLO</p>
              <h1 class="title">
                I'm <span>Anshika<br/>a</span> Front End Developer
              </h1>
              <p class="description">
                Welcome to my Front End developer Portfolio! I'm Anshika, 
                a skilled and creative web developer with a passion for creating
                beautiful, responsive, and user-friendly website. I've worked on
                a variety of web projects, ranging from personal blogs to e-commerce 
                platforms.
              </p>
                <div class="action_btns">
                    <button class="hire_me">Hire Me</button>
                    {/* <button type="button" class="resume"><a href="ANSHIKA.pdf" download="anshika.pdf">Dowmload CV </a></button> */}
                       
                    {/* <!-- <button class="portfolio">Download CV</button> --> */}
                </div>
              </div> 
              <div class="image">
                 <img src="images/ansh.jpg" alt="portfolio"/>
              </div>

              <div class="social-icons">
                <a href="#"><i class="bi bi-linkedin"></i></a> 
                <a href="#"><i class="bi bi-instagram"></i></a> 
                <a href="#"><i class="bi bi-facebook"></i></a> 
                <a href="#"><i class="bi bi-twitter"></i></a> 
              </div>
           </div>
        </section>
      </>
    )
}

export default Home



















        {/* <div class="container ">
           <div class="section_container">
              <div class="content "> */}
                {/* <p class="subtitle">HELLO</p> */}
                {/* <h1 class="title"> */}
                    {/* I'm <span>Anshika</span> 
                    <h2>Front End Developer</h2>
                </h1> */}
                {/* <p class="jumbotron">
                    Welcome to my Front End developer Portfolio! I'm Anshika, 
                    a skilled and creative web developer with a passion for creating
                    beautiful, responsive, and user-friendly website. I've worked on
                    a variety of web projects, ranging from personal blogs to e-commerce 
                    platforms. */}
                {/* </p>
                <div class="action_btns"> */}
                    {/* <button class="hire_me">Hire Me</button> */}
                    // <Button varient="dark" href="public/ANSHIKA.paf" download>Dowmload CV</Button>

                    {/* <a href={pdfFile} download="ANSHIKA.pdf"><button type="button" class="resume">Dowmload CV</button></a>  */}
                {/* </div>
              </div>
              <div class="image">
                 <img src="images\ansh.jpg" class="img-circle order-last" alt="" width="304" height="240"/> 
              </div>

              <div class="container1">
                <a href="#"><i class="bi bi-linkedin"></i></a> 
                <a href="#"><i class="bi bi-instagram"></i></a> 
                <a href="#"><i class="bi bi-facebook"></i></a> 
                <a href="#"><i class="bi bi-telegram"></i></a> 
              </div>
               
          </div>
        </div> */}

































       
            {/* <div class="container">
                <h1>Welcom to My Portfolio</h1>
                <p>This is a simple hero unit, a simple jumbotron-style  component for calling extra attention to featured content or information.</p>
                <button type="button" class="btn btn-info">View Projects</button>
                <button type="button" class="btn btn-info"><a href="ANSHIKA.pdf" download="anshika.pdf">Download CV</a></button>
            </div> */}
            {/* <button type="button" class="resume"><a href="ANSHIKA.pdf" download="anshika.pdf">Dowmload CV</button>
            </a> */}
   