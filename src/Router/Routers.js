import React, { Component } from 'react';
import { Router } from 'react-router';
import Main from '../Main';

class Routers extends Component{
    render(){
        return(
            <div>
                 <Route path='/main' component={Main}/>
            </div>
        );
    }
}

export default Routers;