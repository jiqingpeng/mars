/* eslint no-dupe-keys: 0 */
import React, {Component} from 'react';
import {Tabs} from 'antd-mobile';
import {ListView} from 'antd-mobile';
import List from './List';
import Card from './Card';

import Foodbar from './Foodbar';
const tabs = [{title: '推荐'}, {title: '热门'}, {title: '我的动态'}];

class TabExample extends React.Component {
  tabChange(tab,index){
  //  console.log(index)
  //  let name = 'aa'+index
  //   // this.refs[name].init();
  
  }
  render () {
    return (
      <div className="wrap">
        <Tabs tabs={tabs} animated={false} useOnPan={false} onChange={(tab,index) => this.tabChange(tab,index)}>
          <div className="tab-item">
            <Card type="qq"/>
          </div>
          <div className="tab-item">
            <Card type="hot"/>
          </div>
          <div className="tab-item">
            <Card type="my"/>
          </div>
          
        </Tabs>
      </div>
    )
  }
  
}
class Home extends React.Component {
  constructor (props) {
    super (props);
    const dataSource = new ListView.DataSource ({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }
  render () {
    return (
      <div>
        <TabExample />
        <Foodbar />
      </div>
    );
  }
}

export default Home;
