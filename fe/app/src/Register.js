import React from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import { List, InputItem, Toast,Button } from 'antd-mobile'; 

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      haspsError: false,
      value: '',
      password:''
    }
  }
  onErrorClick = () => {
    console.log(this.state)
    if (this.state.hasError) {
      Toast.info('请输入11位手机号');
    }
  }
  onChange = (value) => {
    console.log((/^1[34578]\d{9}$/.test(value)))
    if (!(/^1[34578]\d{9}$/.test(value))) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
    console.log(this.state)
  }
  onpsErrorClick = () => {
    if (this.state.haspsError) {
      Toast.info('请输入6位数字');
    }
  }
  onpsChange = (password) => {
    if (password.replace(/\s/g, '').length < 6) {
      this.setState({
        haspsError: true,
      });
    } else {
      this.setState({
        haspsError: false,
      });
    }
    this.setState({
      password,
    });
    console.log(this.state)
  }
  register(){
    let phone = parseInt(this.state.value.replace(/\s+/g,""));
    let pwd = this.state.password;
    if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone))) {
      Toast.info('请输入11位手机号码');
    }else if(pwd.length!=6){
      Toast.info('请输入6位密码');
    }else{
      let that = this;
      axios.post('http://47.100.30.67:7001/phone',{phone:phone,pwd:pwd})
      // axios.post('http://47.100.30.67:7001/register')
        .then(function (response) {
          that.props.history.push("/"); 
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }  
  render() {
    return (
      <div>
        <div className="head">
          <span onClick={()=>{this.props.history.push("/");}}>返回</span>
          <span>注册</span>
          <span></span>
        </div>
        <List>
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            // error={this.state.hasError}
            // onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            // error={this.state.haspsError}
            // onErrorClick={this.onpsErrorClick}
            onChange={this.onpsChange}
            value={this.state.password}
          >密码</InputItem>
        </List>
        <Button type="warning" size="small" style={{ width: '120px',margin:"10px auto"}} onClick={()=>{this.register()}}>注册</Button>
      </div>
    );
  }
}

export default withRouter(Register); 
