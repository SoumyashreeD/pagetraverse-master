import React, { Component } from 'react';

class AddCustomerSupplier extends Component{

    constructor(){
        super()
        this.state={
            showcustinfo:true,
            showbillinfo:true,
            showpaymentinfo:true
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

    operationpaymentinfo(){
        this.setState({
            showpaymentinfo:!this.state.showpaymentinfo
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
                        SS7</label><br /><br/>

                        <label for="" class="required">Protocol Type: </label>
                        <label><input type="radio" id="protocol_type" name="protocol_type" value="a2p" />
                        A2P</label>
                        <label><input type="radio" id="protocol_type" name="protocol_type" value="p2p" />
                        P2P</label><br /><br/>

                        <label for="" class="required">Hub </label>
                        <label><input type="radio" id="hub" name="hub" value="yes" />
                        Yes</label>
                        <label><input type="radio" id="hub" name="hub" value="no" />
                        No</label><br /><br/>

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
                                    <label for="billing_address">Billing Address:</label>
                        <input type="text" id="billing_address" name="billing_address" /><br/><br/>

                        <label for="billing_name" class="required">Billing Conatct Name:</label>
                        <input type="text" id="billing_name" name="billing_name" /><br/><br/>

                        <label for="contact_no">Conatct No:</label>
                        <input type="number" id="contact_no" name="contact_no"/><br/><br/>

                        <label for="email_id" >Email Id:</label>
                        <input type="email" id="email_id" name="email_id" /><br/><br/>

                        <label for="billing_emailto" >Billing Email Id(To):</label>
                        <input type="email" id="emailto" name="emailto" /><br/><br/>

                        <label for="billing_emailcc" >Billing Email Id(Cc):</label>
                        <input type="email" id="emailcc" name="emailcc" /><br/><br/>

                        <label for="" >SRI Billing: </label>
                        <label><input type="radio" id="sri_billing" name="sri_billing" value="yees" />
                        Yes</label>
                        <label><input type="radio" id="sri_billing" name="sri_billing" value="no" />
                        No</label><br /><br />

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

                        <label for="" >Delivery Flag:</label>
                        <label><input type="radio" id="delivery_flag" name="delivery_flag" value="on" />
                        On</label>
                        <label><input type="radio" id="delivery_flag" name="delivery_flag" value="off" />
                        Off</label><br /><br />

                        <label for="" class="required">Billing Type:</label>
                        <label><input type="radio" id="billing_type" name="billing_type" value="commercial" />
                        Commercial</label>
                        <label><input type="radio" id="billing_type" name="billing_type" value="noncommercial" />
                        Non-Commercial</label><br /><br/>

                        <label for="" class="required">Billing Logic: </label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="submission" />
                        Submission</label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="delivery" />
                        Delivery</label>
                        <label><input type="radio" id="billing_logic" name="billing_logic" value="success_termination" />
                        Successful Termination</label><br /><br/>

                        <label for="">A Number Report Needed:</label>
                        <label><input type="radio" id="number_report" name="snumber_report" value="yees" />
                        Yes</label>
                        <label><input type="radio" id="number_report" name="number_report" value="no" />
                        No</label><br /><br/>

                                    </fieldset>
                                </form>
                                </div>
                                :null
                        }

                    <button onClick={()=>this.operationpaymentinfo()}>Payment Information</button>
                        {
                            this.state.showpaymentinfo ? 
                            <div>
                                <form>
                                    <fieldset>
                                    <label for="credit_line" class="required">Credit Line</label>
                        <input type="text" id="credit_line" name="credit_line"/><br/><br/>

                        <label for="credit_limit" class="required">Credit Limit</label>
                        <input type="text" id="credit_limit" name="credit_limit"/><br/><br/>

                        <label for="" class="required">Credit Currency </label>
                        <input type="text" id="credit_currency" name="credit_currency"/><br /><br/>

                        <label for="" class="required">Billing Term </label>
                        <input type="text" id="billing_term" name="billing_term"/><br /><br/>

                        <label for="" class="required">Payment Term </label>
                        <input type="text" id="payment_term" name="payment_term"/><br /><br/>

                        <label for="credit_limit" class="required">Oracle - ID(Customer) </label>
                        <input type="text" id="oracleid_cust" name="oracleid_cust"/><br/><br/>

                        <label for="" class="required">Oracle - ID(Vendor) </label>
                        <input type="text" id="oracleid_vendor" name="oracleid_vendor"/><br /><br/>

                        <label for="" class="required">Airtel- KAM </label>
                        <input type="text" id="airtel_kam" name="airtel_kam"/><br /><br/>

                        <label for="" class="required">Airtel- KAM Contact No </label>
                        <input type="text" id="airtel_kam_contactno" name="airtel_kam_contactno"/><br /><br/>

                        <label for="" class="required">Airtel- KAM Email ID</label>
                        <input type="text" id="airtel_kam_email" name="airtel_kam_email"/><br /><br/>

                        <label for="" class="required">VAT No. </label>
                        <input type="text" id="vatno" name="vatno"/><br /><br/>


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