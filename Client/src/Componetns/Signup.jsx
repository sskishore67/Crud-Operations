import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Signupvalidation from './Validations/Signupvalidation';
import axios from 'axios';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
function Signup() {
  {/*used to navigate the page*/}
  
  const navigate = useNavigate();
{/*Store the values form form*/}
  const [values,setvalue]=useState({
    Firstname:"",
    Lastname:"",
    Email:"",
    Password:""
  })

  {/*getvalues form form and pass to values*/}
  const input=(e)=>{
setvalue(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  {/*Store the error for validations*/}
  const[errors,seterrors]=useState({});

 {/*Check the submit*/}
  const [submitted, setSubmitted] = useState(false);

  {/*Submit the form*/}
  const submit=(e)=>{
    e.preventDefault();
    seterrors(Signupvalidation(values));
    setSubmitted(true); 
  };
  {/*check the validation and post the data to the database*/}
  useEffect(() => {
    if (submitted && Object.keys(errors).length === 0) {
      axios.post('http://localhost:8081/tests', values)
        .then((res) => {
          alert('Registered successfully');
          navigate("/Signin")
        })
        .catch((err) => console.log(err));
    }
  }, [submitted, errors, values,navigate]);
    return (
            <>
       {/*Form for signup */}
           <div className='container-fluid '>
            <div className='row  form-bg'>
              <div className='col-2'></div>
              <div className='col-8 form'>
              <div className='row text-center text-muted'><h2>Signup</h2></div>
      <div className='row mt-2'>
        <div className='col-sm-5 mx-2 mt-2'>
          <img style={{height:'80%'}} className=' w-100' src="data:image/jpeg;base64,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" alt="" srcset="" />
        </div>
      <div className='col-sm-6'>
        <form onSubmit={submit}>
      <div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" id="floatingInput" onChange={input} name='Firstname' value={values.Firstname}/>
  <label for="floatingInput" className='floating-label'>FirstName</label>
  <p className="text-danger">{errors.Firstname}</p>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" onChange={input} name='Lastname' value={values.Lastname}/>
  <label for="floatingInput" className='floating-label'>LastName</label>
  <p className="text-danger">{errors.Lastname}</p>
</div>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput"onChange={input} name='Email' value={values.Email} />
  <label for="floatingInput" className='floating-label'>Email address</label>
  <p className="text-danger">{errors.Email}</p>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" onChange={input} name='Password' value={values.Password}/>
  <label for="floatingPassword">Password</label>
  <p className="text-danger">{errors.Password}</p>
</div>
<p className='row mt-3'>
  <div className='col-2'></div>
  <div className=' text-center '>
    <div className='row mt-2'>
      <div className='col-1'></div>
  <div className='col-md-4 col-sm-5  text-center'>
<button type='submit' className='btn'>Submit</button></div>
  <div className='col-sm-5 btn'><NavLink to="/Signin" className='Navlink '>click here to login</NavLink></div>
  </div>
  </div>
</p>

</form>
</div>
</div>
</div>
<div className='col-sm-2'></div>
</div>
</div>
  </>
    );
}
export default Signup;