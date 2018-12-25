import React from 'react';
import { Carousel,Button  } from 'antd-mobile';
// import axios from 'axios';
import {withRouter} from "react-router-dom";
 
class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {title:'社区板块升级',slog:'专家问答，强大工具，让社区成长',img:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/one.jpg'},
        {title:'深夜防毒夜谈',slog:'吃了这碗狗粮再睡',img: 'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/two.jpg'},
        {title:'生活状态独家放送',slog:'肥宅生活不如跳舞',img:'https://lonelyroad.oss-cn-beijing.aliyuncs.com/banner/three.jpg'}
      ]
    }
  }
  componentDidMount() {
    // am-carousel
  }
  render() {
    return (
          <div className="logowrap">
          <div className="logo">
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            style={{height:'100%'}}
          >
            {this.state.data.map(val => (
              <div
                key={val}
                style={{display: 'inline-block', width: '100%',height:'100%'}}
              >
              <p style={{ width: '100%',textAlign:'center',color:'red',marginTop:'20px',fontSize:'24px'}}>{val.title}</p>
              <p style={{ width: '100%',textAlign:'center',margin:'10px 0'}} >{val.slog}</p>
              <img
                src={val.img}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'90%' }}
                
              />
              </div>
            ))}
          </Carousel>
          
          </div>
          <div className="btn">
            <Button type="warning" size="small" style={{ width: '120px',margin:"10px auto"}} onClick={()=>{
              this.props.history.push("/Register");
            }}>注册</Button>
            <Button type="warning" size="small" style={{ width: '120px',margin:"10px auto"}} onClick={()=>{
              this.props.history.push("/Login");
            }}>登陆</Button>
          </div>
          
          </div>
        );
  }
  
}

export default withRouter(Logo); 
