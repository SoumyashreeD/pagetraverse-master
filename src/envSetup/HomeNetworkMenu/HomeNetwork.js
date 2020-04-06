import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from "../../History";

class HomeNetwork extends Component{

    render(){
        return(

            <form>
                <div>
                    <h2>This is home network page</h2>
                <Button variant="btn btn-success" onClick={() => history.push('/add-homeNetwork')}>Add Home Network</Button>
                </div>
            </form>
            // <Router>
            //     <div>
            //         <div>
            //             <h1> Home Network Elements</h1>
            //             <ul><NavLink  to="/AddHomeNetwork" > add home ntw </NavLink> </ul>
            //         </div>

            //         <div className="content">
            //             <Route path to="/AddHomeNetwork" component={AddHomeNetwork}/>
            //         </div> 
            //     </div>
            // </Router> 

        )
    }
}

export default HomeNetwork;