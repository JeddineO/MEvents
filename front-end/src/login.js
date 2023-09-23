import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from "axios";


class Login extends Component {
    state = {
        name: "",
        course: "",
        email: "",
        phone: "",
    }
    handelInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                                <form onSubmit={this.saveStudent} method="post">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                            person
                                        </span>
                                        </span>
                                        <input type="text" className="form-control" name='name' onChange={this.handelInput} value={this.state.name} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><span className="material-symbols-outlined">
                                            description
                                        </span></span>
                                        <input type="text" className="form-control" name='course' onChange={this.handelInput} value={this.state.course} placeholder="Course" aria-label="Username" aria-describedby="basic-addon1" />
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