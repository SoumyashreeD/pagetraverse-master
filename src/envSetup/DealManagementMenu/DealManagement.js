import React, { Component } from 'react'
import history from "../../History"
import {Button} from "react-bootstrap";

class DealManagement extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Deal Mangement Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-dealManagement')}>Add Deal Management</Button>
            </form>
          </div>
        )
    }
}

export default DealManagement;