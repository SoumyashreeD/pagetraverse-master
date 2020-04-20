import React, { Component } from 'react';
import history from "../../History";
// import {Button} from "react-bootstrap";
import LcrApiService from "../../service/LcrApiService";
import {  EditFilled , DeleteFilled , PlusCircleFilled } from '@ant-design/icons';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import '../../styling/Styletable.css';


      const data = [
        {
          key: '1',
          lcrname: 'John Brown',
          lcrtype: 32,
          
        },
        {
          key: '2',
          lcrname: 'Jim Green',
          lcrtype: 42,
          
        },
        {
          key: '3',
          lcrname: 'Joe Blacck',
          lcrtype: 32,
        },
      ];

class LCRProfile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            lcrdetails: [],
            message: null
        }
        this.deleteLcr = this.deleteLcr.bind(this);
        this.editLcr = this.editLcr.bind(this);
        this.addLcr = this.addLcr.bind(this);
        this.reloadLcr = this.reloadLcr.bind(this);
    }
    

    componentDidMount() {
        this.reloadLcr();
    }

    reloadLcr() {
        LcrApiService.fetchLcrdetails()
            .then((res) => {
                this.setState({lcrdetails: res.data.result})
            });
    }

    deleteLcr(lcrId) {
        LcrApiService.deleteLcr(lcrId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({lcrdetails: this.state.lcrdetails.filter(lcr_data => lcr_data.lcr_id !== lcrId)});
           })

    }

    editLcr(lcr_id) {
        window.localStorage.setItem("lcrId", lcr_id);
        this.props.history.push('/add-lcrProfile');
    }

    addLcr() {
        window.localStorage.removeItem("lcrId");
        this.props.history.push('/add-lcrProfile');
    }
//     state = {
//         selectedRowKeys: [], // Check here to configure the default column
//         loading: false,
//         sortedInfo: null,
//       };
    
//       handleChange = (pagination, filters, sorter) => {
//         console.log('Various parameters', pagination, filters, sorter);
//         this.setState({
//           sortedInfo: sorter,
//         });
//       };
      
//       clearAll = () => {
//         this.setState({
//           sortedInfo: null,
//         });
//       };
    
//       setAgeSort = () => {
//         this.setState({
//           sortedInfo: {
//             order: 'descend',
//             columnKey: 'age',
//           },
//         });
//       };
//   start = () => {
//     this.setState({ loading: true });
//     // ajax request after empty completing
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   };

//   onSelectChange = selectedRowKeys => {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   };

    render(){
    //    let { loading, selectedRowKeys, sortedInfo} = this.state;
    //    sortedInfo = sortedInfo || {};
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    // };
    // const hasSelected = selectedRowKeys.length > 0;
    
    // const columns = [
    //     {
    //       title: 'LCR ID',
    //       dataIndex: 'lcrid',
    //       key: 'lcrid',
    //       sorter: (a, b) => a.lcrid - b.lcrid,
    //       sortOrder: sortedInfo.columnKey === 'lcrid' && sortedInfo.order,
    //       ellipsis: true,
    //     },
    //     {
    //       title: 'LCR Name',
    //       dataIndex: 'lcrname',
    //       key: 'lcrname',
    //       sorter: (a, b) => a.lcrname.length - b.lcrname.length,
    //       sortOrder: sortedInfo.columnKey === 'lcrname' && sortedInfo.order,
    //       ellipsis: true,
    //     },
    //     {
    //       title: 'LCR Type',
    //       dataIndex: 'lcrtype',
    //       key: 'lcrtype',
    //       sorter: (a, b) => a.lcrtype.length - b.lcrtype.length,
    //       sortOrder: sortedInfo.columnKey === 'lcrtype' && sortedInfo.order,
    //       ellipsis: true,
    //     },
    //     {
    //         title: 'Edit',
    //         dataIndex: 'edit',
    //       },
    //       {
    //         title: 'Delete',
    //         dataIndex: 'delete',
    //       },
    //       {
    //         title: 'Export',
    //         dataIndex: 'export',
    //       },
    //   ];


        return(
            <div>
            <form>
                <h2>LCR List</h2>
                <Button icon={<PlusCircleFilled/>} onClick={() => this.addLcr()}>Add
                </Button>
                <div>
                    <label>Search:</label>
                    <input type="text"></input>
                    <Button>Search</Button>
                </div>
                <label><input type="radio" id="lcr_id" name="lcr_id" value="lcrid" />
                        LCR Id</label>
                        <label><input type="radio" id="lcr_name" name="lcr_name" value="lcrname" />
                        LCR Name</label><br /><br />
                <table className="table table-striped" id="students">
                    <thead>
                        <tr>
                            <th className="hidden">LCR Id</th>
                            <th>LCR Name</th>
                            <th>LCR Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Export</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lcrdetails.map(
                                lcr_data =>
                                    <tr key={lcr_data.lcr_id}>
                                        <td>{lcr_data.lcr_name}</td>
                                        <td>{lcr_data.lcr_type}</td>
                                        <td><EditFilled onClick={() => this.editLcr_data(lcr_data.lcr_id)}/></td>
                                        <td><DeleteFilled onClick={() => this.deleteLcr_data(lcr_data.lcr_id)}/></td>
                                    </tr>
                            )
                        }
                    </tbody>
                    </table>
            </form>
            {/* <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} id="students" dataSource={data} onChange={this.handleChange} />
          </div> */}
          </div>
        );
    }
}

export default LCRProfile;