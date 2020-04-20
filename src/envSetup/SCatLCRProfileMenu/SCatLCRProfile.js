import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class LCRProfile extends Component{
    render(){
        return(
            <div>
            <form>
                <h2> LCR at List</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-lcrProfile')}>Add
                </Button>
                <div>
                    <label>Search:</label>
                    <input type="text"></input>
                    <Button>Search</Button>
                </div>
                <label><input type="radio" id="lcr_id" name="lcr_id" value="lcrid" />
                        LCR Id</label>
                        <label><input type="radio" id="lcr_name" name="lcr_name" value="lcrname" />
                        LCR Name</label><br /><br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">LCR Id</th>
                            <th>LCR Name</th>
                            <th>LCR Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Export</th>
                        </tr>
                    </thead>
                    </table>
            </form>
          </div>
        );
    }
}

export default LCRProfile;