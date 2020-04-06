import React, { Component } from 'react'

class AddDealManagement extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Add Deal Management Here</legend>

                        <label for="dealName" class="required">Deal Name</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="valPeriod" class="required">Val Period</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="dealRate" class="required">Deal Rate</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="startDate" class="required">Start Date</label>
                        <input type="date" id="birthday" name="birthday"/><br/><br/>

                        <label for="" class="required">Deal Type: </label>
                        <select id="dealType" name="cars">
                            <option value="customer">Customer</option>
                            <option value="supplier">Supplier</option>
                            <option value="sourceOperator">Source Operator</option>
                            <option value="sourceCountry">Source Country</option>
                            <option value="custDestCountry">Customer  Destination Country</option>
                            <option value="custDestOperator">Customer  Destination Operator</option>
                            <option value="suppDestCountry">Supplier  Destination Country</option>
                            <option value="suppDestOperator">Supplier  Destination Operator</option>
                            {/* <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option> */}
                        </select>
                        <br/><br/>

                        <label for="" class="required">Load Distribution Type: </label>
                        <select id="loadDistributionType" >
                            <option value="roundrobin">Round Robin</option> 
                            <option id="priority">Priority</option>
                            <option id="percentage">Percentage</option>
                        </select> <br/><br/>

                        <div>
                                <button class="gaping" id="done">Done</button>
                                <button id="clear" class="gaping">Clear</button>
                                <button id="cancel">Cancel</button>
                        </div>
                        <br/><br/><br/>
                        <label class="mandatory" >* Denotes Mandatory Fields</label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddDealManagement;