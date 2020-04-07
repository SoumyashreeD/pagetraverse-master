import React, { Component } from 'react'

class AddCustSupplierGrp extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Add Customer/Supplier Group</legend>

                        <label for="groupName" class="required">Group Name:</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="grpDesc" class="required">Group Description: </label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>
                        <br/>
                        <label class="mandatory" >* Denotes Mandatory Fields</label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddCustSupplierGrp;