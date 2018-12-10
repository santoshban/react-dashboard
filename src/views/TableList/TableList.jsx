import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

// class myTableList extends Component{
//   render(){
//     return(
//       <div className="tab-wrapper">
//         <Grid fluid>
//           <Row>
//             <Col md={6}>
//               <Card 
//                 title="My custom table"
//                 category="Subtitle of my custom table"
//                 ctTableFullWidth
//                 ctTableResponsive
//                 content={
//                   <Table striped hover>
//                     <thead>
//                       <tr>
//                         <th>ID</th>
//                         <th>NAME</th>
//                         <th>SALARY</th>
//                         <th>COUNTRY</th>
//                         <th>CITY</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>1</td>
//                         <td>Santos</td>
//                         <td>70000</td>
//                         <td>Australia</td>
//                         <td>Sydney</td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                 }
//               />
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default myTableList;

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={12}>
              <Card 
                title="My custom table"
                category="Subtitle of my custom table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return(
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={6}>
                <Card
                  title="Custom Login form"
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
      </div>
    );
  }
}

export default TableList;
