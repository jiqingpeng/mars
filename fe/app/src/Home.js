/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';
import { ListView} from 'antd-mobile';
import List from './List';
import Card1 from './Card';
import Card from './Cards';
import Foodbar from './Foodbar';
const tabs = [
  { title: '精选' },
  { title: '动态' },
  { title: '频道' },
  
];
 const TabExample = () => (
   <div className="wrap">
     <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
       <div className="tab-item">
       <Card/>
       </div>
       <div className="tab-item">
        <Card1/>
       </div>
       <div className="tab-item">
       <List/>
       </div>
     </Tabs>
   </div>
 );
class Home extends React.Component {
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
      <div>
        <TabExample/>
        <Foodbar/>
      </div>
    );
  }
}

export default Home