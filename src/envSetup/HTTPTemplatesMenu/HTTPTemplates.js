import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class HTTPTemplates extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is HTTP Templates Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-httpTemplates')}>Add 
                </Button>
            </form>
          </div>
        );
    }
}

export default HTTPTemplates;