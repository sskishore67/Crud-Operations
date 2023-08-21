  import React from 'react';
  import './CSS/Common.css'
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
import Navbar from './Navbar';
  function Home() {
      return (
              <>
              <Navbar />
      {/*content */}
      <div className='container-fluid mt-2 homebg'>
        <div className='row'>
          <div className='mt-3'>
          <NavLink to="/Newuser"><button  className=" btn btn-success  float-end me-md-5 me-sm-0 t">Add <i class="bi bi-plus"></i></button></NavLink>
          </div>
        </div>
        <div className='row overflow-auto ps-2 pe-2 ps-md-5 pe-md-5 mt-5'>
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
                <td><NavLink to="/Edit"><button type='button' className='btn btn-success'><i class="bi bi-pencil"></i></button></NavLink></td>
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
