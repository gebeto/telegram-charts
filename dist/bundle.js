!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=2)}([function(t,e,n){t.exports=n.p+"arrow.svg"},function(t,e,n){t.exports=n.p+"check.svg"},function(t,e,n){"use strict";n.r(e);var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=window.devicePixelRatio,i=343*a,c=16*a,l=2*c,u=2*Math.PI,s="".concat(11*a,"px Arial"),d=40*a,h=7*a,f=43*a,p=29*a,g=p/2,m=5*a,v=1*a,y={THEME:{background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"}};var b,w,x=(b=[],w={time:0,add:function(t){b.push(t)},remove:function(t){var e=b.indexOf(t);e>-1&&b.splice(e,1)}},requestAnimationFrame(function t(e){w.time=e;for(var n=0;n<b.length;n++)b[n](e);requestAnimationFrame(t)}),w);function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var E=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=o,this.fromValue=e,this.toValue=e,this.value=e,this.startTime=0,this.duration=n,this.delay=0}var e,n,o;return e=t,(n=[{key:"playFrom",value:function(t,e){this.value=t,this.play(e)}},{key:"play",value:function(t){this.startTime=x.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(x.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var e=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*e,!0}}])&&T(e.prototype,n),o&&T(e,o),t}();function S(){var t=[],e={active:!1};return{opts:e,createAnimation:function(e,n,o){var r=new E(e,n,o);return t.push(r),r},removeAnimation:function(e){var n=t.indexOf(e);n>-1&&t.splice(n,1)},updateAnimations:function(){for(var n=t.length,o=!1,r=0;r<n;r++)o=t[r].update()||o;return e.active=o,o}}}function A(t,e){var n=e-t,o={};function r(e){return o[e]||(o[e]=(e-t)/n),o[e]}return r.de=function(e){return e*n+t},r.data={delta:n,min:t,max:e},r}function _(t,e,n){var o=t.createAnimation(e,300),r=t.createAnimation(n-e,300);function a(t){return(t-o.value)/r.value}return a.updateDelta=function(t,e){e,o.play(t),r.play(e-t)},a}var M=function(t,e){var n;return function(){var o=arguments;n||(t.apply(this,o),n=!0,setTimeout(function(){return n=!1},e))}};function C(t){t.canvas;var e=t.canvasBounds,n=function(t){var e={},n={},o={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){e[t]=[],n[t]=function(n,o){for(var r=0;r<e[t].length;r++)e[t][r](n,o)}}),{mouse:o,addListener:function(t,n){e[t].push(n)},dispatch:function(t,e){if(!n[t])throw Error("Unknown event");n[t](o,e)}}}(["move","enter","leave","down","up"]),o=n.mouse;function r(t){o.xRaw=t.clientX-e.left,o.yRaw=t.clientY-e.top,o.x=o.xRaw*a,o.y=o.yRaw*a,o.newXRaw=o.xRaw,o.newYRaw=o.yRaw,o.newX=o.x,o.newY=o.y,n.dispatch("down",t)}function i(t){o.newXRaw=t.clientX-e.left,o.newYRaw=t.clientY-e.top,o.newX=o.newXRaw*a,o.newY=o.newYRaw*a,n.dispatch("move",t)}function c(t){o.isHolding=!1,n.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",c),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),document.addEventListener("selectstart",function(t){return!1}),{mouse:o,addListener:n.addListener}}function R(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(t){var e=t.config,n=(t.control,t.ctx),o=t.norm,r=t.colors,i=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*a;return function(t,a,c,l,u){var s=R(t),d=s[0],h=s.slice(1),f=e.buttons[d].opacity.value;if(f){f<1&&(e.shouldControlUpdate=!0);var p=h.length;n.save(),n.beginPath(),n.moveTo(a+0,c+u-o.Y(h[0])*u);for(var g=1;g<p;g++){var m=a+o.X(g)*l,v=c+u-o.Y(h[g])*u;n.lineTo(m,v)}n.lineWidth=i,n.strokeStyle=r[d],n.globalAlpha=f,n.lineJoin="round",n.stroke(),n.restore()}}}var X=0,Y=1,j=2,F=3;function L(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function P(t){t.ctx;var e=t.config,n=t.control,o=t.ys,r=t.xAxis,i=function(t){t.control;var e=t.ctx;return t.normX,t.normY,t.colors,function(t,n,o,r,i,c){var l=(c+c/6/2)/6,u=Math.ceil((n-t)/6);e.save(),e.beginPath(),e.fillStyle=y.THEME.gridLines,e.globalAlpha=.5,e.font=s,e.textBaseline="bottom";for(var d=0;d<6;d++)e.moveTo(o,r+c-d*l),e.lineTo(o+i,r+c-d*l),e.fillText(t+u*d,o+3,r+c-d*l-m);e.lineWidth=1*a,e.globalAlpha=.1,e.strokeStyle=y.THEME.gridLines,e.stroke(),e.restore()}}(t),c=function(t){t.config,t.control;var e=t.ctx,n=t.norm,o=(t.colors,n.X(1));return function(t,r,a,i,c){var l=t.length;e.save(),e.fillStyle=y.THEME.gridLines,e.font=s,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var u=i*o,h=(Math.floor(u),Math.ceil(d/u)),f=h+1,p=O[h],m=O[f],v=(u/(d/h)-1)*h,b=0;b<l;b+=p){var w=b%m;e.globalAlpha=0===w?.5:v>.5?.5:v;var x=r+n.X(b)*i,T=a+g;e.fillText(t[b].dayString,x,T)}e.restore()}}(t),l=H(t),f=function(t){var e=t.config,n=t.ctx,o=t.norm,r=t.colors,i=(e.mouse.mouse,4*a),c=2*a,l=0,s=0,d=0,h=0,f=0,p=o.X(1)*l,g=-1,m=-1,v=!1,b=!1,w=e.popup,x=M(function(t,o){if(v=b,(!(b=n.canvas.parentNode.contains(o.target))&&v||"BUTTON"===o.target.tagName)&&(e.shouldChartUpdate=!0,m=-1,w.hide()),o.target===n.canvas&&((b||!0===v&&!1===b)&&(g=m,t.newY>h&&t.newY<h+s&&(m=f-Math.round((l+d-t.newX)/p+1))<f?w.show(m):(m=-1,w.hide())),g!==m)){if(e.shouldChartUpdate=!0,-1!==m){var r=w.element.getBoundingClientRect();w.element.style.left="".concat(t.newX/a-r.width/2,"px")}g=m}},50);return e.mouse.addListener("move",x),e.mouse.addListener("down",x),function(t,a,g,v,b){l=v,s=b,d=a,h=g;var w=L(t),x=w[0],T=w.slice(1),E=e.buttons[x].opacity.value;if(E&&(f=T.length,p=o.X(1)*v,m>-1&&m<f)){var S=a+o.X(m)*v;n.save(),n.strokeStyle=y.THEME.gridLines,n.lineWidth=1,n.globalAlpha=.1,n.beginPath(),n.moveTo(S,g),n.lineTo(S,g+b),n.stroke(),n.restore(),n.save(),n.beginPath(),n.globalAlpha=E,n.arc(S,g+b-o.Y(T[m])*b,i,0,u),n.lineWidth=c,n.strokeStyle=r[x],n.fillStyle=y.THEME.background,n.fill(),n.stroke(),n.restore()}}}(t);return function(t,a,u,s){var d=t-u*n.range[0]/n.scale,g=u/n.scale,m=s-h,v=a;c(r,d,a+m-p,g,p),i(e.minHeight,e.maxHeight,t,v,u,m-p);for(var y=0;y<o.length;y++)l(o[y],d,v,g,m-p),f(o[y],d,v,g,m-p)}}function k(t,e,n){var o=document.createElement(e);return o.className=n,t&&t.appendChild(o),o}var U=n(0),D=n.n(U);function B(t){return'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(t,'</span>\n\t\t\t<span class="chart__popup-header-icon"><img src="').concat(D.a,'" /></span>\n\t\t</strong>\n\t')}function N(t,e,n){return'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(e,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(t,'">').concat(n,"</span>\n\t\t</span>\n\t")}n(1);function V(t,e,n,o,r){var a=k(t,"div","chart__buttons"),i={};return o.map(function(t){i[t[0]]=function(t,e,n,o,r){var a=o[0],i={enabled:!0,data:o,opacity:e.createAnimation(1,200)},c=k(t,"button","chart__buttons-button");return c.textContent=n.names[a],c.style.backgroundColor=n.colors[a],c.style.borderColor=n.colors[a],c.addEventListener("click",function(){i.enabled=!i.enabled,!0===i.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=n.colors[a]),i.opacity.play(i.enabled?1:0),r&&r(i.enabled)}),i}(a,e,n,t,function(t){r&&r()})}),i}function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(t){return t===1/0||t===-1/0?0:t},J=function(t){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1))}))},q=function(t){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1))}))},G=function(t,e,n){return Math.max.apply(null,t.map(function(t){return Math.max.apply(null,t.slice(1+e,1+n))}))},K=function(t,e,n){return Math.min.apply(null,t.map(function(t){return Math.min.apply(null,t.slice(1+e,1+n))}))};var Q,Z,$,tt=function(t,e){var n,u,s,d={left:0,top:0},h=k(document.body,"div","chart"),p=function(t,e,n){var o=k(t,"div","chart__header"),r=k(o,"h2","chart__header-title");r.textContent=e;var a=k(o,"h3","chart__header-sub-title");return a.textContent=n,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){a.textContent=t}}}(h,"Chart #".concat(e+1),"Hello world!"),g=k(h,"canvas","chart__canvas"),m=g.getContext("2d"),b={index:e,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:S(),mouse:C({config:b,canvas:g,canvasBounds:d}),maxHeight:0,minHeight:0,startIndex:0,endIndex:0},w=t.colors;t.names,t.types,t.columns[0]=t.columns[0].map(function(t){return t.length?t:(e=t,n=new Date(e),{dayString:"".concat(o[n.getMonth()]," ").concat(n.getDate()),dateString:"".concat(r[n.getDay()],", ").concat(n.getDate()," ").concat(o[n.getMonth()]," ").concat(n.getFullYear()),dateStringTitle:"".concat(n.getDate()," ").concat(o[n.getMonth()]," ").concat(n.getFullYear()),date:n,timestamp:e});var e,n});var x=I(t.columns),T=I(x[0]),E=(T[0],T.slice(1)),M=x.slice(1);b.endIndex=E.length,p.setSubtitle("".concat(E[0].dateStringTitle," - ").concat(E[E.length-1].dateStringTitle)),b.popup=function(t,e,n,o){var r=k(t,"div","chart__popup");return{element:r,update:function(t){var a=o.filter(function(t){return e.buttons[t[0]].enabled}).map(function(e){return N(n.colors[e[0]],n.names[e[0]],e[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(B(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"))},show:function(t){var a=o.filter(function(t){return e.buttons[t[0]].enabled}).map(function(e){return N(n.colors[e[0]],n.names[e[0]],e[t+1])});a.length&&(r.innerHTML="\n\t\t\t\t".concat(B(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(a.join(""),"\n\t\t\t"),r.style.opacity=1,r.style.visibility="visible")},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(h,b,t,M);var R=V(h,b.animator,t,M,function(){D()});b.buttons=R;var L=M.filter(function(t){return R[t[0]].enabled});b.minHeight=z(q(L)),b.maxHeight=z(J(L));var O={X:A(0,E.length-1),Y:_(b.animator,b.minHeight,b.maxHeight)},U={X:A(0,E.length-1),Y:_(b.animator,b.minHeight,b.maxHeight)};function D(){console.log("update norms");var t=Q.range[0],e=Q.range[1],n=t*E.length,o=n<0?0:Math.floor(n),r=e*E.length,a=r>E.length?E.length:Math.ceil(r),i=M.filter(function(t){return R[t[0]].enabled});b.minHeight=z(K(i,o,a)),b.maxHeight=z(G(i,o,a)),O.Y.updateDelta(b.minHeight,b.maxHeight);var c=q(i),l=J(i);console.log(c,l),U.Y.updateDelta(c,l),p.setSubtitle("".concat(E[o].dateStringTitle," - ").concat(E[a-1].dateStringTitle))}var Q={range:[.1,.9],rangedX:0,rangedWidth:0,count:0,scale:0,updateRange:function(t,e){var n=e-t,o=E.length*n;o>5&&(Q.count=Math.ceil(o),Q.scale=n,Q.range[0]=t,Q.range[1]=e,D())},normalizeForControl:function(t){return s(t)}};function Z(){var t=g.getBoundingClientRect(),e=t.width*a,o=t.height*a;d.width=e,d.height=i,d.left=t.left,d.right=t.right,d.top=t.top,d.bottom=t.bottom,d.x=t.x,d.y=t.y,n===e&&u===o||(b.shouldChartUpdate=!0,b.shouldControlUpdate=!0,s=A(l,d.width-l),n=g.width=d.width,u=g.height=i)}function $(t){Z(),b.animator.updateAnimations()&&(b.shouldChartUpdate=!0),b.shouldChartUpdate&&(console.log("update chart",e),b.shouldChartUpdate=!1,m.clearRect(0,0,n,i-f),et(c,0,n-l,i-f)),b.shouldControlUpdate&&(console.log("update control",e),b.shouldControlUpdate=!1,m.clearRect(0,i-f,n,f),nt(c,i-f,n-l,f))}window.addEventListener("resize",Z),Q.updateRange(Q.range[0],Q.range[1]),Z(),D();var tt={config:b,control:Q,ctx:m,norm:O,colors:w,ys:M,buttons:R,xAxis:E,canvasBounds:d},et=P(tt),nt=function(t){var e=t.ctx,n=t.config,o=(t.canvasBounds,t.control),r=t.ys,i=H(t,{lineWidth:1}),c=0,l=0,u=l-c,s=10*a,d=s/2,h=10*a,f=2*h,p=h/2,g=h-h/3,m=2*a,b=(h-m)/2,w=X,x=14*a,T=[o.range[0],o.range[1]],E={start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}};return n.mouse.addListener("move",function(t){if(w!==X){n.shouldChartUpdate=!0,n.shouldControlUpdate=!0;var e=o.normalizeForControl(t.newX)-o.normalizeForControl(t.x),r=T[0]+e,a=T[1]+e;if(w===Y)r>0?o.updateRange(r,T[1]):o.updateRange(0,T[1]);else if(w===j)a<1?o.updateRange(T[0],a):o.updateRange(T[0],1);else if(r>=0&&a<=1)o.updateRange(r,a);else if(a>1){var i=1-T[1];o.updateRange(T[0]+i,T[1]+i)}else if(r<0){var c=0-T[0];o.updateRange(T[0]+c,T[1]+c)}}}),n.mouse.addListener("down",function(t){var e=x,r=x,a=E.start,i=E.end;t.y>a.y&&t.y<a.y+a.height&&(n.shouldChartUpdate=!0,n.shouldControlUpdate=!0,T=[o.range[0],o.range[1]],t.newX>a.x-e&&t.newX<a.x+a.width&&t.newY>a.y-e&&t.newY<a.y+a.height+e?w=Y:t.newX>i.x&&t.newX<i.x+i.width+r&&t.newY>i.y-r&&t.newY<i.y+i.height+r?w=j:t.newX>a.x+a.width&&t.newX<i.x&&t.newY>i.y-x&&t.newY<i.y+i.height+x&&(w=F))}),n.mouse.addListener("up",function(t){w=X}),function(t,n,a,w){var x=a,T=t;a-=f,t+=h;for(var S=0;S<r.length;S++)i(r[S],t,n+3,a,w-6);c=t+a*o.range[0],l=t+a*o.range[1],u=l-c,E.start.x=c-h,E.start.y=n,E.start.width=h,E.start.height=w,E.end.x=l,E.end.y=n,E.end.width=h,E.end.height=w,e.save(),e.globalAlpha=.6,e.fillStyle=y.THEME.scrollBackground,e.beginPath(),e.moveTo(c-1,n),e.lineTo(c-1,n+w),e.arcTo(T,n+w,T,n+w-h,p),e.arcTo(T,n,c-1,n,p),e.closePath(),e.fill(),e.beginPath(),e.moveTo(l+1,n),e.lineTo(l+1,n+w),e.arcTo(T+x,n+w,T+x,n+w-h,p),e.arcTo(T+x,n,l,n,p),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=y.THEME.scrollSelector,e.beginPath(),e.rect(c,n,u,v),e.rect(c,n+w-v,u,v),e.fill(),e.beginPath();var A=c;e.moveTo(A,n),e.lineTo(A,n+w),e.arcTo(A-h,n+w,A-h,n+w-h,g),e.arcTo(A-h,n,A,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(l,n),e.lineTo(l,n+w),e.arcTo(l+h,n+w,l+h,n+w-h,g),e.arcTo(l+h,n,l,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(c-b,n+w/2-d,-m,s),e.rect(l+b,n+w/2-d,m,s),e.fill(),e.restore()}}(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){W(t,e,n[e])})}return t}({},tt,{norm:U}));return $(),{render:$,control:Q}};Q=document.body,Z="Change theme",($=k(Q,"button","change-theme")).textContent=Z,$.addEventListener("click",function(){console.log("CHANGE THEME")});fetch("assets/chart_data.json").then(function(t){return t.json()}).then(function(t){t.map(function(t,e){return tt(t,e)}).forEach(function(t){x.add(function(){t.render()})})})}]);