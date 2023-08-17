import React from 'react'

function Newuser() {
  return (
    <div className='container-fluid bg-primary pt-5 pb-5'>
        <div className='row'>
       <div className='col-3'></div>
       <div className='col-6  justify-content-center align-item-center'>
       <form>
       <div class="form-floating mb-3 " >
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
</form>
       </div>
       <div className='col-3'></div>
        </div>
    </div>
  )
}

export default Newuser