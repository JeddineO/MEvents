import React, { Component } from "react";
import Link from "react-router-dom";
import axios from "axios";

class Show extends Component {

  state = {
    provider: {},
    firstname: '',
    lastname: '',
    birth_date: '',
    photo: '',
    phone_number: '',
    address: '',
    email: '',
    username: '',
    password: '',
    serverErrors: {},
  }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFileInput = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  }

  async componentDidMount() {
    
    // try {
    //   const id = this.props.match.params.provider;
    //   console.log(id);
    //   const response = await axios.get('http://localhost:8000/api/provider/show/' + id);
    //   console.log(response);
    //   if (response.data.status === 200) {
    //     const providerData = response.data.provider;
    //     this.setState({
    //       provider: providerData,
    //       firstname: providerData.firstname,
    //       lastname: providerData.lastname,
    //       birth_date: providerData.birth_date,
    //       address: providerData.address,
    //       phone_number: providerData.phone_number,
    //       username: providerData.username,
    //       email: providerData.email,
    //       photo: providerData.photo,
    //     });
    //   }
    // } catch (error) {
    //   console.error('AxiosError', error);
    // }
  }

  render() {
    return (
      <div className='py-5'>
        <div className="container">
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
                  <h4>Profile</h4>
                </div>
                {Object.keys(this.state.serverErrors).length > 0 && (
                  <div className="alert alert-danger" role="alert">
                    <ul>
                      {Object.keys(this.state.serverErrors).map((field, index) => (
                        <li key={index}>
                          {field}: {this.state.serverErrors[field][0]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className='card-body'>
                  <form encType="multipart/form-data">
                    {/* sow image */}
                    <div className="mb-3">
                      <img src={'http://localhost:8000/storage/' + this.state.provider.photo} alt={this.state.provider.firstname} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Firstname</label>
                      <input type="text" name="firstname" className="form-control" id="firstname" value={this.state.firstname} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Lastname</label>
                      <input type="text" name="lastname" className="form-control" id="lastname" value={this.state.lastname} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Birth Date</label>
                      <input type="date" name="birth_date" className="form-control" id="birth_date" value={this.state.birth_date} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Photo</label>
                      <input type="file" name="photo" className="form-control" id="photo" onChange={this.handleFileInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea name="address" className="form-control" id="address" value={this.state.address} onChange={this.handleInput}></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Phone number</label>
                      <input type="text" name="phone_number" className="form-control" id="phone_number" value={this.state.phone_number} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Username</label>
                      <input type="text" name="username" className="form-control" id="username" value={this.state.username} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Email</label>
                      <input type="text" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="password" value={this.state.password} onChange={this.handleInput} />
                    </div>
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Show;