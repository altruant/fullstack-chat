(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),o=n.n(s),c=(n(17),n(1)),i=n.n(c),u=n(8),l=n(4),h=n(5),m=n(7),p=n(6),d=n(9),b=n(3),f=n(2),v=n.n(f),g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/rest-auth/registration/",{method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),v.a.set("Authorization","Token ".concat(a.key));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Register"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInput,placeholder:"Email"}),r.a.createElement("label",{htmlFor:"password1"},"Password"),r.a.createElement("input",{type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput,placeholder:"Password"}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput,placeholder:""}),r.a.createElement("button",{type:"submit"},"Register"))}}]),n}(r.a.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/rest-auth/login/",{method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,v.a.set("Authorization","Token ".concat(a.key));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Login"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),r.a.createElement("label",{htmlFor:"password1"},"Password"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password1,onChange:this.handleInput,placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Login"))}}]),n}(r.a.Component),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={messages:[]},a.fetchMessages=a.fetchMessages.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchMessages(),setInterval(this.fetchMessages,2e3)}},{key:"componentWillUnmount",value:function(){clearInterval()}},{key:"fetchMessages",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.a.get("Authorization")){e.next=10;break}return e.next=3,fetch("/api/v1/chats");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({messages:n}),e.next=11;break;case 10:this.setState({messages:[]});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return v.a.get("Authorization")?this.state.messages.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"message"},r.a.createElement("span",{className:"content"},e.content),r.a.createElement("span",{className:"username"},e.user)))})):r.a.createElement("h2",null,"you are not logged in")}}]),n}(r.a.Component),j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={user:"",content:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/chats/",{method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,v.a.set("Authorization","Token ".concat(a.key));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"content",value:this.state.content,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Send"))}}]),n}(r.a.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(j,null))}}]),n}(r.a.Component),E=(n(19),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a}return Object(h.a)(n,[{key:"logOut",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/rest-auth/logout/",{method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent,v.a.remove("Authorization");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{isLoggedIn:this.state.isLoggedIn}),r.a.createElement(y,null),r.a.createElement("button",{onClick:function(){return e.logOut()}},"Logout"),r.a.createElement(g,null))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.ba61e291.chunk.js.map