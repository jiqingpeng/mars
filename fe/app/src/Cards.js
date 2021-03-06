import React, {Component} from 'react';
import {Card, WhiteSpace, Button} from 'antd-mobile';
import axios from 'axios';
import {url} from '../src/lib/const.js';
function genData () {
  const dataBlob = [];
  // for (var i = 0; i < 10; i++) {
  //   dataBlob.push(
  //       <Card full key={i}>
  //           <Card.Header
  //             title="This is title"
  //             thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
  //             extra={<Button size="small">+ 关注</Button>}
  //           />
  //           <Card.Body>
  //             <div className="card-img"><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"/></div>
  //           </Card.Body>
  //           <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
  //       </Card>
  //   );
  // }
  // return dataBlob;

  axios.get (url + '/test').then (function () {
    for (var i = 0; i < 10; i++) {
      dataBlob.push (
        <Card full key={i}>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<Button size="small">+ 关注</Button>}
          />
          <Card.Body>
            <div className="card-img">
              <img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png" />
            </div>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra={<div>extra footer content</div>}
          />
        </Card>
      );
    }
    return dataBlob;
  });

  return dataBlob;
}

class Cards extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      genData: [],
    };
  }
  genData () {
    const params = {
      offset:0,
      limit:10
    }
    axios.get (url + '/test',{params:params}).then ((res) =>{
      let dataBlob = [];
      let data = res.data.data.reverse ();
      // data.splice(data.find(data => data.url === 'https://lonelyroad.oss-cn-beijing.aliyuncs.com/seBC8T'), 1)
      for (var i = 0; i < data.length; i++) {
        dataBlob.push (
          <Card full key={i}>
            <Card.Header
              title="用户"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<Button size="small">+ 关注</Button>}
            />
            <p className="card-text">{data[i].text}</p>
            <Card.Body>
              <div className="card-img"><img src={data[i].url} /></div>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra={<div>extra footer content</div>}
            />
          </Card>
        );
      }
      this.setState ({
        genData: dataBlob,
      });
    });
  }

  render () {
    return (
      <div className="card-box">
        {this.state.genData}
      </div>
    );
  }
  componentWillMount () {
    this.genData ();
  }
}

export default Cards;
