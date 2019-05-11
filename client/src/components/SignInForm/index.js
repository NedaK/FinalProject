import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


function SignInForm(props){


    return(
        <div className="container">
            <div className="row">
            <div className="col-3"></div>
            <div className="col-6 mx-auto" id="signin">


            <form id="login-form" >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div class="form-group">
                <label>First Name</label>
                    <input type="text" class="form-control" id="FirstName" aria-describedby="firstName" placeholder="Enter First Name" />
                </div>

                <div class="form-group">
                <label>Last Name</label>
                    <input type="text" class="form-control" id="LastName" aria-describedby="lastName" placeholder="Enter Last Name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="col-3"></div>
            </div>
        </div>

    )
    };
    export default SignInForm;