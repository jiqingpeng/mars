(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(296)},155:function(e,t,a){},157:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(155),a(13)),l=a(14),s=a(16),u=a(15),m=a(17),d=(a(157),a(11)),h=a(59),p=a(145),f=[{img:"https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",title:"Meet hotel",des:"\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652"},{img:"https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",title:"McDonald's invites you",des:"\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652"},{img:"https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",title:"Eat the week",des:"\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652"}],b=20,v=0;function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t={},a=0;a<b;a++){var n=e*b+a;t["".concat(n)]="row - ".concat(n)}return t}var E=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onEndReached=function(e){a.state.isLoading&&!a.state.hasMore||(console.log("reach end",e),a.setState({isLoading:!0}),setTimeout(function(){a.rData=Object(p.a)({},a.rData,g(++v)),a.setState({dataSource:a.state.dataSource.cloneWithRows(a.rData),isLoading:!1})},1e3))};var n=new d.d.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.rData=g(),e.setState({dataSource:e.state.dataSource.cloneWithRows(e.rData),isLoading:!1})},600)}},{key:"render",value:function(){var e=this,t=f.length-1;return r.a.createElement(d.d,{ref:function(t){return e.lv=t},dataSource:this.state.dataSource,renderHeader:function(){return r.a.createElement("span",null,"header")},renderFooter:function(){return r.a.createElement("div",{style:{padding:30,textAlign:"center"}},e.state.isLoading?"Loading...":"Loaded")},renderRow:function(e,a,n){var o;t<0&&(t=f.length-1);var c=f[t--];return r.a.createElement("div",{key:n,style:{padding:"0 15px"}},r.a.createElement("div",{style:{lineHeight:"50px",color:"#888",fontSize:18,borderBottom:"1px solid #F6F6F6"}},c.title),r.a.createElement("div",{style:(o={display:"-webkit-box"},Object(h.a)(o,"display","flex"),Object(h.a)(o,"padding","15px 0"),o)},r.a.createElement("img",{style:{height:"64px",marginRight:"15px"},src:c.img,alt:""}),r.a.createElement("div",{style:{lineHeight:1}},r.a.createElement("div",{style:{marginBottom:"8px",fontWeight:"bold"}},c.des),r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:"30px",color:"#FF6E27"}},n),"\xa5"))))},renderSeparator:function(e,t){return r.a.createElement("div",{key:"".concat(e,"-").concat(t),style:{backgroundColor:"#F5F5F9",height:8,borderTop:"1px solid #ECECED",borderBottom:"1px solid #ECECED"}})},className:"am-list",pageSize:4,useBodyScroll:!0,onScroll:function(){console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this.onEndReached,onEndReachedThreshold:10})}}]),t}(r.a.Component);var j=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new d.d.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-wrap"},function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e=[],t=0;t<10;t++)e.push(r.a.createElement("div",{className:"card",key:t},r.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"}),r.a.createElement("p",null,"1111111")));return e}())}}]),t}(r.a.Component);var y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e=[],t=0;t<10;t++)e.push(r.a.createElement(d.b,{full:!0,key:t},r.a.createElement(d.b.Header,{title:"This is title",thumb:"https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",extra:r.a.createElement(d.a,{size:"small"},"+ \u5173\u6ce8")}),r.a.createElement(d.b.Body,null,r.a.createElement("div",{className:"card-img"},r.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png"}))),r.a.createElement(d.b.Footer,{content:"footer content",extra:r.a.createElement("div",null,"extra footer content")})));return e}())}}]),t}(r.a.Component),O=[{title:"\u7cbe\u9009"},{title:"\u52a8\u6001"},{title:"\u9891\u9053"}],k=function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement(d.e,{tabs:O,initialPage:0,animated:!1,useOnPan:!1},r.a.createElement("div",{className:"tab-item"},r.a.createElement(y,null)),r.a.createElement("div",{className:"tab-item"},r.a.createElement(j,null)),r.a.createElement("div",{className:"tab-item"},r.a.createElement(E,null))))},w=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new d.d.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null))}}]),t}(r.a.Component),C=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={files:C,multiple:!1},a.onChange=function(e,t,n){console.log(e,t,n);var r=e[2].file;a.setState({file:r,files:e,text:a.state.text}),console.log(a.state),a.Picker(a.state)},a.onInputChange=function(e){a.setState({text:e.target.value}),a.Picker(a.state)},a.onSegChange=function(e){var t=e.nativeEvent.selectedSegmentIndex;a.setState({multiple:1===t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"Picker",value:function(e){this.props.onPicker(e)}},{key:"render",value:function(){var e=this,t=this.state.files;return r.a.createElement("div",null,r.a.createElement("textarea",{className:"text",onChange:function(t){return e.onInputChange(t)}}),r.a.createElement(d.c,{files:t,onChange:this.onChange,onImageClick:function(e,t){return console.log(e,t)},selectable:t.length<7,multiple:this.state.multiple}))}}]),t}(r.a.Component),x=a(146),z=a.n(x),D=a(147),L=a.n(D),N=a(300),P=new z.a({region:"oss-cn-beijing",accessKeyId:"LTAIlMTJKMecYbvG",accessKeySecret:"AMWbL2RGz5b18k7fiYCUVxeC7y2LdO",bucket:"lonelyroad"}),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={file:a.props.file},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"randomString",value:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=t.length,n="",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*a));return n}},{key:"handleIssue",value:function(e){var t=this.props.file.file,a=this.randomString(6),n=this.props.file.text,r=this.props.history;P.put(a,t).then(function(e){L.a.post("http://127.0.0.1:7001/test",{url:"https://lonelyroad.oss-cn-beijing.aliyuncs.com/"+a,text:n}).then(function(e){r.push("/")}).catch(function(e){console.log(e)})}).catch(function(e){console.error("error: %j",e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"head"},r.a.createElement("span",null,"\u8fd4\u56de"),r.a.createElement("img",{src:this.state.src}),r.a.createElement("span",{onClick:function(){return e.handleIssue(e.state.file)}},"\u53d1\u5e03"))}}]),t}(r.a.Component),R=Object(N.a)(M),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"printContent",value:function(e){this.setState({file:e}),console.log(this.state.file)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,{file:this.state.file}),r.a.createElement(S,{onPicker:this.printContent.bind(this)}))}}]),t}(r.a.Component),H=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new d.d.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"my")}}]),t}(r.a.Component),F=a(297);var I=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e));var n=new d.d.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"foodbar"},r.a.createElement(F.a,{className:"bar",to:"/"},"\u4e3b\u9875"),r.a.createElement(F.a,{className:"bar",to:"/issue"},"\u53d1\u5e03"),r.a.createElement(F.a,{className:"bar",to:"/my"},"\u6211\u7684"))}}]),t}(r.a.Component),W=a(299),A=a(298),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(A.a,{path:"/",exact:!0,component:w}),r.a.createElement(A.a,{path:"/issue",component:T}),r.a.createElement(A.a,{path:"/my",component:H}),r.a.createElement(I,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(294);c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.333fd70b.chunk.js.map