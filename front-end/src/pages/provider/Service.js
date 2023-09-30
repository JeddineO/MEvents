import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Service() {

  const [state, setState] = useState({
    services: {},
    serverErrors: '',
  });

  const componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/provider/services');
      console.log(response);
      if (response.data.status === 200) {
        setState({ ...state, services: response.data.services });
      }
    } catch (error) {
      setState({ ...state, serverErrors: error.response.data.message});
    }
  }

  return (
    <div className='py-5'>
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              {state.serverErrors && (
                <div className='alert alert-danger'>{state.serverErrors}</div>
              )}
              <div className='card-header'>
                <h4>Services
                  <Link to='/provider/services/create' className='btn btn-primary btn-sm float-end'>Add Service</Link>
                </h4>
              </div>
              <div className='card-body'>
                <table className='table table-stripped'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.services.length > 0 ? (
                      state.services.map((service) => (
                        <tr>
                          <td>{service.name}</td>
                          <td>{}</td>
                          <td>
                            <Link to={`/provider/services/${service.name}`} className='btn btn-primary btn-sm'>Edit</Link>
                            <button type='button' className='btn btn-danger btn-sm'>Delete</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3}>No services found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;