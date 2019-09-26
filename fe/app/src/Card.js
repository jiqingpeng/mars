/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import {PullToRefresh, ListView, Button,Card} from 'antd-mobile';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {url} from '../src/lib/const.js';
let data =  []
	
// const NUM_ROWS = 3;
// let pageIndex = 0;


// function genData (pIndex = 0) {
  
//   const dataArr = [];
//   for (let i = 0; i < NUM_ROWS; i++) {
//     dataArr.push (`row - ${pIndex * NUM_ROWS + i}`);
//   }
  
//   return dataArr;
// }

class List extends React.Component {
  constructor (props) {
    super (props);
    const dataSource = new ListView.DataSource ({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      pageIndex:0,
      NUM_ROWS:3
    };
    
  }
  genData (pIndex = 0) {
  
    const dataArr = [];
    for (let i = 0; i < this.state.NUM_ROWS; i++) {
      dataArr.push (`row - ${pIndex * this.state.NUM_ROWS + i}`);
    }
    
    return dataArr;
  }
  
  getData () {
    let params = {
      offset:(this.state.pageIndex)*(this.state.NUM_ROWS),
      limit:this.state.NUM_ROWS
    }
    if(this.props.type === 'my'){
      params.phone_id=sessionStorage.getItem('loginId')
    }
    axios.get (url + '/test',{params:params}).then (res => {
      let list = res.data.data.reverse ();
      list.forEach(item =>{
        data.push(item)
      })
    });
  }
  initData () {
    
    let params = {
      offset:0,
      limit:this.state.NUM_ROWS
      // offset:this.state.pageIndex,
      // limit:this.state.NUM_ROWS
    }
    
    if(this.props.type === 'my'){
      params.phone_id=sessionStorage.getItem('loginId')
    }
    
    axios.get (url + '/test',{params:params}).then (res => {
      data = res.data.data.reverse ();
    });
  }
  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  componentDidUpdate () {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount () {
    if(data.length !== 0){
      this.setState.height = this.state.height - ReactDOM.findDOMNode (this.lv).offsetTop;

    }
    this.initData();
    setTimeout (() => {
      this.rData = this.genData ();
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.genData ()),
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState ({refreshing: true, isLoading: true});
    // simulate initial Ajax
    this.initData();
    setTimeout (() => {
      this.rData = this.genData ();
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log ('reach end', event);
    this.setState ({isLoading: true});
    this.getData();
    setTimeout (() => {
      this.rData = [...this.rData, ...this.genData (++this.state.pageIndex)];
     
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render () {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      
      return (
        <Card full>
            <Card.Header
              title="用户"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<Button size="small">+ 关注</Button>}
            />
            <p className="card-text">{obj.text}</p>
            <Card.Body>
              <div className="card-img"><img src={obj.url} /></div>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra={<div>extra footer content</div>}
            />
          </Card>
        
      );
    };
    if(data.length === 0){
      return (
        <div style={{textAlign:"center",padding:"20px 0"}}>
         暂无数据   
        </div>
      );
    }
    //热门
    if(this.props.type === 'hot'){
      return (
        <div>
          <ListView
            key={this.state.useBodyScroll ? '0' : '1'}
            ref={el => (this.lv = el)}
            renderHeader={() => <span>Pull to refresh</span>}
            dataSource={this.state.dataSource}
            renderRow={row}
            renderSeparator={separator}
            useBodyScroll={this.state.useBodyScroll}
            style={
              this.state.useBodyScroll
                ? {}
                : {
                    height: this.state.height,
                    border: '1px solid #ddd',
                    margin: '5px 0',
                  }
            }
            pullToRefresh={
              <PullToRefresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
            pageSize={1}
          />
        </div>
      );
    }
    return (
      <div>
        {/* <Button
          style={{margin: '30px 15px'}}
          inline
          onClick={() =>
            this.setState ({useBodyScroll: !this.state.useBodyScroll})}
        >
          {this.state.useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
        </Button> */}
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (
            <div style={{padding: 30, textAlign: 'center'}}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>
          )}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={
            this.state.useBodyScroll
              ? {}
              : {
                  height: this.state.height,
                  border: '1px solid #ddd',
                  margin: '5px 0',
                }
          }
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          pageSize={1}
        />
      </div>
    );
  }
}

export default List;
