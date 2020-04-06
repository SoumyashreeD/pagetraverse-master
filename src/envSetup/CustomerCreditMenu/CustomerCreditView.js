import React, { Component } from 'react';
import { Router} from 'react-router-dom';
import history from "../../History";
import { Button } from 'react-bootstrap';
//import AddHomeNetwork  from '../addComponents/add_homeNetwork';
import '../HomeNetworkMenu/list.css'

class CustomerCreditView extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "",
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        //this.addCustomerProfile = this.addCustomerProfile.bind(this);
      }
    

    
    
      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
    }
        
    render(){
        return(
            <div>
             <Router history={history}>

             <Button variant="btn btn-success" onClick={() => history.push("/add-customer")}>Add</Button>
              <br></br><br></br>
              </Router> 
          <div>
              
     <table id="contents">
     <thead>
         <tr>
     <th>S.No</th>
     <th>Customer Name</th>
     <th>Credit Profile Id</th>
     <th>Status</th>
     <th>Edit</th>
     <th>Delete</th>
    
     </tr>
     </thead>
     </table>
     </div>
              </div>
              

                
            );
        }
    }
    

export default CustomerCreditView;