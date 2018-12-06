/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = [];
  for (var i = 0; i < 10; i++) {
    dataBlob.push(
      <div className="card" key={i}>
        <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"/> 
        <p>1111111</p>
      </div> 
    );
  }
  return dataBlob;
}
class Card extends React.Component {
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
      <div className="card-wrap">{genData()}</div>
      // <div class="card-wrap">{111}</div>
    );
  }
}

export default Card