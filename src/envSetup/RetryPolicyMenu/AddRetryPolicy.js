import React, { Component } from 'react';
//import AppService from "../service/Appservice"
//import history from "../../History";
//import '../design/form.css'
class AddRetryPolicy extends Component{
    constructor(props){
        super(props);
        this.state ={
          
           group_name:'',
           error_category:'',
           error:'',
           
    message: null
        }
        //this.saveMNP = this.saveMNP.bind(this);
        this.handleDropdownChangeErrorCategory = this.handleDropdownChangeErrorCategory .bind(this);
        //this.handleDropdownChangeLBMode = this.handleDropdownChangeLBMode.bind(this);
        
  
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
    handleDropdownChangeErrorCategory =(e) =>
    {
        this.setState({ error_category: e.target.value });
      }
     

    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                <legend>Add Retry Policy</legend>
                <label class="mandatory" >* All fields are mandatory </label><br></br>
                <div>
                 <label for="" class="required">Group Name : </label>
                <input type="text" name="group_name" className="form-control" value={this.state.add_node} onChange={this.onChange}/>
          </div><br></br>
                
         

                <div>
                 <label for="" class="required">Error Category : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeErrorCategory}>
              <option value="-1">--Select--</option>
              <option value="1">User Error</option>
              <option value="2">Provider Error</option>
              <option value="3">Stack Error</option>
              <option value="4">Internal Error</option>
              <option value="5">AS Error</option>
              <option value="6">Redirection Error</option>
              <option value="7">SMPP Error</option>
              <option value="8">CIMD Error</option>
              <option value="9">UCP Error</option>
              </select>
          </div><br></br>

                <div className="form-group">
                    <label for="" class="required">Error : </label>
                    <input type="text" name="add_node" className="form-control" value={this.state.add_node} onChange={this.onChange}/>
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

export default  AddRetryPolicy;


