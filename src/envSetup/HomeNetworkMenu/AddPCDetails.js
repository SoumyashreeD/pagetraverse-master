import React, { Component } from 'react';
//import AppService from "../service/Appservice"
//import history from "../../History";
//import '../design/form.css'
class AddPCDetails extends Component{
    constructor(props){
        super(props);
        this.state ={
            point_code: '',
            operator_name: '',
            operator_country: '',
            sap_id: '',
            tt: '',
            np: '',
            ssn:'',
            status: '',
            delay:'',
            message: null
        }
        //this.savePointCodeDetails = this.savePointCodeDetails.bind(this);
        this.handleDropdownChangeNP = this.handleDropdownChangeNP.bind(this);
        this.handleDropdownChangeSSN = this.handleDropdownChangeSSN.bind(this);
        this.handleDropdownChangePCStatus=this.handleDropdownChangePCStatus.bind(this)
    }

    /*savePointCodeDetails = (e) => {
        e.preventDefault();
        let pcd= {point_code: (parseInt(this.state.point_code)), operator_name: this.state.operator_name,operator_country:this.state.operator_country,sap_id: (parseInt(this.state.sap_id)), tt: (parseInt(this.state.tt)), np: (parseInt(this.state.np)),ssn: (parseInt(this.state.ssn))};
        AppService.addPointCodeDetails(pcd)
            .then(res => {
                this.setState({message : 'added successfully.'});
                //appends the /students to localhost:3000 url and hence lists out all the data
            //history.push('/showpcdetails');
            });
    }*/

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    handleDropdownChangeNP =(e) =>
    {
        this.setState({ np: e.target.value });
      }
      handleDropdownChangeSSN =(e) =>
      {
          this.setState({ ssn: e.target.value });
        }
    
        handleDropdownChangePCStatus=(e) =>
        {
            this.setState({ status: e.target.value });
          }

    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                    <legend>Add PointCode Details</legend>
                    
                        <label class="mandatory" >* All Fields are mandatory</label>
                <div className="form-group">
                    <label for="" class="required">Point Code : </label>
                    <input type="text"  name="point_code" className="form-control" value={this.state.point_code} onChange={this.onChange}/>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="" class="required">Operator Name : </label>
                    <input type="text"  name="operator_name" className="form-control" value={this.state.operator_name} onChange={this.onChange}/>
                </div><br></br>
                <div className="form-group">
                    <label for="" class="required">Operator Country : </label>
                    <input type="text"  name="operator_country" className="form-control" value={this.state.operator_country} onChange={this.onChange}/>
                </div><br></br>

                <div className="form-group">
                    <label for="" class="required">SAP Id : </label>
                    <input type="text" name="sap_id" className="form-control" value={this.state.sap_id} onChange={this.onChange}/>
                </div><br></br>

                <div className="form-group">
                    <label for="" class="required">TT : </label>
                    <input type="text" name="tt" className="form-control" value={this.state.tt} onChange={this.onChange}/>
                </div><br></br>

                
                 <div>
                 <label for="" class="required">NP : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeNP}>
              <option value="-1">--Select--</option>
              <option value="1">Unknown</option>
              <option value="2">ISDN</option>
              <option value="3">Telephony(E.164,E.163)</option>
              <option value="4">Data(X.121)</option>
              <option value="5">Telex(F.69)</option>
              <option value="6">Maritime Mobile</option>
              <option value="7">Land Mobile(E.212)</option>
              <option value="8">Private</option>
              <option value="9">ANSI SS7 PC and SSN</option>
              <option value="10">Internet(IP)</option>
              <option value="11">Extension</option>
            </select>
          </div>
          <br></br>

                <div className="form-group">
                    <label for="" class="required">SSN : </label>
                    <select id="dropdown" onChange={this.handleDropdownChangeNP}>
              <option value="-1">--Select--</option>
              <option value="1">HLR</option>
              <option value="2">VLR</option>
              <option value="3">MSC</option>
              <option value="4">FNR</option>
              </select>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="" class="required">PC Status : </label>
                    <select id="dropdown" onChange={this.handleDropdownChangePCStatus}>
              <option value="-1">--Select--</option>
              <option value="1">Active</option>
              <option value="2">Inactive</option>
            
              </select>
                </div><br></br>
                <div className="form-group">
                    <label for="" class="required">Delay : </label>
                    <input type="text" name="delay" className="form-control" value={this.state.delay} onChange={this.onChange}/>
                </div><br></br>

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

export default  AddPCDetails;


