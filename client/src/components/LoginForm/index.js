import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


function LoginForm(props){


    return(
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mx-auto" id="login">
                    <form id="login-form" >
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
  
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-3"></div>      
            </div>
        </div>

    )
    };
    export default LoginForm;