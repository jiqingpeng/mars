import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import React, { Component } from 'react';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class ImagePicke extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    let file = files[2].file;
    this.setState({
      file:file,
      files:files,
      text:this.state.text
    });
    
    this.Picker(this.state);
    
  }
  onInputChange = (e) => {
    this.setState({
      text:e.target.value,
    });
    this.Picker(this.state);
  }
  
  Picker(file){
    this.props.onPicker(file)
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
        <div>
            <textarea className="text"  onChange={(e)=>this.onInputChange(e)}></textarea>
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 7}
              multiple={this.state.multiple}
            />
        </div>
    );
  }
}

export default ImagePicke