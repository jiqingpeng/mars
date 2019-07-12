/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView, Toast} from 'antd-mobile';
import Foodbar from './Foodbar';
import Navhead from './Navhead.js';
import {url} from '../src/lib/const.js';
import axios from 'axios';
class My extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      phone:sessionStorage.getItem("phone")
    };
  }
  componentDidMount(){
      let id = sessionStorage.getItem('loginId');
      axios.get(url+'/info/'+id)
        .then((res) => {
          this.setState (res.data.res)
        })
        .catch((err) => {
          Toast.info(err.response.data.res);
        });
  }
  render() {
    return (
      <div>
        <Navhead text="我的"></Navhead>
        <div className="icon">
          <p className="icon-img">
            <img src={this.state.head_url}/>
          </p>
          <p className="icon-text">{this.state.nick}</p>
        </div>
        <Foodbar></Foodbar>
      </div>
      
    );
  }
}

export default My