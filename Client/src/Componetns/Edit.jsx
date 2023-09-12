import React from 'react'
import Navbar from './Navbar'
function Edit() {
  return (
    <>
    <Navbar />
    <div className='container-fluid homebg pt-5 pb-5'>
        <div className='row'>
          <div className='text-center mb-5'><h3 className=''>Update User</h3></div>
       <div className='col-md-3 col-1'></div>
       <div className='col-md-6 col-10 justify-content-center align-item-center'>
       <form >
       <div class="form-floating mb-3 " >
  <input type="text" class="form-control" id="floatingInput" placeholder="Name" />
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Department" />
  <label for="floatingInput">Department</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Branch"  />
  <label for="floatingInput">Branch</label>
</div>
<div class="form-floating mb-3">
  <select className='form-select' id="floatingSelect" >
    <option selected>Select the Year</option>
    <option value={1} >I</option>
    <option value={2}>II</option>
    <option value={3}>III</option>
    <option value={4}>IV</option>
  </select>
   <label for="floatingInput">Year</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Address"  />
  <label for="floatingInput">Address</label>
</div>
<div class="form-floating mb-3">
  <input type="tel" class="form-control" id="floatingInput" placeholder="Mobile no" inputMode='tel' pattern="^[789]\d{9}$"/>
  <label for="floatingInput">Mobile no</label>
</div>
<div className='text-center'><button className='btn btn-primary'>Update</button> </div>
</form>
       </div>
       <div className='col-3'></div>
        </div>
    </div>
    </>
  )
}

export default Edit