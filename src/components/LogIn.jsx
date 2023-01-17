import React from 'react'
import { useState } from 'react'

const LogIn = (props) => {
    console.log(props)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const myStyle ={
        // padding-left: "2.5rem",
        //  padding-right : "2.5rem"
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem"
    }
   const handleLogin = (e) => {
        e.preventDefault();
        const user = {email, password};
        fetch('https://apingweb.com/api/login',{
            method: 'POST',
            headers: new Headers({
             'Authorization': 'Basic ',
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success === true) {
             props.anonymousFunc(true)
            } 
         
        })
        .catch(error => console.error(error))
    }
  return (
    <div>
       <section className="vh-90 my-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleLogin}>
            <h1 className='text-primary '>Welcome To Our Shopping Center</h1>         
          <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" value={email} onChange={(e)=>{
               setEmail(e.target.value);
              }} />
          </div>

          
          <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" value={password} onChange={(e)=>{
                setPassword(e.target.value);
              }} />
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={myStyle} >Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>
    </div>
  )
}

export default LogIn
