/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { Button ,TextareaItem} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import {url} from '../lib/const';
import axios from 'axios';
class textarea extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         files: data,
    //         multiple: false,
    //     };
    // }
    state = {
        // text:''
    }
    
    handleText(val){
        console.log(val)
        this.setState({
            text:val
        })
        console.log(this.state)
    }
    handleSubmit(){
        console.log(url)
        let id = sessionStorage.getItem('loginId');
        let params = {
            nick:this.state.text
        }
        axios.put(url+'/info/'+id,params)
        .then((res)=>{
            this.props.history.push('/my');
        })
    }
    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <div>
               <TextareaItem
                onBlur={this.handleText.bind(this)}
                rows={5}
                count={100}
                />
                <div>11111{this.state.text}</div>
                <Button type="primary" onClick={() => this.handleSubmit()}>提交</Button>
            </div>
        );
    }
}

export default withRouter(textarea);