(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(9),a=c.n(r),n=(c(19),c(20),c(10)),i=c(11),h=c(13),o=c(12),l=c(3),j=c.n(l),d=(c(21),c(25)),u=c(26),b=c(27),x=c.p+"static/media/github.492cd893.png",O=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)(d.a,{color:"light",light:!0,expand:"md",children:[Object(s.jsxs)(u.a,{children:[Object(s.jsx)("img",{src:x,alt:"github",width:"50",height:"50"}),"Github User Finder"]}),Object(s.jsxs)(b.a,{className:"mr-auto d-flex w-100",navbar:!0,children:[Object(s.jsx)("input",{type:"search",value:e.search,className:"form-control",onChange:function(t){return e.handleSearch(t.target.value)},placeholder:"Search User by name"}),Object(s.jsx)("button",{className:"btn btn-primary",onClick:e.fetchUser,children:"Search"})]})]})})},f=c(28),m=c(29),g=c(30),p=c(31),v=c(32),S=function(e){var t=e.userRecord,c=t.avatar_url,r=t.created_at,a=t.public_repos,n=t.name,i=t.location,h=t.bio;return Object(s.jsx)("div",{className:"offset-lg-2 col-4 mt-2 col-sm-12 col-md-6",children:e.userExist&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Github User"}),Object(s.jsxs)(f.a,{children:[Object(s.jsx)(m.a,{top:!0,width:"100%",height:"50%",src:c,alt:"Card image cap"}),Object(s.jsxs)(g.a,{children:[Object(s.jsxs)(p.a,{tag:"h5",children:[Object(s.jsx)("b",{children:"User Name :"})," ",n]}),Object(s.jsxs)(v.a,{tag:"h6",className:"mb-2 text-muted",children:[Object(s.jsx)("b",{children:"Location :  "}),i]}),Object(s.jsxs)(v.a,{children:[Object(s.jsx)("b",{children:"Description :"})," ",h]}),Object(s.jsxs)(v.a,{children:[Object(s.jsx)("b",{children:"Repository :"})," ",a]}),Object(s.jsxs)(v.a,{children:[Object(s.jsx)("b",{children:"Created_at :"})," ",new Date(r).toDateString()]})]})]})]})})},U=c(33),w=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(n.a)(this,c),(e=t.call(this)).handleSearch=function(t){e.setState({search:t})},e.fetchUser=function(){""!==e.state.search&&(e.setState({loading:!0}),fetch("https://api.github.com/users/".concat(e.state.search)).then((function(e){return e.json()})).then((function(t){e.setState({users:t,loading:!1,userExist:!0})})).catch((function(e){return alert("Error Getting Users")})))},e.state={search:"hamzayousuf121",users:{},loading:!1,userExist:!1},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{search:this.state.search,fetchUser:this.fetchUser,handleSearch:function(t){return e.handleSearch(t)}}),this.state.loading&&Object(s.jsx)("div",{className:"center",children:Object(s.jsx)(U.a,{type:"grow",color:"info"})}),Object(s.jsx)(S,{userRecord:this.state.users,userExist:this.state.userExist})]})}}]),c}(j.a.Component);a.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.aea3cdf0.chunk.js.map