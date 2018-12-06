/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
class My extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }
  render() {
    return (
      <div>my</div>
      
    );
  }
}

export default My