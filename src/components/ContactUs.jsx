import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [subject, setsubject] = useState("");
const HandleSubmit = (e) => {
    e.preventDefault();
    const sf = {name, email, message, subject}
    fetch("http://localhost:8000/form",{
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sf)
    }).then(()=>{
        alert("form Submitted SuccessFully");
        setemail("")
        setname("")
        setmessage("")
        setsubject("")
       })
    }
  return (
    <div className="container">
      <section className="mb-4">
        <h2 className ="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className ="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className ="row">
          <div className ="col-md-9 mb-md-0 mb-5">
            <form
            
             onSubmit={HandleSubmit}
            >
              <div className ="row">
                <div className ="col-md-6">
                  <div className ="md-form mb-0">
                  <label htmlFor="name">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className ="form-control"
                      value={name}
                      onChange={(e)=>{
                        setname(e.target.value);
                      }}
                      required
                    />
                   
                  </div>
                </div>
                <div className ="col-md-6">
                  <div className ="md-form mb-0">
                  <label htmlFor="email" >
                      Your email
                    </label>
                    <input
                      type="email"
                      className ="form-control"
                       value={email}
                       onChange={(e)=>{
                        setemail(e.target.value)
                       }}
                       required
                    />
                   
                  </div>
                </div>
              </div>
              <div className ="row">
                <div className ="col-md-12">
                  <div className ="md-form mb-0">
                  <label htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      className ="form-control"
                      onChange={(e)=>{
                        setsubject(e.target.value)
                      }}
                      required
                    />
                   
                  </div>
                </div>
              </div>
              <div className ="row">
                <div className ="col-md-12">
                  <div className ="md-form">
                  <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      name="message"
                      rows="2"
                      className ="form-control md-textarea"
                      value={message}
                      onChange={(e)=>{
                        setmessage(e.target.value)
                      }}
                      required
                    ></textarea>
                    
                  </div>
                </div>
              </div>
              <div className ="text-center text-md-left">
              <button
                className ="btn btn-primary my-3"
               type="submit"
              >
                Send
              </button>
            </div>
            </form>

          
            <div className ="status"></div>
          </div>
          <div className ="col-md-3 text-center">
            <ul className ="list-unstyled mb-0">
              <li>
                <i className ="fas fa-map-marker-alt fa-2x"></i>
                <p>Karachi, Pakistan</p>
              </li>

              <li>
                <i className ="fas fa-phone mt-4 fa-2x"></i>
                <p>+0123 456 789</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@Jahanzaibakhtar4@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
                    }

export default ContactUs;
