import React from 'react'
import '../css/about.css'
function About() {
  return (

    <>
        
        <section id="about" class="about">
            <div class="img-about">
                <img src="images/ansh.jpg" alt=""/>
                <div class="about-content order-last">
                    <span>About Me</span>
                    <p>Java Full Stack Developer</p>
                    <h3 className='jumbotron '>I'm Anshika Bhargav & I'm from Delhi.<br/>I have completed an engineering diploma from<br/> GGPA specialized in computer science 
                        with 80%.<br/> Along with my degree , I'm continuing java, SQL,<br/> and Full Stack courses online.
                        Now I'm ready to apply my<br/> Knowledge into practice, though I do not have any real life<br/> experience.
                        I've had a lot of exposure to the software field .<br/> My Goal is to build a successfull career as a Full <br/>stack developer.
                        Moving for word in my careerI hope to <br/> expand my experience across different industries. <br/>I'm a good learner and team work 
                        that's all about my self.
                    </h3>
                    <div class="action_btns">
                    <button type="button" class="resume"><a href="ANSHIKA.pdf" download="anshika.pdf">Dowmload CV </a></button>
                    </div>    
                </div>
            </div>
        </section>


    </>
  )
}

export default About
