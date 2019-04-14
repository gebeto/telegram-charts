!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="dist/",e(e.s=2)}([function(t,n,e){t.exports=e.p+"arrow.svg"},function(t,n,e){t.exports=e.p+"check.svg"},function(t,n,e){"use strict";e.r(n);var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=window.devicePixelRatio,i=343*a,c=16*a,l=2*c,u=2*Math.PI,s="".concat(11*a,"px Arial"),d=40*a,h=7*a,f=43*a,p=29*a,g=p/2,m=5*a,v=1*a,y={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},b={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"},w={THEME:b};var x,T,E=(x=[],T={time:0,add:function(t){x.push(t)},remove:function(t){var n=x.indexOf(t);n>-1&&x.splice(n,1)}},requestAnimationFrame(function t(n){T.time=n;for(var e=0;e<x.length;e++)x[e](n);requestAnimationFrame(t)}),T);function S(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var A=function(){function t(n,e,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=o,this.fromValue=n,this.toValue=n,this.value=n,this.startTime=0,this.duration=e,this.delay=0}var n,e,o;return n=t,(e=[{key:"playFrom",value:function(t,n){this.value=t,this.play(n)}},{key:"play",value:function(t){this.startTime=E.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(E.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var n=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*n,!0}}])&&S(n.prototype,e),o&&S(n,o),t}();function _(){var t=[],n={active:!1};return{opts:n,createAnimation:function(n,e,o){var r=new A(n,e,o);return t.push(r),r},removeAnimation:function(n){var e=t.indexOf(n);e>-1&&t.splice(e,1)},updateAnimations:function(){for(var e=t.length,o=!1,r=0;r<e;r++)o=t[r].update()||o;return n.active=o,o}}}function M(t,n){var e=n-t,o={};function r(n){return o[n]||(o[n]=(n-t)/e),o[n]}return r.de=function(n){return n*e+t},r.data={delta:e,min:t,max:n},r}function C(t,n,e){var o=t.createAnimation(n,300),r=t.createAnimation(e-n,300);function a(t){return(t-o.value)/r.value}return a.updateDelta=function(t,n){n,o.play(t),r.play(n-t)},a}var F=function(t,n){var e;return function(){var o=arguments;e||(t.apply(this,o),e=!0,setTimeout(function(){return e=!1},n))}};function R(t){t.canvas;var n=t.canvasBounds,e=function(t){var n={},e={},o={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){n[t]=[],e[t]=function(e,o){for(var r=0;r<n[t].length;r++)n[t][r](e,o)}}),{mouse:o,addListener:function(t,e){n[t].push(e)},dispatch:function(t,n){if(!e[t])throw Error("Unknown event");e[t](o,n)}}}(["move","enter","leave","down","up"]),o=e.mouse;function r(t){o.xRaw=t.clientX-n.left,o.yRaw=t.clientY-n.top,o.x=o.xRaw*a,o.y=o.yRaw*a,o.newXRaw=o.xRaw,o.newYRaw=o.yRaw,o.newX=o.x,o.newY=o.y,e.dispatch("down",t)}function i(t){o.newXRaw=t.clientX-n.left,o.newYRaw=t.clientY-n.top,o.newX=o.newXRaw*a,o.newY=o.newYRaw*a,e.dispatch("move",t)}function c(t){o.isHolding=!1,e.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",c),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),document.addEventListener("selectstart",function(t){return!1}),{mouse:o,addListener:e.addListener}}function H(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(t){var n=t.config,e=(t.control,t.ctx),o=t.norm,r=t.colors,i=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*a;return function(t,a,c,l,u){var s=H(t),d=s[0],h=s.slice(1),f=n.buttons[d].opacity.value;if(f){f<1&&(n.shouldControlUpdate=!0);var p=h.length;e.save(),e.beginPath(),e.moveTo(a+0,c+u-o.Y(h[0])*u);for(var g=1;g<p;g++){var m=a+o.X(g)*l,v=c+u-o.Y(h[g])*u;e.lineTo(m,v)}e.lineWidth=i,e.strokeStyle=r[d],e.globalAlpha=f,e.lineJoin="round",e.stroke(),e.restore()}}}var Y=0,j=1,k=2,O=3;function P(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function D(t){t.ctx;var n=t.config,e=t.control,o=t.ys,r=t.xAxis,i=function(t){t.control;var n=t.ctx;return t.normX,t.normY,t.colors,function(t,e,o,r,i,c){var l=(c+c/6/2)/6,u=Math.ceil((e-t)/6);n.save(),n.beginPath(),n.fillStyle=w.THEME.gridLines,n.globalAlpha=.5,n.font=s,n.textBaseline="bottom";for(var d=0;d<6;d++)n.moveTo(o,r+c-d*l),n.lineTo(o+i,r+c-d*l),n.fillText(t+u*d,o+3,r+c-d*l-m);n.lineWidth=1*a,n.globalAlpha=.1,n.strokeStyle=w.THEME.gridLines,n.stroke(),n.restore()}}(t),c=function(t){t.config,t.control;var n=t.ctx,e=t.norm,o=(t.colors,e.X(1));return function(t,r,a,i,c){var l=t.length;n.save(),n.fillStyle=w.THEME.gridLines,n.font=s,n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.5;for(var u=i*o,h=(Math.floor(u),Math.ceil(d/u)),f=h+1,p=X[h],m=X[f],v=(u/(d/h)-1)*h,y=0;y<l;y+=p){var b=y%m;n.globalAlpha=0===b?.5:v>.5?.5:v;var x=r+e.X(y)*i,T=a+g;n.fillText(t[y].dayString,x,T)}n.restore()}}(t),l=L(t),f=function(t){var n=t.canvasBounds,e=t.config,o=t.ctx,r=t.norm,i=t.colors,c=(t.ys,4*a),l=2*a,s=(e.mouse.mouse,e.popup),d=r.X(1),h=0,f=0,p=0,g=0,m=0,v=d*h,y=v/2,b=-1,x=-1,T=!1,E=!1,S=!0,A=!1,_=F(function(t,r){if(T=E,(!(E=o.canvas===r.target||o.canvas.nextSibling.contains(r.target))&&T||"BUTTON"===r.target.tagName)&&(-1!==x&&(e.shouldChartUpdate=!0),x=-1,s.hide()),E&&r.target===o.canvas&&((E||!0===T&&!1===E)&&(b=x,t.newY>g&&t.newY<g+f&&(x=m-Math.round((h+p-t.newX)/v+1))<m&&x>=0?s.show(x):(x=-1,s.hide())),b!==x)){if(e.shouldChartUpdate=!0,-1!==x){var i=s.element.getBoundingClientRect(),c=(x*v+p)/a;c+i.width+y>n.right?S=!0:c-i.width-y<n.left&&(S=!1),s.element.style.left="".concat(c+(S?-(i.width+y):y),"px")}b=x}},50);return e.mouse.addListener("move",function(t,n){A&&_(t,n)}),e.mouse.addListener("down",function(t,n){A=!0,_(t,n)}),e.mouse.addListener("up",function(t,n){A=!1}),function(t,n,a,s,b){h=s,f=b,p=n,g=a;var T=P(t),E=T[0],S=T.slice(1),A=e.buttons[E].opacity.value;if(A&&(m=S.length,y=(v=d*s)/2,x>-1&&x<m)){var _=n+r.X(x)*s;o.save(),o.strokeStyle=w.THEME.gridLines,o.lineWidth=1,o.globalAlpha=.1,o.beginPath(),o.moveTo(_,a),o.lineTo(_,a+b),o.stroke(),o.restore(),o.save(),o.beginPath(),o.globalAlpha=A,o.arc(_,a+b-r.Y(S[x])*b,c,0,u),o.lineWidth=l,o.strokeStyle=i[E],o.fillStyle=w.THEME.background,o.fill(),o.stroke(),o.restore()}}}(t);return function(t,a,u,s){var d=t-u*e.range[0]/e.scale,g=u/e.scale,m=s-h,v=a;c(r,d,a+m-p,g,p),i(n.minHeight,n.maxHeight,t,v,u,m-p);for(var y=0;y<o.length;y++)l(o[y],d,v,g,m-p);for(var b=0;b<o.length;b++)f(o[b],d,v,g,m-p)}}function U(t,n,e){var o=document.createElement(n);return o.className=e,t&&t.appendChild(o),o}var B=e(0),N=e.n(B);function V(t){return'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(t,'</span>\n\t\t\t<span class="chart__popup-header-icon"><img src="').concat(N.a,'" /></span>\n\t\t</strong>\n\t')}function I(t,n,e){return'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(n,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(t,'">').concat(e,"</span>\n\t\t</span>\n\t")}e(1);function W(t,n,e,o,r){var a=U(t,"div","chart__buttons"),i={};return o.map(function(t){i[t[0]]=function(t,n,e,o,r){var a=o[0],i={enabled:!0,data:o,opacity:n.createAnimation(1,300)},c=U(t,"button","chart__buttons-button");return c.textContent=e.names[a],c.style.backgroundColor=e.colors[a],c.style.borderColor=e.colors[a],c.addEventListener("click",function(){i.enabled=!i.enabled,!0===i.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=e.colors[a]),i.opacity.play(i.enabled?1:0),r&&r(i.enabled)}),i}(a,n,e,t,function(t){r&&r()})}),i}function z(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function J(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(t){return t===1/0||t===-1/0?0:t},G=function(t){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1))}))},K=function(t){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1))}))},Q=function(t,n,e){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1+n,1+e))}))},Z=function(t,n,e){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1+n,1+e))}))};var $=function(t,n){var e,u,s,d={left:0,top:0},h=U(document.body,"div","chart"),p=function(t,n,e){var o=U(t,"div","chart__header"),r=U(o,"h2","chart__header-title");r.textContent=n;var a=U(o,"h3","chart__header-sub-title");return a.textContent=e,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){a.textContent=t}}}(h,"Chart #".concat(n+1),"Hello world!"),g=U(h,"canvas","chart__canvas"),m=g.getContext("2d"),y={index:n,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:_(),mouse:R({config:y,canvas:g,canvasBounds:d}),maxHeight:0,minHeight:0,startIndex:0,endIndex:0},b=t.colors;t.names,t.types,t.columns[0]=t.columns[0].map(function(t){return t.length?t:(n=t,e=new Date(n),{dayString:"".concat(o[e.getMonth()]," ").concat(e.getDate()),dateString:"".concat(r[e.getDay()],", ").concat(e.getDate()," ").concat(o[e.getMonth()]," ").concat(e.getFullYear()),dateStringTitle:"".concat(e.getDate()," ").concat(o[e.getMonth()]," ").concat(e.getFullYear()),date:e,timestamp:n});var n,e});var x=J(t.columns),T=J(x[0]),E=(T[0],T.slice(1)),S=x.slice(1);y.endIndex=E.length,p.setSubtitle("".concat(E[0].dateStringTitle," - ").concat(E[E.length-1].dateStringTitle)),y.popup=function(t,n,e,o){var r=U(t,"div","chart__popup");return{element:r,update:function(t){var a=o.filter(function(t){return n.buttons[t[0]].enabled}).map(function(n){return I(e.colors[n[0]],e.names[n[0]],n[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(V(e.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"))},show:function(t){var a=o.filter(function(t){return n.buttons[t[0]].enabled}).map(function(n){return I(e.colors[n[0]],e.names[n[0]],n[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(V(e.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"),r.style.opacity=1,r.style.visibility="visible")},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(h,y,t,S);var A=W(h,y.animator,t,S,function(){X()});y.buttons=A;var F=S.filter(function(t){return A[t[0]].enabled});y.minHeight=q(K(F)),y.maxHeight=q(G(F));var H={X:M(0,E.length-1),Y:C(y.animator,y.minHeight,y.maxHeight)},P={X:M(0,E.length-1),Y:C(y.animator,y.minHeight,y.maxHeight)};function X(){var t=B.range[0],n=B.range[1],e=t*E.length,o=e<0?0:Math.floor(e),r=n*E.length,a=r>E.length?E.length:Math.ceil(r),i=S.filter(function(t){return A[t[0]].enabled});y.minHeight=q(Z(i,o,a)),y.maxHeight=q(Q(i,o,a)),H.Y.updateDelta(y.minHeight,y.maxHeight);var c=q(K(i)),l=q(G(i));P.Y.updateDelta(c,l),p.setSubtitle("".concat(E[o].dateStringTitle," - ").concat(E[a-1].dateStringTitle))}var B={range:[.1,.9],count:0,scale:0,updateRange:function(t,n){var e=n-t,o=E.length*e;o>5&&(B.count=Math.ceil(o),B.scale=e,B.range[0]=t,B.range[1]=n,X())},normalizeForControl:function(t){return s(t)}};function N(){var t=g.getBoundingClientRect(),n=t.width*a,o=t.height*a;d.width=n,d.height=i,d.left=t.left,d.right=t.right,d.top=t.top,d.bottom=t.bottom,d.x=t.x,d.y=t.y,e===n&&u===o||(y.shouldChartUpdate=!0,y.shouldControlUpdate=!0,s=M(l,d.width-l),e=g.width=d.width,u=g.height=i)}function $(t){N(),y.animator.updateAnimations()&&(y.shouldChartUpdate=!0),y.shouldChartUpdate&&(console.log("update chart",n),y.shouldChartUpdate=!1,m.clearRect(0,0,e,i-f),nt(c,0,e-l,i-f)),y.shouldControlUpdate&&(console.log("update control",n),y.shouldControlUpdate=!1,m.clearRect(0,i-f,e,f),et(c,i-f,e-l,f))}window.addEventListener("resize",N),B.updateRange(B.range[0],B.range[1]),N(),X();var tt={config:y,control:B,ctx:m,norm:H,colors:b,ys:S,buttons:A,xAxis:E,canvasBounds:d},nt=D(tt),et=function(t){var n=t.ctx,e=t.config,o=(t.canvasBounds,t.control),r=t.ys,i=L(t,{lineWidth:1}),c=0,l=0,u=l-c,s=10*a,d=s/2,h=10*a,f=2*h,p=h/2,g=h-h/3,m=2*a,y=(h-m)/2,b=Y,x=14*a,T=[o.range[0],o.range[1]],E={start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}};return e.mouse.addListener("move",function(t){if(b!==Y){e.shouldChartUpdate=!0,e.shouldControlUpdate=!0;var n=o.normalizeForControl(t.newX)-o.normalizeForControl(t.x),r=T[0]+n,a=T[1]+n;if(b===j)r>0?o.updateRange(r,T[1]):o.updateRange(0,T[1]);else if(b===k)a<1?o.updateRange(T[0],a):o.updateRange(T[0],1);else if(r>=0&&a<=1)o.updateRange(r,a);else if(a>1){var i=1-T[1];o.updateRange(T[0]+i,T[1]+i)}else if(r<0){var c=0-T[0];o.updateRange(T[0]+c,T[1]+c)}}}),e.mouse.addListener("down",function(t){var n=x,r=x,a=E.start,i=E.end;t.y>a.y&&t.y<a.y+a.height&&(e.shouldChartUpdate=!0,e.shouldControlUpdate=!0,T=[o.range[0],o.range[1]],t.newX>a.x-n&&t.newX<a.x+a.width&&t.newY>a.y-n&&t.newY<a.y+a.height+n?b=j:t.newX>i.x&&t.newX<i.x+i.width+r&&t.newY>i.y-r&&t.newY<i.y+i.height+r?b=k:t.newX>a.x+a.width&&t.newX<i.x&&t.newY>i.y-x&&t.newY<i.y+i.height+x&&(b=O))}),e.mouse.addListener("up",function(t){b=Y}),function(t,e,a,b){var x=a,T=t;a-=f,t+=h;for(var S=0;S<r.length;S++)i(r[S],t,e+3,a,b-6);c=t+a*o.range[0],l=t+a*o.range[1],u=l-c,E.start.x=c-h,E.start.y=e,E.start.width=h,E.start.height=b,E.end.x=l,E.end.y=e,E.end.width=h,E.end.height=b,n.save(),n.globalAlpha=.6,n.fillStyle=w.THEME.scrollBackground,n.beginPath(),n.moveTo(c-1,e),n.lineTo(c-1,e+b),n.arcTo(T,e+b,T,e+b-h,p),n.arcTo(T,e,c-1,e,p),n.closePath(),n.fill(),n.beginPath(),n.moveTo(l+1,e),n.lineTo(l+1,e+b),n.arcTo(T+x,e+b,T+x,e+b-h,p),n.arcTo(T+x,e,l,e,p),n.closePath(),n.fill(),n.restore(),n.save(),n.fillStyle=w.THEME.scrollSelector,n.beginPath(),n.rect(c,e,u,v),n.rect(c,e+b-v,u,v),n.fill(),n.beginPath();var A=c;n.moveTo(A,e),n.lineTo(A,e+b),n.arcTo(A-h,e+b,A-h,e+b-h,g),n.arcTo(A-h,e,A,e,g),n.closePath(),n.fill(),n.beginPath(),n.moveTo(l,e),n.lineTo(l,e+b),n.arcTo(l+h,e+b,l+h,e+b-h,g),n.arcTo(l+h,e,l,e,g),n.closePath(),n.fill(),n.restore(),n.save(),n.beginPath(),n.fillStyle="#FFFFFF",n.rect(c-y,e+b/2-d,-m,s),n.rect(l+y,e+b/2-d,m,s),n.fill(),n.restore()}}(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){z(t,n,e[n])})}return t}({},tt,{norm:P}));return $(),{render:$,control:B,update:function(){y.shouldChartUpdate=!0,y.shouldControlUpdate=!0}}};var tt=[];!function(t,n){var e=!0,o=U(t,"button","change-theme");function r(){o.textContent="Switch to ".concat(e?"Night":"Day"," Mode"),n&&n(e)}o.addEventListener("click",function(){e=!e,r()}),r()}(document.body,function(t){w.THEME=t?y:b,document.body.className=t?"day":"night",tt.forEach(function(t){return t.update()})});fetch("assets/chart_data.json").then(function(t){return t.json()}).then(function(t){(tt=t.map(function(t,n){return $(t,n)})).forEach(function(t){E.add(function(){t.render()})})})}]);