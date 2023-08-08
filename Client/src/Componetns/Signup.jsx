import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './CSS/Signup.css'
import Signupvalidation from './Validations/Signupvalidation';

function Signup() {

{/*Store the values form form*/}
  const [values,setvalue]=useState({
    Firstname:"",
    Lastname:"",
    Email:"",
    Password:""
  })

  {/*getvalues form form and pass to values*/}
  const input=(e)=>{
setvalue(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  {/*Store the error for validations*/}
  const[errors,seterrors]=useState({});

  {/*Submit the form*/}
  const submit=(e)=>{
    e.preventDefault();
    seterrors(Signupvalidation(values));
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', values);
    }
  }
    return (
            <>
       {/*Navbar */}
       <div className='container-fluid'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/Home" className='Navlink'><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Sigin" className='Navlink'><a class="nav-link">Signin</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
       {/*Form for signup */}
           <div className='container-fluid'>
            <div className='row  mt-5 form-bg'>
              <div className='row text-center'><h2>Signup</h2></div>
      <div className='col-sm-3 col-md-2 col-lg-4'></div>
      <div className='col-sm-6 col-md-6 col-lg-4'>
        <form onSubmit={submit}>
      <div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" id="floatingInput" onChange={input} name='Firstname' value={values.Firstname}/>
  <label for="floatingInput" className='floating-label'>FirstName</label>
  <p className="text-danger">{errors.Firstname}</p>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" onChange={input} name='Lastname' value={values.Lastname}/>
  <label for="floatingInput" className='floating-label'>LastName</label>
  <p className="text-danger">{errors.Lastname}</p>
</div>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput"onChange={input} name='Email' value={values.Email} />
  <label for="floatingInput" className='floating-label'>Email address</label>
  <p className="text-danger">{errors.Email}</p>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" onChange={input} name='Password' value={values.Password}/>
  <label for="floatingPassword">Password</label>
  <p className="text-danger">{errors.Password}</p>
</div>
<p className='row mt-3'>
  <div className='col-2'></div>
  <div className=' text-center '>
    <div className='btn'><Link to="/Sigin">click here to login</Link></div>
  </div>
</p>
<div className='text-center'>
<button type='submit' className='btn'>Submit</button></div>
</form>
</div>
<div className='col-sm-3 col-md-2 col-lg-4'></div>
</div>
</div>
  </>
    );
}
export default Signup;