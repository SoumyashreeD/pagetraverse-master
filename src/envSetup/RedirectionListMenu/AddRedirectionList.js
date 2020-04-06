import React, { Component } from 'react';

class AddRedirectionList extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Add Redirection List Here</legend>
                        <label for="listname" class="required">List name:</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="" class="required">ListType: </label>
                        <select id="listtype" name="cars">
                            <option value="esme">ESME</option>
                            <option value="pointcode">Point Code</option>
                            
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
        );
    }
}

export default AddRedirectionList;