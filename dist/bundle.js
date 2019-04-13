!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=2)}([function(t,e,n){t.exports=n.p+"arrow.svg"},function(t,e,n){t.exports=n.p+"check.svg"},function(t,e,n){"use strict";n.r(e);var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=window.devicePixelRatio,i=343*a,c=16*a,l=2*c,u=2*Math.PI,s="".concat(11*a,"px Arial"),d=40*a,h=7*a,f=43*a,p=29*a,g=p/2,m=5*a,v=1*a,y={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},b={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"},w={THEME:y};var x,T,E=(x=[],T={time:0,add:function(t){x.push(t)},remove:function(t){var e=x.indexOf(t);e>-1&&x.splice(e,1)}},requestAnimationFrame(function t(e){T.time=e;for(var n=0;n<x.length;n++)x[n](e);requestAnimationFrame(t)}),T);function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var A=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=o,this.fromValue=e,this.toValue=e,this.value=e,this.startTime=0,this.duration=n,this.delay=0}var e,n,o;return e=t,(n=[{key:"playFrom",value:function(t,e){this.value=t,this.play(e)}},{key:"play",value:function(t){this.startTime=E.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(E.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var e=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*e,!0}}])&&S(e.prototype,n),o&&S(e,o),t}();function M(){var t=[],e={active:!1};return{opts:e,createAnimation:function(e,n,o){var r=new A(e,n,o);return t.push(r),r},removeAnimation:function(e){var n=t.indexOf(e);n>-1&&t.splice(n,1)},updateAnimations:function(){for(var n=t.length,o=!1,r=0;r<n;r++)o=t[r].update()||o;return e.active=o,o}}}function _(t,e){var n=e-t,o={};function r(e){return o[e]||(o[e]=(e-t)/n),o[e]}return r.de=function(e){return e*n+t},r.data={delta:n,min:t,max:e},r}function C(t,e,n){var o=t.createAnimation(e,300),r=t.createAnimation(n-e,300);function a(t){return(t-o.value)/r.value}return a.updateDelta=function(t,e){e,o.play(t),r.play(e-t)},a}var F=function(t,e){var n;return function(){var o=arguments;n||(t.apply(this,o),n=!0,setTimeout(function(){return n=!1},e))}};function R(t){t.canvas;var e=t.canvasBounds,n=function(t){var e={},n={},o={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){e[t]=[],n[t]=function(n,o){for(var r=0;r<e[t].length;r++)e[t][r](n,o)}}),{mouse:o,addListener:function(t,n){e[t].push(n)},dispatch:function(t,e){if(!n[t])throw Error("Unknown event");n[t](o,e)}}}(["move","enter","leave","down","up"]),o=n.mouse;function r(t){o.xRaw=t.clientX-e.left,o.yRaw=t.clientY-e.top,o.x=o.xRaw*a,o.y=o.yRaw*a,o.newXRaw=o.xRaw,o.newYRaw=o.yRaw,o.newX=o.x,o.newY=o.y,n.dispatch("down",t)}function i(t){o.newXRaw=t.clientX-e.left,o.newYRaw=t.clientY-e.top,o.newX=o.newXRaw*a,o.newY=o.newYRaw*a,n.dispatch("move",t)}function c(t){o.isHolding=!1,n.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",c),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),document.addEventListener("selectstart",function(t){return!1}),{mouse:o,addListener:n.addListener}}function H(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function X(t){var e=t.config,n=(t.control,t.ctx),o=t.norm,r=t.colors,i=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*a;return function(t,a,c,l,u){var s=H(t),d=s[0],h=s.slice(1),f=e.buttons[d].opacity.value;if(f){f<=1&&(e.shouldControlUpdate=!0);var p=h.length;n.save(),n.beginPath(),n.moveTo(a+0,c+u-o.Y(h[0])*u);for(var g=1;g<p;g++){var m=a+o.X(g)*l,v=c+u-o.Y(h[g])*u;n.lineTo(m,v)}n.lineWidth=i,n.strokeStyle=r[d],n.globalAlpha=f,n.lineJoin="round",n.stroke(),n.restore()}}}var L=0,Y=1,j=2,k=3;function O(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var P=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function D(t){t.ctx;var e=t.config,n=t.control,o=t.ys,r=t.xAxis,i=function(t){t.control;var e=t.ctx;return t.normX,t.normY,t.colors,function(t,n,o,r,i,c){var l=(c+c/6/2)/6,u=Math.ceil((n-t)/6);e.save(),e.beginPath(),e.fillStyle=w.THEME.gridLines,e.globalAlpha=.5,e.font=s,e.textBaseline="bottom";for(var d=0;d<6;d++)e.moveTo(o,r+c-d*l),e.lineTo(o+i,r+c-d*l),e.fillText(t+u*d,o+3,r+c-d*l-m);e.lineWidth=1*a,e.globalAlpha=.1,e.strokeStyle=w.THEME.gridLines,e.stroke(),e.restore()}}(t),c=function(t){t.config,t.control;var e=t.ctx,n=t.norm,o=(t.colors,n.X(1));return function(t,r,a,i,c){var l=t.length;e.save(),e.fillStyle=w.THEME.gridLines,e.font=s,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var u=i*o,h=(Math.floor(u),Math.ceil(d/u)),f=h+1,p=P[h],m=P[f],v=(u/(d/h)-1)*h,y=0;y<l;y+=p){var b=y%m;e.globalAlpha=0===b?.5:v>.5?.5:v;var x=r+n.X(y)*i,T=a+g;e.fillText(t[y].dayString,x,T)}e.restore()}}(t),l=X(t),f=function(t){var e=t.config,n=t.ctx,o=t.norm,r=t.colors,i=(e.mouse.mouse,4*a),c=2*a,l=0,s=0,d=0,h=0,f=0,p=o.X(1)*l,g=-1,m=-1,v=!1,y=!1,b=e.popup,x=F(function(t,o){if(v=y,(!(y=n.canvas.parentNode.contains(o.target))&&v||"BUTTON"===o.target.tagName)&&(-1!==m&&(e.shouldChartUpdate=!0),m=-1,b.hide()),o.target===n.canvas&&((y||!0===v&&!1===y)&&(g=m,t.newY>h&&t.newY<h+s&&(m=f-Math.round((l+d-t.newX)/p+1))<f?b.show(m):(m=-1,b.hide())),g!==m)){if(e.shouldChartUpdate=!0,-1!==m){var r=b.element.getBoundingClientRect();b.element.style.left="".concat(t.newX/a-r.width/2,"px")}g=m}},50);return e.mouse.addListener("move",x),e.mouse.addListener("down",x),function(t,a,g,v,y){l=v,s=y,d=a,h=g;var b=O(t),x=b[0],T=b.slice(1),E=e.buttons[x].opacity.value;if(E&&(f=T.length,p=o.X(1)*v,m>-1&&m<f)){var S=a+o.X(m)*v;n.save(),n.strokeStyle=w.THEME.gridLines,n.lineWidth=1,n.globalAlpha=.1,n.beginPath(),n.moveTo(S,g),n.lineTo(S,g+y),n.stroke(),n.restore(),n.save(),n.beginPath(),n.globalAlpha=E,n.arc(S,g+y-o.Y(T[m])*y,i,0,u),n.lineWidth=c,n.strokeStyle=r[x],n.fillStyle=w.THEME.background,n.fill(),n.stroke(),n.restore()}}}(t);return function(t,a,u,s){var d=t-u*n.range[0]/n.scale,g=u/n.scale,m=s-h,v=a;c(r,d,a+m-p,g,p),i(e.minHeight,e.maxHeight,t,v,u,m-p);for(var y=0;y<o.length;y++)l(o[y],d,v,g,m-p),f(o[y],d,v,g,m-p)}}function U(t,e,n){var o=document.createElement(e);return o.className=n,t&&t.appendChild(o),o}var B=n(0),N=n.n(B);function V(t){return'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(t,'</span>\n\t\t\t<span class="chart__popup-header-icon"><img src="').concat(N.a,'" /></span>\n\t\t</strong>\n\t')}function W(t,e,n){return'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(e,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(t,'">').concat(n,"</span>\n\t\t</span>\n\t")}n(1);function I(t,e,n,o,r){var a=U(t,"div","chart__buttons"),i={};return o.map(function(t){i[t[0]]=function(t,e,n,o,r){var a=o[0],i={enabled:!0,data:o,opacity:e.createAnimation(1.1,200)},c=U(t,"button","chart__buttons-button");return c.textContent=n.names[a],c.style.backgroundColor=n.colors[a],c.style.borderColor=n.colors[a],c.addEventListener("click",function(){i.enabled=!i.enabled,!0===i.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=n.colors[a]),i.opacity.play(i.enabled?1.1:0),r&&r(i.enabled)}),i}(a,e,n,t,function(t){r&&r()})}),i}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(t){return t===1/0||t===-1/0?0:t},G=function(t){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1))}))},K=function(t){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1))}))},Q=function(t,e,n){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1+e,1+n))}))},Z=function(t,e,n){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1+e,1+n))}))};var $=function(t,e){var n,u,s,d={left:0,top:0},h=U(document.body,"div","chart"),p=function(t,e,n){var o=U(t,"div","chart__header"),r=U(o,"h2","chart__header-title");r.textContent=e;var a=U(o,"h3","chart__header-sub-title");return a.textContent=n,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){a.textContent=t}}}(h,"Chart #".concat(e+1),"Hello world!"),g=U(h,"canvas","chart__canvas"),m=g.getContext("2d"),y={index:e,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:M(),mouse:R({config:y,canvas:g,canvasBounds:d}),maxHeight:0,minHeight:0,startIndex:0,endIndex:0},b=t.colors;t.names,t.types,t.columns[0]=t.columns[0].map(function(t){return t.length?t:(e=t,n=new Date(e),{dayString:"".concat(o[n.getMonth()]," ").concat(n.getDate()),dateString:"".concat(r[n.getDay()],", ").concat(n.getDate()," ").concat(o[n.getMonth()]," ").concat(n.getFullYear()),dateStringTitle:"".concat(n.getDate()," ").concat(o[n.getMonth()]," ").concat(n.getFullYear()),date:n,timestamp:e});var e,n});var x=J(t.columns),T=J(x[0]),E=(T[0],T.slice(1)),S=x.slice(1);y.endIndex=E.length,p.setSubtitle("".concat(E[0].dateStringTitle," - ").concat(E[E.length-1].dateStringTitle)),y.popup=function(t,e,n,o){var r=U(t,"div","chart__popup");return{element:r,update:function(t){var a=o.filter(function(t){return e.buttons[t[0]].enabled}).map(function(e){return W(n.colors[e[0]],n.names[e[0]],e[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(V(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"))},show:function(t){var a=o.filter(function(t){return e.buttons[t[0]].enabled}).map(function(e){return W(n.colors[e[0]],n.names[e[0]],e[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(V(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"),r.style.opacity=1,r.style.visibility="visible")},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(h,y,t,S);var A=I(h,y.animator,t,S,function(){P()});y.buttons=A;var F=S.filter(function(t){return A[t[0]].enabled});y.minHeight=q(K(F)),y.maxHeight=q(G(F));var H={X:_(0,E.length-1),Y:C(y.animator,y.minHeight,y.maxHeight)},O={X:_(0,E.length-1),Y:C(y.animator,y.minHeight,y.maxHeight)};function P(){var t=B.range[0],e=B.range[1],n=t*E.length,o=n<0?0:Math.floor(n),r=e*E.length,a=r>E.length?E.length:Math.ceil(r),i=S.filter(function(t){return A[t[0]].enabled});y.minHeight=q(Z(i,o,a)),y.maxHeight=q(Q(i,o,a)),H.Y.updateDelta(y.minHeight,y.maxHeight);var c=q(K(i)),l=q(G(i));console.log(c,l),O.Y.updateDelta(c,l),p.setSubtitle("".concat(E[o].dateStringTitle," - ").concat(E[a-1].dateStringTitle))}var B={range:[.1,.9],rangedX:0,rangedWidth:0,count:0,scale:0,updateRange:function(t,e){var n=e-t,o=E.length*n;o>5&&(B.count=Math.ceil(o),B.scale=n,B.range[0]=t,B.range[1]=e,P())},normalizeForControl:function(t){return s(t)}};function N(){var t=g.getBoundingClientRect(),e=t.width*a,o=t.height*a;d.width=e,d.height=i,d.left=t.left,d.right=t.right,d.top=t.top,d.bottom=t.bottom,d.x=t.x,d.y=t.y,n===e&&u===o||(y.shouldChartUpdate=!0,y.shouldControlUpdate=!0,s=_(l,d.width-l),n=g.width=d.width,u=g.height=i)}function $(t){N(),y.animator.updateAnimations()&&(y.shouldChartUpdate=!0),y.shouldChartUpdate&&(console.log("update chart",e),y.shouldChartUpdate=!1,m.clearRect(0,0,n,i-f),et(c,0,n-l,i-f)),y.shouldControlUpdate&&(console.log("update control",e),y.shouldControlUpdate=!1,m.clearRect(0,i-f,n,f),nt(c,i-f,n-l,f))}window.addEventListener("resize",N),B.updateRange(B.range[0],B.range[1]),N(),P();var tt={config:y,control:B,ctx:m,norm:H,colors:b,ys:S,buttons:A,xAxis:E,canvasBounds:d},et=D(tt),nt=function(t){var e=t.ctx,n=t.config,o=(t.canvasBounds,t.control),r=t.ys,i=X(t,{lineWidth:1}),c=0,l=0,u=l-c,s=10*a,d=s/2,h=10*a,f=2*h,p=h/2,g=h-h/3,m=2*a,y=(h-m)/2,b=L,x=14*a,T=[o.range[0],o.range[1]],E={start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}};return n.mouse.addListener("move",function(t){if(b!==L){n.shouldChartUpdate=!0,n.shouldControlUpdate=!0;var e=o.normalizeForControl(t.newX)-o.normalizeForControl(t.x),r=T[0]+e,a=T[1]+e;if(b===Y)r>0?o.updateRange(r,T[1]):o.updateRange(0,T[1]);else if(b===j)a<1?o.updateRange(T[0],a):o.updateRange(T[0],1);else if(r>=0&&a<=1)o.updateRange(r,a);else if(a>1){var i=1-T[1];o.updateRange(T[0]+i,T[1]+i)}else if(r<0){var c=0-T[0];o.updateRange(T[0]+c,T[1]+c)}}}),n.mouse.addListener("down",function(t){var e=x,r=x,a=E.start,i=E.end;t.y>a.y&&t.y<a.y+a.height&&(n.shouldChartUpdate=!0,n.shouldControlUpdate=!0,T=[o.range[0],o.range[1]],t.newX>a.x-e&&t.newX<a.x+a.width&&t.newY>a.y-e&&t.newY<a.y+a.height+e?b=Y:t.newX>i.x&&t.newX<i.x+i.width+r&&t.newY>i.y-r&&t.newY<i.y+i.height+r?b=j:t.newX>a.x+a.width&&t.newX<i.x&&t.newY>i.y-x&&t.newY<i.y+i.height+x&&(b=k))}),n.mouse.addListener("up",function(t){b=L}),function(t,n,a,b){var x=a,T=t;a-=f,t+=h;for(var S=0;S<r.length;S++)i(r[S],t,n+3,a,b-6);c=t+a*o.range[0],l=t+a*o.range[1],u=l-c,E.start.x=c-h,E.start.y=n,E.start.width=h,E.start.height=b,E.end.x=l,E.end.y=n,E.end.width=h,E.end.height=b,e.save(),e.globalAlpha=.6,e.fillStyle=w.THEME.scrollBackground,e.beginPath(),e.moveTo(c-1,n),e.lineTo(c-1,n+b),e.arcTo(T,n+b,T,n+b-h,p),e.arcTo(T,n,c-1,n,p),e.closePath(),e.fill(),e.beginPath(),e.moveTo(l+1,n),e.lineTo(l+1,n+b),e.arcTo(T+x,n+b,T+x,n+b-h,p),e.arcTo(T+x,n,l,n,p),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=w.THEME.scrollSelector,e.beginPath(),e.rect(c,n,u,v),e.rect(c,n+b-v,u,v),e.fill(),e.beginPath();var A=c;e.moveTo(A,n),e.lineTo(A,n+b),e.arcTo(A-h,n+b,A-h,n+b-h,g),e.arcTo(A-h,n,A,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(l,n),e.lineTo(l,n+b),e.arcTo(l+h,n+b,l+h,n+b-h,g),e.arcTo(l+h,n,l,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(c-y,n+b/2-d,-m,s),e.rect(l+y,n+b/2-d,m,s),e.fill(),e.restore()}}(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){z(t,e,n[e])})}return t}({},tt,{norm:O}));return $(),{render:$,control:B,update:function(){y.shouldChartUpdate=!0,y.shouldControlUpdate=!0}}};var tt,et,nt,ot,rt=[];tt=document.body,et=function(t){w.THEME=t?y:b,document.body.className=t?"day":"night",rt.forEach(function(t){return t.update()})},nt=!0,(ot=U(tt,"button","change-theme")).textContent="Switch to ".concat(nt?"Night":"Day"," Mode"),ot.addEventListener("click",function(){nt=!nt,ot.textContent="Switch to ".concat(nt?"Night":"Day"," Mode"),et&&et(nt)});fetch("assets/chart_data.json").then(function(t){return t.json()}).then(function(t){(rt=t.map(function(t,e){return $(t,e)})).forEach(function(t){E.add(function(){t.render()})})})}]);