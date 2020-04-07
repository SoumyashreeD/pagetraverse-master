import React, { Component } from 'react'
import history from "../../History"
import {Button} from "react-bootstrap";

class ChannelPartner extends Component{
    render(){
        return(
            <div>
            <form>
                <h2>This is Channel Partners Page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-channelPartner')}>Add Channel Partner</Button>
            </form>
          </div>
        )
    }
}

export default ChannelPartner;