import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
         {/*Navbar */}
            <div className=''>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand">
    <h5>CRUD</h5>
              </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/Home" className='Navlink'><a class="nav-link active me-3" aria-current="page">Home</a></NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar;