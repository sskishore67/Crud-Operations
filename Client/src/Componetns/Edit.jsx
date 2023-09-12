import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const [datas, setDatas] = useState({
    Name: '',
    Department: '',
    Branch: '',
    Year: '',
    Address: '',
    Mobileno: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/users/${id}`)
      .then((result) => {
        // Log the response data to check if you're getting the expected data
        console.log(result.data);
        // Set the retrieved data in the state
        setDatas(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const change = (e) => {
    setDatas((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/users/${id}`, datas) // Use PUT request to update the user data
      .then((res) => {
        alert('Updated successfully');
        navigate('/Home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid homebg pt-5 pb-5'>
        <div className='row'>
          <div className='text-center mb-5'>
            <h3 className=''>Edit User</h3>
          </div>
          <div className='col-md-3 col-1'></div>
          <div className='col-md-6 col-10 justify-content-center align-item-center'>
            <form onSubmit={submit}>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='floatingInput'
                  placeholder='Name'
                  onChange={change}
                  name='Name'
                  value={datas.Name}
                />
                <label htmlFor='floatingInput'>Name</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='floatingInput'
                  placeholder='Department'
                  onChange={change}
                  name='Department'
                  value={datas.Department}
                />
                <label htmlFor='floatingInput'>Department</label>
              </div>
              {/* ... (other input fields) */}
              <div className='text-center'>
                <button className='btn btn-primary'>Update</button>
              </div>
            </form>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </>
  );
}

export default Edit;
