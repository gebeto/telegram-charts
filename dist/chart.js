!function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=window.devicePixelRatio,o=4*i,l=2*o,c=343*i,u=16*i,s=2*u,d=2*Math.PI,h=Math.PI/100,m="".concat(11*i,"px sans-serif"),f=40*i,g=7*i,v=43*i,p=29*i,y=p/2,x=5*i,w=1*i,b=2*i,A={THEME:{}};var C,T,H=(C=[],T={time:0,add:function(t){C.push(t)},remove:function(t){var n=C.indexOf(t);n>-1&&C.splice(n,1)}},requestAnimationFrame(function t(n){T.time=n;for(var e=0;e<C.length;e++)C[e](n);requestAnimationFrame(t)}),T);function E(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var M=function(){function t(n,e,a){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=a,this.fromValue=n,this.toValue=n,this.value=n,this.startTime=0,this.duration=e,this.delay=0}var n,e,a;return n=t,(e=[{key:"playFrom",value:function(t,n){this.value=t,this.play(n)}},{key:"play",value:function(t){this.startTime=H.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(H.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var n=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*n,!0}}])&&E(n.prototype,e),a&&E(n,a),t}();function S(t,n){var e=n-t,a={};function r(n){return a[n]||(a[n]=(n-t)/e),a[n]}return r.de=function(n){return n*e+t},r.data={delta:e,min:t,max:n},r}function F(t,n,e){var a=t.createAnimation(n,300),r=t.createAnimation(e-n,300);function i(t){return(t-a.value)/r.value}return i.updateDelta=function(t,n){n,a.play(t),r.play(n-t)},i}var _=function(t,n){var e;return function(){var a=arguments;e||(t.apply(this,a),e=!0,setTimeout(function(){return e=!1},n))}};var Y=function(t,n){return t+n},k=function(t){return t===1/0||t===-1/0?0:t},L=function(t){return Math.min.apply(null,t)},B=function(t){return Math.max.apply(null,t)},P=function(t,n,e){return Math.min.apply(null,t.slice(n,1+e))},R=function(t,n,e){return Math.max.apply(null,t.slice(n,1+e))},X=function(t){return Math.min.apply(null,t.map(L))},U=function(t){return Math.max.apply(null,t.map(B))},D=function(t,n,e){return Math.min.apply(null,t.map(function(t){return P(t,n,e)}))},O=function(t,n,e){return Math.max.apply(null,t.map(function(t){return R(t,n,e)}))},j=function(t){var n,e,a=new Array(t[0].length).fill(0);for(n=0;n<t.length;n++)for(e=0;e<t[n].length;e++)a[e]+=t[n][e];return a};function N(t){t.canvas;var n=t.canvasBounds,e=function(t){var n={},e={},a={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){n[t]=[],e[t]=function(e,a){for(var r=0;r<n[t].length;r++)n[t][r](e,a)}}),{mouse:a,addListener:function(t,e){n[t].push(e)},dispatch:function(t,n){if(!e[t])throw Error("Unknown event");e[t](a,n)}}}(["move","enter","leave","down","up"]),a=e.mouse;function r(t){a.xRaw=t.clientX-n.left,a.yRaw=t.clientY-n.top,a.x=a.xRaw*i,a.y=a.yRaw*i,a.newXRaw=a.xRaw,a.newYRaw=a.yRaw,a.newX=a.x,a.newY=a.y,e.dispatch("down",t)}function o(t){a.newXRaw=t.clientX-n.left,a.newYRaw=t.clientY-n.top,a.newX=a.newXRaw*i,a.newY=a.newYRaw*i,e.dispatch("move",t)}function l(t){a.isHolding=!1,e.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",o),document.addEventListener("mouseup",l),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){o(t.touches[0])},{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l),document.addEventListener("selectstart",function(t){return!1}),{mouse:a,addListener:e.addListener}}function K(t,n,e){var a=t.map(function(t){var a={opacity:e.animator.createAnimation(1,300),key:t[0],scaling:{},enabled:!0,items:t.slice(1)};return n.y_scaled&&(a.scaling.color=n.colors[a.key],a.scaling.minHeight=k(L(a.items)),a.scaling.maxHeight=k(B(a.items)),a.scaling.minHeightAnim=e.animator.createAnimation(0,300),a.scaling.maxHeightAnim=e.animator.createAnimation(0,300),a.scaling.normY=F(e.animator,a.scaling.minHeight,a.scaling.maxHeight),a.scaling.normControlY=F(e.animator,a.scaling.minHeight,a.scaling.maxHeight),a.scaling.updateMinMax=function(t,n){a.scaling.minHeight=k(P(a.items,t,n)),a.scaling.maxHeight=k(R(a.items,t,n)),a.scaling.minHeightAnim.play(a.scaling.minHeight),a.scaling.maxHeightAnim.play(a.scaling.maxHeight),a.scaling.normY.updateDelta(a.scaling.minHeight,a.scaling.maxHeight)}),a});if(!n.y_scaled){var r={};n.percentage?function(t,n,e){var a=t.animator.createAnimation(0,300),r=t.animator.createAnimation(100,300);n.minHeight=0,n.maxHeight=100,n.minHeightAnim=a,n.maxHeightAnim=r,n.normY=F(t.animator,0,100),n.normControlY=F(t.animator,0,100),n.updateMinMax=function(t,n){}}(e,r):n.stacked?function(t,n,e){var a=e.map(function(t){return t.items}),r=k(B(j(a))),i=R(j(a),0,r),o=t.animator.createAnimation(0,300),l=t.animator.createAnimation(0,300);n.minHeight=0,n.maxHeight=i,n.minHeightAnim=o,n.maxHeightAnim=l,n.normY=F(t.animator,0,i),n.normControlY=F(t.animator,0,r),n.updateMinMax=function(t,a){var r=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=0;try{n.maxHeight=k(R(j(r),t,a))}catch(t){return}n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var i=k(B(j(r)));n.normControlY.updateDelta(0,i)}}(e,r,a):function(t,n,e){var a=e.map(function(t){return t.items}),r=k(X(a)),i=k(U(a)),o=X(a,r,i),l=U(a,r,i),c=t.animator.createAnimation(0,300),u=t.animator.createAnimation(0,300);n.minHeight=o,n.maxHeight=l,n.minHeightAnim=c,n.maxHeightAnim=u,n.normY=F(t.animator,o,l),n.normControlY=F(t.animator,r,i),n.updateMinMax=function(t,a){var r=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=k(D(r,t,a)),n.maxHeight=k(O(r,t,a)),n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var i=k(X(r)),o=k(U(r));n.normControlY.updateDelta(i,o)}}(e,r,a),a.forEach(function(t){t.scaling=r})}return{items:a}}function V(t){var n=t.config,e=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,l=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*i;return function(t,i,c,u,s){var d=t.key,h=t.items,m=t.opacity,f=t.scaling[o],g=m.value;if(g){g<1&&(n.shouldControlUpdate=!0);var v=h.length;e.save(),e.beginPath();var p=a.X(1)*u,y=c+s;e.moveTo(i+0,y-f(h[0])*s);for(var x=1;x<v;x++){var w=i+p*x,b=y-f(h[x])*s;b>y&&(n.shouldControlUpdate=!0),w<-p||w>e.canvas.width+p||e.lineTo(w,b)}e.lineWidth=l,e.strokeStyle=r[d],e.globalAlpha=g,e.lineJoin="round",e.stroke(),e.restore()}}}var W=0,z=1,I=2,J=3,q=10*i,G=q/2,Z=10*i,Q=2*Z,$=Z/2,tt=Z-Z/3,nt=2*i,et=(Z-nt)/2;function at(t,n){var e={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},a=e.controlsBounds,r=W,o=[n.range[0],n.range[1]],l=14*i,c=0,u=0,s=u-c,d=0,h=0;return t.mouse.addListener("move",function(e){if(r!==W){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var a=n.normalizeForControl(e.newX)-n.normalizeForControl(e.x),i=o[0]+a,l=o[1]+a;if(r===z)i>0?n.updateRange(i,o[1]):n.updateRange(0,o[1]);else if(r===I)l<1?n.updateRange(o[0],l):n.updateRange(o[0],1);else if(i>=0&&l<=1)n.updateRange(i,l);else if(l>1){var c=1-o[1];n.updateRange(o[0]+c,o[1]+c)}else if(i<0){var u=0-o[0];n.updateRange(o[0]+u,o[1]+u)}}}),t.mouse.addListener("down",function(e){var i=l,c=l,u=a.start,s=a.end;e.y>u.y&&e.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,o=[n.range[0],n.range[1]],e.newX>u.x-i&&e.newX<u.x+u.width&&e.newY>u.y-i&&e.newY<u.y+u.height+i?r=z:e.newX>s.x&&e.newX<s.x+s.width+c&&e.newY>s.y-c&&e.newY<s.y+s.height+c?r=I:e.newX>u.x+u.width&&e.newX<s.x&&e.newY>s.y-l&&e.newY<s.y+s.height+l&&(r=J))}),t.mouse.addListener("up",function(t){r=W}),e.updateControlBounds=function(t,n){d=n,h=t},e.renderControl=function(t,e,r,i,o){c=e+i*n.range[0],u=e+i*n.range[1],s=u-c,a.start.x=c-Z,a.start.y=r,a.start.width=Z,a.start.height=o,a.end.x=u,a.end.y=r,a.end.width=Z,a.end.height=o,t.save(),t.globalAlpha=.6,t.fillStyle=A.THEME.scrollBackground,t.beginPath(),t.moveTo(c-1,r),t.lineTo(c-1,r+o),t.arcTo(h,r+o,h,r+o-Z,$),t.arcTo(h,r,c-1,r,$),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u+1,r),t.lineTo(u+1,r+o),t.arcTo(h+d,r+o,h+d,r+o-Z,$),t.arcTo(h+d,r,u,r,$),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=A.THEME.scrollSelector,t.beginPath(),t.rect(c,r,s,w),t.rect(c,r+o-w,s,w),t.fill(),t.beginPath();var l=c;t.moveTo(l,r),t.lineTo(l,r+o),t.arcTo(l-Z,r+o,l-Z,r+o-Z,tt),t.arcTo(l-Z,r,l,r,tt),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u,r),t.lineTo(u,r+o),t.arcTo(u+Z,r+o,u+Z,r+o-Z,tt),t.arcTo(u+Z,r,u,r,tt),t.closePath(),t.fill(),t.restore(),t.save(),t.beginPath(),t.fillStyle="#FFFFFF",t.rect(c-et,r+o/2-G,-nt,q),t.rect(u+et,r+o/2-G,nt,q),t.fill(),t.restore()},e}function rt(t){var n=t.ctx,e=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=(t.xAxis,V(t,{lineWidth:1})),o=at(e,a),l=o.updateControlBounds,c=o.renderControl;return function(t,e,a,o){l(t,a),a-=Q,t+=Z;for(var u=0;u<r.items.length;u++)i(r.items[u],t,e+3,a,o-6);c(n,t,e,a,o)}}function it(t){var n=t.canvasBounds,e=t.config,a=t.ctx,r=t.norm,l=t.colors,c=(t.ys,t.normYKey),u=2*i,s=(e.mouse.mouse,e.popup),h=r.X(1),m=0,f=0,g=0,v=0,p=0,y=h*m,x=-1,w=-1,b=!1,C=!1,T=!0,H=!1,E=_(function(t,r){if(b=C,(!(C=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&b||"BUTTON"===r.target.tagName)&&(-1!==w&&(e.shouldChartUpdate=!0),w=-1,s.hide()),C&&r.target===a.canvas&&((C||!0===b&&!1===C)&&(x=w,t.newY>v&&t.newY<v+f&&(w=p-Math.round((m+g-t.newX)/y+1))<p&&w>=0?s.show(w):(w=-1,s.hide())),x!==w)){if(e.shouldChartUpdate=!0,-1!==w){var l=s.element.getBoundingClientRect(),c=(w*y+g)/i;c-l.width-o<0?T=!1:c+l.width+o>n.width/i&&(T=!0),s.element.style.left="".concat(T?c-l.width-o:c+o,"px")}x=w}},50);return e.mouse.addListener("move",function(t,n){H&&E(t,n)}),e.mouse.addListener("down",function(t,n){H=!0,E(t,n)}),e.mouse.addListener("up",function(t,n){H=!1}),function(t,n,e,i,s){m=i,f=s,g=n,v=e;var x=t.key,b=t.items,C=t.opacity,T=t.scaling[c],H=C.value;if(H&&(p=b.length,y=h*i,w>-1&&w<p)){var E=n+r.X(w)*i;a.save(),a.strokeStyle=A.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.1,a.beginPath(),a.moveTo(E,e),a.lineTo(E,e+s),a.stroke(),a.restore(),a.save(),a.beginPath(),a.globalAlpha=H,a.arc(E,e+s-T(b[w])*s,o,0,d),a.lineWidth=u,a.strokeStyle=l[x],a.fillStyle=A.THEME.background,a.fill(),a.stroke(),a.restore()}}}function ot(t,n){var e=Math.abs(t);if(e>1e9&&n)return(t/1e9).toFixed(2)+"B";if(e>1e6&&n)return(t/1e6).toFixed(2)+"M";if(e>1e3&&n)return(t/1e3).toFixed(1)+"K";if(e>1){for(var a=e.toFixed(0),r=t<0?"-":"",i=0;i<a.length;i++)r+=a.charAt(i),(a.length-1-i)%3==0&&(r+=" ");return r}return t.toString()}function lt(t){t.control;var n=t.ctx,e=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=e.textAlign||"left";return function(t,e,r,o,l,c,u){var s=Math.round(t.scaling.minHeightAnim.value),d=Math.round(t.scaling.maxHeightAnim.value),h=t.opacity.value,f=(l+l/6/2)/6,g=Math.ceil((d-s)/6);n.save(),n.beginPath(),n.fillStyle=t.scaling.color||A.THEME.gridLines,n.globalAlpha=u?h/2:t.scaling.color?.8:.5,n.font=m,n.textBaseline="bottom",n.textAlign=a;for(var v=0;v<6;v++){c&&(n.moveTo(e,r+l-v*f),n.lineTo(e+o,r+l-v*f));var p=ot(s+g*v,!0);n.fillText(p,e+3,r+l-v*f-x)}n.lineWidth=1*i,c&&(n.globalAlpha=.1,n.strokeStyle=A.THEME.gridLines,n.stroke()),n.restore()}}var ct=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function ut(t){t.config,t.control;var n=t.ctx,e=t.norm,a=(t.colors,e.X(1));return function(t,r,i,o,l){var c=t.length;n.save(),n.fillStyle=A.THEME.gridLines,n.font=m,n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.5;for(var u=o*a,s=(Math.floor(u),Math.ceil(f/u)),d=s+1,h=ct[s],g=ct[d],v=(u/(f/s)-1)*s,p=0;p<c;p+=h){var x=p%g;n.globalAlpha=0===x?.5:v>.5?.5:v;var w=r+e.X(p)*o,b=i+y;w<-f||w>n.canvas.width+f||n.fillText(t[p].dayString,w,b)}n.restore()}}function st(t,n,e){var a=document.createElement(n);return a.className=e,t&&t.appendChild(a),a}function dt(t,n,e,a,r,i){var o=a.key,l={enabled:!0},c=st(t,"button","chart__buttons-button");function u(){!0===l.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=e.colors[o]),a.enabled=l.enabled,a.opacity.play(l.enabled?1:0),i&&i(l.enabled)}return c.textContent=e.names[o],c.style.backgroundColor=e.colors[o],c.style.borderColor=e.colors[o],function(t,n,e){var a=null,r=!1;function i(){a=setTimeout(function(){e&&e(),r=!0},200)}function o(){clearTimeout(a)}t.addEventListener("click",function(){clearTimeout(a),r?r=!1:n&&n()}),t.addEventListener("mousedown",i),t.addEventListener("mousemove",o),t.addEventListener("touchstart",i),t.addEventListener("touchmove",o)}(c,function(){if(1===r.activeButtonsCount&&l.enabled)return c.className="chart__buttons-button error",void setTimeout(function(){c.className="chart__buttons-button"},140);l.enabled=!l.enabled,u()},function(){l.show(),r.hideAllExcept(c)}),l.hide=function(t){l.enabled&&t!==c&&(l.enabled=!1,u())},l.show=function(){l.enabled||(l.enabled=!0,u())},l}function ht(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function mt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ft=function(t,n,e){var o,l,d,h,m,f=t.container,g=t.index,p=n.title||t.title||"Chart #".concat(g+1),y={left:0,top:0},x=st(f,"div","chart"),w=function(t,n,e){var a=st(t,"div","chart__header"),r=st(a,"h2","chart__header-title");r.textContent=n;var i=st(a,"h3","chart__header-sub-title");return i.textContent=e,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){i.textContent=t}}}(x,p,"Hello world!"),b=st(x,"canvas","chart__canvas"),A=b.getContext("2d"),C=(h=[],{opts:m={active:!1},createAnimation:function(t,n,e){var a=new M(t,n,e);return h.push(a),a},removeAnimation:function(t){var n=h.indexOf(t);n>-1&&h.splice(n,1)},updateAnimations:function(){for(var t=h.length,n=!1,e=0;e<t;e++)n=h[e].update()||n;return m.active=n,n}}),T={index:g,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:C,mouse:N({config:T,canvas:b,canvasBounds:y}),maxHeight:0,minHeight:0,minHeightAnim:C.createAnimation(0,300),maxHeightAnim:C.createAnimation(0,300),startIndex:0,endIndex:0},H=n.colors;n.names,n.types,n.columns[0]=n.columns[0].map(function(t){return t.length?t:(n=t,e=new Date(n),{dayString:"".concat(a[e.getMonth()]," ").concat(e.getDate()),dateString:"".concat(r[e.getDay()],", ").concat(e.getDate()," ").concat(a[e.getMonth()]," ").concat(e.getFullYear()),dateStringTitle:"".concat(e.getDate()," ").concat(a[e.getMonth()]," ").concat(e.getFullYear()),date:e,timestamp:n});var n,e});var E=mt(n.columns),F=mt(E[0]),_=(F[0],F.slice(1)),Y=E.slice(1),k=K(Y,n,T);T.endIndex=_.length,w.setSubtitle("".concat(_[0].dateStringTitle," - ").concat(_[_.length-1].dateStringTitle)),T.popup=function(t,n,e,a){var r=st(t,"div","chart__popup");function i(t){var n,i=a.items.filter(function(t){return t.enabled}).map(function(n){return a=e.colors[n.key],r=e.names[n.key],i=n.items[t],'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(r,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(a,'">').concat(i,"</span>\n\t\t</span>\n\t");var a,r,i});i.length&&(r.innerHTML="\n\t\t\t".concat((n=e.columns[0][t+1].dateString,'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(n,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')),"\n\t\t\t").concat(i.join(""),"\n\t\t"))}return{element:r,update:i,show:function(t){i(t),r.style.opacity=1,r.style.visibility="visible"},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(x,0,n,k);var L=function(t,n,e,a,r){var i={activeButtonsCount:a.items.length,hideAllExcept:function(t){c.forEach(function(n){n.hide(t)})},hideAll:function(){c.forEach(function(t){t.hide()})}},o=st(t,"div","chart__buttons"),l={},c=a.items.map(function(t){return l[t[0]]=dt(o,0,e,t,i,function(t){i.activeButtonsCount+=t?1:-1,i.activeButtonsCount<1||r&&r()})});return l}(x,T.animator,n,k,function(){P()});T.buttons=L;var B={X:S(0,_.length-1)};function P(){var t=R.range[0],n=R.range[1],e=t*_.length,a=e<0?0:Math.floor(e),r=n*_.length,i=r>_.length?_.length:Math.ceil(r);k.items.forEach(function(t){return t.scaling.updateMinMax(a,i)}),w.setSubtitle("".concat(_[a].dateStringTitle," - ").concat(_[i-1].dateStringTitle))}var R={range:[.7,1],count:0,scale:0,updateRange:function(t,n){var e=n-t,a=_.length*e;a>5&&(R.count=Math.ceil(a),R.scale=e,R.range[0]=t,R.range[1]=n,P())},normalizeForControl:function(t){return d(t)}};function X(){var t=b.getBoundingClientRect(),n=t.width*i,e=t.height*i;y.width=n,y.height=c,y.left=t.left,y.right=t.right,y.top=t.top,y.bottom=t.bottom,y.x=t.x,y.y=t.y,o===n&&l===e||(T.shouldChartUpdate=!0,T.shouldControlUpdate=!0,d=S(s,y.width-s),o=b.width=y.width,l=b.height=c)}function U(t){X(),T.animator.updateAnimations()&&(T.shouldChartUpdate=!0),T.shouldChartUpdate&&(T.shouldChartUpdate=!1,A.clearRect(0,0,o,c-v),O(u,0,o-s,c-v)),T.shouldControlUpdate&&(T.shouldControlUpdate=!1,A.clearRect(0,c-v,o,v),j(u,c-v,o-s,v))}window.addEventListener("resize",X),R.updateRange(R.range[0],R.range[1]),X(),P();var D={config:T,control:R,ctx:A,norm:B,colors:H,ys:Y,buttons:L,xAxis:_,yAxis:k,canvasBounds:y,normYKey:"normY"},O=e.drawChartFabric(D),j=e.drawControlFabric(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.forEach(function(n){ht(t,n,e[n])})}return t}({},D,{normYKey:"normControlY"}));return U(),{render:U,control:R,update:function(){T.shouldChartUpdate=!0,T.shouldControlUpdate=!0}}},gt={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},vt={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"};function pt(t){var n=t.config,e=(t.control,t.ctx),a=t.norm,r=t.colors,i=t.normYKey,o=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s){var d=t.key,h=t.items,m=t.opacity,f=t.scaling[i],g=m.value;if(g){g<1&&(n.shouldControlUpdate=!0);var v=u-o*u,p=h.length;e.save(),e.beginPath();for(var y=0;y<p;y++){a[y]+=h[y]*g;var x=o*v,w=l+x*y,b=c+s-f(a[y])*s,A=f(h[y])*s*g,C=x-o;w<-x||w>e.canvas.width||e.rect(w,b,C,A>0?A:0)}e.fillStyle=r[d],e.strokeStyle=r[d],e.fill(),e.restore()}}}function yt(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),a=t.xAxis,r=ut(t),c=pt(t),u=function(t){var n=t.canvasBounds,e=t.config,a=t.ctx,r=t.norm,o=(t.colors,t.ys,t.normYKey),l=(e.mouse.mouse,e.popup),c=r.X(1),u=0,s=0,d=0,h=0,m=0,f=c*u,g=f/2,v=-1,p=-1,y=!1,x=!1,w=!0,b=!1,C=_(function(t,r){if(y=x,(!(x=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&y||"BUTTON"===r.target.tagName)&&(-1!==p&&(e.shouldChartUpdate=!0),p=-1,l.hide()),x&&r.target===a.canvas&&((x||!0===y&&!1===x)&&(v=p,t.newY>h&&t.newY<h+s&&(p=m-Math.ceil((u+d-t.newX)/f))<m&&p>=0?l.show(p):(p=-1,l.hide())),v!==p)){if(e.shouldChartUpdate=!0,-1!==p){var o=l.element.getBoundingClientRect(),c=(p*f+d)/i;c-o.width-f-g<0?w=!1:c+o.width+f+g>n.width/i&&(w=!0),l.element.style.left="".concat(w?c-o.width-g:c+f+g,"px")}v=p}},50);return e.mouse.addListener("move",function(t,n){b&&C(t,n)}),e.mouse.addListener("down",function(t,n){b=!0,C(t,n)}),e.mouse.addListener("up",function(t,n){b=!1}),function(t,n,e,i,l,v){u=l,s=v,d=e,h=i,t.key;var y=t.items,x=(t.opacity,t.scaling[o]),w=l-f;if(m=y.length,g=(f=c*w)/2,p>-1&&p<m){var b=e+r.X(p)*w;a.save(),a.strokeStyle=A.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.2,a.beginPath(),a.rect(b,i+v,f,-x(n[p])*v),a.fillStyle=A.THEME.gridLines,a.fill(),a.stroke(),a.restore()}}}(t),s=lt(t,{textAlign:"left"});return function(t,i,d,h){for(var m=t-d*n.range[0]/n.scale,f=d/n.scale,v=h-g-l,y=i+o+b,x=new Array(a.length).fill(0),w=0;w<e.items.length;w++)c(e.items[w],x,m,y,f,v-p);u(e.items[0],x,m,y,f,v-p),r(a,m,i+v-p,f,p),s(e.items[0],t,y,d,v-p,!0)}}function xt(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),a=(t.xAxis,function(t){var n=t.config,e=(t.control,t.ctx),a=t.norm,r=t.colors,i=(t.normYKey,t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.mouse.mouse,n.popup,a.X(1),0),o=0,l=0;return function(t,a,c,u,s,d,f,g){var v=t.key,p=(t.items,t.opacity.value);if(p){p<1&&(n.shouldControlUpdate=!0),i=Math.min(f/2,g/2),o=s+f/2,l=d+g/2,e.save(),e.beginPath(),e.fillStyle="red",e.moveTo(o,l);var y=h*c*2,x=h*u*2;e.arc(o,l,i,y,x),e.moveTo(o,l),e.fillStyle=r[v],e.fill(),e.restore(),e.save(),e.fillStyle="#fff",e.textAlign="center",e.globalAlpha=p,e.textBaseline="middle",e.font=m;var w=y+(x-y)/2,b=o+Math.cos(w)*(i/2),A=l+Math.sin(w)*(i/2);e.fillText(a.toFixed(0)+"%",b,A),e.restore()}}}(t));return function(t,r,i,c){n.range[0];for(var u=c-g-l,s=r+o+b,d=e.items.reduce(function(t,n){return t+n.items.reduce(Y,0)*n.opacity.value},0)/100,h=0,m=0;m<e.items.length;m++){var f=e.items[m].items.reduce(Y,0)/d*e.items[m].opacity.value;a(e.items[m],f,h,h+=f,t,s,i,u-p)}}}function wt(t){var n=t.config,e=(t.control,t.ctx),a=t.norm,r=t.colors,i=t.normYKey,o=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s,d){var h=t.key,m=t.items,f=t.opacity,g=(0,t.scaling[i])(1),v=f.value;if(v){v<1&&(n.shouldControlUpdate=!0);var p=m.length;e.save(),e.beginPath();var y=o*s,x=new Array(p).fill(0),w=l[0],b=u+d-g*Math.round(a[0]/w)*d;e.moveTo(c,b),x[0]=c+0*y;for(var A=1;A<p;A++){var C=Math.round(a[A]/l[A]);x[A]=c+y*A;var T=u+d-g*C*d;e.lineTo(x[A],T)}for(var H=p-1;H>=0;H--){a[H]+=m[H]*v;var E=u+d-g*Math.round(a[H]/l[H])*d;e.lineTo(x[H],E)}e.closePath(),e.fillStyle=r[h],e.fill(),e.restore()}}}var bt,At,Ct,Tt,Ht=[];function Et(t){var n={drawChartFabric:null,drawControlFabric:null},e=Object.keys(t.types).map(function(n){return t.types[n]}).filter(function(t){return"x"!==t});if(!e.length)throw new Error("DataSet error. No columns for chart");if(e.length>50)throw new Error("DataSet error. Supported up to 50 columns on one graph.");var a=e[0];if(t.y_scaled){if("line"!==a||2!==e.length)throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.");n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.ys,a=t.yAxis,r=t.xAxis,i=lt(t,{textAlign:"left"}),c=lt(t,{textAlign:"right"}),u=ut(t),s=V(t),d=it(t);return function(t,h,m,f){var v=t-m*n.range[0]/n.scale,y=m/n.scale,x=f-g-l,w=h+o+b;u(r,v,h+x-p,y,p);var A=!0;a.items[0].enabled&&(i(a.items[0],t,w,m,x-p,A),A=!1),a.items[1].enabled&&(c(a.items[1],t+m,w,-m,x-p,A),A=!1);for(var C=0;C<a.items.length;C++)s(a.items[C],v,w,y,x-p);for(var T=0;T<e.length;T++)d(a.items[T],v,w,y,x-p)}}(t)},n.drawControlFabric=function(t){return rt(t)}}else"bar"==a?(n.drawChartFabric=function(t){return yt(t)},n.drawControlFabric=function(t){return e=(n=t).ctx,a=n.config,n.canvasBounds,r=n.control,n.ys,i=n.yAxis,o=n.xAxis,l=pt(n),c=at(a,r),u=c.updateControlBounds,s=c.renderControl,function(t,n,a,r){u(t,a),a-=Q,t+=Z;for(var c=new Array(o.length).fill(0),d=0;d<i.items.length;d++)l(i.items[d],c,t,n+3,a,r-6);s(e,t,n,a,r)};var n,e,a,r,i,o,l,c,u,s}):"area"==a?(n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),a=t.xAxis,r=ut(t),i=wt(t),c=it(t),u=lt(t,{textAlign:"left"});return function(t,s,d,h){for(var m=t-d*n.range[0]/n.scale,f=d/n.scale,v=h-g-l,y=s+o+b,x=new Array(a.length).fill(0),w=0;w<e.items.length;w++)for(var A=0;A<e.items[w].items.length;A++)x[A]+=e.items[w].items[A]*e.items[w].opacity.value;for(var C=0;C<a.length;C++)x[C]/=100;for(var T=new Array(a.length).fill(0),H=0;H<e.items.length;H++)i(e.items[H],T,x,m,y,f,v-p),c(e.items[H],m,y,f,v-p);r(a,m,s+v-p,f,p),u(e.items[0],t,y,d,v-p,!0)}}(t)},n.drawControlFabric=function(t){return e=(n=t).ctx,a=n.config,n.canvasBounds,r=n.control,n.ys,i=n.yAxis,o=n.xAxis,l=wt(n),c=at(a,r),u=c.updateControlBounds,s=c.renderControl,function(t,n,a,r){u(t,a),a-=Q,t+=Z;for(var c=new Array(o.length).fill(0),d=0;d<i.items.length;d++)for(var h=0;h<i.items[d].items.length;h++)c[h]+=i.items[d].items[h]*i.items[d].opacity.value;for(var m=0;m<o.length;m++)c[m]/=100;for(var f=new Array(o.length).fill(0),g=0;g<i.items.length;g++)l(i.items[g],f,c,t,n+3,a,r-6);s(e,t,n,a,r)};var n,e,a,r,i,o,l,c,u,s},t.percentage&&(n.drawZoomedChartFabric=function(t){return xt(t)})):(n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.ys,a=t.yAxis,r=t.xAxis,i=lt(t,{textAlign:"left"}),c=ut(t),u=V(t),s=it(t);return function(t,d,h,m){var f=t-h*n.range[0]/n.scale,v=h/n.scale,y=m-g-l,x=d+o+b;c(r,f,d+y-p,v,p),i(a.items[0],t,x,h,y-p,!0);for(var w=0;w<a.items.length;w++)u(a.items[w],f,x,v,y-p);for(var A=0;A<e.length;A++)s(a.items[A],f,x,v,y-p)}}(t)},n.drawControlFabric=function(t){return rt(t)});return n}bt=function(t){Ht.forEach(function(t){return t.update()})},At=document.querySelector("html"),Ct=!0,document.addEventListener("darkmode",function(){var t=At.className.toLowerCase().split(" ").indexOf("dark")>-1;Ct=!t,A.THEME=Ct?gt:vt,bt&&bt(Ct)}),document.dispatchEvent(new Event("darkmode")),window.Graph=(Tt=0,{render:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={container:t||document.body,index:Tt++,title:e.title||void 0},r=Et(n),i=ft(a,n,r);return H.add(function(){i.render()}),Ht.push(i),i}})}]);