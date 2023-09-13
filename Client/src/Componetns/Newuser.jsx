import {React,useState} from 'react'
import Navbar from './Navbar'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
function Newuser() {
  const navigate=useNavigate();
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
      const submit=(e)=>{
         e.preventDefault();
         axios.post('http://localhost:8081/users',values)
         .then((res)=>
         {
          alert("Added successfully");
         navigate("/Home")
        })
         .catch((err)=>{console.log(err)});
      }
      return (
        <>
        <Navbar />
        <div className='container-fluid homebg pt-5 pb-5'>
            <div className='row'>
              <div className='text-center mb-5'><h3 className=''>Add New User</h3></div>
           <div className='col-md-3 col-1'></div>
           <div className='col-md-6 col-10 justify-content-center align-item-center'>
           <form onSubmit={submit}>
           <div class="form-floating mb-3 " >
      <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={change} name='Name' value={values.name}/>
      <label for="floatingInput">Name</label>
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
      <select className='form-select' id="floatingSelect"  onChange={change} name='Year' value={values.Year}>
        <option selected>Select the Year</option>
        <option value={1} >I</option>
        <option value={2}>II</option>
        <option value={3}>III</option>
        <option value={4}>IV</option>
      </select>
       <label for="floatingInput">Year</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Address"  onChange={change} name='Address' value={values.Address}/>
      <label for="floatingInput">Address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" id="floatingInput" placeholder="Mobile no" inputMode='tel' pattern="^[789]\d{9}$" onChange={change} name='Mobileno' value={values.Mobileno}/>
      <label for="floatingInput">Mobile no</label>
    </div>
    <div className='text-center'><button className='btn btn-primary'>Add</button> </div>
    </form>
           </div>
           <div className='col-3'></div>
            </div>
        </div>
        </>
      )
    }

export default Newuser
