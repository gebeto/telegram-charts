!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=window.devicePixelRatio,i=4*o,l=2*i,c=343*o,u=16*o,s=2*u,h=2*Math.PI,d=Math.PI/100,f="".concat(11*o,"px sans-serif"),m=40*o,g=7*o,v=43*o,p=29*o,y=p/2,x=5*o,w=1*o,b=2*o,A={THEME:{}};var T,C,H=(T=[],C={time:0,add:function(t){T.push(t)},remove:function(t){var e=T.indexOf(t);e>-1&&T.splice(e,1)}},requestAnimationFrame(function t(e){C.time=e;for(var n=0;n<T.length;n++)T[n](e);requestAnimationFrame(t)}),C);function E(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var F=function(){function t(e,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=a,this.fromValue=e,this.toValue=e,this.value=e,this.startTime=0,this.duration=n,this.delay=0}var e,n,a;return e=t,(n=[{key:"playFrom",value:function(t,e){this.value=t,this.play(e)}},{key:"play",value:function(t){this.startTime=H.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(H.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var e=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*e,!0}}])&&E(e.prototype,n),a&&E(e,a),t}();function M(t,e){var n=e-t,a={};function r(e){return a[e]||(a[e]=(e-t)/n),a[e]}return r.de=function(e){return e*n+t},r.data={delta:n,min:t,max:e},r}function S(t,e,n){var a=t.createAnimation(e,300),r=t.createAnimation(n-e,300);function o(t){return(t-a.value)/r.value}return o.updateDelta=function(t,e){e,a.play(t),r.play(e-t)},o}var P=function(t,e){var n;return function(){var a=arguments;n||(t.apply(this,a),n=!0,setTimeout(function(){return n=!1},e))}};var Y=function(t,e){return t+e},_=function(t){return t===1/0||t===-1/0?0:t},k=function(t){return Math.min.apply(null,t)},L=function(t){return Math.max.apply(null,t)},B=function(t,e,n){return Math.min.apply(null,t.slice(e,1+n))},R=function(t,e,n){return Math.max.apply(null,t.slice(e,1+n))},X=function(t){return Math.min.apply(null,t.map(k))},U=function(t){return Math.max.apply(null,t.map(L))},D=function(t,e,n){return Math.min.apply(null,t.map(function(t){return B(t,e,n)}))},O=function(t,e,n){return Math.max.apply(null,t.map(function(t){return R(t,e,n)}))},j=function(t){var e,n,a=new Array(t[0].length).fill(0);for(e=0;e<t.length;e++)for(n=0;n<t[e].length;n++)a[n]+=t[e][n];return a};function N(t){t.canvas;var e=t.canvasBounds,n=function(t){var e={},n={},a={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){e[t]=[],n[t]=function(n,a){for(var r=0;r<e[t].length;r++)e[t][r](n,a)}}),{mouse:a,addListener:function(t,n){e[t].push(n)},dispatch:function(t,e){if(!n[t])throw Error("Unknown event");n[t](a,e)}}}(["move","enter","leave","down","up"]),a=n.mouse;function r(t){a.xRaw=t.clientX-e.left,a.yRaw=t.clientY-e.top,a.x=a.xRaw*o,a.y=a.yRaw*o,a.newXRaw=a.xRaw,a.newYRaw=a.yRaw,a.newX=a.x,a.newY=a.y,n.dispatch("down",t)}function i(t){a.newXRaw=t.clientX-e.left,a.newYRaw=t.clientY-e.top,a.newX=a.newXRaw*o,a.newY=a.newYRaw*o,n.dispatch("move",t)}function l(t){a.isHolding=!1,n.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l),document.addEventListener("selectstart",function(t){return!1}),{mouse:a,addListener:n.addListener}}function K(t,e,n){var a=t.map(function(t){var a={opacity:n.animator.createAnimation(1,300),key:t[0],scaling:{},enabled:!0,items:t.slice(1)};return e.y_scaled&&(a.scaling.color=e.colors[a.key],a.scaling.minHeight=_(k(a.items)),a.scaling.maxHeight=_(L(a.items)),a.scaling.minHeightAnim=n.animator.createAnimation(0,300),a.scaling.maxHeightAnim=n.animator.createAnimation(0,300),a.scaling.normY=S(n.animator,a.scaling.minHeight,a.scaling.maxHeight),a.scaling.normControlY=S(n.animator,a.scaling.minHeight,a.scaling.maxHeight),a.scaling.updateMinMax=function(t,e){a.scaling.minHeight=_(B(a.items,t,e)),a.scaling.maxHeight=_(R(a.items,t,e)),a.scaling.minHeightAnim.play(a.scaling.minHeight),a.scaling.maxHeightAnim.play(a.scaling.maxHeight),a.scaling.normY.updateDelta(a.scaling.minHeight,a.scaling.maxHeight)}),a});if(!e.y_scaled){var r={};e.percentage?function(t,e,n){var a=t.animator.createAnimation(0,300),r=t.animator.createAnimation(100,300);e.minHeight=0,e.maxHeight=100,e.minHeightAnim=a,e.maxHeightAnim=r,e.normY=S(t.animator,0,100),e.normControlY=S(t.animator,0,100),e.updateMinMax=function(t,e){}}(n,r):e.stacked?function(t,e,n){var a=n.map(function(t){return t.items}),r=_(L(j(a))),o=R(j(a),0,r),i=t.animator.createAnimation(0,300),l=t.animator.createAnimation(0,300);e.minHeight=0,e.maxHeight=o,e.minHeightAnim=i,e.maxHeightAnim=l,e.normY=S(t.animator,0,o),e.normControlY=S(t.animator,0,r),e.updateMinMax=function(t,a){var r=n.filter(function(t){return t.enabled}).map(function(t){return t.items});e.minHeight=0;try{e.maxHeight=_(R(j(r),t,a))}catch(t){return}e.minHeightAnim.play(e.minHeight),e.maxHeightAnim.play(e.maxHeight),e.normY.updateDelta(e.minHeight,e.maxHeight);var o=_(L(j(r)));e.normControlY.updateDelta(0,o)}}(n,r,a):function(t,e,n){var a=n.map(function(t){return t.items}),r=_(X(a)),o=_(U(a)),i=X(a,r,o),l=U(a,r,o),c=t.animator.createAnimation(0,300),u=t.animator.createAnimation(0,300);e.minHeight=i,e.maxHeight=l,e.minHeightAnim=c,e.maxHeightAnim=u,e.normY=S(t.animator,i,l),e.normControlY=S(t.animator,r,o),e.updateMinMax=function(t,a){var r=n.filter(function(t){return t.enabled}).map(function(t){return t.items});e.minHeight=_(D(r,t,a)),e.maxHeight=_(O(r,t,a)),e.minHeightAnim.play(e.minHeight),e.maxHeightAnim.play(e.maxHeight),e.normY.updateDelta(e.minHeight,e.maxHeight);var o=_(X(r)),i=_(U(r));e.normControlY.updateDelta(o,i)}}(n,r,a),a.forEach(function(t){t.scaling=r})}return{items:a}}function V(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,i=t.normYKey,l=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*o;return function(t,o,c,u,s){var h=t.key,d=t.items,f=t.opacity,m=t.scaling[i],g=f.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=d.length;n.save(),n.beginPath();var p=a.X(1)*u,y=c+s;n.moveTo(o+0,y-m(d[0])*s);for(var x=1;x<v;x++){var w=o+p*x,b=y-m(d[x])*s;b>y&&(e.shouldControlUpdate=!0),w<-p||w>n.canvas.width+p||n.lineTo(w,b)}n.lineWidth=l,n.strokeStyle=r[h],n.globalAlpha=g,n.lineJoin="round",n.stroke(),n.restore()}}}var W=0,z=1,I=2,J=3;function q(t,e){var n={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},a=W,r=14*o,i=[e.range[0],e.range[1]];return t.mouse.addListener("move",function(n){if(a!==W){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var r=e.normalizeForControl(n.newX)-e.normalizeForControl(n.x),o=i[0]+r,l=i[1]+r;if(a===z)o>0?e.updateRange(o,i[1]):e.updateRange(0,i[1]);else if(a===I)l<1?e.updateRange(i[0],l):e.updateRange(i[0],1);else if(o>=0&&l<=1)e.updateRange(o,l);else if(l>1){var c=1-i[1];e.updateRange(i[0]+c,i[1]+c)}else if(o<0){var u=0-i[0];e.updateRange(i[0]+u,i[1]+u)}}}),t.mouse.addListener("down",function(o){var l=r,c=r,u=n.controlsBounds.start,s=n.controlsBounds.end;o.y>u.y&&o.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,i=[e.range[0],e.range[1]],o.newX>u.x-l&&o.newX<u.x+u.width&&o.newY>u.y-l&&o.newY<u.y+u.height+l?a=z:o.newX>s.x&&o.newX<s.x+s.width+c&&o.newY>s.y-c&&o.newY<s.y+s.height+c?a=I:o.newX>u.x+u.width&&o.newX<s.x&&o.newY>s.y-r&&o.newY<s.y+s.height+r&&(a=J))}),t.mouse.addListener("up",function(t){a=W}),n}function G(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=(t.xAxis,V(t,{lineWidth:1})),l=0,c=0,u=c-l,s=10*o,h=s/2,d=10*o,f=2*d,m=d/2,g=d-d/3,v=2*o,p=(d-v)/2,y=q(n,a).controlsBounds;return function(t,n,o,x){var b=o,T=t;o-=f,t+=d;for(var C=0;C<r.items.length;C++)i(r.items[C],t,n+3,o,x-6);l=t+o*a.range[0],c=t+o*a.range[1],u=c-l,y.start.x=l-d,y.start.y=n,y.start.width=d,y.start.height=x,y.end.x=c,y.end.y=n,y.end.width=d,y.end.height=x,e.save(),e.globalAlpha=.6,e.fillStyle=A.THEME.scrollBackground,e.beginPath(),e.moveTo(l-1,n),e.lineTo(l-1,n+x),e.arcTo(T,n+x,T,n+x-d,m),e.arcTo(T,n,l-1,n,m),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c+1,n),e.lineTo(c+1,n+x),e.arcTo(T+b,n+x,T+b,n+x-d,m),e.arcTo(T+b,n,c,n,m),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=A.THEME.scrollSelector,e.beginPath(),e.rect(l,n,u,w),e.rect(l,n+x-w,u,w),e.fill(),e.beginPath();var H=l;e.moveTo(H,n),e.lineTo(H,n+x),e.arcTo(H-d,n+x,H-d,n+x-d,g),e.arcTo(H-d,n,H,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c,n),e.lineTo(c,n+x),e.arcTo(c+d,n+x,c+d,n+x-d,g),e.arcTo(c+d,n,c,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(l-p,n+x/2-h,-v,s),e.rect(c+p,n+x/2-h,v,s),e.fill(),e.restore()}}function Z(t){var e=t.canvasBounds,n=t.config,a=t.ctx,r=t.norm,l=t.colors,c=(t.ys,t.normYKey),u=2*o,s=(n.mouse.mouse,n.popup),d=r.X(1),f=0,m=0,g=0,v=0,p=0,y=d*f,x=-1,w=-1,b=!1,T=!1,C=!0,H=!1,E=P(function(t,r){if(b=T,(!(T=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&b||"BUTTON"===r.target.tagName)&&(-1!==w&&(n.shouldChartUpdate=!0),w=-1,s.hide()),T&&r.target===a.canvas&&((T||!0===b&&!1===T)&&(x=w,t.newY>v&&t.newY<v+m&&(w=p-Math.round((f+g-t.newX)/y+1))<p&&w>=0?s.show(w):(w=-1,s.hide())),x!==w)){if(n.shouldChartUpdate=!0,-1!==w){var l=s.element.getBoundingClientRect(),c=(w*y+g)/o;c-l.width-i<0?C=!1:c+l.width+i>e.width/o&&(C=!0),s.element.style.left="".concat(C?c-l.width-i:c+i,"px")}x=w}},50);return n.mouse.addListener("move",function(t,e){H&&E(t,e)}),n.mouse.addListener("down",function(t,e){H=!0,E(t,e)}),n.mouse.addListener("up",function(t,e){H=!1}),function(t,e,n,o,s){f=o,m=s,g=e,v=n;var x=t.key,b=t.items,T=t.opacity,C=t.scaling[c],H=T.value;if(H&&(p=b.length,y=d*o,w>-1&&w<p)){var E=e+r.X(w)*o;a.save(),a.strokeStyle=A.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.1,a.beginPath(),a.moveTo(E,n),a.lineTo(E,n+s),a.stroke(),a.restore(),a.save(),a.beginPath(),a.globalAlpha=H,a.arc(E,n+s-C(b[w])*s,i,0,h),a.lineWidth=u,a.strokeStyle=l[x],a.fillStyle=A.THEME.background,a.fill(),a.stroke(),a.restore()}}}function Q(t,e){var n=Math.abs(t);if(n>1e9&&e)return(t/1e9).toFixed(2)+"B";if(n>1e6&&e)return(t/1e6).toFixed(2)+"M";if(n>1e3&&e)return(t/1e3).toFixed(1)+"K";if(n>1){for(var a=n.toFixed(0),r=t<0?"-":"",o=0;o<a.length;o++)r+=a.charAt(o),(a.length-1-o)%3==0&&(r+=" ");return r}return t.toString()}function $(t){t.control;var e=t.ctx,n=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=n.textAlign||"left";return function(t,n,r,i,l,c,u){var s=Math.round(t.scaling.minHeightAnim.value),h=Math.round(t.scaling.maxHeightAnim.value),d=t.opacity.value,m=(l+l/6/2)/6,g=Math.ceil((h-s)/6);e.save(),e.beginPath(),e.fillStyle=t.scaling.color||A.THEME.gridLines,e.globalAlpha=u?d/2:t.scaling.color?.8:.5,e.font=f,e.textBaseline="bottom",e.textAlign=a;for(var v=0;v<6;v++){c&&(e.moveTo(n,r+l-v*m),e.lineTo(n+i,r+l-v*m));var p=Q(s+g*v,!0);e.fillText(p,n+3,r+l-v*m-x)}e.lineWidth=1*o,c&&(e.globalAlpha=.1,e.strokeStyle=A.THEME.gridLines,e.stroke()),e.restore()}}var tt=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function et(t){t.config,t.control;var e=t.ctx,n=t.norm,a=(t.colors,n.X(1));return function(t,r,o,i,l){var c=t.length;e.save(),e.fillStyle=A.THEME.gridLines,e.font=f,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var u=i*a,s=(Math.floor(u),Math.ceil(m/u)),h=s+1,d=tt[s],g=tt[h],v=(u/(m/s)-1)*s,p=0;p<c;p+=d){var x=p%g;e.globalAlpha=0===x?.5:v>.5?.5:v;var w=r+n.X(p)*i,b=o+y;w<-m||w>e.canvas.width+m||e.fillText(t[p].dayString,w,b)}e.restore()}}function nt(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=$(t,{textAlign:"left"}),c=et(t),u=V(t),s=Z(t);return function(t,h,d,f){var m=t-d*e.range[0]/e.scale,v=d/e.scale,y=f-g-l,x=h+i+b;c(r,m,h+y-p,v,p),o(a.items[0],t,x,d,y-p,!0);for(var w=0;w<a.items.length;w++)u(a.items[w],m,x,v,y-p);for(var A=0;A<n.length;A++)s(a.items[A],m,x,v,y-p)}}function at(t,e,n){var a=document.createElement(e);return a.className=n,t&&t.appendChild(a),a}function rt(t,e,n,a,r,o){var i=a.key,l={enabled:!0},c=at(t,"button","chart__buttons-button");function u(){!0===l.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=n.colors[i]),a.enabled=l.enabled,a.opacity.play(l.enabled?1:0),o&&o(l.enabled)}return c.textContent=n.names[i],c.style.backgroundColor=n.colors[i],c.style.borderColor=n.colors[i],function(t,e,n){var a=null,r=!1;function o(){a=setTimeout(function(){n&&n(),r=!0},200)}function i(){clearTimeout(a)}t.addEventListener("click",function(){clearTimeout(a),r?r=!1:e&&e()}),t.addEventListener("mousedown",o),t.addEventListener("mousemove",i),t.addEventListener("touchstart",o),t.addEventListener("touchmove",i)}(c,function(){if(1===r.activeButtonsCount&&l.enabled)return c.className="chart__buttons-button error",void setTimeout(function(){c.className="chart__buttons-button"},140);l.enabled=!l.enabled,u()},function(){l.show(),r.hideAllExcept(c)}),l.hide=function(t){l.enabled&&t!==c&&(l.enabled=!1,u())},l.show=function(){l.enabled||(l.enabled=!0,u())},l}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){it(t,e,n[e])})}return t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ct=function(t,e,n){var i,l,h,d,f,m=t.container,g=t.index,p=t.title,y=void 0===p?"Chart #".concat(g+1):p,x={left:0,top:0},w=at(m,"div","chart"),b=function(t,e,n){var a=at(t,"div","chart__header"),r=at(a,"h2","chart__header-title");r.textContent=e;var o=at(a,"h3","chart__header-sub-title");return o.textContent=n,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){o.textContent=t}}}(w,y,"Hello world!"),A=at(w,"canvas","chart__canvas"),T=A.getContext("2d"),C=(d=[],{opts:f={active:!1},createAnimation:function(t,e,n){var a=new F(t,e,n);return d.push(a),a},removeAnimation:function(t){var e=d.indexOf(t);e>-1&&d.splice(e,1)},updateAnimations:function(){for(var t=d.length,e=!1,n=0;n<t;n++)e=d[n].update()||e;return f.active=e,e}}),H={index:g,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:C,mouse:N({config:H,canvas:A,canvasBounds:x}),maxHeight:0,minHeight:0,minHeightAnim:C.createAnimation(0,300),maxHeightAnim:C.createAnimation(0,300),startIndex:0,endIndex:0},E=e.colors;e.names,e.types,e.columns[0]=e.columns[0].map(function(t){return t.length?t:(e=t,n=new Date(e),{dayString:"".concat(a[n.getMonth()]," ").concat(n.getDate()),dateString:"".concat(r[n.getDay()],", ").concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),dateStringTitle:"".concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),date:n,timestamp:e});var e,n});var S=lt(e.columns),P=lt(S[0]),Y=(P[0],P.slice(1)),_=S.slice(1),k=K(_,e,H);H.endIndex=Y.length,b.setSubtitle("".concat(Y[0].dateStringTitle," - ").concat(Y[Y.length-1].dateStringTitle)),H.popup=function(t,e,n,a){var r=at(t,"div","chart__popup");function o(t){var e,o=a.items.filter(function(t){return t.enabled}).map(function(e){return a=n.colors[e.key],r=n.names[e.key],o=e.items[t],'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(r,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(a,'">').concat(o,"</span>\n\t\t</span>\n\t");var a,r,o});o.length&&(r.innerHTML="\n\t\t\t".concat((e=n.columns[0][t+1].dateString,'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(e,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')),"\n\t\t\t").concat(o.join(""),"\n\t\t"))}return{element:r,update:o,show:function(t){o(t),r.style.opacity=1,r.style.visibility="visible"},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(w,0,e,k);var L=function(t,e,n,a,r){var o={activeButtonsCount:a.items.length,hideAllExcept:function(t){c.forEach(function(e){e.hide(t)})},hideAll:function(){c.forEach(function(t){t.hide()})}},i=at(t,"div","chart__buttons"),l={},c=a.items.map(function(t){return l[t[0]]=rt(i,0,n,t,o,function(t){o.activeButtonsCount+=t?1:-1,o.activeButtonsCount<1||r&&r()})});return l}(w,H.animator,e,k,function(){R()});H.buttons=L;var B={X:M(0,Y.length-1)};function R(){var t=X.range[0],e=X.range[1],n=t*Y.length,a=n<0?0:Math.floor(n),r=e*Y.length,o=r>Y.length?Y.length:Math.ceil(r);k.items.forEach(function(t){return t.scaling.updateMinMax(a,o)}),b.setSubtitle("".concat(Y[a].dateStringTitle," - ").concat(Y[o-1].dateStringTitle))}var X={range:[.7,1],count:0,scale:0,updateRange:function(t,e){var n=e-t,a=Y.length*n;a>5&&(X.count=Math.ceil(a),X.scale=n,X.range[0]=t,X.range[1]=e,R())},normalizeForControl:function(t){return h(t)}};function U(){var t=A.getBoundingClientRect(),e=t.width*o,n=t.height*o;x.width=e,x.height=c,x.left=t.left,x.right=t.right,x.top=t.top,x.bottom=t.bottom,x.x=t.x,x.y=t.y,i===e&&l===n||(H.shouldChartUpdate=!0,H.shouldControlUpdate=!0,h=M(s,x.width-s),i=A.width=x.width,l=A.height=c)}function D(t){U(),H.animator.updateAnimations()&&(H.shouldChartUpdate=!0),H.shouldChartUpdate&&(H.shouldChartUpdate=!1,T.clearRect(0,0,i,c-v),j(u,0,i-s,c-v)),H.shouldControlUpdate&&(H.shouldControlUpdate=!1,T.clearRect(0,c-v,i,v),V(u,c-v,i-s,v))}window.addEventListener("resize",U),X.updateRange(X.range[0],X.range[1]),U(),R();var O={config:H,control:X,ctx:T,norm:B,colors:E,ys:_,buttons:L,xAxis:Y,yAxis:k,canvasBounds:x,normYKey:"normY"},j=n.drawChartFabric?n.drawChartFabric(O):nt(O),V=n.drawControlFabric?n.drawControlFabric(ot({},O,{normYKey:"normControlY"})):G(ot({},O,{normYKey:"normControlY"}));return D(),{render:D,control:X,update:function(){H.shouldChartUpdate=!0,H.shouldControlUpdate=!0}}},ut={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},st={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"};function ht(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s){var h=t.key,d=t.items,f=t.opacity,m=t.scaling[o],g=f.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=u-i*u,p=d.length;n.save(),n.beginPath();for(var y=0;y<p;y++){a[y]+=d[y]*g;var x=i*v,w=l+x*y,b=c+s-m(a[y])*s,A=m(d[y])*s*g,T=x-i;w<-x||w>n.canvas.width||n.rect(w,b,T,A>0?A:0)}n.fillStyle=r[h],n.strokeStyle=r[h],n.fill(),n.restore()}}}function dt(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=t.xAxis,r=et(t),c=ht(t),u=function(t){var e=t.canvasBounds,n=t.config,a=t.ctx,r=t.norm,i=(t.colors,t.ys,t.normYKey),l=(n.mouse.mouse,n.popup),c=r.X(1),u=0,s=0,h=0,d=0,f=0,m=c*u,g=m/2,v=-1,p=-1,y=!1,x=!1,w=!0,b=!1,T=P(function(t,r){if(y=x,(!(x=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&y||"BUTTON"===r.target.tagName)&&(-1!==p&&(n.shouldChartUpdate=!0),p=-1,l.hide()),x&&r.target===a.canvas&&((x||!0===y&&!1===x)&&(v=p,t.newY>d&&t.newY<d+s&&(p=f-Math.ceil((u+h-t.newX)/m))<f&&p>=0?l.show(p):(p=-1,l.hide())),v!==p)){if(n.shouldChartUpdate=!0,-1!==p){var i=l.element.getBoundingClientRect(),c=(p*m+h)/o;c-i.width-m-g<0?w=!1:c+i.width+m+g>e.width/o&&(w=!0),l.element.style.left="".concat(w?c-i.width-g:c+m+g,"px")}v=p}},50);return n.mouse.addListener("move",function(t,e){b&&T(t,e)}),n.mouse.addListener("down",function(t,e){b=!0,T(t,e)}),n.mouse.addListener("up",function(t,e){b=!1}),function(t,e,n,o,l,v){u=l,s=v,h=n,d=o,t.key;var y=t.items,x=(t.opacity,t.scaling[i]),w=l-m;if(f=y.length,g=(m=c*w)/2,p>-1&&p<f){var b=n+r.X(p)*w;a.save(),a.strokeStyle=A.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.2,a.beginPath(),a.rect(b,o+v,m,-x(e[p])*v),a.fillStyle=A.THEME.gridLines,a.fill(),a.stroke(),a.restore()}}}(t),s=$(t,{textAlign:"left"});return function(t,o,h,d){for(var f=t-h*e.range[0]/e.scale,m=h/e.scale,v=d-g-l,y=o+i+b,x=new Array(a.length).fill(0),w=0;w<n.items.length;w++)c(n.items[w],x,f,y,m,v-p);u(n.items[0],x,f,y,m,v-p),r(a,f,o+v-p,m,p),s(n.items[0],t,y,h,v-p,!0)}}function ft(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=(t.xAxis,function(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=(t.normYKey,t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],e.mouse.mouse,e.popup,a.X(1),0),i=0,l=0;return function(t,a,c,u,s,h,m,g){var v=t.key,p=(t.items,t.opacity.value);if(p){p<1&&(e.shouldControlUpdate=!0),o=Math.min(m/2,g/2),i=s+m/2,l=h+g/2,n.save(),n.beginPath(),n.fillStyle="red",n.moveTo(i,l);var y=d*c*2,x=d*u*2;n.arc(i,l,o,y,x),n.moveTo(i,l),n.fillStyle=r[v],n.fill(),n.restore(),n.save(),n.fillStyle="#fff",n.textAlign="center",n.globalAlpha=p,n.textBaseline="middle",n.font=f;var w=y+(x-y)/2,b=i+Math.cos(w)*(o/2),A=l+Math.sin(w)*(o/2);n.fillText(a.toFixed(0)+"%",b,A),n.restore()}}}(t));return function(t,r,o,c){e.range[0];for(var u=c-g-l,s=r+i+b,h=n.items.reduce(function(t,e){return t+e.items.reduce(Y,0)*e.opacity.value},0)/100,d=0,f=0;f<n.items.length;f++){var m=n.items[f].items.reduce(Y,0)/h*n.items[f].opacity.value;a(n.items[f],m,d,d+=m,t,s,o,u-p)}}}function mt(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s,h){var d=t.key,f=t.items,m=t.opacity,g=(0,t.scaling[o])(1),v=m.value;if(v){v<1&&(e.shouldControlUpdate=!0);var p=f.length;n.save(),n.beginPath();var y=i*s,x=new Array(p).fill(0),w=l[0],b=u+h-g*Math.round(a[0]/w)*h;n.moveTo(c,b),x[0]=c+0*y;for(var A=1;A<p;A++){var T=Math.round(a[A]/l[A]);x[A]=c+y*A;var C=u+h-g*T*h;n.lineTo(x[A],C)}for(var H=p-1;H>=0;H--){a[H]+=f[H]*v;var E=u+h-g*Math.round(a[H]/l[H])*h;n.lineTo(x[H],E)}n.closePath(),n.fillStyle=r[d],n.fill(),n.restore()}}}var gt,vt,pt,yt,xt=[];function wt(t){var e={drawChartFabric:null,drawControlFabric:null},n=Object.keys(t.types).map(function(e){return t.types[e]}).filter(function(t){return"x"!==t});if(!n.length)throw new Error("DataSet error. No columns for chart");if(n.length>50)throw new Error("DataSet error. Supported up to 50 columns on one graph.");var a=n[0];if(t.y_scaled){if("line"!==a||2!==n.length)throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.");e.drawChartFabric=function(t){return function(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=$(t,{textAlign:"left"}),c=$(t,{textAlign:"right"}),u=et(t),s=V(t),h=Z(t);return function(t,d,f,m){var v=t-f*e.range[0]/e.scale,y=f/e.scale,x=m-g-l,w=d+i+b;u(r,v,d+x-p,y,p);var A=!0;a.items[0].enabled&&(o(a.items[0],t,w,f,x-p,A),A=!1),a.items[1].enabled&&(c(a.items[1],t+f,w,-f,x-p,A),A=!1);for(var T=0;T<a.items.length;T++)s(a.items[T],v,w,y,x-p);for(var C=0;C<n.length;C++)h(a.items[C],v,w,y,x-p)}}(t)},e.drawControlFabric=function(t){return G(t)}}else"bar"==a?(e.drawChartFabric=function(t){return dt(t)},e.drawControlFabric=function(t){return n=(e=t).ctx,a=e.config,e.canvasBounds,r=e.control,e.ys,i=e.yAxis,l=e.xAxis,c=ht(e),h=(s=0)-(u=0),f=(d=10*o)/2,g=2*(m=10*o),v=m/2,p=m-m/3,x=(m-(y=2*o))/2,b=q(a,r).controlsBounds,function(t,e,a,o){var T=a,C=t;a-=g,t+=m;for(var H=new Array(l.length).fill(0),E=0;E<i.items.length;E++)c(i.items[E],H,t,e+3,a,o-6);u=t+a*r.range[0],s=t+a*r.range[1],h=s-u,b.start.x=u-m,b.start.y=e,b.start.width=m,b.start.height=o,b.end.x=s,b.end.y=e,b.end.width=m,b.end.height=o,n.save(),n.globalAlpha=.6,n.fillStyle=A.THEME.scrollBackground,n.beginPath(),n.moveTo(u-1,e),n.lineTo(u-1,e+o),n.arcTo(C,e+o,C,e+o-m,v),n.arcTo(C,e,u-1,e,v),n.closePath(),n.fill(),n.beginPath(),n.moveTo(s+1,e),n.lineTo(s+1,e+o),n.arcTo(C+T,e+o,C+T,e+o-m,v),n.arcTo(C+T,e,s,e,v),n.closePath(),n.fill(),n.restore(),n.save(),n.fillStyle=A.THEME.scrollSelector,n.beginPath(),n.rect(u,e,h,w),n.rect(u,e+o-w,h,w),n.fill(),n.beginPath();var F=u;n.moveTo(F,e),n.lineTo(F,e+o),n.arcTo(F-m,e+o,F-m,e+o-m,p),n.arcTo(F-m,e,F,e,p),n.closePath(),n.fill(),n.beginPath(),n.moveTo(s,e),n.lineTo(s,e+o),n.arcTo(s+m,e+o,s+m,e+o-m,p),n.arcTo(s+m,e,s,e,p),n.closePath(),n.fill(),n.restore(),n.save(),n.beginPath(),n.fillStyle="#FFFFFF",n.rect(u-x,e+o/2-f,-y,d),n.rect(s+x,e+o/2-f,y,d),n.fill(),n.restore()};var e,n,a,r,i,l,c,u,s,h,d,f,m,g,v,p,y,x,b}):"area"==a?(e.drawChartFabric=function(t){return function(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=t.xAxis,r=et(t),o=mt(t),c=Z(t),u=$(t,{textAlign:"left"});return function(t,s,h,d){for(var f=t-h*e.range[0]/e.scale,m=h/e.scale,v=d-g-l,y=s+i+b,x=new Array(a.length).fill(0),w=0;w<n.items.length;w++)for(var A=0;A<n.items[w].items.length;A++)x[A]+=n.items[w].items[A]*n.items[w].opacity.value;for(var T=0;T<a.length;T++)x[T]/=100;for(var C=new Array(a.length).fill(0),H=0;H<n.items.length;H++)o(n.items[H],C,x,f,y,m,v-p),c(n.items[H],f,y,m,v-p);r(a,f,s+v-p,m,p),u(n.items[0],t,y,h,v-p,!0)}}(t)},e.drawControlFabric=function(t){return n=(e=t).ctx,a=e.config,e.canvasBounds,r=e.control,e.ys,i=e.yAxis,l=e.xAxis,c=mt(e),h=(s=0)-(u=0),f=(d=10*o)/2,g=2*(m=10*o),v=m/2,p=m-m/3,x=(m-(y=2*o))/2,b=q(a,r).controlsBounds,function(t,e,a,o){var T=a,C=t;a-=g,t+=m;for(var H=new Array(l.length).fill(0),E=0;E<i.items.length;E++)for(var F=0;F<i.items[E].items.length;F++)H[F]+=i.items[E].items[F]*i.items[E].opacity.value;for(var M=0;M<l.length;M++)H[M]/=100;for(var S=new Array(l.length).fill(0),P=0;P<i.items.length;P++)c(i.items[P],S,H,t,e+3,a,o-6);u=t+a*r.range[0],s=t+a*r.range[1],h=s-u,b.start.x=u-m,b.start.y=e,b.start.width=m,b.start.height=o,b.end.x=s,b.end.y=e,b.end.width=m,b.end.height=o,n.save(),n.globalAlpha=.6,n.fillStyle=A.THEME.scrollBackground,n.beginPath(),n.moveTo(u-1,e),n.lineTo(u-1,e+o),n.arcTo(C,e+o,C,e+o-m,v),n.arcTo(C,e,u-1,e,v),n.closePath(),n.fill(),n.beginPath(),n.moveTo(s+1,e),n.lineTo(s+1,e+o),n.arcTo(C+T,e+o,C+T,e+o-m,v),n.arcTo(C+T,e,s,e,v),n.closePath(),n.fill(),n.restore(),n.save(),n.fillStyle=A.THEME.scrollSelector,n.beginPath(),n.rect(u,e,h,w),n.rect(u,e+o-w,h,w),n.fill(),n.beginPath();var Y=u;n.moveTo(Y,e),n.lineTo(Y,e+o),n.arcTo(Y-m,e+o,Y-m,e+o-m,p),n.arcTo(Y-m,e,Y,e,p),n.closePath(),n.fill(),n.beginPath(),n.moveTo(s,e),n.lineTo(s,e+o),n.arcTo(s+m,e+o,s+m,e+o-m,p),n.arcTo(s+m,e,s,e,p),n.closePath(),n.fill(),n.restore(),n.save(),n.beginPath(),n.fillStyle="#FFFFFF",n.rect(u-x,e+o/2-f,-y,d),n.rect(s+x,e+o/2-f,y,d),n.fill(),n.restore()};var e,n,a,r,i,l,c,u,s,h,d,f,m,g,v,p,y,x,b},t.percentage&&(e.drawZoomedChartFabric=function(t){return ft(t)})):(e.drawChartFabric=function(t){return nt(t)},e.drawControlFabric=function(t){return G(t)});return e}gt=function(t){xt.forEach(function(t){return t.update()})},vt=document.querySelector("html"),pt=!0,document.addEventListener("darkmode",function(){var t=vt.className.toLowerCase().split(" ").indexOf("dark")>-1;pt=!t,A.THEME=pt?ut:st,gt&&gt(pt)}),document.dispatchEvent(new Event("darkmode")),window.Graph=(yt=0,{render:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={container:t||document.body,index:yt++,title:n.title||void 0},r=wt(e),o=ct(a,e,r);return H.add(function(){o.render()}),xt.push(o),o}})}]);