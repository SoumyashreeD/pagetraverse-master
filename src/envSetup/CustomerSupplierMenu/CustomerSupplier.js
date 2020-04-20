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
                <div>
                    <label>Search:</label>
                    <input type="text"></input>
                    <Button>Search</Button>
                </div>
                <label><input type="radio" id="customer_id" name="customer_id" value="customerid" />
                        Customer Id</label>
                        <label><input type="radio" id="customer_name" name="customer_name" value="customername" />
                        Customer Name</label><br /><br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Customer Id</th>
                            <th>Name</th>
                            <th>Relation Type</th>
                            <th>Hub</th>
                            <th>Billing Type</th>
                            <th>Billing Logic</th>
                            <th>Interface Type</th>
                            <th>Protocol Type</th>
                            <th>Cost Sheet</th>
                            <th>Revenue Sheet</th>
                            <th>Last Updated(cost)</th>
                            <th>Last Updated(Revenue)</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    </table>
            </form>
          </div>
        );
    }
}

export default CustomerSupplier;