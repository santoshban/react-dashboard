import React, { Component } from "react";

export class Form extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter your email address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Form;