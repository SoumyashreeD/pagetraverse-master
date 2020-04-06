import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class OperatorCluster extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is operator cluster Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-operatorCluster')}>add
                </Button>
            </form>
          </div>
        );
    }
}

export default OperatorCluster;