(this.webpackJsonpklout=this.webpackJsonpklout||[]).push([[0],{119:function(e,t,a){e.exports=a(154)},124:function(e,t,a){},149:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=a(8),m=(a(124),a(22)),u=a(27),i=a(24),s=a(23),E=a(183),f=a(185),d=a(182),g=a(186),b=a(192),p=a(184);var h=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"/klout.png",width:"150px",alt:"KloutLogo"}),l.a.createElement("br",null))},v=a(104);var x=function(){return l.a.createElement(b.a,null,l.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(o.b,{color:"inherit",to:"/"},"KLOUT")," ",(new Date).getFullYear(),"."))};var k=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",null,"Measure your Influence"),l.a.createElement("br",null))};var y=function(){return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{href:"/SignUp"},l.a.createElement(g.a,{fullWidth:!0,variant:"contained",color:"secondary",className:""},"Start")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{href:"/Login",variant:"body2"},"Already have an account?  here")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mt:0},l.a.createElement(x,null)))},U=a(33),S=a(191),T=a(188),C=a(193),N=a(187),j=a(49),O=a.n(j),I=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(m.a)(this,a),(n=t.call(this,e)).signup=function(e,t){return n.service.post("/signup",{username:e,password:t}).then((function(e){return e.data}))},n.login=function(e,t){return n.service.post("/login",{username:e,password:t}).then((function(e){return e.data}))},n.checkusername=function(e){return n.service.post("/checkusername",{username:e}).then((function(e){return e.status})).catch((function(e){return e.status}))},n.checkemail=function(e){return n.service.post("/checkemail",{email:e}).then((function(e){return e.status})).catch((function(e){return e.status}))},n.logout=function(){return n.service.post("/logout",{}).then((function(e){return e.data}))},n.loggedin=function(){return n.service.get("/loggedin").then((function(e){return e.data})).catch((function(e){return 200===e.status}))};var l=O.a.create({baseURL:"http://localhost:3000/api/auth",withCredentials:!0});return n.service=l,n.state={redirectToReferrer:!1},n}return a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then((function(e){n.setState({username:"",password:""}),n.props.getUser(e),n.props.history.push("/profile"+e.data._id)})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(U.a)({},a,l))},n.useStyles=Object(N.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),n.state={username:"",password:""},n.service=new I,n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:this.useStyles.form,onSubmit:this.handleFormSubmit},l.a.createElement("h1",null,this.state._id),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"",autoFocus:!0,value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement(T.a,{control:l.a.createElement(C.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement("br",null),l.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",value:"Login",className:this.useStyles.submit},"SIGN IN"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0},l.a.createElement(f.a,{href:"/",variant:"body2"},"Return to Home")),l.a.createElement(p.a,{item:!0},l.a.createElement(f.a,{href:"/SignUp",variant:"body2"},"Don't have an account? Sign Up"))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(x,null)))}}]),a}(n.Component),R=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then((function(e){n.setState({username:"",password:""}),n.props.getUser(e),n.props.history.push("/Login")})).catch((function(e){return l.a.createElement("p",{class:"btn btn-google btn-user btn-block"},{error:e})}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(U.a)({},a,l))},n.useStyles=Object(N.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),n.state={username:"",password:""},n.service=new I,n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up"),l.a.createElement("form",{className:this.useStyles.form,onSubmit:this.handleFormSubmit},l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"username",label:"Username",type:"username",id:"username",autoComplete:"",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement(T.a,{control:l.a.createElement(C.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",value:"Signup",className:this.useStyles.submit},"Sign Up"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0},l.a.createElement(f.a,{href:"/",variant:"body2"},"Return to Home")),l.a.createElement(p.a,{item:!0},l.a.createElement(f.a,{href:"/Login",variant:"body2"},"Have an account? Sign in"))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(x,null)))}}]),a}(n.Component),z=a(71),W=a.n(z),L=a(189),F=a(50),P=a(28),D=a.n(P),A=a(60),_=a(62),q=a(63),H=a(61),M=a(190);var B=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("img",{src:"/klout1.png",width:"50px",alt:"KloutLogo1"}),l.a.createElement("br",null))},J=a(91),K=a.n(J),Y=a(89),V=a.n(Y),G=a(90),Q=a.n(G),X=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(2.4)}},extendedIcon:{marginRight:e.spacing(1),color:"red"}}}));function Z(){var e=X();return l.a.createElement("div",{className:e.root,container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(o.b,{to:"/Resume"},"\xa0\xa0\xa0",l.a.createElement(L.a,{color:"secondary"},l.a.createElement(V.a,null))),l.a.createElement(o.b,{to:"/SocialProfile"},l.a.createElement(L.a,{Fab:!0,color:"secondary"},l.a.createElement(Q.a,null))),l.a.createElement(o.b,{to:"/Evolution"},l.a.createElement(L.a,{Fab:!0,color:"secondary"},l.a.createElement(K.a,null))),l.a.createElement(o.b,{to:"/Profile"},l.a.createElement(L.a,{Fab:!0,color:"secondary"},l.a.createElement(D.a,null))))}var $=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},pink:{color:"#fff",backgroundColor:A.a[500]},pinkText:{color:A.a[500],fontSize:"x-large"},blue:{color:"#fff",backgroundColor:_.a[500]},blueText:{color:_.a[500],fontSize:"x-large"},greenText:{color:q.a[500],fontSize:"x-large"},green:{color:"#fff",backgroundColor:q.a[500]},redText:{color:H.a[500],fontSize:"x-large"},red:{color:"#fff",backgroundColor:H.a[500]},purple:{color:"#fff",backgroundColor:M.a[500]},purpleText:{color:M.a[500],fontSize:"x-large"},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"}}}));var ee=function(){var e=$();return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement("br",null),l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/profile"},l.a.createElement(L.a,{className:e.purple},l.a.createElement(D.a,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,className:e.blackText},"Add Your Networks",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/resume"},l.a.createElement(F.FacebookLoginButton,null,l.a.createElement("span",null,"Add Facebook"))),l.a.createElement(F.TwitterLoginButton,null,l.a.createElement("span",null,"Add Twitter")),l.a.createElement(F.InstagramLoginButton,null,l.a.createElement("span",null,"Add Instagram")),l.a.createElement(F.LinkedInLoginButton,null,l.a.createElement("span",null,"Add Linkedin")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))},te=a(92),ae=a.n(te),ne=a(11),le=a.n(ne),re=Object(N.a)((function(e){return{root:{display:"flex",textDecoration:"none","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(15),height:e.spacing(15),fontSize:"80px",color:e.palette.getContrastText(A.a[500]),backgroundColor:A.a[500]}}}));function ce(){var e=re();return l.a.createElement("div",{className:e.root},l.a.createElement(L.a,{alt:"Remy Sharp",className:e.large},l.a.createElement(le.a,{start:0,end:89,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}))}))))}var oe=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:25356,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}))})))};var me=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:1e3,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}))})))};var ue=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:25,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))},ie=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},blue:{color:"#fff",backgroundColor:_.a[500]},blueText:{color:_.a[500],fontSize:"x-large"},red:{color:"#fff",backgroundColor:H.a[500]},redText:{color:H.a[500],fontSize:"x-large"},greenText:{color:q.a[500],fontSize:"x-large"},green:{color:"#fff",backgroundColor:q.a[500]},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"},purple:{color:"#fff",backgroundColor:M.a[500]},purpleText:{color:M.a[500],fontSize:"medium"}}}));var se=function(){var e=ie();return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:4.5,delay:0,decimals:2},(function(t){var a=t.countUpRef;return l.a.createElement(p.a,{item:!0,className:e.greenText},l.a.createElement("span",{ref:a}),"%")})))},Ee=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),textDecoration:"none"}},blue:{color:"#fff",backgroundColor:_.a[500]},blueText:{color:_.a[500],fontSize:"x-large"},greenText:{color:q.a[500],fontSize:"x-large"},green:{color:"#fff",backgroundColor:q.a[500]},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"},purple:{color:"#fff",backgroundColor:M.a[500]},purpleText:{color:M.a[500],fontSize:"x-large"}}}));function fe(){var e=Ee();return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement("br",null),l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,xs:!0,className:e.blackText},"RESUME"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0},l.a.createElement(o.b,{to:"/profile"},l.a.createElement(L.a,{className:e.purple},l.a.createElement(D.a,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(p.a,{item:!0,className:e.blueText},"CHUS SANTANA")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center"},l.a.createElement(se,null),"\xa0",l.a.createElement(p.a,{item:!0},l.a.createElement(L.a,{className:e.green},l.a.createElement(ae.a,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/SocialProfile"},l.a.createElement(ce,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.greenText},l.a.createElement("h2",null,l.a.createElement(oe,null))),l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueText},l.a.createElement("h2",null,l.a.createElement(me,null))),l.a.createElement(p.a,{item:!0,className:e.purpleText},l.a.createElement("h2",null,l.a.createElement(ue,null)))),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.greenText},l.a.createElement("h2",null,"Follows")),l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueText},l.a.createElement("h2",null,"Likes")),l.a.createElement(p.a,{item:!0,className:e.purpleText},l.a.createElement("h2",null,"Rate")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))}var de=a(101),ge=a(93),be=function(){return n.createElement(ge.a,{chartType:"ScatterChart",width:"100%",height:"400px",data:[["x","Rate"],[1,84],[2,88],[3,75],[4,80],[5,90],[6,85],[7,80],[8,75],[9,90],[10,84],[11,50],[12,85]],chartEvents:[{eventName:"select",callback:function(e){var t=e.chartWrapper,a=t.getChart().getSelection();if(1===a.length){var n=Object(de.a)(a,1)[0],l=t.getDataTable(),r=n.row,c=n.column;alert("You selected : "+JSON.stringify({row:r,column:c,value:l.getValue(r,c)}),null,2)}console.log(a)}}]})},pe=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),textDecoration:"none"}},blue:{color:"#fff",backgroundColor:_.a[500]},blueText:{color:_.a[500],fontSize:"x-large"},greenText:{color:q.a[500],fontSize:"x-large"},green:{color:"#fff",backgroundColor:q.a[500]},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"},purple:{color:"#fff",backgroundColor:M.a[500]},purpleText:{color:M.a[500],fontSize:"x-large"}}}));function he(){var e=pe();return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement("br",null),l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,xs:!0,className:e.blackText},"EVOLUTION"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0},l.a.createElement(o.b,{to:"/profile"},l.a.createElement(L.a,{className:e.purple},l.a.createElement(D.a,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement(p.a,{item:!0,className:e.blueText},"CHUS SANTANA")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(be,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))}var ve=a(64),xe=a.n(ve),ke=a(95),ye=a.n(ke),Ue=a(96),Se=a.n(Ue),Te=a(98),Ce=a.n(Te),Ne=a(97),je=a.n(Ne);var Oe=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:32,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))};var Ie=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:18,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))};var we=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:27,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))};var Re=function(){return l.a.createElement("div",null,l.a.createElement(le.a,{start:0,end:25,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))},ze=a(99),We=a.n(ze),Le=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},pink:{color:"#fff",backgroundColor:A.a[500]},pinkText:{color:A.a[500],fontSize:"x-large"},blue:{color:"#fff",backgroundColor:_.a[600]},blueText:{color:_.a[600],fontSize:"x-large"},blueLight:{color:"#fff",backgroundColor:_.a[300]},blueLightText:{color:_.a[300],fontSize:"x-large"},blueDark:{color:"#fff",backgroundColor:_.a[800]},blueDarkText:{color:_.a[800],fontSize:"x-large"},greenText:{color:q.a[500],fontSize:"x-large"},green:{color:"#fff",backgroundColor:q.a[500]},redText:{color:H.a[500],fontSize:"x-large"},red:{color:"#fff",backgroundColor:H.a[500]},purple:{color:"#fff",backgroundColor:M.a[500]},purpleText:{color:M.a[500],fontSize:"x-large"},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"}}}));var Fe=function(){var e=Le();return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement("br",null),l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,className:e.blackText},"SOCIAL PROFILE"),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0},l.a.createElement(o.b,{to:"../Profile/Profile"},l.a.createElement(L.a,{className:e.purple},l.a.createElement(D.a,null)))),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueText},l.a.createElement(L.a,{className:e.blue},l.a.createElement(ye.a,null)),l.a.createElement(Oe,null)),l.a.createElement(p.a,{item:!0,className:e.purpleText},l.a.createElement(L.a,{className:e.purple},l.a.createElement(Se.a,null)),l.a.createElement(Ie,null))),l.a.createElement(o.b,{to:"/HomeResume"},l.a.createElement(ce,null)),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueLightText},l.a.createElement(L.a,{className:e.blueLight},l.a.createElement(je.a,null)),l.a.createElement(Re,null)),l.a.createElement(p.a,{item:!0,className:e.blueDarkText},l.a.createElement(L.a,{className:e.blueDark},l.a.createElement(Ce.a,null)),l.a.createElement(we,null))),l.a.createElement(p.a,{item:!0},l.a.createElement(L.a,{className:e.green},l.a.createElement(We.a,null)),l.a.createElement(se,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,className:e.blackText},"FRIENDS"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0},l.a.createElement(L.a,{className:e.blue},l.a.createElement(xe.a,null))),l.a.createElement(p.a,{item:!0,xs:!0},l.a.createElement(L.a,{className:e.pink},l.a.createElement(xe.a,null))),l.a.createElement(p.a,{item:!0},l.a.createElement(L.a,{className:e.purple},l.a.createElement(xe.a,null)))),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueText},l.a.createElement("h2",null,l.a.createElement("div",{className:e.root},l.a.createElement(le.a,{start:0,end:52,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")}))))),l.a.createElement(p.a,{item:!0,xs:!0,className:e.redText},l.a.createElement("h2",null,l.a.createElement("div",{className:e.root},l.a.createElement(le.a,{start:0,end:44,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")}))))),l.a.createElement(p.a,{item:!0,className:e.purpleText},l.a.createElement("h2",null,l.a.createElement("div",{className:e.root},l.a.createElement(le.a,{start:0,end:4,delay:0},(function(e){var t=e.countUpRef;return l.a.createElement("div",null,l.a.createElement("span",{ref:t}),"%")})))))),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:!0,className:e.blueText},l.a.createElement("h3",null,"Male")),l.a.createElement(p.a,{item:!0,xs:!0,className:e.redText},l.a.createElement("h3",null,"Female")),l.a.createElement(p.a,{item:!0,className:e.purpleText},l.a.createElement("h3",null,"Other")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))},Pe=a(43),De=a(100),Ae=a.n(De),_e=(a(149),Object(N.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),qe=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).logoutUser=function(){n.service.logout().then((function(){n.setState({loggedInUser:null}),n.props.getUser(null)}))},n.componentDidMount=function(){n.getUser(),n.fetchUser()},n.getUser=function(){O.a.get("http://localhost:3000/api/user/:id/5f6062f48e57521fd078c4c2").then((function(e){var t=e.data;n.setState({username:t.username,password:t.password,image:t.image,_id:t._id})})).catch((function(e){console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(U.a)({},a,l))},n.handleSave=function(e){e.preventDefault(),O.a.put("http://localhost:3000/api/user/"+n.state._id,n.state).then((function(e){console.log(e),n.props.history.push("/Profile")})).catch((function(e){console.log(e)}))},n.state={loggedInUser:null},n.service=new I,n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(Pe.a)(Object(Pe.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"rc justify-content-center"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",null,l.a.createElement("div",{class:"card-header "},l.a.createElement("h8",null,this.state._id),l.a.createElement("h4",null,this.state.username),l.a.createElement("div",{class:"card-avatar"},l.a.createElement("img",{id:"avatarProfile",class:"img-fluid img-profile rounded-circle float-center",src:this.state.image,alt:"Avatar"}))),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"form-group"},l.a.createElement("form",{for:"photo",class:"custom-file-upload",id:"photo",type:"file",name:"photo"},l.a.createElement(Ae.a,null)," Photo")))),l.a.createElement("form",{onSubmit:this.handleSave,className:_e.form,method:"POST",enctype:"multipart/form-data"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"form-group"},l.a.createElement(S.a,{type:"text",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"off",autoFocus:!0,value:this.state.username,onChange:this.handleChange,placeholder:"Username"}))),l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"form-group"},l.a.createElement(S.a,{type:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",value:this.state.password,onChange:this.handleChange,placeholder:"password"})))),l.a.createElement("br",null),l.a.createElement("div",{class:"clearfix"}),l.a.createElement("div",{class:"clearfix"}),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement(g.a,{type:"submit",class:"btn btn-danger float-right"},"Update Profile"),l.a.createElement("div",{class:"clearfix"})))))),l.a.createElement("div",{class:"col-md-12"},l.a.createElement(o.b,{to:"/AddNetworks",variant:"body2"},l.a.createElement(g.a,{class:"btn btn-primary float-right"},"Edit Networks"))))))}}]),a}(n.Component),He=Object(N.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},black:{color:"#fff",backgroundColor:"black"},blackText:{color:"black",fontSize:"x-large"}}}));var Me=function(){var e=He();return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{item:!0,className:e.blackText},"PROFILE"),l.a.createElement("br",null),l.a.createElement(qe,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mb:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))};var Be=function(){return l.a.createElement(d.a,{component:"main",maxWidth:"xs"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,null),l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null," Oops! "),l.a.createElement("img",{className:"error-page-img",style:{margin:" 8% 0"},src:"/error404.png",width:"100%",alt:"auth-error"}),l.a.createElement("h2",null,"We can't seem to find the adress you're looking for")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{mt:0},l.a.createElement(Z,null),l.a.createElement("br",null),l.a.createElement(x,null)))},Je=a(12),Ke=(a(150),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).logoutUser=function(){n.service.logout().then((function(){n.setState({loggedInUser:null}),n.props.getUser(null)}))},n.state={loggedInUser:null},n.service=new I,n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(Pe.a)(Object(Pe.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?l.a.createElement("nav",{component:"main",maxWidth:"xs",container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement("ul",null,l.a.createElement("li",null,"Welcome, ",this.state.loggedInUser.username," ",this.state.loggedInUser._id))):l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,"Welcome, Logged")))}}]),a}(n.Component)),Ye=a(102),Ve=function(e){var t=e.component,a=e.user,n=e.callback,r=Object(Ye.a)(e,["component","user","callback"]);return l.a.createElement(Je.b,Object.assign({},r,{render:function(e){return a?l.a.createElement(t,Object.assign({},e,{callback:n,user:a})):(n(void 0),l.a.createElement(Je.a,{to:{pathname:"/login",state:{from:e.location}}}))}}))};a(151).config();var Ge=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getTheUser(),n.fetchUser()},n.getTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new I,n}return Object(u.a)(a,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?l.a.createElement("div",null,l.a.createElement(Ke,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),l.a.createElement(Je.d,null,l.a.createElement(Je.b,{exact:!0,path:"/",render:function(){return l.a.createElement(y,null)}}),l.a.createElement(Je.b,{path:"/logout",render:function(t){return l.a.createElement(W.a,Object.assign({},t,{getUser:e.getTheUser}))}}),l.a.createElement(Je.b,{exact:!0,path:"/addnetworks",render:function(t){return l.a.createElement(ee,Object.assign({},t,{user:e.state.loggedInUser,key:e.state.loggedInUser,getUser:e.getTheUser}))}}),l.a.createElement(Je.b,{exact:!0,path:"/resume",render:function(t){return l.a.createElement(fe,Object.assign({},t,{user:e.state.loggedInUser,key:e.state.loggedInUser,getUser:e.getTheUser}))}}),l.a.createElement(Je.b,{exact:!0,path:"/socialprofile",render:function(t){return l.a.createElement(Fe,Object.assign({},t,{user:e.state.loggedInUser,key:e.state.loggedInUser,getUser:e.getTheUser}))}}),l.a.createElement(Je.b,{exact:!0,path:"/evolution",render:function(t){return l.a.createElement(he,Object.assign({},t,{user:e.state.loggedInUser,key:e.state.loggedInUser,getUser:e.getTheUser}))}}),l.a.createElement(Ve,{path:"/profile",component:Me,user:this.state.loggedInUser}),l.a.createElement(Je.b,{component:Be}))):l.a.createElement("div",null,l.a.createElement(Ke,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),l.a.createElement(Je.d,null,l.a.createElement(Je.b,{exact:!0,path:"/",render:function(){return l.a.createElement(y,null)}}),l.a.createElement(Je.b,{path:"/login",render:function(){return l.a.createElement(w,{getUser:e.getTheUser})}}),l.a.createElement(Je.b,{path:"/signup",render:function(){return l.a.createElement(R,{getUser:e.getTheUser})}}),l.a.createElement(Je.b,{path:"/logout",render:function(){return l.a.createElement(W.a,{getUser:e.getTheUser})}}),l.a.createElement(Je.b,{component:Be})))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(Ge,null))),document.getElementById("root"))},71:function(e,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.aec6df6e.chunk.js.map