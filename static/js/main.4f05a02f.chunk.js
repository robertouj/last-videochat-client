(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t){},128:function(e,t){},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),s=a.n(c),i=a(11),r=a(171),o=a(177),l=a(178),j=a(18),d=a(26),b=a(2),u=Object(n.createContext)();function O(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),O=l[0],m=l[1],h=Object(n.useState)(),f=Object(i.a)(h,2),v=f[0],x=f[1],g=Object(n.useState)(""),N=Object(i.a)(g,2),_=N[0],p=N[1],C=Object(n.useState)({}),S=Object(i.a)(C,2),y=S[0],w=S[1],M=Object(n.useState)(!1),k=Object(i.a)(M,2),E=k[0],B=k[1],R=Object(n.useState)(!1),U=Object(i.a)(R,2),V=U[0],A=U[1],F=Object(n.useState)("Anonymous"),I=Object(i.a)(F,2),W=I[0],P=I[1],T=Object(n.useState)(),z=Object(i.a)(T,2),D=z[0],J=z[1],H=Object(n.useState)([]),Y=Object(i.a)(H,2),q=Y[0],G=Y[1],K=Object(n.useState)({callButtonEnabled:!0,hangupButtonEnabled:!1,answerButtonEnabled:!1}),L=Object(i.a)(K,2),Q=L[0],X=(L[1],Object(n.useRef)()),Z=Object(n.useRef)(),$=Object(n.useRef)();Object(n.useEffect)((function(){ee(),Object(d.getMe)(p,w,J)}),[]),Object(n.useEffect)((function(){y.signal&&Object(d.answerCall)(v,y,Z,$,J,W)}),[y]),Object(n.useEffect)((function(){E&&v&&V&&Object(d.callUser)(V,_,W,v,Z,$,y,J)}),[v,E]);var ee=function(){r("#c9f2a12622782")};return Object(b.jsx)(u.Provider,{value:{states:Q,myVideo:X,userVideo:Z,name:W,isSessionAvailable:s,chat:q,remoteName:D,startSession:function(){var e;e=s,window.location.hash=e,m(e),Object(d.startSocket)(O,B,A,G,W),Object(d.createMedia)(X,x)},leaveCall:function(){},sendMessage:function(e){Object(d.sendMessageChat)([].concat(Object(j.a)(q),["".concat(W,": ").concat(e)])),G([].concat(Object(j.a)(q),["".concat(W,": ").concat(e)]))},setName:P},children:t})}var m=function(){var e=Object(n.useContext)(u),t=e.sendMessage,a=e.chat,c=Object(n.useState)(""),s=Object(i.a)(c,2),j=s[0],d=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"main__chat_window",children:Object(b.jsxs)("div",{className:"messages",children:[Object(b.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Chat"}),Object(b.jsx)("ul",{className:"chat-messages",children:a?a.map((function(e){return Object(b.jsx)("li",{children:e})})):"Start chatting..."})]})}),Object(b.jsxs)("div",{className:"main__message_container",children:[Object(b.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Send a message"}),Object(b.jsx)(o.a,{label:"Text to send...",onChange:function(e){return d(e.target.value)},className:"chat-input",autoComplete:"off"}),Object(b.jsx)(l.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return t(j)},className:"send-button",children:"Send"})]})]})};var h=function(){var e=Object(n.useContext)(u),t=e.myVideo,a=e.userVideo,c=e.name,s=e.remoteName;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("h3",{children:"VideoChat Component"})})}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"main__left",children:[Object(b.jsx)("div",{className:"videos__group",children:Object(b.jsxs)("div",{className:"video-grid",children:[Object(b.jsxs)("div",{className:"video-grid__remote_video",children:[Object(b.jsxs)("div",{children:["Remote name: ",s||"NoName"]}),Object(b.jsx)("video",{playsInline:!0,ref:a,autoPlay:!0,className:"remote_video"})]}),Object(b.jsxs)("div",{className:"video-grid__local_video",children:[Object(b.jsxs)("div",{children:["My name: ",c||"NoName"]}),Object(b.jsx)("video",{playsInline:!0,ref:t,autoPlay:!0,className:"local_video"})]})]})}),Object(b.jsxs)("div",{className:"options",children:[Object(b.jsx)("div",{className:"options__left"}),Object(b.jsx)("div",{className:"options__right"})]})]}),Object(b.jsx)("div",{className:"main__right",children:Object(b.jsx)(m,{})})]})]})},f=a(175),v=a(176);var x=function(e){var t=e.children,a=Object(n.useContext)(u),c=a.states,s=a.startSession,i=a.setName,r=a.leaveCall,o=a.isSessionAvailable;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsxs)("div",{className:"sidebar__buttons",children:[Object(b.jsx)(l.a,{disabled:!c.hangupButtonEnabled,variant:"contained",color:"secondary",startIcon:Object(b.jsx)(f.a,{fontSize:"large"}),fullWidth:!0,onClick:r,children:"Hang Up"}),Object(b.jsx)(l.a,{disabled:!o,variant:"contained",color:"primary",startIcon:Object(b.jsx)(v.a,{fontSize:"large"}),fullWidth:!0,onClick:s,children:"Create Session"})]}),Object(b.jsx)("div",{className:"sidebar__name",children:Object(b.jsxs)("label",{children:["Your Name:",Object(b.jsx)("input",{placeholder:"Enter your name...",onChange:function(e){return i(e.target.value)}})]})}),t]})})};var g=function(){var e=Object(n.useContext)(u),t=e.notification,a=e.isSessionAvailable;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"sidebar__notifications",children:Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(b.jsxs)("h2",{children:["Notifications: ",t||"-"]}),Object(b.jsx)("h3",{children:a&&">> Mentoring available <<"})]})})})};a(142);var N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Video Chat WebRTC"}),Object(b.jsx)(h,{}),Object(b.jsx)(x,{children:Object(b.jsx)(g,{})})]})};s.a.render(Object(b.jsx)(O,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},26:function(e,t,a){var n=a(94),c=a(122),s=n("http://localhost:5000");e.exports={createMedia:function(e,t){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){t(a),e.current.srcObject=a}))},callUser:function(e,t,a,n,i,r,o,l){var j=new c({initiator:!0,trickle:!1,stream:n});j.on("signal",(function(n){s.emit("callUser",{userToCall:e,signalData:n,from:t,name:a})})),j.on("stream",(function(e){i.current.srcObject=e})),s.on("callAccepted",(function(e,t,a){l(a),j.signal(e)})),r.current=j},startSocket:function(e,t,a,n,c){s.emit("create or join",e,c),s.on("room created",(function(){})),s.on("ready",(function(e){t(!0),a(e[0])})),s.on("chat message",(function(e){n(e)}))},getMe:function(e,t,a){s.on("me",(function(t){return e(t)})),s.on("callUser",(function(e){var n=e.from,c=e.name,s=e.signal;t({isReceivingCall:!0,from:n,name:c,signal:s}),c&&a(c)}))},answerCall:function(e,t,a,n,i,r){var o=new c({initiator:!1,trickle:!1,stream:e});o.on("signal",(function(e){s.emit("answerCall",{signal:e,to:t.from,name:r})})),o.on("stream",(function(e){a.current.srcObject=e})),o.signal(t.signal),n.current=o},sendMessageChat:function(e){s.emit("chat message",e)}}}},[[143,1,2]]]);
//# sourceMappingURL=main.4f05a02f.chunk.js.map