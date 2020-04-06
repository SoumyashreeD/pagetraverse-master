import React, { Component } from 'react';
import {Route, NavLink, Router} from "react-router-dom";
import Home from "./Home"
import Stuff from "./Stuff";
import Contact from "./Contact"
import Link1 from "./link1"
import history from "./History"
import HomeNetwork from './envSetup/HomeNetworkMenu/HomeNetwork';
import AddHomeNetwork from "./envSetup/HomeNetworkMenu/AddHomeNetwork";
import RedirectionList from './envSetup/RedirectionListMenu/RedirectionList';
import AddRedirectionList from "./envSetup/RedirectionListMenu/AddRedirectionList"
import OperatorCluster from './envSetup/OperatorClusterMenu/OperatorCluster';
import AddOperatorCluster from "./envSetup/OperatorClusterMenu/AddOperatorCluster";
import LCRProfile from "./envSetup/LCRProfileMenu/LCRProfile";
import CustomerSupplier from "./envSetup/CustomerSupplierMenu/CustomerSupplier";
import SCatLCRProfile from "./envSetup/SCatLCRProfileMenu/SCatLCRProfile";
import HTTPTemplates from "./envSetup/HTTPTemplatesMenu/HTTPTemplates";
import DealManagement from "./envSetup/DealManagementMenu/DealManagement";
import AddDealManagement from "./envSetup/DealManagementMenu/AddDealManagement";
import CustSupplierGrp from "./envSetup/CustSupplierGrpMenu/CustSupplierGrp";
import AddCustSupplierGrp from "./envSetup/CustSupplierGrpMenu/AddCustSupplierGrp";
import ChannelPartner from "./envSetup/ChannelPartnerMenu/ChannelPartner";
import AddChannelPartner from "./envSetup/ChannelPartnerMenu/AddChannelPartner";
import PathDetails from "./envSetup/PathDetailsMenu/PathDetails";
import AddPathDetails from "./envSetup/PathDetailsMenu/AddPathDetails";

class Main extends Component{
    render(){
        return(
            <Router history={history}> 
            <div>
                <h1>SMS Hub</h1>
                <ul className="header">
                    <div class="dropdown">
                        <button class="dropbtn">Service Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">Service Parameters</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Environment Setup</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/environmentSetup-homeNetwork">Home Network</NavLink></ul>
                                <ul> <NavLink  to="/link1">Retry Policy</NavLink></ul>
                                <ul> <NavLink  to="/link1">Redirection Accounts</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-redirectionList">Redirection Lists</NavLink></ul>
                                <ul> <NavLink  to="/link1">Operator Profile</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-pathDetails">Path Details</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-operatorCluster">Operator Cluster</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-lcrProfile">LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-scatLcrProfile">SC AT LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-customerSupplier">Customer Suppliers</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-httpTemplates">HTTP Templates</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-customerSupplierGroup">Customer Supplier Group</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-dealManagement">Deal Management</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-channelPartner">Channel Partner</NavLink></ul>
                                <ul> <NavLink  to="/link1">Customer Credit Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">Credit Transaction</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">ESME Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">ESME Accounts</NavLink></ul>
                                <ul> <NavLink  to="/link1">Ports</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Session Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">ESME Sessions</NavLink></ul>
                                <ul> <NavLink  to="/link1">SMSC Sessions</NavLink></ul>
                                <ul> <NavLink  to="/link1">Node Sessions</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Rules Management</button>
                            <div class="dropdown-content">
                            <ul> <NavLink  to="/link1">Rules Configuration</NavLink></ul>
                            <ul> <NavLink  to="/link1">Hub Rules Configuration</NavLink></ul>
                                
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Message Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">SMS Query</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">User Management</button>
                            <div class="dropdown-content">
                            <ul> <NavLink  to="/link1">Change Password</NavLink></ul>
                            <ul> <NavLink  to="/link1">Provision User</NavLink></ul>
                            <ul> <NavLink  to="/link1">Customer Portal User</NavLink></ul>
                                
                            </div>
                    </div>

                </ul>


                <div className="content">

                    <Route exact path="/" component={Home}></Route>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/link1" component={Link1}/>

                    <Route path="/environmentSetup-homeNetwork" component={HomeNetwork}/>
                    <Route path="/add-homeNetwork" component={AddHomeNetwork}/>

                    <Route path="/environmentSetup-redirectionList" component={RedirectionList} />
                    <Route path="/add-redirectionList" component={AddRedirectionList}/>

                    <Route path="/environmentSetup-operatorCluster" component={OperatorCluster}/>
                    <Route path="/add-operatorCluster" component={AddOperatorCluster}/>

                    <Route path="/environmentSetup-lcrProfile" component={LCRProfile}/>
                    
                    <Route path="/environmentSetup-customerSupplier" component={CustomerSupplier}/>

                    <Route path="/environmentSetup-httpTemplates" component={HTTPTemplates}/>

                    <Route path="/environmentSetup-scatLcrProfile" component={SCatLCRProfile}/>
                    
                    <Route path="/environmentSetup-dealManagement" component={DealManagement}/>
                    <Route path="/add-dealManagement" component={AddDealManagement}/>

                    <Route path="/environmentSetup-customerSupplierGroup" component={CustSupplierGrp}/>
                    <Route path="/add-customerSupplierGroup" component={AddCustSupplierGrp}/>

                    <Route path="/environmentSetup-channelPartner" component={ChannelPartner}/>
                    <Route path="/add-channelPartner" component={AddChannelPartner}/>

                    <Route path="/environmentSetup-pathDetails" component={PathDetails}/>
                    <Route path="/add-pathDetails" component={AddPathDetails}/>
                </div>
            </div>
        </Router>
        );
    }
}

export default Main;