/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import OSS from 'ali-oss';
import axios from 'axios'
// import { browserHistory } from 'react-router'
import {withRouter} from "react-router-dom";
const client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId:'LTAIlMTJKMecYbvG',
  accessKeySecret:'AMWbL2RGz5b18k7fiYCUVxeC7y2LdO',
  bucket: 'lonelyroad'
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      file:this.props.file
    });
  }
  
  randomString(len) {
    　　len = len || 32;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (var i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
  }
  handleIssue(data){
  let file = this.props.file.file;
  let file_name=this.randomString(6)
  let text= this.props.file.text;
  let that = this.props.history
  client.put(file_name, file).then(function (r1) {
    axios.post('http://47.100.30.67:7001/test',{url:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/'+file_name, text:text})
      .then(function (response) {
        that.push("/Home"); 
      })
      .catch(function (error) {
        console.log(error);
      });
    }).catch(function (err) {
      console.error('error: %j', err);
    });
  }
  render() {
    return (
      <div className="head">
        <span>返回</span>
        <img src={this.state.src}/>
        <span onClick={() => this.handleIssue(this.state.file)}>发布</span>
      </div>
    );




  }
}

export default withRouter(Header);