// import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import React, { Component } from "react";

export class Form extends Component{
    render(){
        return(
            <Grid fluid>
                <Row>
                    <Col md={6}>
                        <Card 
                            title="Register or Login"
                            category="Please login with your credentials"
                            stats="test"
                            credit="Santosh"
                            content={
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
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Form;