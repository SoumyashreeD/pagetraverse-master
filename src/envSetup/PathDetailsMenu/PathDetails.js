import React, { Component } from 'react'
import history from "../../History"
import {Button} from "react-bootstrap";

class PathDetails extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Path Details Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-pathDetails')}>Add Path Details</Button>
            </form>
          </div>
        )
    }
}

export default PathDetails;