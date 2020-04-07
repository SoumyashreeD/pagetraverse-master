import React, { Component } from 'react';

class AddHTTPTemplates extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <label for="templatename" class="required">Template name:</label>
                        <input type="text" id="template_name" name="template_name"/><br/><br/>

                        <label for="" class="required">Relation Type: </label>
                        <label><input type="radio" id="relation_type" name="relation_type" value="customer" />
                        Customer</label>
                        <label><input type="radio" id="relation_type" name="relation_type" value="supplier" />
                        Supplier</label><br /><br/>

                        <div>
                                <button class="gaping" id="done">Submit</button>
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

export default AddHTTPTemplates;