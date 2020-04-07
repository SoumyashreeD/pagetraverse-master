import React, { Component } from 'react';

class AddLCRProfile extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <label for="lcrprofile_name" class="required">LCR Profile name:</label>
                        <input type="text" id="lcrprofile_name" name="lcrprofile_name" /><br/><br/>

                        <label for="" class="required">LCR Type: </label>
                        <select id="lcrtype" name="lcrtype">
                            <option value="default">Default LCR</option>
                            <option value="sc_mt">SC_MT</option>
                            <option value="spec">SPEC_LCR</option>
                            <option value="timebased">Time Based LCR</option>
                            
                        </select>
                        <br/><br/>
                    <div>
                                <button class="gaping" id="done">Done</button>
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

export default AddLCRProfile;