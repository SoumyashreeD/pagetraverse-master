import React, { Component } from 'react'
import history from "../../History"
import {Button} from "react-bootstrap";

class CustSupplierGrp extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Customer Supplier Group Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-customerSupplierGroup')}>Add Customer Supplier Group</Button>
            </form>
          </div>
        )
    }
}

export default CustSupplierGrp;