import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Signup.css'
function Signup() {
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
          <Link to="/Home"><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Signup"><a class="nav-link">Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
       {/*Form for signup */}
            <div className='row container-fluid mt-5'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
      <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>FirstName</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>LastName</label>
</div>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" />
  <label for="floatingPassword">Password</label>
</div>
</div>
<div className='col-sm-4'></div>
</div>
            </>
     
    );
}

export default Signup;