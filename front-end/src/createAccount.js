import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';





class CreateAccount extends Component {
    msg = ["", false];


    state = {
        firstname: "",
        lastname: "",
        adress: "",
        password: "",
        email: "",
        phone_number: "",
        status: false,
        message: "",
    }
    handelInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    saveClient = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/addClient', this.state);
            console.log(response);
            if (response.data.status == 200) {
                this.msg = [response.data.message, true];
                console.log(this.msg)
                return (<Navigate to="/Login" />);
            };
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div>

                {this.state && (
                    <div class=" alert alert-success" role="alert">
                        {this.msg[0]}
                    </div>

                )}
                <div className='containerX' >

                    <div className='row'>



                        <div className='col-md-6'>
                            <div className="card text-bg-light mb-3">
                                <Link to='/' className='btn btn-primary'>Back</Link>

                                <div className="card-header"><h4>Create Account</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Register Form</h5>
                                    <form onSubmit={this.saveClient} method="post">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                                person
                                            </span>
                                            </span>
                                            <input type="text" className="form-control" name='firstname' onChange={this.handelInput} value={this.state.firstname} placeholder="First name" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                                person
                                            </span>
                                            </span>
                                            <input type="text" className="form-control" name='lastname' onChange={this.handelInput} value={this.state.lastname} placeholder="Last name" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                                mail
                                            </span></span>
                                            <input type="email" className="form-control" name='email' onChange={this.handelInput} value={this.state.email} placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                                call
                                            </span></span>
                                            <input type="phone" className="form-control" name='phone_number' onChange={this.handelInput} value={this.state.phone_number} placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                                description
                                            </span></span>
                                            <input type="text" className="form-control" name='adress' onChange={this.handelInput} value={this.state.adress} placeholder="Adress" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">
                                                <span class="material-symbols-outlined">
                                                    lock
                                                </span>
                                            </span>
                                            <input type="password" className="form-control" name='password' onChange={this.handelInput} value={this.state.password} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-6">
                                            <button type='submit' className='btn btn-primary'>Save</button>
                                        </div>



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
export default CreateAccount;