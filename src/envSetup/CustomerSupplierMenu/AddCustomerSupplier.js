import React, { Component } from 'react';

class AddCustomerSupplier extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <div>
                                <button class="gaping" id="submit">Submit</button>
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

export default AddCustomerSupplier;