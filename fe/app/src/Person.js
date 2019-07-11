/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import Foodbar from './Foodbar';
import Navhead from './Navhead.js';
import { List, Toast, Modal} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import {url} from '../src/lib/const.js';
import axios from 'axios';
const data = [];
const Item = List.Item;
const operation = Modal.operation;

class ListExample extends React.Component {
  state = {
    phone:{}
  }
  componentDidMount(){
      let id = sessionStorage.getItem('loginId')
      axios.get(url+'/info/'+id)
        .then((res) => {
          this.setState (res.data.res)
          
        })
        .catch((err) => {
          // Toast.info(err.response.data.res);
        });
  }
  handleupdate(val){
   
    let id = sessionStorage.getItem('loginId');
    let params = {sex:val}
      axios.put(url+'/info/'+id,params)
        .then((res) => {
          this.setState (res.data.res)
          Toast.info('保存成功');
        })
        .catch((err) => {
          
        });
  }
  render() {
    return (<div>
      <List renderHeader={() => '基本信息'} className="my-list">
        <Item arrow="horizontal" onClick={() => {this.props.handlerouter('HeadPortrait')}}>头像</Item>
        <Item extra={this.state.phone.phone}>手机号</Item>
        <Item extra={this.state.nick} arrow="horizontal" onClick={() => {this.props.handlerouter('textarea')}}>昵称</Item>
        <Item extra={this.state.sex == 1 ? '男' : '女'} arrow="horizontal" onClick={() => operation([
      { text: '男', onPress: () => this.handleupdate(1) },
      { text: '女', onPress: () => this.handleupdate(2) },
    ])}>性别</Item>
        <Item extra={this.state.sex} arrow="horizontal" onClick={() => {}}>简介</Item>
      </List>
    </div>);
  }
}
class Person extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  
  handlerouter = (router) => {
    this.props.history.push(router)
  }
  
  render() {
    const { files } = this.state;
    return (
      <div>
        <div className="head">
            <span onClick={()=>{window.history.back()}}>返回</span>
            <span>个人中心</span>
            {/* <span onClick={() => this.handleIssue()}>保存</span> */}
        </div>
        <ListExample handlerouter={this.handlerouter}/>
        <Foodbar></Foodbar>
      </div>
      
    );
  }
}
export default withRouter(Person);
// export default Person
