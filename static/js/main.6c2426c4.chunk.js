(this.webpackJsonpvideoservice=this.webpackJsonpvideoservice||[]).push([[0],{77:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(8),s=n.n(a),c=n(31),o=n.n(c),l=n(43),d=n(21),h=n(22),u=n(27),b=n(26),j=n(115),p=n(44),m=n.n(p),v=(n(77),n(83)),x=n(120),O=n(5),g=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){return e.setState({searchTerm:t.target.value})},e.onKeyPress=function(t){"Enter"===t.key&&e.handleSubmit(e.state.searchTerm)},e}return Object(h.a)(n,[{key:"handleSubmit",value:function(e){this.props.handleSubmit(e)}},{key:"render",value:function(){return Object(O.jsx)(v.a,{elevation:6,style:{padding:"10px",backgroundColor:"rgb(80,80,80)"},children:Object(O.jsx)(x.a,{fullWidth:!0,label:"Search...",value:this.state.searchTerm,onChange:this.handleChange,onKeyPress:this.onKeyPress,handleSubmit:this.handleSubmit})})}}]),n}(r.a.Component),y=n(28),f=function(e){var t=e.video;if(!t)return Object(O.jsx)("div",{children:"Loading..."});var n="https://www.youtube.com/embed/".concat(t.id.videoId),i="Publish Time: "+t.snippet.publishTime.slice(0,10);return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(v.a,{elevation:6,style:{height:"22%",width:"85%"},children:Object(O.jsx)("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:n})}),Object(O.jsxs)(v.a,{elevation:6,style:{padding:"15px",width:"81.6%",height:"15%",backgroundColor:"rgb(80,80,80)"},children:[Object(O.jsxs)(y.a,{variant:"h4",style:{color:"rgb(252,252,252)"},children:[t.snippet.title," - ",t.snippet.channelTitle]}),Object(O.jsx)(y.a,{variant:"subtitle1",style:{color:"rgb(2,2,2)"},children:t.snippet.channelTitle}),Object(O.jsx)(y.a,{variant:"subtitle2",style:{color:"rgb(2,2,2)"},children:t.snippet.description}),Object(O.jsx)(y.a,{variant:"subtitle1",style:{color:"rgb(252,252,252)"},children:i})]})]})},S=n(116),w=n(117),k=n(118),T=n(119),V=function(e){var t=e.video,n=e.onVideoSelect,i="Publish Time: "+t.snippet.publishTime.slice(0,10);return Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsxs)(S.a,{variant:"outlined",style:{cursor:"pointer",backgroundColor:"rgb(80,80,80)"},onClick:function(){return n(t)},children:[Object(O.jsx)(w.a,{title:t.snippet.title,titleTypographyProps:{variant:"h6"},style:{color:"rgb(252, 252, 252)",fontFamily:"calibri"},subheader:i}),Object(O.jsx)(k.a,{component:"img",src:t.snippet.thumbnails.medium.url,style:{height:150}}),Object(O.jsx)(T.a,{children:Object(O.jsx)(y.a,{style:{color:"rgb(2,2,2)",fontFamily:"calibri"},children:Object(O.jsx)("b",{children:t.snippet.description})})})]})})},C=function(e){var t=e.videos,n=e.onVideoSelect,i=t.map((function(e,t){return Object(O.jsx)(V,{onVideoSelect:n,video:e},t)}));return Object(O.jsx)(j.a,{container:!0,spacing:3,children:i})},P="AIzaSyBIRMchRfnsrA8Pt1dyRyuI5sPH61IjcZ0",I=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(l.a)(o.a.mark((function t(n){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResult:5,key:P,q:n}});case 2:i=t.sent,e.setState({videos:i.data.items,selectedVideo:i.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.handleSubmit("Kitesurfing")}},{key:"render",value:function(){return Object(O.jsx)(j.a,{style:{justifyContent:"center"},container:!0,spacing:10,children:Object(O.jsx)(j.a,{item:!0,xs:11,children:Object(O.jsxs)(j.a,{container:!0,spacing:2,children:[Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsx)(g,{handleSubmit:this.handleSubmit})}),Object(O.jsx)(j.a,{item:!0,xs:8,spacing:2,children:Object(O.jsx)(f,{video:this.state.selectedVideo})}),Object(O.jsx)(j.a,{item:!0,xs:4,spacing:2,children:Object(O.jsx)(C,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})})}}]),n}(r.a.Component);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6c2426c4.chunk.js.map