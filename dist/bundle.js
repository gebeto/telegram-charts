!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=2)}([function(t,e,n){t.exports=n.p+"arrow.svg"},function(t,e,n){t.exports=n.p+"check.svg"},function(t,e,n){"use strict";n.r(e);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=window.devicePixelRatio,i=4*o,l=2*i,c=343*o,u=16*o,s=2*u,d=2*Math.PI,h="".concat(11*o,"px Arial"),f=40*o,m=7*o,g=43*o,v=29*o,p=v/2,y=5*o,w=1*o,x=2*o,b={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},A={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"},T={THEME:b};var C,H,E=(C=[],H={time:0,add:function(t){C.push(t)},remove:function(t){var e=C.indexOf(t);e>-1&&C.splice(e,1)}},requestAnimationFrame(function t(e){H.time=e;for(var n=0;n<C.length;n++)C[n](e);requestAnimationFrame(t)}),H);function F(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var _=function(){function t(e,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=a,this.fromValue=e,this.toValue=e,this.value=e,this.startTime=0,this.duration=n,this.delay=0}var e,n,a;return e=t,(n=[{key:"playFrom",value:function(t,e){this.value=t,this.play(e)}},{key:"play",value:function(t){this.startTime=E.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(E.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var e=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*e,!0}}])&&F(e.prototype,n),a&&F(e,a),t}();function M(t,e){var n=e-t,a={};function r(e){return a[e]||(a[e]=(e-t)/n),a[e]}return r.de=function(e){return e*n+t},r.data={delta:n,min:t,max:e},r}function S(t,e,n){var a=t.createAnimation(e,300),r=t.createAnimation(n-e,300);function o(t){return(t-a.value)/r.value}return o.updateDelta=function(t,e){e,a.play(t),r.play(e-t)},o}var Y=function(t,e){var n;return function(){var a=arguments;n||(t.apply(this,a),n=!0,setTimeout(function(){return n=!1},e))}};function R(t){t.canvas;var e=t.canvasBounds,n=function(t){var e={},n={},a={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){e[t]=[],n[t]=function(n,a){for(var r=0;r<e[t].length;r++)e[t][r](n,a)}}),{mouse:a,addListener:function(t,n){e[t].push(n)},dispatch:function(t,e){if(!n[t])throw Error("Unknown event");n[t](a,e)}}}(["move","enter","leave","down","up"]),a=n.mouse;function r(t){a.xRaw=t.clientX-e.left,a.yRaw=t.clientY-e.top,a.x=a.xRaw*o,a.y=a.yRaw*o,a.newXRaw=a.xRaw,a.newYRaw=a.yRaw,a.newX=a.x,a.newY=a.y,n.dispatch("down",t)}function i(t){a.newXRaw=t.clientX-e.left,a.newYRaw=t.clientY-e.top,a.newX=a.newXRaw*o,a.newY=a.newYRaw*o,n.dispatch("move",t)}function l(t){a.isHolding=!1,n.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l),document.addEventListener("selectstart",function(t){return!1}),{mouse:a,addListener:n.addListener}}function k(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,i=t.normYKey,l=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*o;return function(t,o,c,u,s){var d=t.key,h=t.items,f=t.opacity,m=t.scaling[i],g=f.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=h.length;n.save(),n.beginPath(),n.moveTo(o+0,c+s-m(h[0])*s);for(var p=1;p<v;p++){var y=o+a.X(p)*u,w=c+s-m(h[p])*s;n.lineTo(y,w)}n.lineWidth=l,n.strokeStyle=r[d],n.globalAlpha=g,n.lineJoin="round",n.stroke(),n.restore()}}}var P=0,L=1,X=2,j=3;function O(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=k(t,{lineWidth:1}),l=0,c=0,u=c-l,s=10*o,d=s/2,h=10*o,f=2*h,m=h/2,g=h-h/3,v=2*o,p=(h-v)/2,y=P,x=14*o,b=[a.range[0],a.range[1]],A={start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}};return n.mouse.addListener("move",function(t){if(y!==P){n.shouldChartUpdate=!0,n.shouldControlUpdate=!0;var e=a.normalizeForControl(t.newX)-a.normalizeForControl(t.x),r=b[0]+e,o=b[1]+e;if(y===L)r>0?a.updateRange(r,b[1]):a.updateRange(0,b[1]);else if(y===X)o<1?a.updateRange(b[0],o):a.updateRange(b[0],1);else if(r>=0&&o<=1)a.updateRange(r,o);else if(o>1){var i=1-b[1];a.updateRange(b[0]+i,b[1]+i)}else if(r<0){var l=0-b[0];a.updateRange(b[0]+l,b[1]+l)}}}),n.mouse.addListener("down",function(t){var e=x,r=x,o=A.start,i=A.end;t.y>o.y&&t.y<o.y+o.height&&(n.shouldChartUpdate=!0,n.shouldControlUpdate=!0,b=[a.range[0],a.range[1]],t.newX>o.x-e&&t.newX<o.x+o.width&&t.newY>o.y-e&&t.newY<o.y+o.height+e?y=L:t.newX>i.x&&t.newX<i.x+i.width+r&&t.newY>i.y-r&&t.newY<i.y+i.height+r?y=X:t.newX>o.x+o.width&&t.newX<i.x&&t.newY>i.y-x&&t.newY<i.y+i.height+x&&(y=j))}),n.mouse.addListener("up",function(t){y=P}),function(t,n,o,y){var x=o,b=t;o-=f,t+=h;for(var C=0;C<r.items.length;C++)i(r.items[C],t,n+3,o,y-6);l=t+o*a.range[0],c=t+o*a.range[1],u=c-l,A.start.x=l-h,A.start.y=n,A.start.width=h,A.start.height=y,A.end.x=c,A.end.y=n,A.end.width=h,A.end.height=y,e.save(),e.globalAlpha=.6,e.fillStyle=T.THEME.scrollBackground,e.beginPath(),e.moveTo(l-1,n),e.lineTo(l-1,n+y),e.arcTo(b,n+y,b,n+y-h,m),e.arcTo(b,n,l-1,n,m),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c+1,n),e.lineTo(c+1,n+y),e.arcTo(b+x,n+y,b+x,n+y-h,m),e.arcTo(b+x,n,c,n,m),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=T.THEME.scrollSelector,e.beginPath(),e.rect(l,n,u,w),e.rect(l,n+y-w,u,w),e.fill(),e.beginPath();var H=l;e.moveTo(H,n),e.lineTo(H,n+y),e.arcTo(H-h,n+y,H-h,n+y-h,g),e.arcTo(H-h,n,H,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c,n),e.lineTo(c,n+y),e.arcTo(c+h,n+y,c+h,n+y-h,g),e.arcTo(c+h,n,c,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(l-p,n+y/2-d,-v,s),e.rect(c+p,n+y/2-d,v,s),e.fill(),e.restore()}}function U(t){var e=t.canvasBounds,n=t.config,a=t.ctx,r=t.norm,l=t.colors,c=(t.ys,t.normYKey),u=2*o,s=(n.mouse.mouse,n.popup),h=r.X(1),f=0,m=0,g=0,v=0,p=0,y=h*f,w=-1,x=-1,b=!1,A=!1,C=!0,H=!1,E=Y(function(t,r){if(b=A,(!(A=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&b||"BUTTON"===r.target.tagName)&&(-1!==x&&(n.shouldChartUpdate=!0),x=-1,s.hide()),A&&r.target===a.canvas&&((A||!0===b&&!1===A)&&(w=x,t.newY>v&&t.newY<v+m&&(x=p-Math.round((f+g-t.newX)/y+1))<p&&x>=0?s.show(x-1):(x=-1,s.hide())),w!==x)){if(n.shouldChartUpdate=!0,-1!==x){var l=s.element.getBoundingClientRect(),c=(x*y+g)/o;c-l.width-i<0?C=!1:c+l.width+i>e.width/o&&(C=!0),s.element.style.left="".concat(C?c-l.width-i:c+i,"px")}w=x}},50);return n.mouse.addListener("move",function(t,e){H&&E(t,e)}),n.mouse.addListener("down",function(t,e){H=!0,E(t,e)}),n.mouse.addListener("up",function(t,e){H=!1}),function(t,e,n,o,s){f=o,m=s,g=e,v=n;var w=t.key,b=t.items,A=t.opacity,C=t.scaling[c],H=A.value;if(H&&(p=b.length,y=h*o,x>-1&&x<p)){var E=e+r.X(x)*o;a.save(),a.strokeStyle=T.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.1,a.beginPath(),a.moveTo(E,n),a.lineTo(E,n+s),a.stroke(),a.restore(),a.save(),a.beginPath(),a.globalAlpha=H,a.arc(E,n+s-C(b[x])*s,i,0,d),a.lineWidth=u,a.strokeStyle=l[w],a.fillStyle=T.THEME.background,a.fill(),a.stroke(),a.restore()}}}function D(t){t.control;var e=t.ctx,n=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=n.textAlign||"left";return function(t,n,r,i,l,c,u){var s=Math.round(t.scaling.minHeightAnim.value),d=Math.round(t.scaling.maxHeightAnim.value),f=t.opacity.value,m=(l+l/6/2)/6,g=Math.ceil((d-s)/6);e.save(),e.beginPath(),e.fillStyle=T.THEME.gridLines,e.globalAlpha=u?f/2:.5,e.font=h,e.textBaseline="bottom",e.textAlign=a;for(var v=0;v<6;v++)c&&(e.moveTo(n,r+l-v*m),e.lineTo(n+i,r+l-v*m)),e.fillText(s+g*v,n+3,r+l-v*m-y);e.lineWidth=1*o,c&&(e.globalAlpha=.1,e.strokeStyle=T.THEME.gridLines,e.stroke()),e.restore()}}var B=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function N(t){t.config,t.control;var e=t.ctx,n=t.norm,a=(t.colors,n.X(1));return function(t,r,o,i,l){var c=t.length;e.save(),e.fillStyle=T.THEME.gridLines,e.font=h,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var u=i*a,s=(Math.floor(u),Math.ceil(f/u)),d=s+1,m=B[s],g=B[d],v=(u/(f/s)-1)*s,y=0;y<c;y+=m){var w=y%g;e.globalAlpha=0===w?.5:v>.5?.5:v;var x=r+n.X(y)*i,b=o+p;e.fillText(t[y].dayString,x,b)}e.restore()}}function z(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=D(t,{textAlign:"left"}),c=N(t),u=k(t),s=U(t);return function(t,d,h,f){var g=t-h*e.range[0]/e.scale,p=h/e.scale,y=f-m-l,w=d+i+x;c(r,g,d+y-v,p,v),o(a.items[0],t,w,h,y-v,!0);for(var b=0;b<a.items.length;b++)u(a.items[b],g,w,p,y-v);for(var A=0;A<n.length;A++)s(a.items[A],g,w,p,y-v)}}function I(t,e,n){var a=document.createElement(e);return a.className=n,t&&t.appendChild(a),a}var V=n(0),W=n.n(V);function K(t){return'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(t,'</span>\n\t\t\t<span class="chart__popup-header-icon"><img src="').concat(W.a,'" /></span>\n\t\t</strong>\n\t')}function J(t,e,n){return'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(e,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(t,'">').concat(n,"</span>\n\t\t</span>\n\t")}n(1);function q(t,e,n,a,r){var o={activeButtonsCount:a.items.length},i=I(t,"div","chart__buttons"),l={},c=a.items.map(function(t){return l[t[0]]=function(t,e,n,a,r,o){var i=a.key,l={enabled:!0},c=I(t,"button","chart__buttons-button");c.textContent=n.names[i],c.style.backgroundColor=n.colors[i],c.style.borderColor=n.colors[i];var u=null,s=!1;function d(){u=setTimeout(function(){r.resetAll(),s=!0},200)}function h(){clearTimeout(u)}function f(){!0===l.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=n.colors[i]),a.enabled=l.enabled,a.opacity.play(l.enabled?1:0),o&&o(l.enabled)}return c.addEventListener("click",function(){if(clearTimeout(u),s)s=!1;else{if(1===r.activeButtonsCount&&l.enabled)return c.className="chart__buttons-button error",void setTimeout(function(){c.className="chart__buttons-button"},140);l.enabled=!l.enabled,f()}}),c.addEventListener("mousedown",d),c.addEventListener("mousemove",h),c.addEventListener("touchstart",d),c.addEventListener("touchmove",h),l.reset=function(){l.enabled||(l.enabled=!0,f())},l}(i,0,n,t,o,function(t){o.activeButtonsCount+=t?1:-1,o.activeButtonsCount<1||r&&r()})});return o.resetAll=function(){c.forEach(function(t){t.reset()})},l}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){Q(t,e,n[e])})}return t}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(t){return t===1/0||t===-1/0?0:t},tt=function(t){return Math.min.apply(null,t)},et=function(t){return Math.max.apply(null,t)},nt=function(t,e,n){return Math.min.apply(null,t.slice(e,1+n))},at=function(t,e,n){return Math.max.apply(null,t.slice(e,1+n))},rt=function(t){return Math.min.apply(null,t.map(tt))},ot=function(t){return Math.max.apply(null,t.map(et))},it=function(t,e,n){return Math.min.apply(null,t.map(function(t){return nt(t,e,n)}))},lt=function(t,e,n){return Math.max.apply(null,t.map(function(t){return at(t,e,n)}))},ct=function(t){var e,n,a=new Array(t[0].length).fill(0);for(e=0;e<t.length;e++)for(n=0;n<t[e].length;n++)a[n]+=t[e][n];return a};var ut=function(t,e,n){var i,l,d,h,f,m={left:0,top:0},v=I(window.CONTAINER,"div","chart"),p=function(t,e,n){var a=I(t,"div","chart__header"),r=I(a,"h2","chart__header-title");r.textContent=e;var o=I(a,"h3","chart__header-sub-title");return o.textContent=n,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){o.textContent=t}}}(v,"Chart #".concat(n+1),"Hello world!"),y=I(v,"canvas","chart__canvas"),w=y.getContext("2d"),x=(h=[],{opts:f={active:!1},createAnimation:function(t,e,n){var a=new _(t,e,n);return h.push(a),a},removeAnimation:function(t){var e=h.indexOf(t);e>-1&&h.splice(e,1)},updateAnimations:function(){for(var t=h.length,e=!1,n=0;n<t;n++)e=h[n].update()||e;return f.active=e,e}}),b={index:n,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:x,mouse:R({config:b,canvas:y,canvasBounds:m}),maxHeight:0,minHeight:0,minHeightAnim:x.createAnimation(0,300),maxHeightAnim:x.createAnimation(0,300),startIndex:0,endIndex:0},A=e.colors;e.names,e.types,e.columns[0]=e.columns[0].map(function(t){return t.length?t:(e=t,n=new Date(e),{dayString:"".concat(a[n.getMonth()]," ").concat(n.getDate()),dateString:"".concat(r[n.getDay()],", ").concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),dateStringTitle:"".concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),date:n,timestamp:e});var e,n});var T=Z(e.columns),C=Z(T[0]),H=(C[0],C.slice(1)),E=T.slice(1),F=function(t,e,n){var a=t.map(function(t){var a=n.animator.createAnimation(1,300),r={key:t[0],items:t.slice(1),enabled:!0,opacity:a,scaling:{}};return e.y_scaled&&(r.scaling.minHeight=$(tt(r.items)),r.scaling.maxHeight=$(et(r.items)),r.scaling.minHeightAnim=n.animator.createAnimation(0,300),r.scaling.maxHeightAnim=n.animator.createAnimation(0,300),r.scaling.normY=S(n.animator,r.scaling.minHeight,r.scaling.maxHeight),r.scaling.normControlY=S(n.animator,r.scaling.minHeight,r.scaling.maxHeight),r.scaling.updateMinMax=function(t,e){r.scaling.minHeight=$(nt(r.items,t,e)),r.scaling.maxHeight=$(at(r.items,t,e)),r.scaling.minHeightAnim.play(r.scaling.minHeight),r.scaling.maxHeightAnim.play(r.scaling.maxHeight),r.scaling.normY.updateDelta(r.scaling.minHeight,r.scaling.maxHeight)}),r});if(!e.y_scaled){var r=a.filter(function(t){return t.enabled}).map(function(t){return t.items}),o={};if(e.stacked){var i=$(et(ct(r))),l=at(ct(r),0,i),c=n.animator.createAnimation(0,300),u=n.animator.createAnimation(0,300);o.minHeight=0,o.maxHeight=l,o.minHeightAnim=c,o.maxHeightAnim=u,o.normY=S(n.animator,0,l),o.normControlY=S(n.animator,0,i),o.updateMinMax=function(t,e){var n=a.filter(function(t){return t.enabled}).map(function(t){return t.items});o.minHeight=0;try{o.maxHeight=$(at(ct(n),t,e))}catch(t){return}o.minHeightAnim.play(o.minHeight),o.maxHeightAnim.play(o.maxHeight),o.normY.updateDelta(o.minHeight,o.maxHeight);var r=$(et(ct(n)));o.normControlY.updateDelta(0,r)}}else{var s=$(rt(r)),d=$(ot(r)),h=rt(r,s,d),f=ot(r,s,d),m=n.animator.createAnimation(0,300),g=n.animator.createAnimation(0,300);o.minHeight=h,o.maxHeight=f,o.minHeightAnim=m,o.maxHeightAnim=g,o.normY=S(n.animator,h,f),o.normControlY=S(n.animator,s,d),o.updateMinMax=function(t,e){var n=a.filter(function(t){return t.enabled}).map(function(t){return t.items});o.minHeight=$(it(n,t,e)),o.maxHeight=$(lt(n,t,e)),o.minHeightAnim.play(o.minHeight),o.maxHeightAnim.play(o.maxHeight),o.normY.updateDelta(o.minHeight,o.maxHeight);var r=$(rt(n)),i=$(ot(n));o.normControlY.updateDelta(r,i)}}a.forEach(function(t){t.scaling=o})}return{items:a}}(E,e,b);b.endIndex=H.length,p.setSubtitle("".concat(H[0].dateStringTitle," - ").concat(H[H.length-1].dateStringTitle)),b.popup=function(t,e,n,a){var r=I(t,"div","chart__popup");return{element:r,update:function(t){var e=a.items.filter(function(t){return t.enabled}).map(function(e){return J(n.colors[e.key],n.names[e.key],e.items[t+1])});e.length&&(r.innerHTML="\n\t\t\t\t".concat(K(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(e.join(""),"\n\t\t\t"))},show:function(t){var e=a.items.filter(function(t){return t.enabled}).map(function(e){return J(n.colors[e.key],n.names[e.key],e.items[t+1])});e.length&&(r.innerHTML="\n\t\t\t\t".concat(K(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(e.join(""),"\n\t\t\t"),r.style.opacity=1,r.style.visibility="visible")},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(v,0,e,F);var Y=q(v,b.animator,e,F,function(){P()});b.buttons=Y;var k={X:M(0,H.length-1)};function P(){var t=L.range[0],e=L.range[1],n=t*H.length,a=n<0?0:Math.floor(n),r=e*H.length,o=r>H.length?H.length:Math.ceil(r);F.items.forEach(function(t){return t.scaling.updateMinMax(a,o)}),p.setSubtitle("".concat(H[a].dateStringTitle," - ").concat(H[o-1].dateStringTitle))}var L={range:[.7,1],count:0,scale:0,updateRange:function(t,e){var n=e-t,a=H.length*n;a>5&&(L.count=Math.ceil(a),L.scale=n,L.range[0]=t,L.range[1]=e,P())},normalizeForControl:function(t){return d(t)}};function X(){var t=y.getBoundingClientRect(),e=t.width*o,n=t.height*o;m.width=e,m.height=c,m.left=t.left,m.right=t.right,m.top=t.top,m.bottom=t.bottom,m.x=t.x,m.y=t.y,i===e&&l===n||(b.shouldChartUpdate=!0,b.shouldControlUpdate=!0,d=M(s,m.width-s),i=y.width=m.width,l=y.height=c)}function j(t){X(),b.animator.updateAnimations()&&(b.shouldChartUpdate=!0),b.shouldChartUpdate&&(b.shouldChartUpdate=!1,w.clearRect(0,0,i,c-g),D(u,0,i-s,c-g)),b.shouldControlUpdate&&(b.shouldControlUpdate=!1,w.clearRect(0,c-g,i,g),B(u,c-g,i-s,g))}window.addEventListener("resize",X),L.updateRange(L.range[0],L.range[1]),X(),P();var U={config:b,control:L,ctx:w,norm:k,colors:A,ys:E,buttons:Y,xAxis:H,yAxis:F,canvasBounds:m,normYKey:"normY"},D=t.drawChartFabric?t.drawChartFabric(U):z(U),B=t.drawControlFabric?t.drawControlFabric(G({},U,{normYKey:"normControlY"})):O(G({},U,{normYKey:"normControlY"}));return j(),{render:j,control:L,update:function(){b.shouldChartUpdate=!0,b.shouldControlUpdate=!0}}};function st(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s){var d=t.key,h=t.items,f=t.opacity,m=t.scaling[o],g=f.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=h.length;n.save(),n.beginPath();for(var p=1;p<v;p++){a[p]+=h[p]*g;var y=i*u,w=l+y*p-y,x=c+s-m(a[p])*s;n.rect(w,x,y,m(h[p])*s*g)}n.fillStyle=r[d],n.strokeStyle=r[d],n.fill(),n.restore()}}}var dt=0,ht=1,ft=2,mt=3;function gt(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=t.xAxis,l=st(t),c=0,u=0,s=u-c,d=10*o,h=d/2,f=10*o,m=2*f,g=f/2,v=f-f/3,p=2*o,y=(f-p)/2,x=dt,b=14*o,A=[a.range[0],a.range[1]],C={start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}};return n.mouse.addListener("move",function(t){if(x!==dt){n.shouldChartUpdate=!0,n.shouldControlUpdate=!0;var e=a.normalizeForControl(t.newX)-a.normalizeForControl(t.x),r=A[0]+e,o=A[1]+e;if(x===ht)r>0?a.updateRange(r,A[1]):a.updateRange(0,A[1]);else if(x===ft)o<1?a.updateRange(A[0],o):a.updateRange(A[0],1);else if(r>=0&&o<=1)a.updateRange(r,o);else if(o>1){var i=1-A[1];a.updateRange(A[0]+i,A[1]+i)}else if(r<0){var l=0-A[0];a.updateRange(A[0]+l,A[1]+l)}}}),n.mouse.addListener("down",function(t){var e=b,r=b,o=C.start,i=C.end;t.y>o.y&&t.y<o.y+o.height&&(n.shouldChartUpdate=!0,n.shouldControlUpdate=!0,A=[a.range[0],a.range[1]],t.newX>o.x-e&&t.newX<o.x+o.width&&t.newY>o.y-e&&t.newY<o.y+o.height+e?x=ht:t.newX>i.x&&t.newX<i.x+i.width+r&&t.newY>i.y-r&&t.newY<i.y+i.height+r?x=ft:t.newX>o.x+o.width&&t.newX<i.x&&t.newY>i.y-b&&t.newY<i.y+i.height+b&&(x=mt))}),n.mouse.addListener("up",function(t){x=dt}),function(t,n,o,x){var b=o,A=t;o-=m,t+=f;for(var H=new Array(i.length).fill(0),E=0;E<r.items.length;E++)l(r.items[E],H,t,n+3,o,x-6);c=t+o*a.range[0],u=t+o*a.range[1],s=u-c,C.start.x=c-f,C.start.y=n,C.start.width=f,C.start.height=x,C.end.x=u,C.end.y=n,C.end.width=f,C.end.height=x,e.save(),e.globalAlpha=.6,e.fillStyle=T.THEME.scrollBackground,e.beginPath(),e.moveTo(c-1,n),e.lineTo(c-1,n+x),e.arcTo(A,n+x,A,n+x-f,g),e.arcTo(A,n,c-1,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u+1,n),e.lineTo(u+1,n+x),e.arcTo(A+b,n+x,A+b,n+x-f,g),e.arcTo(A+b,n,u,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=T.THEME.scrollSelector,e.beginPath(),e.rect(c,n,s,w),e.rect(c,n+x-w,s,w),e.fill(),e.beginPath();var F=c;e.moveTo(F,n),e.lineTo(F,n+x),e.arcTo(F-f,n+x,F-f,n+x-f,v),e.arcTo(F-f,n,F,n,v),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u,n),e.lineTo(u,n+x),e.arcTo(u+f,n+x,u+f,n+x-f,v),e.arcTo(u+f,n,u,n,v),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(c-y,n+x/2-h,-p,d),e.rect(u+y,n+x/2-h,p,d),e.fill(),e.restore()}}function vt(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=t.xAxis,r=N(t),o=st(t),c=D(t,{textAlign:"left"});return function(t,u,s,d){for(var h=t-s*e.range[0]/e.scale,f=s/e.scale,g=d-m-l,p=u+i+x,y=new Array(a.length).fill(0),w=0;w<n.items.length;w++)o(n.items[w],y,h,p,f,g-v);r(a,h,u+g-v,f,v),c(n.items[0],t,p,s,g-v,!0)}}window.CONTAINER=document.querySelector("#container");var pt=[];!function(t,e){var n=!0,a=I(t,"button","change-theme");function r(){a.textContent="Switch to ".concat(n?"Night":"Day"," Mode"),e&&e(n)}a.addEventListener("click",function(){n=!n,r()}),r()}(window.CONTAINER,function(t){console.log(t),T.THEME=t?b:A,document.body.className=t?"day":"night",pt.forEach(function(t){return t.update()})});var yt=[{drawChartFabric:function(t){return z(t)},drawControlFabric:function(t){return O(t)}},{drawChartFabric:function(t){return function(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=D(t,{textAlign:"left"}),c=D(t,{textAlign:"right"}),u=N(t),s=k(t),d=U(t);return function(t,h,f,g){var p=t-f*e.range[0]/e.scale,y=f/e.scale,w=g-m-l,b=h+i+x;u(r,p,h+w-v,y,v);var A=!0;a.items[0].enabled&&(o(a.items[0],t,b,f,w-v,A),A=!1),a.items[1].enabled&&(c(a.items[1],t+f,b,-f,w-v,A),A=!1);for(var T=0;T<a.items.length;T++)s(a.items[T],p,b,y,w-v);for(var C=0;C<n.length;C++)d(a.items[C],p,b,y,w-v)}}(t)},drawControlFabric:function(t){return O(t)}},{drawChartFabric:function(t){return vt(t)},drawControlFabric:function(t){return gt(t)}},{drawChartFabric:function(t){return vt(t)},drawControlFabric:function(t){return gt(t)}}];Promise.all([fetch("assets/stage_2_data/1/overview.json").then(function(t){return t.json()}),fetch("assets/stage_2_data/2/overview.json").then(function(t){return t.json()}),fetch("assets/stage_2_data/3/overview.json").then(function(t){return t.json()}),fetch("assets/stage_2_data/4/overview.json").then(function(t){return t.json()})]).then(function(t){(pt=t.map(function(t,e){return ut(yt[e],t,e)})).forEach(function(t){E.add(function(){t.render()})})})}]);