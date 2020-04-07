import React, { Component } from 'react';
import { Router} from 'react-router-dom';
import history from "../../History";
import { Button } from 'react-bootstrap';
//import AddHomeNetwork  from '../addComponents/add_homeNetwork';
import '../HomeNetworkMenu/list.css'

class ViewCreditTransactions extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "",
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        //this.addPointCodeDetails = this.addPointCodeDetails.bind(this);
      }
    

    
    
      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
        
       
        /*if(e.target.value  === "1"){
           var codeBlock = '<div id="wrapper">'+
          '<table id="contents">' +
          '<thead>'+'<tr>'+
          '<th>S.No</th>'+
          '<th>Group Name</th>'+
          '<th>Group Number</th>'+
          '<th>Group Type</th>'+
          '<th>Edit</th>'+
          '<th>Delete</th>'+
          '</tr>'+
          '</thead>'+
          '</table>'+
          '</div>';
    
    
    document.getElementById("wrapper").innerHTML = codeBlock;
         
      }
      else  if(e.target.value  === "2"){
        var codeBlock = '<div id="wrapper">'+
       '<table id="contents">' +
       '<thead>'+'<tr>'+
       '<th>Point Code</th>'+
       '<th>Operator Name</th>'+
       '<th>Operator Country</th>'+
       '<th>SAP Id</th>'+
       '<th>TT</th>'+
       '<th>NP</th>'+'<th>RI</th>'+'<th>SSN</th>'+'<th>PC Status</th>'+'<th>Delay</th>'+'<th>NP</th>'+'<th>Edit</th>'+'<th>Delete</th>'+
       '</tr>'+
       '</thead>'+
       '</table>'+
       '</div>';
    
    
    document.getElementById("wrapper").innerHTML = codeBlock;
      
    }
    else  if(e.target.value  === "3"){
      var codeBlock = '<div id="wrapper">'+
     '<table id="contents">' +
     '<thead>'+'<tr>'+
     '<th>GatewayID</th>'+
     '<th>GatewayType</th>'+
     '<th>Gateway Name</th>'+
     '<th>Edit</th>'+'<th>Delete</th>'+
     '</tr>'+
     '</thead>'+
     '</table>'+
     '</div>';
    
    
    document.getElementById("wrapper").innerHTML = codeBlock;
     
    }
      }   
      addPointCodeDetails() {
        if(this.state.selectValue==="1"){
          window.localStorage.removeItem("ptcode_id");
        this.props.history.push('/add-series');
    }
        if(this.state.selectValue==="2"){
              window.localStorage.removeItem("ptcode_id");
            this.props.history.push('/add-pcd');
        }
        if(this.state.selectValue==="3"){
          window.localStorage.removeItem("ptcode_id");
        this.props.history.push('/add-mnp');
    }*/
         }
        
    render(){
        return(
            <div>
             <Router history={history}>

             <Button variant="btn btn-success" onClick={() => history.push("/credittransaction")}>View</Button>
              <br></br><br></br>
              </Router> 
          <div>
              <select id="dropdown" onChange={this.handleDropdownChange}>
                <option value="0">Select-a-value</option>
                  <option value="1">All Customers</option>
                 
                 </select>
                 <br></br><br></br>
                 <div id="wrapper">
     <table id="contents">
     <thead>
         <tr>
     <th>S.No</th>
     <th>Transaction Type</th>
     <th>Transaction Amount</th>
     <th>Transaction Date</th>
     <th>Currency</th>
     <th>Exchange Rate</th>
     <th>Unbilled Amount</th>
     <th>Last Trafic Date</th>
     <th>Average Traffic</th>
     <th>Remaining Credit Limit</th>
     </tr>
     </thead>
     </table>
     </div>
              </div>
              <div id="wrapper"></div>
              </div>

                
            );
        }
    }
    

export default ViewCreditTransactions ;