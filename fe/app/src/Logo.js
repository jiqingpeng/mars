import React from 'react';
import { Carousel,Button  } from 'antd-mobile';
// import axios from 'axios';
import {withRouter} from "react-router-dom";
 
class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {title:'养宠板块升级',slog:'专家问答，强大工具，让爱宠健康成长',img:'AiyWuByWklrrUDlFignR'},
        {title:'222',slog:'bbb',img: 'TekJlZRVCjLFexlOCuWn'},
        {title:'333',slog:'bbb',img:'IJOtIlfsYdTyaDTRVrLI'}
      ]
    }
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
 

  render() {
   
      return (
          <div>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <div
                key={val}
                
                style={{display: 'inline-block', width: '100%',height:'500px'}}
              >
              <p style={{ width: '100%',textAlign:'center',marginTop:"20%", color:'red',fontSize:'24px'}}>{val.title}</p>
              <p style={{ width: '100%',textAlign:'center',marginTop:"5%"}} >{val.slog}</p>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val.img}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'300px' }}
                
              />
              </div>
            ))}
          </Carousel>
          <Button type="warning" size="small" style={{ width: '120px',margin:"10px auto"}} onClick={()=>{
            this.props.history.push("/Register");
          }}>注册</Button>
          <Button type="warning" size="small" style={{ width: '120px',margin:"10px auto"}} onClick={()=>{
            this.props.history.push("/Login");
          }}>登陆</Button>
          </div>
        );
  }
  
}

export default withRouter(Logo); 
