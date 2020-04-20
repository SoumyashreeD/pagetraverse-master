import React, { Component } from 'react';
import history from "../../History";
import {Button} from "react-bootstrap";

class HTTPTemplates extends Component{
    render(){
        return(
            <div>
            <form>
                <h2> HTTP Templates </h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-httpTemplates')}>Add 
                </Button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">S No</th>
                            <th>Template Name</th>
                            <th>Relation Type</th>
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

export default HTTPTemplates;