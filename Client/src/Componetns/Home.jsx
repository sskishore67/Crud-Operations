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
          <Link to="/Signup" className='Navlink'><a class="nav-link">Signup</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    {/*content */}
    <div className='container-fluid mt-2 '>
      <div className='row'>
        <div className='mt-3'>
        <button type='button' className='btn btn-success float-end'>Add User</button>
        </div>
      </div>
      <div className='row overflow-auto ps-5 pe-5 mt-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Address</th>
              <th>Mobileno</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kishore</td>
              <td>B.Tech</td>
              <td>Information Technology</td>
              <td>IV</td>
              <td>Tiruchengode</td>
              <td>000000000</td>
              <td><button type='button' className='btn btn-success'><i class="bi bi-pencil"></i></button></td>
              <td><button type='button' className='btn btn-success'><i class="bi bi-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
            </>
    );
}

export default Home;
