import React from 'react'
import '../css/contact.css'
const Contact = ()=>{
  return (
    <>
         <section id="contact" class="contact">
            <div class="main-contact">
                <span>Ask me question </span>
              {/* <h2>Contact Me   </h2> */}

              <br/><br/>
              <form>
                   {/* <!-- <h3>Send me a message</h3><br/> --> */}
                  <input type="text" placeholder="Your Name"/><br/><br/>
                  <input type="email" placeholder=" Your Email "/><br/><br/>
                  <input type="text" placeholder=" Your Address"/><br/><br/>
                  {/* <input type="text" placeholder=" Phone Number"/><br/><br/> */}
                  <textarea name="" id="" rows="10" columns="30" placeholder=" Your Message"></textarea><br/><br/>
                  <div class="btn-box formBtn">
                     <button type="submit" class="btn">Send Message</button>
                  </div>
              </form>
          </div> 
        </section>
    </>
  )
}

export default Contact









   

