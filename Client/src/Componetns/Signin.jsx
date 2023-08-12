import React from 'react';
import {Link} from 'react-router-dom';
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
          <Link to="/Home"className='Navlink'><a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Signup"className='Navlink'><a class="nav-link" >Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
       {/*Form for signup */}
           <div className='container-fluid'>
            <div className='row  mt-5 form-bg'>
            
      <div className='col-2'></div>
      <div className='col-8 form'>
      <div className='row'>
      <div className='row text-center'><h2>Signin</h2></div>
      <div className='col-1 mt-2'></div>
        <div className='col-sm-5 mt-2'>
          <img style={{width:'85%'}} className=' h-75 mt-3' src="data:image/jpeg;base64,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" alt="" />
        </div>
      <div className='col-sm-5 mt-2'>
      <div class="form-floating mb-3 mt-5">
  <input type="email" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" />
  <label for="floatingPassword">Password</label>
</div>
<div className='row mt-4'>
      <div className='col-1'></div>
  <div className='col-4 text-center'>
<button type='button' className='btn mt-2'>Submit</button></div>
      <div className='col-6 text-center'>
  <div className='btn'><Link to="/Sigup" className='Navlink'>click here to register</Link></div></div>
</div>

</div>
</div>
</div>
<div className='col-2'></div>
</div>
</div>
            </>
     
    );
}
export default Signup;