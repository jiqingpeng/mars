/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView ,ImagePicker} from 'antd-mobile';
import Header from './Header.js';
import Foodbar from './Foodbar';
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  }];
class Issue extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         files: data,
    //         multiple: false,
    //     };
    // }
    state = {
        files: [],
        multiple: false,
    }
    onChange = (files, type, index) => {
        this.setState({
            files:files,
        });
        if(files.length!=0){
            this.setState({
                file:{
                    file:files[0].file
                },
                files:files,
            });
            this.Picker(this.state);
        }
        
    }
    Picker(file){
        this.props.onPicker(file)
    }
    render() {
        const { files } = this.state;
        return (
            <div>
                <Header  file={this.state.file} source="head_url"/>
                <ImagePicker
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 1}
                multiple={this.state.multiple}
                
                />
            </div>
        );
    }
}

export default Issue