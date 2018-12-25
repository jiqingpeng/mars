/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import Foodbar from './Foodbar';
import Navhead from './Navhead.js';
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
  
  render() {
    return (
      <div>
        <Navhead text="我的"></Navhead>
        <div className="icon">
          <p className="icon-img">
            <img src="http://pic.qiantucdn.com/58pic/33/19/50/82158PIChmMbb137IvVV58PIC_PIC2018.png!/fw/1024/watermark/url/L2ltYWdlcy93YXRlcm1hcmsvZGF0dS5wbmc=/repeat/true/crop/0x2000a0a0"/>
          </p>
          <p className="icon-text">{this.state.phone}</p>
        </div>
        <Foodbar></Foodbar>
      </div>
      
    );
  }
}

export default My