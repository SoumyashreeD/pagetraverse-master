import React, { Component } from 'react';
import LcrApiService from "../../service/LcrApiService";

class AddLCRProfile extends Component{

    constructor(props){
        super(props);
        this.state ={
            lcr_name: '',
            lcr_type: 'default',
            message: null
        }
        this.saveLcr = this.saveLcr.bind(this);
        // this.loadlcr_data = this.loadlcr_data.bind(this);
    }

    componentDidMount() {
        // this.loadUser();
    }

    // loadlcr_data() {
    //     ApiService.fetchUserById(window.localStorage.getItem("userId"))
    //         .then((res) => {
    //             let lcr_data = res.data.result;
    //             this.setState({
    //             lcr_id: lcr_data.lcr_id,
    //             lcr_name:lcr_data.lcr_name,
    //             lcr_type:lcr_data.lcr_type,
    //             })
    //         });
    // }
    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value },
            );
    }

    onChangeradio = (e) =>{
        this.setState({ [e.target.name]: e.target.value },
            // {[e.target.gender]:e.target.selectedOption}
            );
            // console.log(this.state.selectedOption)
        }

        
    saveLcr = (e) => {
        e.preventDefault();
        let lcr_data = { lcr_name: this.state.lcr_name, lcr_type: this.state.lcr_type,
             };
        LcrApiService.addLcr(lcr_data)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/environmentSetup-lcrProfile');
            });
    }


    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <label for="lcrprofile_name" class="required">LCR Profile name:</label>
                        <input type="text" id="lcrprofile_name" name="lcr_name" 
                        value={this.state.lcr_name} onChange={this.onChange}/><br/><br/>

                        <label for="" class="required">LCR Type: </label>
                        <select id="lcrtype" name="lcr_type">
                            <option value="default" onChange={this.onChangeradio}>Default LCR</option>
                            <option value="sc_mt" onChange={this.onChangeradio}>SC_MT</option>
                            <option value="spec" onChange={this.onChangeradio}>SPEC_LCR</option>
                            <option value="timebased" onChange={this.onChangeradio}>Time Based LCR</option>
                            
                        </select>
                        <br/><br/>
                    <div>
                                <button class="gaping" id="done"  onClick={this.saveLcr}>Done</button>
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

export default AddLCRProfile;