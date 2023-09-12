import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CSS/Common.css'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
  function Home() {
    const[record,setrecord]=useState([])
    useEffect(()=>{
  axios.get('http://localhost:8081/users')
  .then(result=>setrecord(result.data))
  .catch(err=>console.log(err))
    },[]);
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
            {record.length >0? ( 
              record.map((user)=>{
              return <tr>
                <td>{user.Name}</td>
                <td>{user.Department}</td>
                <td>{user.Branch}</td>
                <td>{user.Year}</td>
                <td>{user.Address}</td>
                <td>{user.Mobileno}</td>
                <td><NavLink to="/Edit"><button type='button' className='btn btn-success'><i class="bi bi-pencil"></i></button></NavLink></td>
                <td><button type='button' className='btn btn-success'><i class="bi bi-trash"></i></button></td>
              </tr>
              })
              ):(<tr className='bg-white '><td colspan="8">No Record Found</td></tr>)}
            </tbody>
          </table>
        </div>
        </div>
              </>
      );
  }

  export default Home;
