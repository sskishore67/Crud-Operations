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
          <Link to="/Signup" className='Navlink'><a class="nav-link">Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    {/*content */}
    <div><h1>Home</h1></div>
            </>
    );
}

export default Home;