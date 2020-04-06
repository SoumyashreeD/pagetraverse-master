import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class SCatLCRProfile extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Sc at lcr Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-redirectionList')}>Add Redirection List</Button>
            </form>
          </div>
        );
    }
}

export default SCatLCRProfile;