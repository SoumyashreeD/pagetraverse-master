import React, { Component } from 'react';
//import AppService from "../service/Appservice"
//import history from "../../History";
//import '../design/form.css'
class AddMNPGateway extends Component{
    constructor(props){
        super(props);
        this.state ={
           mnp_gateway:'',
           gateway_name:'',
           max_pending_transactions:'',
           lbmode:'',
           gateway_type:'',
           add_node:'',
    message: null
        }
        //this.saveMNP = this.saveMNP.bind(this);
        this.handleDropdownChangeMNPGateway = this.handleDropdownChangeMNPGateway .bind(this);
        this.handleDropdownChangeLBMode = this.handleDropdownChangeLBMode.bind(this);
        this.handleDropdownChangeGatewayType = this.handleDropdownChangeGatewayType .bind(this);
  
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
    handleDropdownChangeMNPGateway  =(e) =>
    {
        this.setState({ mnp_gateway: e.target.value });
      }
      handleDropdownChangeLBMode =(e) =>
      {
          this.setState({ lbmode: e.target.value });
        } 

        handleDropdownChangeGatewayType =(e) =>
    {
        this.setState({ gateway_type: e.target.value });
      }

    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                <legend>Add MNP Details</legend>
                <label class="mandatory" >* Denotes mandatory fields</label><br></br>
                <div>
                 <label for="" class="required">MNP Gateway : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeMNPGateway}>
              <option value="-1">--Select--</option>
              <option value="1">Redis</option>
              <option value="2">Enum</option>
              <option value="3">Cache</option>
              </select>
          </div><br></br>
                
         

                <div className="form-group">
                    <label for="" class="required">Gateway Name : </label>
                    <input type="text"  name="gateway_name" className="form-control" value={this.state.gateway_name} onChange={this.onChange}/>
                </div><br></br>
            
                <div className="form-group">
                    <label>Max Pending Transactions : </label>
                    <input type="text" name="max_pending_transactions" className="form-control" value={this.state.max_pending_transactions} onChange={this.onChange}/>
                </div><br></br>

                <div>
                 <label>LB Mode : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeLBMode}>
              <option value="-1">--Select--</option>
              <option value="1">Active-StandBy</option>
              <option value="2">Active-Active</option>
            
              </select>
          </div><br></br>

          <div>
                 <label>LB Mode : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeGatewayType}>
              <option value="-1">--Select--</option>
              <option value="1">Commercial</option>
              <option value="2">Non-Commercial</option>
        </select>
          </div><br></br>

                <div className="form-group">
                    <label for="" class="required">Add Node : </label>
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

export default  AddMNPGateway;


