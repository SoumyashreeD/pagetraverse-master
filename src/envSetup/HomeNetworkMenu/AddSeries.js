import React, { Component } from 'react';
//import AppService from "../service/Appservice"
import history from "../../History";
//import '../design/form.css'

class AddSeries extends Component{
    constructor(props){
        super(props);
        this.state ={
           group_type:'',
           group_name:'',
           numbers:'',
            message: null
        }
        //this.saveSeries = this.saveSeries.bind(this);
        this.handleDropdownChangeGroupType = this.handleDropdownChangeGroupType .bind(this);
  
    }

    /*saveSeries = (e) => {
        e.preventDefault();
        let series= {group_type: (parseInt(this.state.group_type)), group_name: this.state.group_name,numbers:this.state.numbers};
        AppService.addSeries(series)
            .then(res => {
                this.setState({message : 'added successfully.'});
                //appends the /students to localhost:3000 url and hence lists out all the data
            //history.push('/showseriesdetails');
            });
    }*/

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    handleDropdownChangeGroupType  =(e) =>
    {
        this.setState({ group_type: e.target.value });
      }
      

    render() {
        return(
            
            <div>
               
                <form>
                    <fieldset>
                <legend>Add Series Details</legend>
                <label class="mandatory" >* Denotes Mandatory Fields</label><br></br>
                <br></br>
                <div>
                 <label for="" class="required">Group Type : </label>
            <select id="dropdown" onChange={this.handleDropdownChangeGroupType}>
              <option value="-1">--Select--</option>
              <option value="1">SOURCE IMSI</option>
              <option value="2">SOURCE VMSC</option>
              <option value="3">SOURCE MSISDN</option>
              <option value="4">SOURCE SHORT CODE</option>
              <option value="5">SOURCE CELL ID</option>
              <option value="6">DEST IMSI</option>
              <option value="7">DEST VMSC</option>
              <option value="8">DEST MSISDN</option>
              <option value="9">DEST SHORT CODE</option>
              <option value="10">DEST CELL ID</option>
              <option value="11">DEST CHARSET</option>
              <option value="12">SENDER ADDRESS</option>
              <option value="13">SC ADDRESS</option>
              <option value="14">SCLP ADDRESS</option>
              <option value="15">SCDP ADDRESS</option>
              <option value="16">SRS GT</option>
              <option value="17">ALPHA NUMERIC</option>
            </select>
          </div>
         <br></br>

                <div className="form-group">
                    <label for="" class="required">Group Name : </label>
                    <input type="text"  name="group_name" className="form-control" value={this.state.group_name} onChange={this.onChange}/>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="" class="required">Numbers : </label>
                    <input type="text" name="numbers" className="form-control" value={this.state.numbers} onChange={this.onChange}/>
                </div>
                <br></br>
                <div>
                                <button class="gaping" id="done">Done</button>
                                <button id="clear" class="gaping">Clear</button>
                                <button id="cancel">Cancel</button>
                        </div>
                        <br/><br/><br/>
                        
                </fieldset>
            </form>
    </div>
        );
    }
}

export default  AddSeries;


