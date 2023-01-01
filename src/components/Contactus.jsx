import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div>
      <div className="contact">
        <div className="con-heading">
          <h1>CONTACT US</h1>
        </div>
        <div className="con-body">
          <div className="con-left">
            <h2>+91XXXXXXXXXX</h2>
            <h3>www.bdcoe.ac.in</h3>
          </div>
          <div className="con-right">
            <div class="form">
              <form action="#" method="POST">
                <p>
                  {/* <label>Name: </label> */}
                  <input type="text" name="name" placeholder="Name" required />
                </p>
                <p>
                  {/* <label>Email: </label> */}
                  <input type="email" name="Email" placeholder="email" required/>
                </p>
                <p>
                  {/* <label>Message: </label> */}
                  <textarea name="message" placeholder="Your message here..." required></textarea>
                </p>
                <p class="wipeout">
                  <input type="submit" value="Send" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
