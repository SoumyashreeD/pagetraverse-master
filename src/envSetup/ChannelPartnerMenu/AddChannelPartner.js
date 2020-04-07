import React, { Component } from 'react'

class AddChannelPartner extends Component{
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend> Add Channel Partner </legend>
                        <label for="dealName" class="required">Deal Name</label>
                        <input type="text" id="fname" name="fname" value=""/><br/><br/>

                        <label for="" class="required">Commission Percentage Type: </label>
                        <select id="commissionPercentageType" name="cars">
                            <option value="fixedRate">Fixed Rate</option>
                            <option value="slabWise">Slab Wise</option>
                        </select> <br/><br/>

                        <label for="" class="required">Commission Type:</label>
                        <select id="commissionType">
                            <option value="grossRevenue">Gross Revenue</option>
                            <option value="netRevenue">Net Revenue</option>
                            <option value="savings">Savings</option>
                        </select><br/><br/>

                        <label for="" class="required">Partnership Type:</label>
                        <select id="partnershipType">
                            <option value="customerWise">Customer Wise</option>
                            <option value="custDestOperator">Customer-destination Operator Wise</option>
                            <option value="custDestCountry">Customer-destination country wise</option>
                            <option value="supplierWise">Supplier Wise</option>
                            <option value="suppDestOperator">Supplier-destination operator wise</option>
                            <option value="suppDestCountry">Supplier-destination country wise</option>
                            {/* <option value=""></option> */}
                        </select><br/><br/>

                        <label for="toDate" class="required">To Date</label>
                        <input type="date" id="birthday" name="birthday"/><br/><br/>

                        <label for="" class="required">Commission Currency:</label>
                        <select id="commissionCurrency">
                            <option value="euro">EURO</option>
                            <option value="usd">USD</option>
                        </select><br/><br/>

                        <div>
                                <button class="gaping" id="submit">Submit</button>
                                <button id="cancel">Cancel</button>
                                
                        </div>
                        <br/><br/><br/>
                        <label class="mandatory" >* Denotes Mandatory Fields</label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddChannelPartner;