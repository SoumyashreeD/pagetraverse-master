import React, { Component } from 'react';
import {Route, NavLink, Router} from "react-router-dom";
import Home from "./Home"
import Stuff from "./Stuff";
import Contact from "./Contact"
import Link1 from "./link1"
import history from "./History"
import HomeNetwork from './envSetup/HomeNetworkMenu/HomeNetwork';
import AddSeries from "./envSetup/HomeNetworkMenu/AddSeries";
import AddPCDetails from "./envSetup/HomeNetworkMenu/AddPCDetails";
import AddMNPGateway from "./envSetup/HomeNetworkMenu/AddMNPGateway";
import RedirectionList from './envSetup/RedirectionListMenu/RedirectionList';
import AddRedirectionList from "./envSetup/RedirectionListMenu/AddRedirectionList"
import DealManagement from "./envSetup/DealManagementMenu/DealManagement";
import AddDealManagement from "./envSetup/DealManagementMenu/AddDealManagement";
import CustSupplierGrp from "./envSetup/CustSupplierGrpMenu/CustSupplierGrp";
import AddCustSupplierGrp from "./envSetup/CustSupplierGrpMenu/AddCustSupplierGrp";
import ChannelPartner from "./envSetup/ChannelPartnerMenu/ChannelPartner";
import AddChannelPartner from "./envSetup/ChannelPartnerMenu/AddChannelPartner";
import PathDetails from "./envSetup/PathDetailsMenu/PathDetails";
import AddPathDetails from "./envSetup/PathDetailsMenu/AddPathDetails";
import ViewCreditTransactions from "./envSetup/CreditTransactionsMenu/ViewCreditTransactions"
import CustomerCreditView from "./envSetup/CustomerCreditMenu/CustomerCreditView"
import AddCustomer from './envSetup/CustomerCreditMenu/AddCustomer';
import RetryPolicy from './envSetup/RetryPolicyMenu/Retrypolicy'
import AddRetryPolicy from './envSetup/RetryPolicyMenu/AddRetryPolicy'
import RedirectionAccounts from './envSetup/RedirectionAccountsMenu/RedirectionAccounts'
import AddRedirectionAccount from './/envSetup/RedirectionAccountsMenu/AddRedirectionAccount'
import OperatorCluster from './envSetup/OperatorClusterMenu/OperatorCluster';
import AddOperatorCluster from "./envSetup/OperatorClusterMenu/AddOperatorCluster";
import LCRProfile from "./envSetup/LCRProfileMenu/LCRProfile";
import AddLCRProfile from "./envSetup/LCRProfileMenu/AddLCRProfile";
import CustomerSupplier from "./envSetup/CustomerSupplierMenu/CustomerSupplier";
import AddCustomerSupplier from "./envSetup/CustomerSupplierMenu/AddCustomerSupplier";
import SCatLCRProfile from "./envSetup/SCatLCRProfileMenu/SCatLCRProfile";
import HTTPTemplates from "./envSetup/HTTPTemplatesMenu/HTTPTemplates";
import AddHTTPTemplates from "./envSetup/HTTPTemplatesMenu/AddHTTPTemplates";

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
                                <ul> <NavLink  to="/envSetup/RetryPolicyMenu">Retry Policy</NavLink></ul>
                                <ul> <NavLink  to="/envSetup/RedirectionAccountsMenu">Redirection Accounts</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-redirectionList">Redirection Lists</NavLink></ul>
                                <ul> <NavLink  to="/link1">Operator Profile</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-pathDetails">Path Details</NavLink></ul>
                                <ul> <NavLink  to="/link1">Operator Cluster</NavLink></ul>
                                <ul> <NavLink  to="/link1">LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">SC AT LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">Customer Suppliers</NavLink></ul>
                                <ul> <NavLink  to="/link1">HTTP Templates</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-customerSupplierGroup">Customer Supplier Group</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-dealManagement">Deal Management</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-channelPartner">Channel Partner</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-customercreditprofile">Customer Credit Profile</NavLink></ul>
                                <ul> <NavLink  to="/environmentSetup-customercredit">Credit Transaction</NavLink></ul>
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
                    <Route path="/add-series" component={AddSeries}/>
                    <Route path="/add-pcd" component={AddPCDetails}/>
                    <Route path="/add-mnp" component={AddMNPGateway}/>

                    <Route path="/envSetup/RetryPolicyMenu" component={RetryPolicy}/>
                    <Route path="/add-retrypolicy" component={AddRetryPolicy}/>


                    <Route path="/envSetup/RedirectionAccountsMenu" component={RedirectionAccounts}/>
                    <Route path="/add-redirectionacc" component={AddRedirectionAccount}/>

                    <Route path="/environmentSetup-redirectionList" component={RedirectionList} />
                    <Route path="/add-redirectionList" component={AddRedirectionList}/>
                    
                    <Route path="/environmentSetup-dealManagement" component={DealManagement}/>
                    <Route path="/add-dealManagement" component={AddDealManagement}/>

                    <Route path="/environmentSetup-customerSupplierGroup" component={CustSupplierGrp}/>
                    <Route path="/add-customerSupplierGroup" component={AddCustSupplierGrp}/>

                    <Route path="/environmentSetup-channelPartner" component={ChannelPartner}/>
                    <Route path="/add-channelPartner" component={AddChannelPartner}/>

                    <Route path="/environmentSetup-pathDetails" component={PathDetails}/>
                    <Route path="/add-pathDetails" component={AddPathDetails}/>


                    <Route path="/environmentSetup-customercreditprofile" component={CustomerCreditView}/>
                    <Route path="/add-customer" component={AddCustomer}/>
                    
                    
                    <Route path="/environmentSetup-customercredit" component={ViewCreditTransactions}/>
            
                    <Route path="/environmentSetup-operatorCluster" component={OperatorCluster}/>
                    <Route path="/add-operatorCluster" component={AddOperatorCluster}/>

                    <Route path="/environmentSetup-lcrProfile" component={LCRProfile}/>
                    <Route path="/add-lcrProfile" component={AddLCRProfile} />
                    
                    <Route path="/environmentSetup-customerSupplier" component={CustomerSupplier}/>
                    <Route path="/add-customerSupplier" component={AddCustomerSupplier}/>

                    <Route path="/environmentSetup-httpTemplates" component={HTTPTemplates}/>
                    <Route path="/add-httpTemplates" component={AddHTTPTemplates} />

                    <Route path="/environmentSetup-scatLcrProfile" component={SCatLCRProfile}/>
                    
                </div>
            </div>
        </Router>
        );
    }
}

export default Main;
