import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [state, setState] = useState({
    firstname: 'Ismail',
    lastname: 'ZAHIR',
    birth_date: '1990-01-01',
    photo: '',
    phone_number: '0666666666',
    address: 'Kenitra',
    email: 'admin@admin.ma',
    username: 'admin',
    password: 'adminadmin',
    password_confirmation: 'adminadmin',
    serverErrors: {},
    successMessage: '',
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleFileInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.files[0],
    });
  }

  const saveProvider = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/provider/create', state, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.status === 200) {
        setState({ ...state, serverErrors: {} });
        setState({ ...state, successMessage: response.data.message });
        // Redirect to the provider signin page
        // this.context.router.push({
        //   pathname: '/provider/signin',
        //   state: { message: response.data.message },
        // })
      }
      else if (response.data.status === 401) {
        console.log(response.data.message);
      }
      // Handle the response here
    } catch (error) {
      console.error('AxiosError', error);

      if (error.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        // Set serverErrors to the errors received from the server
        setState({ ...state, serverErrors: error.response.data.errors });
      } else if (error.request) {
        // The request was made, but no response was received
        console.log(error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error', error.message);
      }
    }
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="m-auto">
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            {Object.keys(state.serverErrors).length > 0 && (
              <div className="alert alert-danger" role="alert">
                <ul>
                  {Object.keys(state.serverErrors).map((field, index) => (
                    <li key={index}>
                      {field}: {state.serverErrors[field][0]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {state.successMessage && (
              <div className="alert alert-success" role="alert">
                {state.successMessage}
              </div>
            )}
            <form className="row g-3 needs-validation" onSubmit={saveProvider} encType="multipart/form-data" noValidate>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Firstname</label>
                <input type="text" name="firstname" className="form-control" id="firstname" value={state.firstname} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Lastname</label>
                <input type="text" name="lastname" className="form-control" id="lastname" value={state.lastname} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Birth Date</label>
                <input type="date" name="birth_date" className="form-control" id="birth_date" value={state.birth_date} onChange={handleInput} />
              </div>
              <div className="col-md-12">
                <label htmlFor="name" className="form-label">Photo</label>
                <input type="file" name="photo" className="form-control" id="photo" onChange={handleFileInput} />
              </div>
              <div className="col-md-12">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea name="address" className="form-control" id="address" value={state.address} onChange={handleInput}></textarea>
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Phone number</label>
                <input type="text" name="phone_number" className="form-control" id="phone_number" value={state.phone_number} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" name="username" className="form-control" id="username" value={state.username} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Email</label>
                <input type="text" name="email" className="form-control" id="email" value={state.email} onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="password" value={state.password} onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Password confirmation</label>
                <input type="password" name="password_confirmation" className="form-control" id="password_confirmation" value={state.password_confirmation} onChange={handleInput} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Signup</button>
                <Link to="/provider/signin" className="btn btn-link">Signin</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
