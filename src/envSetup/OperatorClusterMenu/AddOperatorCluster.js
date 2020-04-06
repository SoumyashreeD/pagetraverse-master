import React, { Component } from 'react';

class AddOperatorCluster extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <label for="clustername" class="required">Cluster name:</label>
                        <input type="text" id="cluster_name" name="cluster_name" value=""/><br/><br/>

                        <label for="" class="required">Cluster Type: </label>
                        <label><input type="radio" id="cluster_type" name="cluster_type" value="Default" />
                        Default</label>
                        <label><input type="radio" id="cluster_type" name="cluster_type" value="Roaming" />
                        Roaming</label><br />

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

export default AddOperatorCluster;