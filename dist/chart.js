!function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=window.devicePixelRatio,i=4*o,l=2*i,c=343*o,u=16*o,s=2*u,d=2*Math.PI,h=Math.PI/100,m="".concat(11*o,"px sans-serif"),f=40*o,g=7*o,v=43*o,p=29*o,y=p/2,x=5*o,w=1*o,b=2*o,A={THEME:{}};var C,T,H=(C=[],T={time:0,add:function(t){C.push(t)},remove:function(t){var n=C.indexOf(t);n>-1&&C.splice(n,1)}},requestAnimationFrame(function t(n){T.time=n;for(var e=0;e<C.length;e++)C[e](n);requestAnimationFrame(t)}),T);function E(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=r,this.fromValue=n,this.toValue=n,this.value=n,this.startTime=0,this.duration=e,this.delay=0}var n,e,r;return n=t,(e=[{key:"playFrom",value:function(t,n){this.value=t,this.play(n)}},{key:"play",value:function(t){this.startTime=H.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(H.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var n=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*n,!0}}])&&E(n.prototype,e),r&&E(n,r),t}();function S(t,n){var e=n-t,r={};function a(n){return r[n]||(r[n]=(n-t)/e),r[n]}return a.de=function(n){return n*e+t},a.data={delta:e,min:t,max:n},a}function F(t,n,e){var r=t.createAnimation(n,300),a=t.createAnimation(e-n,300);function o(t){return(t-r.value)/a.value}return o.updateDelta=function(t,n){n,r.play(t),a.play(n-t)},o}var _=function(t,n){var e;return function(){var r=arguments;e||(t.apply(this,r),e=!0,setTimeout(function(){return e=!1},n))}},Y=function(t,n){var e;return function(){var r=arguments,a=this;e||(e=!0,setTimeout(function(){t.apply(a,r),e=!1},n))}};var k=function(t,n){return t+n},L=function(t){return t===1/0||t===-1/0?0:t},B=function(t){return Math.min.apply(null,t)},P=function(t){return Math.max.apply(null,t)},R=function(t,n,e){return Math.min.apply(null,t.slice(n,1+e))},X=function(t,n,e){return Math.max.apply(null,t.slice(n,1+e))},U=function(t){return Math.min.apply(null,t.map(B))},O=function(t){return Math.max.apply(null,t.map(P))},D=function(t,n,e){return Math.min.apply(null,t.map(function(t){return R(t,n,e)}))},j=function(t,n,e){return Math.max.apply(null,t.map(function(t){return X(t,n,e)}))},N=function(t){var n,e,r=new Array(t[0].length).fill(0);for(n=0;n<t.length;n++)for(e=0;e<t[n].length;e++)r[e]+=t[n][e];return r};function z(t){t.canvas;var n=t.canvasBounds,e=function(t){var n={},e={},r={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){n[t]=[],e[t]=function(e,r){for(var a=0;a<n[t].length;a++)n[t][a](e,r)}}),{mouse:r,addListener:function(t,e){n[t].push(e)},dispatch:function(t,n){if(!e[t])throw Error("Unknown event");e[t](r,n)}}}(["move","enter","leave","down","up"]),r=e.mouse;function a(t){r.xRaw=t.clientX-n.left,r.yRaw=t.clientY-n.top,r.x=r.xRaw*o,r.y=r.yRaw*o,r.newXRaw=r.xRaw,r.newYRaw=r.yRaw,r.newX=r.x,r.newY=r.y,e.dispatch("down",t)}function i(t){r.newXRaw=t.clientX-n.left,r.newYRaw=t.clientY-n.top,r.newX=r.newXRaw*o,r.newY=r.newYRaw*o,e.dispatch("move",t)}function l(t){r.isHolding=!1,e.dispatch("up",t)}return document.addEventListener("mousedown",a),document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),document.addEventListener("touchstart",function(t){a(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l),document.addEventListener("selectstart",function(t){return!1}),{mouse:r,addListener:e.addListener}}function K(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function V(t,n,e){var r=t.map(function(t){var r=K(t),a=r[0],o=r.slice(1),i={opacity:e.animator.createAnimation(1,300),key:a,scaling:{},enabled:!0,items:o};return n.y_scaled&&(i.scaling.color=n.colors[i.key],i.scaling.minHeight=L(B(i.items)),i.scaling.maxHeight=L(P(i.items)),i.scaling.minHeightAnim=e.animator.createAnimation(0,300),i.scaling.maxHeightAnim=e.animator.createAnimation(0,300),i.scaling.normY=F(e.animator,i.scaling.minHeight,i.scaling.maxHeight),i.scaling.normControlY=F(e.animator,i.scaling.minHeight,i.scaling.maxHeight),i.scaling.updateMinMax=function(t,n){i.scaling.minHeight=L(R(i.items,t,n)),i.scaling.maxHeight=L(X(i.items,t,n)),i.scaling.minHeightAnim.play(i.scaling.minHeight),i.scaling.maxHeightAnim.play(i.scaling.maxHeight),i.scaling.normY.updateDelta(i.scaling.minHeight,i.scaling.maxHeight)}),i});if(!n.y_scaled){var a={};n.percentage?function(t,n,e){var r=t.animator.createAnimation(0,300),a=t.animator.createAnimation(100,300);n.minHeight=0,n.maxHeight=100,n.minHeightAnim=r,n.maxHeightAnim=a,n.normY=F(t.animator,0,100),n.normControlY=F(t.animator,0,100),n.updateMinMax=function(t,n){}}(e,a):n.stacked?function(t,n,e){var r=e.map(function(t){return t.items}),a=L(P(N(r))),o=X(N(r),0,a),i=t.animator.createAnimation(0,300),l=t.animator.createAnimation(0,300);n.minHeight=0,n.maxHeight=o,n.minHeightAnim=i,n.maxHeightAnim=l,n.normY=F(t.animator,0,o),n.normControlY=F(t.animator,0,a),n.updateMinMax=_(function(t,r){var a=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=0;try{n.maxHeight=L(X(N(a),t,r))}catch(t){return}n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var o=L(P(N(a)));n.normControlY.updateDelta(0,o)},100)}(e,a,r):function(t,n,e){var r=e.map(function(t){return t.items}),a=L(U(r)),o=L(O(r)),i=U(r,a,o),l=O(r,a,o),c=t.animator.createAnimation(0,300),u=t.animator.createAnimation(0,300);n.minHeight=i,n.maxHeight=l,n.minHeightAnim=c,n.maxHeightAnim=u,n.normY=F(t.animator,i,l),n.normControlY=F(t.animator,a,o),n.updateMinMax=_(function(t,r){var a=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=L(D(a,t,r)),n.maxHeight=L(j(a,t,r)),n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var o=L(U(a)),i=L(O(a));n.normControlY.updateDelta(o,i)},50)}(e,a,r),r.forEach(function(t){t.scaling=a})}return{items:r}}function W(t){var n=t.config,e=(t.control,t.ctx),r=t.norm,a=t.colors,i=t.normYKey,l=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*o;return function(t,o,c,u,s){var d=t.key,h=t.items,m=t.opacity,f=t.scaling[i],g=m.value;if(g){g<1&&(n.shouldControlUpdate=!0);var v=h.length;e.save(),e.beginPath();var p=r.X(1)*u,y=c+s;e.moveTo(o+0,y-f(h[0])*s);for(var x=1;x<v;x++){var w=o+p*x,b=y-f(h[x])*s;b>y&&(n.shouldControlUpdate=!0),w<-p||w>e.canvas.width+p||e.lineTo(w,b)}e.lineWidth=l,e.strokeStyle=a[d],e.globalAlpha=g,e.lineJoin="round",e.stroke(),e.restore()}}}var I=0,J=1,q=2,Z=3,G=10*o,Q=G/2,$=10*o,tt=2*$,nt=$/2,et=$-$/3,rt=2*o,at=($-rt)/2;function ot(t,n){var e={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},r=e.controlsBounds,a=I,i=[n.range[0],n.range[1]],l=14*o,c=0,u=0,s=u-c,d=0,h=0;return t.mouse.addListener("move",function(e){if(a!==I){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var r=n.normalizeForControl(e.newX)-n.normalizeForControl(e.x),o=i[0]+r,l=i[1]+r;if(a===J)o>0?n.updateRange(o,i[1]):n.updateRange(0,i[1]);else if(a===q)l<1?n.updateRange(i[0],l):n.updateRange(i[0],1);else if(o>=0&&l<=1)n.updateRange(o,l);else if(l>1){var c=1-i[1];n.updateRange(i[0]+c,i[1]+c)}else if(o<0){var u=0-i[0];n.updateRange(i[0]+u,i[1]+u)}}}),t.mouse.addListener("down",function(e){var o=l,c=l,u=r.start,s=r.end;e.y>u.y&&e.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,i=[n.range[0],n.range[1]],e.newX>u.x-o&&e.newX<u.x+u.width&&e.newY>u.y-o&&e.newY<u.y+u.height+o?a=J:e.newX>s.x&&e.newX<s.x+s.width+c&&e.newY>s.y-c&&e.newY<s.y+s.height+c?a=q:e.newX>u.x+u.width&&e.newX<s.x&&e.newY>s.y-l&&e.newY<s.y+s.height+l&&(a=Z))}),t.mouse.addListener("up",function(t){a=I}),e.updateControlBounds=function(t,n){d=n,h=t},e.renderControl=function(t,e,a,o,i){c=e+o*n.range[0],u=e+o*n.range[1],s=u-c,r.start.x=c-$,r.start.y=a,r.start.width=$,r.start.height=i,r.end.x=u,r.end.y=a,r.end.width=$,r.end.height=i,t.save(),t.globalAlpha=.6,t.fillStyle=A.THEME.scrollBackground,t.beginPath(),t.moveTo(c-1,a),t.lineTo(c-1,a+i),t.arcTo(h,a+i,h,a+i-$,nt),t.arcTo(h,a,c-1,a,nt),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u+1,a),t.lineTo(u+1,a+i),t.arcTo(h+d,a+i,h+d,a+i-$,nt),t.arcTo(h+d,a,u,a,nt),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=A.THEME.scrollSelector,t.beginPath(),t.rect(c,a,s,w),t.rect(c,a+i-w,s,w),t.fill(),t.beginPath();var l=c;t.moveTo(l,a),t.lineTo(l,a+i),t.arcTo(l-$,a+i,l-$,a+i-$,et),t.arcTo(l-$,a,l,a,et),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u,a),t.lineTo(u,a+i),t.arcTo(u+$,a+i,u+$,a+i-$,et),t.arcTo(u+$,a,u,a,et),t.closePath(),t.fill(),t.restore(),t.save(),t.beginPath(),t.fillStyle="#FFFFFF",t.rect(c-at,a+i/2-Q,-rt,G),t.rect(u+at,a+i/2-Q,rt,G),t.fill(),t.restore()},e}function it(t){var n=t.ctx,e=t.config,r=(t.canvasBounds,t.control),a=(t.ys,t.yAxis),o=(t.xAxis,W(t,{lineWidth:1})),i=ot(e,r),l=i.updateControlBounds,c=i.renderControl;return function(t,e,r,i){l(t,r),r-=tt,t+=$;for(var u=0;u<a.items.length;u++)o(a.items[u],t,e+3,r,i-6);c(n,t,e,r,i)}}function lt(t){var n=t.canvasBounds,e=t.config,r=t.ctx,a=t.norm,l=t.colors,c=(t.ys,t.normYKey),u=2*o,s=(e.mouse.mouse,e.popup),h=a.X(1),m=0,f=0,g=0,v=0,p=0,y=h*m,x=-1,w=-1,b=!1,C=!1,T=!0,H=!1,E=_(function(t,a){if(b=C,(!(C=r.canvas===a.target||r.canvas.nextSibling.contains(a.target))&&b||"BUTTON"===a.target.tagName)&&(-1!==w&&(e.shouldChartUpdate=!0),w=-1,s.hide()),C&&a.target===r.canvas&&((C||!0===b&&!1===C)&&(x=w,t.newY>v&&t.newY<v+f&&(w=p-Math.round((m+g-t.newX)/y+1))<p&&w>=0?s.show(w):(w=-1,s.hide())),x!==w)){if(e.shouldChartUpdate=!0,-1!==w){var l=s.element.getBoundingClientRect(),c=(w*y+g)/o;c-l.width-i<0?T=!1:c+l.width+i>n.width/o&&(T=!0),s.element.style.left="".concat(T?c-l.width-i:c+i,"px")}x=w}},50);return e.mouse.addListener("move",function(t,n){H&&E(t,n)}),e.mouse.addListener("down",function(t,n){H=!0,E(t,n)}),e.mouse.addListener("up",function(t,n){H=!1}),function(t,n,e,o,s){m=o,f=s,g=n,v=e;var x=t.key,b=t.items,C=t.opacity,T=t.scaling[c],H=C.value;if(H&&(p=b.length,y=h*o,w>-1&&w<p)){var E=n+a.X(w)*o;r.save(),r.strokeStyle=A.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.1,r.beginPath(),r.moveTo(E,e),r.lineTo(E,e+s),r.stroke(),r.restore(),r.save(),r.beginPath(),r.globalAlpha=H,r.arc(E,e+s-T(b[w])*s,i,0,d),r.lineWidth=u,r.strokeStyle=l[x],r.fillStyle=A.THEME.background,r.fill(),r.stroke(),r.restore()}}}function ct(t,n){var e=Math.abs(t);if(e>1e9&&n)return(t/1e9).toFixed(2)+"B";if(e>1e6&&n)return(t/1e6).toFixed(2)+"M";if(e>1e3&&n)return(t/1e3).toFixed(1)+"K";if(e>1){for(var r=e.toFixed(0),a=t<0?"-":"",o=0;o<r.length;o++)a+=r.charAt(o),(r.length-1-o)%3==0&&(a+=" ");return a}return t.toString()}function ut(t){t.control;var n=t.ctx,e=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=e.textAlign||"left";return function(t,e,a,i,l,c,u){var s=Math.round(t.scaling.minHeightAnim.value),d=Math.round(t.scaling.maxHeightAnim.value),h=t.opacity.value,f=(l+l/6/2)/6,g=Math.ceil((d-s)/6);n.save(),n.beginPath(),n.fillStyle=t.scaling.color||A.THEME.gridLines,n.globalAlpha=u?h/2:t.scaling.color?.8:.5,n.font=m,n.textBaseline="bottom",n.textAlign=r;for(var v=0;v<6;v++){c&&(n.moveTo(e,a+l-v*f),n.lineTo(e+i,a+l-v*f));var p=ct(s+g*v,!0);n.fillText(p,e+3,a+l-v*f-x)}n.lineWidth=1*o,c&&(n.globalAlpha=.1,n.strokeStyle=A.THEME.gridLines,n.stroke()),n.restore()}}var st=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function dt(t){t.config,t.control;var n=t.ctx,e=t.norm,r=(t.colors,e.X(1));return function(t,a,o,i,l){var c=t.length;n.save(),n.fillStyle=A.THEME.gridLines,n.font=m,n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.5;for(var u=i*r,s=(Math.floor(u),Math.ceil(f/u)),d=s+1,h=st[s],g=st[d],v=(u/(f/s)-1)*s,p=0;p<c;p+=h){var x=p%g;n.globalAlpha=0===x?.5:v>.5?.5:v;var w=a+e.X(p)*i,b=o+y;w<-f||w>n.canvas.width+f||n.fillText(t[p].dayString,w,b)}n.restore()}}function ht(t,n,e){var r=document.createElement(n);return r.className=e,t&&t.appendChild(r),r}function mt(t,n,e,r,a,o){var i=r.key,l={enabled:!0},c=ht(t,"button","chart__buttons-button");function u(){!0===l.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=e.colors[i]),r.enabled=l.enabled,r.opacity.play(l.enabled?1:0),o&&o(l.enabled)}return c.textContent=e.names[i],c.style.backgroundColor=e.colors[i],c.style.borderColor=e.colors[i],function(t,n,e){var r=null,a=!1;function o(){r=setTimeout(function(){e&&e(),a=!0},200)}function i(){clearTimeout(r)}t.addEventListener("click",function(){clearTimeout(r),a?a=!1:n&&n()}),t.addEventListener("mousedown",o),t.addEventListener("mousemove",i),t.addEventListener("touchstart",o),t.addEventListener("touchmove",i)}(c,function(){if(1===a.activeButtonsCount&&l.enabled)return c.className="chart__buttons-button error",void setTimeout(function(){c.className="chart__buttons-button"},140);l.enabled=!l.enabled,u()},function(){l.show(),a.hideAllExcept(c)}),l.hide=function(t){l.enabled&&t!==c&&(l.enabled=!1,u())},l.show=function(){l.enabled||(l.enabled=!0,u())},l}function ft(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function gt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var vt=function(t,n,e){var i,l,d,h,m,f=t.container,g=t.index,p=n.title||t.title||"Chart #".concat(g+1),y={left:0,top:0},x=ht(f,"div","chart"),w=function(t,n,e){var r=ht(t,"div","chart__header"),a=ht(r,"h2","chart__header-title");a.textContent=n;var o=ht(r,"h3","chart__header-sub-title");return o.textContent=e,{setTitle:function(t){a.textContent=t},setSubtitle:function(t){o.textContent=t}}}(x,p,"Hello world!"),b=ht(x,"canvas","chart__canvas"),A=b.getContext("2d"),C=(h=[],{opts:m={active:!1},createAnimation:function(t,n,e){var r=new M(t,n,e);return h.push(r),r},removeAnimation:function(t){var n=h.indexOf(t);n>-1&&h.splice(n,1)},updateAnimations:function(){for(var t=h.length,n=!1,e=0;e<t;e++)n=h[e].update()||n;return m.active=n,n}}),T={index:g,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:C,mouse:z({config:T,canvas:b,canvasBounds:y}),maxHeight:0,minHeight:0,minHeightAnim:C.createAnimation(0,300),maxHeightAnim:C.createAnimation(0,300),startIndex:0,endIndex:0,popup:{}},H=n.colors;n.names,n.types,n.columns[0]=n.columns[0].map(function(t){return t.length?t:(n=t,e=new Date(n),{dayString:"".concat(r[e.getMonth()]," ").concat(e.getDate()),dateString:"".concat(a[e.getDay()],", ").concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),dateStringTitle:"".concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),date:e,timestamp:n});var n,e});var E=gt(n.columns),F=gt(E[0]),_=(F[0],F.slice(1)),k=E.slice(1),L=V(k,n,T);T.endIndex=_.length,w.setSubtitle("".concat(_[0].dateStringTitle," - ").concat(_[_.length-1].dateStringTitle)),T.popup=function(t,n,e,r){var a=ht(t,"div","chart__popup");function o(t){var n,o=r.items.filter(function(t){return t.enabled}).map(function(n){return r=e.colors[n.key],a=e.names[n.key],o=n.items[t],'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(a,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(r,'">').concat(o,"</span>\n\t\t</span>\n\t");var r,a,o});o.length&&(a.innerHTML="\n\t\t\t".concat((n=e.columns[0][t+1].dateString,'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(n,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')),"\n\t\t\t").concat(o.join(""),"\n\t\t"))}return{element:a,update:o,show:function(t){o(t),a.style.opacity=1,a.style.visibility="visible"},hide:function(){a.style.opacity=0,a.style.visibility="hidden"}}}(x,0,n,L);var B=function(t,n,e,r,a){var o={activeButtonsCount:r.items.length,hideAllExcept:function(t){c.forEach(function(n){n.hide(t)})},hideAll:function(){c.forEach(function(t){t.hide()})}},i=ht(t,"div","chart__buttons"),l={},c=r.items.map(function(t){return l[t[0]]=mt(i,0,e,t,o,function(t){o.activeButtonsCount+=t?1:-1,o.activeButtonsCount<1||a&&a()})});return l}(x,T.animator,n,L,function(){R()});T.buttons=B;var P={X:S(0,_.length-1)},R=Y(function(){var t=X.range[0],n=X.range[1],e=t*_.length,r=e<0?0:Math.floor(e),a=n*_.length,o=a>_.length?_.length:Math.ceil(a);L.items.forEach(function(t){return t.scaling.updateMinMax(r,o)}),w.setSubtitle("".concat(_[r].dateStringTitle," - ").concat(_[o-1].dateStringTitle))},100),X={range:[.7,1],count:0,scale:0,updateRange:function(t,n){var e=n-t,r=_.length*e;r>5&&(X.count=Math.ceil(r),X.scale=e,X.range[0]=t,X.range[1]=n,R())},normalizeForControl:function(t){return d(t)}};function U(){var t=b.getBoundingClientRect(),n=t.width*o,e=t.height*o;y.width=n,y.height=c,y.left=t.left,y.right=t.right,y.top=t.top,y.bottom=t.bottom,y.x=t.x,y.y=t.y,i===n&&l===e||(T.shouldChartUpdate=!0,T.shouldControlUpdate=!0,d=S(s,y.width-s),i=b.width=y.width,l=b.height=c)}function O(t){U(),T.animator.updateAnimations()&&(T.shouldChartUpdate=!0),T.shouldChartUpdate&&(T.shouldChartUpdate=!1,A.clearRect(0,0,i,c-v),T.zoomed&&N?N(u,0,i-s,c-v):j(u,0,i-s,c-v)),T.shouldControlUpdate&&(T.shouldControlUpdate=!1,A.clearRect(0,c-v,i,v),K(u,c-v,i-s,v))}T.popup.element.addEventListener("click",function(){N&&(T.zoomed=!T.zoomed,T.popup.hide(),T.shouldChartUpdate=!0)}),window.addEventListener("resize",U),X.updateRange(X.range[0],X.range[1]),U(),R();var D={config:T,control:X,ctx:A,norm:P,colors:H,ys:k,buttons:B,xAxis:_,yAxis:L,canvasBounds:y,normYKey:"normY"},j=e.drawChartFabric(D),N=e.drawZoomedChartFabric&&e.drawZoomedChartFabric(D),K=e.drawControlFabric(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){ft(t,n,e[n])})}return t}({},D,{normYKey:"normControlY"}));return O(),{render:O,control:X,update:function(){T.shouldChartUpdate=!0,T.shouldControlUpdate=!0}}},pt={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},yt={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"};function xt(t){var n=t.config,e=(t.control,t.ctx),r=t.norm,a=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],r.X(1));return function(t,r,l,c,u,s){var d=t.key,h=t.items,m=t.opacity,f=t.scaling[o],g=m.value;if(g){g<1&&(n.shouldControlUpdate=!0);var v=u-i*u,p=h.length;e.save(),e.beginPath();for(var y=0;y<p;y++){r[y]+=h[y]*g;var x=i*v,w=l+x*y,b=c+s-f(r[y])*s,A=f(h[y])*s*g,C=x-i;w<-x||w>e.canvas.width||e.rect(w,b,C,A>0?A:0)}e.fillStyle=a[d],e.strokeStyle=a[d],e.fill(),e.restore()}}}function wt(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),r=t.xAxis,a=xt(t),i=function(t){var n=t.canvasBounds,e=t.config,r=t.ctx,a=t.norm,i=(t.colors,t.ys,t.normYKey),l=(e.mouse.mouse,e.popup),c=a.X(1),u=0,s=0,d=0,h=0,m=0,f=c*u,g=f/2,v=-1,p=-1,y=!1,x=!1,w=!0,b=!1,C=_(function(t,a){if(y=x,(!(x=r.canvas===a.target||r.canvas.nextSibling.contains(a.target))&&y||"BUTTON"===a.target.tagName)&&(-1!==p&&(e.shouldChartUpdate=!0),p=-1,l.hide()),x&&a.target===r.canvas&&((x||!0===y&&!1===x)&&(v=p,t.newY>h&&t.newY<h+s&&(p=m-Math.ceil((u+d-t.newX)/f))<m&&p>=0?l.show(p):(p=-1,l.hide())),v!==p)){if(e.shouldChartUpdate=!0,-1!==p){var i=l.element.getBoundingClientRect(),c=(p*f+d)/o;c-i.width-f-g<0?w=!1:c+i.width+f+g>n.width/o&&(w=!0),l.element.style.left="".concat(w?c-i.width-g:c+f+g,"px")}v=p}},50);return e.mouse.addListener("move",function(t,n){b&&C(t,n)}),e.mouse.addListener("down",function(t,n){b=!0,C(t,n)}),e.mouse.addListener("up",function(t,n){b=!1}),function(t,n,e,o,l,v){u=l,s=v,d=e,h=o,t.key;var y=t.items,x=(t.opacity,t.scaling[i]),w=l-f;if(m=y.length,g=(f=c*w)/2,p>-1&&p<m){var b=e+a.X(p)*w;r.save(),r.strokeStyle=A.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.2,r.beginPath(),r.rect(b,o+v,f,-x(n[p])*v),r.fillStyle=A.THEME.gridLines,r.fill(),r.stroke(),r.restore()}}}(t),c=dt(t),u=ut(t,{textAlign:"left"});return function(t,o,s,d){for(var h=s*n.range[0],m=(Math.floor(r.length*n.range[0]),Math.ceil(r.length*(n.range[1]-n.range[0])),t-h/n.scale),f=s/n.scale,v=d-g-l,y=o+b,x=new Array(r.length).fill(0),w=0;w<e.items.length;w++)a(e.items[w],x,m,y,f,v-p);i(e.items[0],x,m,y,f,v-p),c(r,m,o+v-p,f,p),u(e.items[0],t,y,s,v-p,!0)}}function bt(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),r=(t.xAxis,function(t){var n=t.config,e=(t.control,t.ctx),r=t.norm,a=t.colors,o=(t.normYKey,t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.mouse.mouse,n.popup,r.X(1),0),i=0,l=0;return function(t,r,c,u,s,d,f,g){var v=t.key,p=(t.items,t.opacity.value);if(p){p<1&&(n.shouldControlUpdate=!0),o=Math.min(f/2,g/2),i=s+f/2,l=d+g/2,e.save(),e.beginPath(),e.fillStyle="red",e.moveTo(i,l);var y=h*c*2,x=h*u*2;e.arc(i,l,o,y,x),e.moveTo(i,l),e.fillStyle=a[v],e.fill(),e.restore(),e.save(),e.fillStyle="#fff",e.textAlign="center",e.globalAlpha=p,e.textBaseline="middle",e.font=m;var w=y+(x-y)/2,b=i+Math.cos(w)*(o/2),A=l+Math.sin(w)*(o/2);e.fillText(r.toFixed(0)+"%",b,A),e.restore()}}}(t));return function(t,a,o,c){n.range[0];for(var u=c-g-l,s=a+i+b,d=e.items.reduce(function(t,n){return t+n.items.reduce(k,0)*n.opacity.value},0)/100,h=0,m=0;m<e.items.length;m++){var f=e.items[m].items.reduce(k,0)/d*e.items[m].opacity.value;r(e.items[m],f,h,h+=f,t,s,o,u-p)}}}function At(t){var n=t.config,e=(t.control,t.ctx),r=t.norm,a=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],r.X(1));return function(t,r,l,c,u,s,d){var h=t.key,m=t.items,f=t.opacity,g=(0,t.scaling[o])(1),v=f.value;if(v){v<1&&(n.shouldControlUpdate=!0);var p=m.length;e.save(),e.beginPath();var y=i*s,x=new Array(p).fill(0),w=l[0],b=u+d-g*Math.round(r[0]/w)*d;e.moveTo(c,b),x[0]=c+0*y;for(var A=1;A<p;A++){var C=Math.round(r[A]/l[A]);x[A]=c+y*A;var T=u+d-g*C*d;e.lineTo(x[A],T)}for(var H=p-1;H>=0;H--){r[H]+=m[H]*v;var E=u+d-g*Math.round(r[H]/l[H])*d;e.lineTo(x[H],E)}e.closePath(),e.fillStyle=a[h],e.fill(),e.restore()}}}var Ct,Tt,Ht,Et,Mt=[];function St(t){var n={drawChartFabric:null,drawControlFabric:null},e=Object.keys(t.types).map(function(n){return t.types[n]}).filter(function(t){return"x"!==t});if(!e.length)throw new Error("DataSet error. No columns for chart");if(e.length>50)throw new Error("DataSet error. Supported up to 50 columns on one graph.");var r=e[0];if(t.y_scaled){if("line"!==r||2!==e.length)throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.");n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.ys,r=t.yAxis,a=t.xAxis,o=ut(t,{textAlign:"left"}),c=ut(t,{textAlign:"right"}),u=dt(t),s=W(t),d=lt(t);return function(t,h,m,f){var v=t-m*n.range[0]/n.scale,y=m/n.scale,x=f-g-l,w=h+i+b;u(a,v,h+x-p,y,p);var A=!0;r.items[0].enabled&&(o(r.items[0],t,w,m,x-p,A),A=!1),r.items[1].enabled&&(c(r.items[1],t+m,w,-m,x-p,A),A=!1);for(var C=0;C<r.items.length;C++)s(r.items[C],v,w,y,x-p);for(var T=0;T<e.length;T++)d(r.items[T],v,w,y,x-p)}}(t)},n.drawControlFabric=function(t){return it(t)}}else"bar"==r?(n.drawChartFabric=function(t){return wt(t)},n.drawControlFabric=function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,a=n.control,n.ys,o=n.yAxis,i=n.xAxis,l=xt(n),c=ot(r,a),u=c.updateControlBounds,s=c.renderControl,function(t,n,r,a){u(t,r),r-=tt,t+=$;for(var c=new Array(i.length).fill(0),d=0;d<o.items.length;d++)l(o.items[d],c,t,n+3,r,a-6);s(e,t,n,r,a)};var n,e,r,a,o,i,l,c,u,s}):"area"==r?(n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=(t.ys,t.yAxis),r=t.xAxis,a=dt(t),o=At(t),c=lt(t),u=ut(t,{textAlign:"left"});return function(t,s,d,h){for(var m=t-d*n.range[0]/n.scale,f=d/n.scale,v=h-g-l,y=s+i+b,x=new Array(r.length).fill(0),w=0;w<e.items.length;w++)for(var A=0;A<e.items[w].items.length;A++)x[A]+=e.items[w].items[A]*e.items[w].opacity.value;for(var C=0;C<r.length;C++)x[C]/=100;for(var T=new Array(r.length).fill(0),H=0;H<e.items.length;H++)o(e.items[H],T,x,m,y,f,v-p),c(e.items[H],m,y,f,v-p);a(r,m,s+v-p,f,p),u(e.items[0],t,y,d,v-p,!0)}}(t)},n.drawControlFabric=function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,a=n.control,n.ys,o=n.yAxis,i=n.xAxis,l=At(n),c=ot(r,a),u=c.updateControlBounds,s=c.renderControl,function(t,n,r,a){u(t,r),r-=tt,t+=$;for(var c=new Array(i.length).fill(0),d=0;d<o.items.length;d++)for(var h=0;h<o.items[d].items.length;h++)c[h]+=o.items[d].items[h]*o.items[d].opacity.value;for(var m=0;m<i.length;m++)c[m]/=100;for(var f=new Array(i.length).fill(0),g=0;g<o.items.length;g++)l(o.items[g],f,c,t,n+3,r,a-6);s(e,t,n,r,a)};var n,e,r,a,o,i,l,c,u,s},t.percentage&&(n.drawZoomedChartFabric=function(t){return bt(t)})):(n.drawChartFabric=function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.ys,r=t.yAxis,a=t.xAxis,o=W(t),c=lt(t),u=dt(t),s=ut(t,{textAlign:"left"});return function(t,d,h,m){var f=t-h*n.range[0]/n.scale,v=h/n.scale,y=m-g-l,x=d+i+b;u(a,f,d+y-p,v,p),s(r.items[0],t,x,h,y-p,!0);for(var w=0;w<r.items.length;w++)o(r.items[w],f,x,v,y-p);for(var A=0;A<e.length;A++)c(r.items[A],f,x,v,y-p)}}(t)},n.drawControlFabric=function(t){return it(t)});return n}Ct=function(t){Mt.forEach(function(t){return t.update()})},Tt=document.querySelector("html"),Ht=!0,document.addEventListener("darkmode",function(){var t=Tt.className.toLowerCase().split(" ").indexOf("dark")>-1;Ht=!t,A.THEME=Ht?pt:yt,Ct&&Ct(Ht)}),document.dispatchEvent(new Event("darkmode")),window.Graph=(Et=0,{render:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={container:t||document.body,index:Et++,title:e.title||void 0},a=St(n),o=vt(r,n,a);return H.add(function(){o.render()}),Mt.push(o),o}})}]);