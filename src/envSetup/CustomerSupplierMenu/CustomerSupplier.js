import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class CustomerSupplier extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Customer Supplier Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-customerSupplier')}>Add
                </Button>
            </form>
          </div>
        );
    }
}

export default CustomerSupplier;