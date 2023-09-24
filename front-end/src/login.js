import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    handelInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', this.state);
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }


    render() {
        return (


            <div className='containerX' >
                <div className='row'>

                    <div className='col-md-6'>
                        <div className="card text-bg-light mb-3">
                            <Link to='/' className='btn btn-primary'>Back</Link>

                            <div className="card-header"><h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <form onSubmit={this.Login} method="post">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                            person
                                        </span>
                                        </span>
                                        <input type="text" className="form-control" name='email' onChange={this.handelInput} value={this.state.email} placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                            description
                                        </span></span>
                                        <input type="text" className="form-control" name='password' onChange={this.handelInput} value={this.state.password} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="input-group mb-6">
                                        <button type='submit' className='btn btn-primary'>Login</button>
                                    </div>



                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default Login;