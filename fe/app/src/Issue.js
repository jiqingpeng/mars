/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import ImagePicker from './ImagePicker.js';
import Header from './Header.js';
class Issue extends React.Component {
  constructor(props) {
    // console.log(client)
    super(props);
    this.state = {
      
    };
  }
  //图片回调
  printContent(file){
    this.setState({
      file:file,
      
    });
    console.log(this.state.file)
  }
  render() {
    return (
      <div>
        <Header  file={this.state.file}/>
        <ImagePicker onPicker={this.printContent.bind(this)}/>
      </div>
    );
  }
}

export default Issue