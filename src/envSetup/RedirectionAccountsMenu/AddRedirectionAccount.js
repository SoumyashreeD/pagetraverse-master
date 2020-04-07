import React, { Component } from 'react';
//import AppService from "../service/Appservice"
//import history from "../../History";
//import '../design/form.css'
class AddRedirectionAccount extends Component{
    constructor(props){
        super(props);
        this.state ={
           acc_name:'',
           connection_type:'',
           msg_red_pc:'',
           msg_red_pm:'',
           msg_red_ph:'',
            
    message: null
        }
        //this.saveMNP = this.saveMNP.bind(this);
        
        this.handleDropdownChangeConnectionType = this.handleDropdownChangeConnectionType .bind(this);
        
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
      
    handleDropdownChangeConnectionType  =(e) =>
    {
        this.setState({ customer_type: e.target.value });
      }
    
     



    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                <legend>Add Redirection Account</legend>
                <label class="mandatory" >* Denotes mandatory fields</label>
                <div>
                 <label for="" class="required">SMSC Account Name : </label>
                 <input type="text"  name="acc_name" className="form-control" value={this.state.acc_name} onChange={this.onChange}/>
              
          </div><br></br>
           <div>
                 <label for="" class="required">Connection Type : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeConnectionType}>
              <option value="-1">--Select--</option>
              <option value="1">SMPP</option>
              <option value="2">HTTP</option>
              <option value="3">SS7</option>
              </select>
          </div>
          <br></br>
         
          <div className="form-group">
                    <label for="" class="required">Message Redirection(Per Sec) : </label>
                    <input type="text" name="msg_red_pc" className="form-control" value={this.state.msg_red_pc} onChange={this.onChange}/>
                </div>  
                <br></br>
                <div className="form-group">
                    <label for="" class="required">Message Redirection(Per Min) : </label>
                    <input type="text" name="msg_red_mn" className="form-control" value={this.state.msg_red_mn} onChange={this.onChange}/>
                </div>  
                <br></br>   
                <div className="form-group">
                    <label for="" class="required">Message Redirection(Per Hour) : </label>
                    <input type="text" name="msg_red_hr" className="form-control" value={this.state.msg_red_hr} onChange={this.onChange}/>
                </div>  
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

export default  AddRedirectionAccount;


