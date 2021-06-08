import React, {Component } from "react";
import axios from 'axios';
//import signup from '../services/signup'



    function Body(){
    return(

            
            <div>
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="First name"/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Last name" />
                </div>
                <br/>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Enter username" />
                </div>
                <br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control"
                        placeholder="Enter password" />
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <b className="text-danger" id="error"></b>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
            
            </div>
            
        );
    }


export default Body;