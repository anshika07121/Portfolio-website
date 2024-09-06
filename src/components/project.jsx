import React from 'react'
import '../css/project.css';
const Project = ()=>{
  return (
    <>
         
         <section id="portfolio" class="portfolio">
            <div class="main-text">
                {/* <span>What I will do for you</span> */}
                <h2>Latest Project</h2>
            </div>

            <div class="container">
                  <div class="portfolio-gallery">
                    <div class="port-box mix product">
                        <div class="port-image">
                            <img src="./images/to-do.JPG" alt=""/>
                        </div>
                        {/* <div class="port-content">
                             <h3>To_Do List App</h3>
                            <p>Lorem ipsum sit consecteter elit.this known as well as </p>
                            <a href="#"><i class="ri-external-link-line"></i></a> 
                        </div> */}
                    </div>

                    <div class="port-box mix interacting">
                        <div class="port-image">
                            <img src="./images/q.jpg" alt="" height="200" width="250"/>
                        </div>
                        {/* <div class="port-content">
                             <h3>Music Player App</h3>
                            <p>Lorem ipsum sit consecteter elit.this known as well as </p>
                            <a href="#"><i class="ri-external-link-line"></i></a> 
                        </div> */}
                    </div>

                    <div class="port-box mix web">
                        <div class="port-image">
                            <img src="./images/music.JPG" alt=""/>
                        </div>
                        {/* <div class="port-content">
                             <h3>QR Generator App</h3>
                            <p>Lorem ipsum sit consecteter elit.this known as well as </p>
                            <a href="#"><i class="ri-external-link-line"></i></a> 
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
                              
                             







        {/* <div class="container ">
          <div class="section_container section2">
            <div className='row'>
              <div className='col-md-12'>
                <div class="main-text">
                   <h5>Latest Project</h5>
                </div>
                </div>
                </div>
                <div className='row'>
                <div className='col-sm-6'>
                <div class="image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveC3aFfRPYg2nHEsClIFO6WXPOe-cawYyXg&s" class="img-thumbnail" alt="" width="300" height="300"/> 
                </div>
                </div>
                <div className='col-md-6'>
                <div class="image">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com" class="img-thumbnail" alt="" width="300" height="300"/> 
                </div>
            </div>
            </div> 
          </div> */}
        {/* </div> */}
    </>
  )
}

export default Project



                        