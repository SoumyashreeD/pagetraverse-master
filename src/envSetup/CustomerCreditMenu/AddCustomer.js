import React, { Component } from 'react';
//import AppService from "../service/Appservice"
//import history from "../../History";
//import '../design/form.css'
class AddCustomer extends Component{
    constructor(props){
        super(props);
        this.state ={
           customer_name:'',
           credit_limit:'',
           customer_type:'',
           billing_cycle:'',
           billing_date:'',
            threshold_type:'',
           currency:'',
           activation:'',
    message: null
        }
        //this.saveMNP = this.saveMNP.bind(this);
        this.handleDropdownChangeCustomerName = this.handleDropdownChangeCustomerName .bind(this);
        this.handleDropdownChangeCustomerType = this.handleDropdownChangeCustomerType .bind(this);
        this.handleDropdownChangeBillingCycle = this.handleDropdownChangeBillingCycle.bind(this);
        this.handleDropdownChangeThresholdType = this.handleDropdownChangeThresholdType .bind(this);
        this.handleDropdownChangeCurrency= this.handleDropdownChangeCurrency .bind(this);
        this.handleDropdownChangeActivation= this.handleDropdownChangeActivation.bind(this);
    }

    /*saveMNP= (e) => {
        e.preventDefault();
        let mnp= {mnp_gateway: (parseInt(this.state.mnp_gateway)), gateway_name: this.state.gateway_name,max_pending_transactions:this.state.max_pending_transactions,lbmode: this.state.lbmode,gateway_type:(parseInt(this.state.gateway_type)),add_node: this.state.add_node};
        AppService.addSeries(mnp)
            .then(res => {
                this.setState({message : 'added successfully.'});
                //appends the /students to localhost:3000 url and hence lists out all the data
            history.push('/showmnpdetails');
            });
    }*/

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        handleDropdownChangeCustomerName  =(e) =>
        {
            this.setState({ customer_name: e.target.value });
          }
    handleDropdownChangeCustomerType  =(e) =>
    {
        this.setState({ customer_type: e.target.value });
      }
      handleDropdownChangeBillingCycle =(e) =>
      {
          this.setState({ billing_cycle: e.target.value });
        } 

        handleDropdownChangeThresholdType =(e) =>
    {
        this.setState({ threshold_type: e.target.value });
      }
      handleDropdownChangeCurrency=(e) =>
    {
        this.setState({ currency: e.target.value });
      }
      handleDropdownChangeActivation =(e) =>
      {
          this.setState({ activation: e.target.value });
        }



    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                <legend>Add Customer Details</legend>
                <label class="mandatory" >* Denotes mandatory fields</label>
                <div>
                 <label for="" class="required">Customer Name : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeCustomerName}>
              <option value="-1">--Select--</option>
              
              </select>
              
          </div><br></br>
            <div className="form-group">
                    <label for="" class="required">Credit Limit : </label>
                    <input type="text"  name="credit_limit" className="form-control" value={this.state.credit_limit} onChange={this.onChange}/>
                </div>
                <br></br>
        <div>
                 <label for="" class="required">Customer Type : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeCustomerType}>
              <option value="-1">--Select--</option>
              <option value="1">Pre-Paid</option>
              <option value="2">Post-Paid</option>
            
              </select>
          </div>
          <br></br>
          <div>
                 <label for="" class="required">Billing Cycle : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeBillingCycle}>
              <option value="-1">--Select--</option>
              <option value="1">Weekly(7 days)</option>
              <option value="2">Fortnight(14 days)</option>
              <option value="3">Monthly(30 days)</option>
              <option value="4">Custom</option>
        </select>
          </div><br></br>
          <div className="form-group">
                    <label for="" class="required">Billing Date : </label>
                    <input type="date" name="billing_date" className="form-control" value={this.state.billing_date} onChange={this.onChange}/>
                </div>  
                <br></br>
                <div>
                 <label for="" class="required">Threshold Type : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeThresholdType}>
              <option value="-1">--Select--</option>
              <option value="1">Percentage Usage</option>
              <option value="2">Remaining Usage Days</option> 
              </select>
                </div><br></br>
                <div>
                 <label for="" class="required">Currency : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeCurrency}>
              <option value="-1">--Select--</option>
              <option value="1">EURO</option>
              <option value="2">USO</option>
              </select>
              </div><br></br>
              <label for="activation" class="required">Activation : </label>
                        <input type="checkbox"/>Auto Activate<sp></sp>
                        <input type="checkbox"/>Auto Deactivate<br/><br/>
                <br></br>
                <div>
                                <button class="gaping" id="done">Done</button>
                                <button id="clear" class="gaping">Clear</button>
                                <button id="cancel">Cancel</button>
                        </div>

            </fieldset>
            </form>
    </div>
        );
    }
}

export default  AddCustomer;


