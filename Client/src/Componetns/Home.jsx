import React from 'react';
import './CSS/Common.css'
import {Link} from 'react-router-dom';
function Home() {
    return (
            <>
                {/*Navbar */}
            <div className='container-fluid'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand">
        <img src="https://o.remove.bg/downloads/bf7c7d0c-5b91-493c-be8e-e2ae9ce2e0bd/images-removebg-preview.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
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
          <Link to="/Signup" className='Navlink'><a class="nav-link">Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    {/*content */}
    <div className='row mt-2'>
      <div className='col-12 text-center'><h2>Crud Operator</h2></div>
      </div>
            </>
    );
}

export default Home;