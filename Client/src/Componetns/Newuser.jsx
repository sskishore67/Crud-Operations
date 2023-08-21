import React, { useState } from 'react'
import Navbar from './Navbar'
function Newuser() {
  const[values,setvalues]=useState(
    {
    Name:"",
    Department:"",
    Branch:"",
    Year:"",
    Address:"",
    Mobileno:""
  }
  )
  const change=(e)=>{
setvalues(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const submit=()=>{
     e.preventDefault();
     
  }
  return (
    <>
    <Navbar />
    <div className='container-fluid homebg pt-5 pb-5'>
        <div className='row'>
          <div className='text-center mb-5'><h3 className=''>Add New User</h3></div>
       <div className='col-3'></div>
       <div className='col-6 justify-content-center align-item-center'>
       <form onSubmit={submit}>
       <div class="form-floating mb-3 " >
  <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name" onChange={change} name='Name' value={values.Name}/>
  <label for="floatingInput">Enter your name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Department" onChange={change} name='Department' value={values.Department}/>
  <label for="floatingInput">Department</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Branch"  onChange={change} name='Branch' value={values.Branch}/>
  <label for="floatingInput">Branch</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Year"  onChange={change} name='Year' value={values.Year}/>
  <label for="floatingInput">Year</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Address"  onChange={change} name='Address' value={values.Address}/>
  <label for="floatingInput">Address</label>
</div>
<div class="form-floating mb-3">
  <input type="tel" class="form-control" id="floatingInput" placeholder="Mobile no" pattern="/^([+]\d{2})?\d{10}$/" onChange={change} name='Mobileno' value={values.Mobileno}/>
  <label for="floatingInput">Mobile no</label>
</div>
<div className='text-center'><div className='btn btn-primary'>Submit</div> </div>
</form>
       </div>
       <div className='col-3'></div>
        </div>
    </div>
    </>
  )
}

export default Newuser