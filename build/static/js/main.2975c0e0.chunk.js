(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{169:function(e,t,a){e.exports=a(336)},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),c=a(23),i=a(24),s=a(27),u=a(25),m=a(28),p=(a(174),a(337)),h=a(126),d=a(342),f=a(31),g=a(51),y=a(36),E=a.n(y),b=function(e){return{type:"AUTH_SUCCESS",token:e}},v=function(e){return{type:"AUTH_FAIL",error:e}},O=function(){return localStorage.removeItem("user"),localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},w=function(e){return function(t){setTimeout((function(){t(O())}),1e3*e)}},j=a(40),S=p.a.Header,k=p.a.Content,T=p.a.Footer,D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"layout"},r.a.createElement(S,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},this.props.isAuthenticated?r.a.createElement(h.a.Item,{key:"2",onClick:this.props.logout},r.a.createElement(f.b,{to:"/login"},"Logout")):r.a.createElement(h.a.Item,{key:"2"},r.a.createElement(f.b,{to:"/Login"},"Login")),this.props.isAuthenticated?r.a.createElement(h.a.Item,{key:"1"},r.a.createElement(f.b,{to:"/"},"Posts")):"")),r.a.createElement(k,{style:{padding:"0 50px"}},r.a.createElement(d.a,{style:{margin:"16px 0"}},r.a.createElement(d.a.Item,null,r.a.createElement(f.b,{to:"/"},"Home")),r.a.createElement(d.a.Item,null,r.a.createElement(f.b,{to:"/"},"List"))),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},this.props.children)),r.a.createElement(T,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),t}(r.a.Component),I=Object(g.e)(Object(j.b)(null,(function(e){return{logout:function(){return e(O())}}}))(D)),A=a(10),x=a(340),P=a(338),C=function(e){var t=e.type,a=e.text;return r.a.createElement("span",null,r.a.createElement(A.a,{type:t,style:{marginRight:8}}),a)},U=function(e){return r.a.createElement(x.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.data,renderItem:function(e){return r.a.createElement(x.a.Item,{key:e.title,actions:[r.a.createElement(C,{type:"star-o",text:"156",key:"list-vertical-star-o"}),r.a.createElement(C,{type:"like-o",text:"156",key:"list-vertical-like-o"}),r.a.createElement(C,{type:"message",text:"2",key:"list-vertical-message"})],extra:r.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},r.a.createElement(x.a.Item.Meta,{avatar:r.a.createElement(P.a,{src:e.avatar}),title:r.a.createElement("a",{href:"/".concat(e.id)},e.title),description:e.description}),e.content)}})},_=a(341),F=a(343),H=a(166),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e,t,a){e.preventDefault();var n=e.target.elements.title.value,r=e.target.elements.content.value;switch(t){case"post":return E.a.post("http://127.0.0.1:8000/api/",{title:n,content:r}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case"put":return E.a.put("http://127.0.0.1:8000/api/".concat(a,"/"),{title:n,content:r}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_.a,{onSubmit:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.articleID)}},r.a.createElement(_.a.Item,{label:"Title"},r.a.createElement(F.a,{name:"title",placeholder:"Enter a title"})),r.a.createElement(_.a.Item,{label:"Content"},r.a.createElement(F.a,{name:"content",placeholder:"Enter some content"})),r.a.createElement(_.a.Item,null,r.a.createElement(H.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),t}(r.a.Component),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({articles:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{data:this.state.articles}),r.a.createElement("br",null),r.a.createElement("h2",null,"Create an article"),r.a.createElement(L,{requestType:"post",articleID:null,btnText:"Create"}))}}]),t}(n.Component),N=a(339),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:{}},a.handleDelete=function(e){var t=a.props.match.params.articleID;E.a.delete("http://127.0.0.1:8000/api/".concat(t)),a.props.history.push("/"),a.forceUpdate()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.articleID;E.a.get("http://127.0.0.1:8000/api/".concat(t),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({articles:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{title:this.state.articles.title},r.a.createElement("p",null,this.state.articles.content)),r.a.createElement(L,{requestType:"put",articleID:this.props.match.params.articleID,btnText:"Update"}),r.a.createElement("form",{onSubmit:this.handleDelete},r.a.createElement(H.a,{htmlType:"submit",type:"danger"},"Delete")))}}]),t}(n.Component),z=a(159),B=_.a.Item,M=r.a.createElement(A.a,{type:"loading",style:{fontSize:24},spin:!0}),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||a.props.onAuth(t.userName,t.password)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){null!==this.props.token&&(console.log("Token has been generated"),this.props.history.push("/"));var e=null;this.props.error&&(e=r.a.createElement("p",null,this.props.error.message));var t=this.props.form.getFieldDecorator;return r.a.createElement("div",null,e,this.props.loading?r.a.createElement(z.a,{indicator:M}):r.a.createElement(_.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(B,null,t("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(F.a,{prefix:r.a.createElement(A.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(B,null,t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(F.a,{prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(B,null,r.a.createElement(H.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Login"),"Or",r.a.createElement(f.c,{style:{marginRight:"10px"},to:"/signup/"},"\xa0\xa0Sign Up"))))}}]),t}(r.a.Component),G=_.a.create()(X),J=Object(j.b)((function(e){return{token:e.token,loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a){e(function(e,t){return function(a){a({type:"AUTH_START"}),E.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(b(t)),a(w(3600))})).catch((function(e){a(v(e))}))}}(t,a))}}}))(G),K=r.a.createElement(A.a,{type:"loading",style:{fontSize:24},spin:!0}),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||a.props.onAuth(t.username,t.email,t.password,t.confirm)}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=null;return this.props.error&&(t=r.a.createElement("p",null,this.props.error.message)),null!==localStorage.getItem("token")&&(console.log("Sign up successfully, token has been generated"),this.props.history.push("/")),r.a.createElement("div",null,t,this.props.loading?r.a.createElement(z.a,{indicator:K}):r.a.createElement(_.a,{onSubmit:this.handleSubmit},r.a.createElement(_.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(F.a,{prefix:r.a.createElement(A.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(_.a.Item,null,e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(F.a,{prefix:r.a.createElement(A.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(_.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(F.a.Password,{prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(_.a.Item,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(F.a.Password,{onBlur:this.handleConfirmBlur,prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm password"}))),r.a.createElement(_.a.Item,null,r.a.createElement(H.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Sign up"),"Or",r.a.createElement(f.c,{style:{marginRight:"10px"},to:"/login/"},"\xa0\xa0Login"))))}}]),t}(r.a.Component),W=_.a.create({name:"register"})(V),Q=Object(j.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),E.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(b(t)),r(w(3600))})).catch((function(e){r(v(e))}))}}(t,a,n,r))}}}))(W),Z=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{exact:!0,path:"/",component:q}),r.a.createElement(g.a,{exact:!0,path:"/articles/:articleID/",component:R}),r.a.createElement(g.a,{exact:!0,path:"/login/",component:J}),r.a.createElement(g.a,{exact:!0,path:"/signup/",component:Q}))},$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(I,this.props,r.a.createElement(Z,null))))}}]),t}(n.Component),Y=Object(j.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(O());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(O()):(e(b(t)),e(w((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(64),te=a(164),ae=a(165);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var re=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(ae.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)},oe={token:null,error:null,loading:!1},le=function(e,t){return re(e,{error:null,loading:!0})},ce=function(e,t){return re(e,{token:t.token,error:null,loading:!1})},ie=function(e,t){return re(e,{error:t.error,loading:!1})},se=function(e,t){return re(e,{token:null})},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return le(e);case"AUTH_SUCCESS":return ce(e,t);case"AUTH_FAIL":return ie(e,t);case"AUTH_LOGOUT":return se(e);default:return e}},me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,pe=Object(ee.d)(ue,me(Object(ee.a)(te.a))),he=r.a.createElement(j.a,{store:pe},r.a.createElement(Y,null));l.a.render(he,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.2975c0e0.chunk.js.map