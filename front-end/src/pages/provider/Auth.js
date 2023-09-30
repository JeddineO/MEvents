import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Auth(props) {

  const [state, setState] = useState({
    username: '',
    password: '',
    remember: false,
    serverErrors: '',
    successMessage: '',
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const navigate = useNavigate();

  const checkAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/provider/login', state);
      if (response.data.status === 200) {
        setState({ ...state, serverErrors: '' });
        setState({ ...state, successMessage: response.data.message });
        navigate('/provider', { state: { successMessage: response.data.message } });
      }
      // Handle the response here
    } catch (error) {
      setState({ ...state, serverErrors: error.response.data.message});
    }
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="m-auto" style={{ width: "320px" }}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            {state.serverErrors &&
              <div className="alert alert-danger" role="alert">
                {state.serverErrors}
              </div>
            }
            {state.successMessage &&
              <div className="alert alert-success" role="alert">
                {state.successMessage}
              </div>
            }
            <form className="row g-3 needs-validation" onSubmit={checkAuth} noValidate>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" className="form-control" value={state.username} onChange={handleInput} placeholder="Enter your username" required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-control" value={state.password} onChange={handleInput} placeholder="Enter your password" required/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" name="remember" className="form-check-input" value={state.remember} onChange={handleInput} id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Signin</button>
                <Link to="/provider/signup" className="btn btn-link">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;