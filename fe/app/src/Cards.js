import React, { Component } from 'react';
import { Card, WhiteSpace,Button  } from 'antd-mobile';

function genData(pIndex = 0) {
  const dataBlob = [];
  for (var i = 0; i < 10; i++) {
    dataBlob.push(
      <Card full key={i}>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<Button size="small">+ 关注</Button>}
          />
          <Card.Body>
            <div className="card-img"><img src="https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"/></div>
          </Card.Body>
          <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </Card>
    );
  }
  return dataBlob;
}
class Cards extends React.Component {
  constructor(props) {
    super(props);
   

    this.state = {
     
    };
  }
  render() {
    return (
      <div>
        {genData()}
      </div>
  );
  }
}

export default Cards
