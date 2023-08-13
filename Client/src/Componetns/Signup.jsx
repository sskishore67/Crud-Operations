import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Signupvalidation from './Validations/Signupvalidation';
import axios from 'axios';
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
  };
    return (
            <>
       {/*Navbar */}
       <div className='container-fluid'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
  <a class="navbar-brand">
        <img src="data:image/jpeg;base64,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" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
      </a>
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
            <div className='row  mt-3 form-bg'>
            
              <div className='col-2'></div>
              <div className='col-8 form'>
              <div className='row text-center text-muted'><h2>Signup</h2></div>
      <div className='row mt-2'>
        <div className='col-sm-5 mx-2 mt-2'>
          <img style={{height:'80%'}} className=' w-100' src="data:image/jpeg;base64,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" alt="" srcset="" />
        </div>
      <div className='col-sm-6'>
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
    <div className='row mt-2'>
      <div className='col-1'></div>
  <div className='col-md-4 col-sm-5  text-center'>
<button type='submit' className='btn'>Submit</button></div>
  <div className='col-sm-5 btn'><Link to="/Sigin" className='Navlink '>click here to login</Link></div>
  </div>
  </div>
</p>

</form>
</div>
</div>
</div>
<div className='col-sm-2'></div>
</div>
</div>
  </>
    );
}
export default Signup;