import React, { Component } from 'react';

class AddCustomerSupplier extends Component{

    constructor(){
        super()
        this.state={
            showcustinfo:true,
            showbillinfo:true
        }
    }
    operationcustomerinfo(){
        this.setState({
            showcustinfo:!this.state.showcustinfo
        })
    }

    operationbillinginfo(){
        this.setState({
            showbillinfo:!this.state.showbillinfo
        })
    }
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <button onClick={()=>this.operationcustomerinfo()}>Customer Information</button>
                        {
                            this.state.showcustinfo ? 
                            <div>
                                <form>
                                    <fieldset>
                                    <label for="name" class="required">Name:</label>
                        <input type="text" id="name" name="name"/><br/><br/>

                        <label for="relationtype" class="required">Relation Type:</label>
                        <label><input type="checkbox" id="relation_type" name="relation_type" value="customer"/>
                        Customer</label>
                        <label><input type="checkbox" id="relation_type" name="relation_type" value="supplier"/>
                        Supplier</label><br/><br/>

                        <label for="" class="required">Interface Type: </label>
                        <label><input type="radio" id="interface_type" name="interface_type" value="ssmphttp" />
                        SSMP/HTTP</label>
                        <label><input type="radio" id="interface_type" name="interface_type" value="ss7" />
                        SS7</label><br />

                        <label for="" class="required">Protocol Type: </label>
                        <label><input type="radio" id="protocol_type" name="protocol_type" value="a2p" />
                        A2P</label>
                        <label><input type="radio" id="protocol_type" name="protocol_type" value="p2p" />
                        P2P</label><br />

                        <label for="" class="required">Hub </label>
                        <label><input type="radio" id="hub" name="hub" value="yes" />
                        Yes</label>
                        <label><input type="radio" id="hub" name="hub" value="no" />
                        No</label><br />

                                    </fieldset>
                                </form>
                                </div>
                                :null
                        }

<button onClick={()=>this.operationbillinginfo()}>Billing Information</button>
                        {
                            this.state.showbillinfo ? 
                            <div>
                                <form>
                                    <fieldset>
                                    <label for="billing_address" class="required">Billing Address</label>
                        <input type="text" id="billing_address" name="billing_address" /><br/><br/>

                        <label for="billing_name" class="required">Billing Conatct Name:</label>
                        <input type="text" id="billing_name" name="billing_name" /><br/><br/>

                        <label for="contact_no" class="required">Conatct No:</label>
                        <input type="number" id="contact_no" name="contact_no"/><br/><br/>

                        <label for="email_id" class="required">Email Id:</label>
                        <input type="email" id="email_id" name="email_id" /><br/><br/>

                        <label for="billing_emailto" class="required">Billing Email Id(To):</label>
                        <input type="email" id="emailto" name="emailto" /><br/><br/>

                        <label for="billing_emailcc" class="required">Billing Email Id(Cc):</label>
                        <input type="email" id="emailcc" name="emailcc" /><br/><br/>

                        <label for="" class="required">SRI Billing</label>
                        <label><input type="radio" id="sri_billing" name="sri_billing" value="yees" />
                        Yes</label>
                        <label><input type="radio" id="sri_billing" name="sri_billing" value="no" />
                        No</label><br />

                        <label for="" class="required">Message Fee Currency(Incoming): </label>
                        <select id="fee_incoming" name="fee_incoming">
                            <option value="euro">EURO</option>
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                            
                        </select>
                        <br/><br/>

                        <label for="" class="required">Message Fee Currency(Outgoing): </label>
                        <select id="fee_outgoing" name="fee_outgoing">
                            <option value="euro">EURO</option>
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                            
                        </select>
                        <br/><br/>

                        <label for="" class="required">Delivery Flag</label>
                        <label><input type="radio" id="delivery_flag" name="delivery_flag" value="on" />
                        On</label>
                        <label><input type="radio" id="delivery_flag" name="delivery_flag" value="off" />
                        Off</label><br />

                        <label for="" class="required">Billing Type </label>
                        <label><input type="radio" id="billing_type" name="billing_type" value="commercial" />
                        Commercial</label>
                        <label><input type="radio" id="billing_type" name="billing_type" value="noncommercial" />
                        Non-Commercial</label><br />

                        <label for="" class="required">Billing Logic </label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="submission" />
                        Submission</label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="delivery" />
                        Delivery</label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="success_termination" />
                        Successful Termination</label><br />

                        <label for="" class="required">A Number Report Needed</label>
                        <label><input type="radio" id="number_report" name="snumber_report" value="yees" />
                        Yes</label>
                        <label><input type="radio" id="number_report" name="number_report" value="no" />
                        No</label><br />

                                    </fieldset>
                                </form>
                                </div>
                                :null
                        }
                        
                    <div>
                                <button class="gaping" id="submit">Submit</button>
                                <button id="cancel">Cancel</button>
                        </div>
                        <br/><br/><br/>
                        <label class="mandatory" >* Denotes Mandatory Fields</label>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default AddCustomerSupplier;