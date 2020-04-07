import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class LCRProfile extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is SC at LCR Profile Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-lcrProfile')}>Add
                </Button>
            </form>
          </div>
        );
    }
}

export default LCRProfile;