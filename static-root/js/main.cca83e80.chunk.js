(this["webpackJsonpspeek-frontend"]=this["webpackJsonpspeek-frontend"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),s=(a(14),a(7)),l=a.n(s);a(15);function i(e,t,a,n){var o;n&&(o=JSON.stringify(n));var c=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);c.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var o=a[n].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");c.open(e,r),c.setRequestHeader("Content-Type","application/json"),s&&(c.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",s)),c.onload=function(){a(c.response,c.status)},c.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},c.send(o)}function u(e){var t=e.post,a=e.action,n=e.didPerformAction,c=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",s=a.display?a.display:"Action",l=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},u="like"===a.type?"".concat(c," ").concat(s):s;return o.a.createElement("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,a){i("POST","/posts/action",a,{id:e,action:t})}(t.id,a.type,l)}},u)}var m=a(8),p=a(1);function d(e){var t=e.post;return t.parent?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},o.a.createElement("p",{className:"mb-0 text-muted small"},"Repost"),o.a.createElement(f,{hideActions:!0,className:" ",post:t.parent}))):null}function f(e){var t=e.post,a=e.didRepost,c=e.hideActions,r=Object(n.useState)(e.post?e.post:null),s=Object(p.a)(r,2),l=s[0],i=s[1],f=e.className?e.className:"col-10 mx-auto col-md-6",b=window.location.pathname.match(Object(m.a)(/([0-9]+)/,{postid:1})),v=b?b.groups.postid:-1,E="".concat(t.id)==="".concat(v),h=function(e,t){200===t?i(e):201===t&&a&&a(e)};return o.a.createElement("div",{className:f},o.a.createElement("div",null,o.a.createElement("p",null,t.id," - ",t.content),o.a.createElement(d,{post:t})),o.a.createElement("div",{className:"btn btn-group"},l&&!0!==c&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{post:l,didPerformAction:h,action:{type:"like",display:"Likes"}}),o.a.createElement(u,{post:l,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),o.a.createElement(u,{post:l,didPerformAction:h,action:{type:"repost",display:"Repost"}})),!0===E?null:o.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}var b=a(2);function v(e){var t=o.a.createRef(),a=e.didPost,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return o.a.createElement("div",{className:e.className},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;i("POST","/posts/create",n,{content:a}),t.current.value=""}},o.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"post"}),o.a.createElement("button",{type:"subbmit",className:"btn btn-primary my-3"},"Speek")))}function E(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),l=Object(p.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)(!1),v=Object(p.a)(d,2),E=v[0],h=v[1];Object(n.useEffect)((function(){var t=Object(b.a)(e.newPosts).concat(c);t.length!==u.length&&m(t)}),[e.newPosts,u,c]),Object(n.useEffect)((function(){if(!1===E){!function(e,t){var a="/posts/";e&&(a="/posts/?username=".concat(e)),i("GET",a,t)}(e.username,(function(e,t){200===t?(r(e),h(!0)):alert("There was an error")}))}}),[c,E,h,e.username]);var g=function(e){var t=Object(b.a)(c);t.unshift(e),r(t);var a=Object(b.a)(u);a.unshift(u),m(a)};return u.map((function(e,t){return o.a.createElement(f,{post:e,didRepost:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function h(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],r=a[1],s="false"!==e.canpost;return o.a.createElement("div",{className:e.className},!0===s&&o.a.createElement(v,{didPost:function(e){var t=Object(b.a)(c);t.unshift(e),r(t)},className:"col-12 mb-3"}),o.a.createElement(E,Object.assign({newPosts:c},e)))}function g(e){var t=e.postId,a=Object(n.useState)(!1),c=Object(p.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(null),u=Object(p.a)(l,2),m=u[0],d=u[1],b=function(e,t){200===t?d(e):alert("There was an error finding your post.")};return Object(n.useEffect)((function(){!1===r&&(!function(e,t){i("GET","/posts/".concat(e),t)}(t,b),s(!0))}),[t,r,s]),null===m?null:o.a.createElement(f,{post:m,className:e.className})}var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("div",null,o.a.createElement(h,null)),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");j&&r.a.render(o.a.createElement(k,null),j);var y=o.a.createElement,N=document.getElementById("speek-app");N&&r.a.render(y(h,N.dataset),N),document.querySelectorAll(".speek-app-detail").forEach((function(e){r.a.render(y(g,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.cca83e80.chunk.js.map