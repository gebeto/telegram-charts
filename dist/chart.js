!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=window.devicePixelRatio,i=4*o,l=2*i,c=343*o,u=16*o,s=2*u,h=2*Math.PI,d=Math.PI/100,m="".concat(11*o,"px Arial"),f=40*o,g=7*o,v=43*o,p=29*o,y=p/2,x=5*o,b=1*o,w=2*o,T={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},A={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"},C={THEME:T};var H,F,E=(H=[],F={time:0,add:function(t){H.push(t)},remove:function(t){var e=H.indexOf(t);e>-1&&H.splice(e,1)}},requestAnimationFrame(function t(e){F.time=e;for(var n=0;n<H.length;n++)H[n](e);requestAnimationFrame(t)}),F);function M(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var S=function(){function t(e,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=a,this.fromValue=e,this.toValue=e,this.value=e,this.startTime=0,this.duration=n,this.delay=0}var e,n,a;return e=t,(n=[{key:"playFrom",value:function(t,e){this.value=t,this.play(e)}},{key:"play",value:function(t){this.startTime=E.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return!1;var t=(E.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var e=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*e,!0}}])&&M(e.prototype,n),a&&M(e,a),t}();function P(t,e){var n=e-t,a={};function r(e){return a[e]||(a[e]=(e-t)/n),a[e]}return r.de=function(e){return e*n+t},r.data={delta:n,min:t,max:e},r}function Y(t,e,n){var a=t.createAnimation(e,300),r=t.createAnimation(n-e,300);function o(t){return(t-a.value)/r.value}return o.updateDelta=function(t,e){e,a.play(t),r.play(e-t)},o}var k=function(t,e){var n;return function(){var a=arguments;n||(t.apply(this,a),n=!0,setTimeout(function(){return n=!1},e))}};var _=function(t,e){return t+e},L=function(t){return t===1/0||t===-1/0?0:t},B=function(t){return Math.min.apply(null,t)},R=function(t){return Math.max.apply(null,t)},X=function(t,e,n){return Math.min.apply(null,t.slice(e,1+n))},U=function(t,e,n){return Math.max.apply(null,t.slice(e,1+n))},O=function(t){return Math.min.apply(null,t.map(B))},D=function(t){return Math.max.apply(null,t.map(R))},j=function(t,e,n){return Math.min.apply(null,t.map(function(t){return X(t,e,n)}))},N=function(t,e,n){return Math.max.apply(null,t.map(function(t){return U(t,e,n)}))},K=function(t){var e,n,a=new Array(t[0].length).fill(0);for(e=0;e<t.length;e++)for(n=0;n<t[e].length;n++)a[n]+=t[e][n];return a};function V(t){t.canvas;var e=t.canvasBounds,n=function(t){var e={},n={},a={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){e[t]=[],n[t]=function(n,a){for(var r=0;r<e[t].length;r++)e[t][r](n,a)}}),{mouse:a,addListener:function(t,n){e[t].push(n)},dispatch:function(t,e){if(!n[t])throw Error("Unknown event");n[t](a,e)}}}(["move","enter","leave","down","up"]),a=n.mouse;function r(t){a.xRaw=t.clientX-e.left,a.yRaw=t.clientY-e.top,a.x=a.xRaw*o,a.y=a.yRaw*o,a.newXRaw=a.xRaw,a.newYRaw=a.yRaw,a.newX=a.x,a.newY=a.y,n.dispatch("down",t)}function i(t){a.newXRaw=t.clientX-e.left,a.newYRaw=t.clientY-e.top,a.newX=a.newXRaw*o,a.newY=a.newYRaw*o,n.dispatch("move",t)}function l(t){a.isHolding=!1,n.dispatch("up",t)}return document.addEventListener("mousedown",r),document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),document.addEventListener("touchstart",function(t){r(t.touches[0])}),document.addEventListener("touchmove",function(t){i(t.touches[0])},{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l),document.addEventListener("selectstart",function(t){return!1}),{mouse:a,addListener:n.addListener}}function W(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,i=t.normYKey,l=((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*o;return function(t,o,c,u,s){var h=t.key,d=t.items,m=t.opacity,f=t.scaling[i],g=m.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=d.length;n.save(),n.beginPath();var p=c+s;n.moveTo(o+0,p-f(d[0])*s);for(var y=1;y<v;y++){var x=o+a.X(y)*u,b=p-f(d[y])*s;b>p&&(e.shouldControlUpdate=!0),n.lineTo(x,b)}n.lineWidth=l,n.strokeStyle=r[h],n.globalAlpha=g,n.lineJoin="round",n.stroke(),n.restore()}}}var z=0,I=1,J=2,q=3;function G(t,e){var n={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},a=z,r=14*o,i=[e.range[0],e.range[1]];return t.mouse.addListener("move",function(n){if(a!==z){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var r=e.normalizeForControl(n.newX)-e.normalizeForControl(n.x),o=i[0]+r,l=i[1]+r;if(a===I)o>0?e.updateRange(o,i[1]):e.updateRange(0,i[1]);else if(a===J)l<1?e.updateRange(i[0],l):e.updateRange(i[0],1);else if(o>=0&&l<=1)e.updateRange(o,l);else if(l>1){var c=1-i[1];e.updateRange(i[0]+c,i[1]+c)}else if(o<0){var u=0-i[0];e.updateRange(i[0]+u,i[1]+u)}}}),t.mouse.addListener("down",function(o){var l=r,c=r,u=n.controlsBounds.start,s=n.controlsBounds.end;o.y>u.y&&o.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,i=[e.range[0],e.range[1]],o.newX>u.x-l&&o.newX<u.x+u.width&&o.newY>u.y-l&&o.newY<u.y+u.height+l?a=I:o.newX>s.x&&o.newX<s.x+s.width+c&&o.newY>s.y-c&&o.newY<s.y+s.height+c?a=J:o.newX>u.x+u.width&&o.newX<s.x&&o.newY>s.y-r&&o.newY<s.y+s.height+r&&(a=q))}),t.mouse.addListener("up",function(t){a=z}),n}function Q(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=(t.xAxis,W(t,{lineWidth:1})),l=0,c=0,u=c-l,s=10*o,h=s/2,d=10*o,m=2*d,f=d/2,g=d-d/3,v=2*o,p=(d-v)/2,y=G(n,a).controlsBounds;return function(t,n,o,x){var w=o,T=t;o-=m,t+=d;for(var A=0;A<r.items.length;A++)i(r.items[A],t,n+3,o,x-6);l=t+o*a.range[0],c=t+o*a.range[1],u=c-l,y.start.x=l-d,y.start.y=n,y.start.width=d,y.start.height=x,y.end.x=c,y.end.y=n,y.end.width=d,y.end.height=x,e.save(),e.globalAlpha=.6,e.fillStyle=C.THEME.scrollBackground,e.beginPath(),e.moveTo(l-1,n),e.lineTo(l-1,n+x),e.arcTo(T,n+x,T,n+x-d,f),e.arcTo(T,n,l-1,n,f),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c+1,n),e.lineTo(c+1,n+x),e.arcTo(T+w,n+x,T+w,n+x-d,f),e.arcTo(T+w,n,c,n,f),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=C.THEME.scrollSelector,e.beginPath(),e.rect(l,n,u,b),e.rect(l,n+x-b,u,b),e.fill(),e.beginPath();var H=l;e.moveTo(H,n),e.lineTo(H,n+x),e.arcTo(H-d,n+x,H-d,n+x-d,g),e.arcTo(H-d,n,H,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(c,n),e.lineTo(c,n+x),e.arcTo(c+d,n+x,c+d,n+x-d,g),e.arcTo(c+d,n,c,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(l-p,n+x/2-h,-v,s),e.rect(c+p,n+x/2-h,v,s),e.fill(),e.restore()}}function Z(t){var e=t.canvasBounds,n=t.config,a=t.ctx,r=t.norm,l=t.colors,c=(t.ys,t.normYKey),u=2*o,s=(n.mouse.mouse,n.popup),d=r.X(1),m=0,f=0,g=0,v=0,p=0,y=d*m,x=-1,b=-1,w=!1,T=!1,A=!0,H=!1,F=k(function(t,r){if(w=T,(!(T=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&w||"BUTTON"===r.target.tagName)&&(-1!==b&&(n.shouldChartUpdate=!0),b=-1,s.hide()),T&&r.target===a.canvas&&((T||!0===w&&!1===T)&&(x=b,t.newY>v&&t.newY<v+f&&(b=p-Math.round((m+g-t.newX)/y+1))<p&&b>=0?s.show(b):(b=-1,s.hide())),x!==b)){if(n.shouldChartUpdate=!0,-1!==b){var l=s.element.getBoundingClientRect(),c=(b*y+g)/o;c-l.width-i<0?A=!1:c+l.width+i>e.width/o&&(A=!0),s.element.style.left="".concat(A?c-l.width-i:c+i,"px")}x=b}},50);return n.mouse.addListener("move",function(t,e){H&&F(t,e)}),n.mouse.addListener("down",function(t,e){H=!0,F(t,e)}),n.mouse.addListener("up",function(t,e){H=!1}),function(t,e,n,o,s){m=o,f=s,g=e,v=n;var x=t.key,w=t.items,T=t.opacity,A=t.scaling[c],H=T.value;if(H&&(p=w.length,y=d*o,b>-1&&b<p)){var F=e+r.X(b)*o;a.save(),a.strokeStyle=C.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.1,a.beginPath(),a.moveTo(F,n),a.lineTo(F,n+s),a.stroke(),a.restore(),a.save(),a.beginPath(),a.globalAlpha=H,a.arc(F,n+s-A(w[b])*s,i,0,h),a.lineWidth=u,a.strokeStyle=l[x],a.fillStyle=C.THEME.background,a.fill(),a.stroke(),a.restore()}}}function $(t){t.control;var e=t.ctx,n=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=n.textAlign||"left";return function(t,n,r,i,l,c,u){var s=Math.round(t.scaling.minHeightAnim.value),h=Math.round(t.scaling.maxHeightAnim.value),d=t.opacity.value,f=(l+l/6/2)/6,g=Math.ceil((h-s)/6);e.save(),e.beginPath(),e.fillStyle=C.THEME.gridLines,e.globalAlpha=u?d/2:.5,e.font=m,e.textBaseline="bottom",e.textAlign=a;for(var v=0;v<6;v++)c&&(e.moveTo(n,r+l-v*f),e.lineTo(n+i,r+l-v*f)),e.fillText(s+g*v,n+3,r+l-v*f-x);e.lineWidth=1*o,c&&(e.globalAlpha=.1,e.strokeStyle=C.THEME.gridLines,e.stroke()),e.restore()}}var tt=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function et(t){t.config,t.control;var e=t.ctx,n=t.norm,a=(t.colors,n.X(1));return function(t,r,o,i,l){var c=t.length;e.save(),e.fillStyle=C.THEME.gridLines,e.font=m,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var u=i*a,s=(Math.floor(u),Math.ceil(f/u)),h=s+1,d=tt[s],g=tt[h],v=(u/(f/s)-1)*s,p=0;p<c;p+=d){var x=p%g;e.globalAlpha=0===x?.5:v>.5?.5:v;var b=r+n.X(p)*i,w=o+y;e.fillText(t[p].dayString,b,w)}e.restore()}}function nt(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=$(t,{textAlign:"left"}),c=et(t),u=W(t),s=Z(t);return function(t,h,d,m){var f=t-d*e.range[0]/e.scale,v=d/e.scale,y=m-g-l,x=h+i+w;c(r,f,h+y-p,v,p),o(a.items[0],t,x,d,y-p,!0);for(var b=0;b<a.items.length;b++)u(a.items[b],f,x,v,y-p);for(var T=0;T<n.length;T++)s(a.items[T],f,x,v,y-p)}}function at(t,e,n){var a=document.createElement(e);return a.className=n,t&&t.appendChild(a),a}function rt(t){return'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(t,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')}function ot(t,e,n){return'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(e,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(t,'">').concat(n,"</span>\n\t\t</span>\n\t")}function it(t,e,n,a,r,o){var i=a.key,l={enabled:!0},c=at(t,"button","chart__buttons-button");function u(){!0===l.enabled?(c.className="chart__buttons-button",c.style.color="#FFF"):(c.className="chart__buttons-button unchecked",c.style.color=n.colors[i]),a.enabled=l.enabled,a.opacity.play(l.enabled?1:0),o&&o(l.enabled)}return c.textContent=n.names[i],c.style.backgroundColor=n.colors[i],c.style.borderColor=n.colors[i],function(t,e,n){var a=null,r=!1;function o(){a=setTimeout(function(){n&&n(),r=!0},200)}function i(){clearTimeout(a)}t.addEventListener("click",function(){clearTimeout(a),r?r=!1:e&&e()}),t.addEventListener("mousedown",o),t.addEventListener("mousemove",i),t.addEventListener("touchstart",o),t.addEventListener("touchmove",i)}(c,function(){if(1===r.activeButtonsCount&&l.enabled)return c.className="chart__buttons-button error",void setTimeout(function(){c.className="chart__buttons-button"},140);l.enabled=!l.enabled,u()},function(){l.show(),r.hideAllExcept(c)}),l.hide=function(t){l.enabled&&t!==c&&(l.enabled=!1,u())},l.show=function(){l.enabled||(l.enabled=!0,u())},l}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){ct(t,e,n[e])})}return t}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ut(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var st=function(t,e,n){var i,l,h,d,m,f=t.container,g=t.index,p=t.title,y=void 0===p?"Chart #".concat(g+1):p,x={left:0,top:0},b=at(f,"div","chart"),w=function(t,e,n){var a=at(t,"div","chart__header"),r=at(a,"h2","chart__header-title");r.textContent=e;var o=at(a,"h3","chart__header-sub-title");return o.textContent=n,{setTitle:function(t){r.textContent=t},setSubtitle:function(t){o.textContent=t}}}(b,y,"Hello world!"),T=at(b,"canvas","chart__canvas"),A=T.getContext("2d"),C=(d=[],{opts:m={active:!1},createAnimation:function(t,e,n){var a=new S(t,e,n);return d.push(a),a},removeAnimation:function(t){var e=d.indexOf(t);e>-1&&d.splice(e,1)},updateAnimations:function(){for(var t=d.length,e=!1,n=0;n<t;n++)e=d[n].update()||e;return m.active=e,e}}),H={index:g,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:C,mouse:V({config:H,canvas:T,canvasBounds:x}),maxHeight:0,minHeight:0,minHeightAnim:C.createAnimation(0,300),maxHeightAnim:C.createAnimation(0,300),startIndex:0,endIndex:0},F=e.colors;e.names,e.types,e.columns[0]=e.columns[0].map(function(t){return t.length?t:(e=t,n=new Date(e),{dayString:"".concat(a[n.getMonth()]," ").concat(n.getDate()),dateString:"".concat(r[n.getDay()],", ").concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),dateStringTitle:"".concat(n.getDate()," ").concat(a[n.getMonth()]," ").concat(n.getFullYear()),date:n,timestamp:e});var e,n});var E=ut(e.columns),M=ut(E[0]),k=(M[0],M.slice(1)),_=E.slice(1),W=function(t,e,n){var a=t.map(function(t){var a=n.animator.createAnimation(1,300),r={key:t[0],items:t.slice(1),enabled:!0,opacity:a,scaling:{}};return e.y_scaled&&(r.scaling.minHeight=L(B(r.items)),r.scaling.maxHeight=L(R(r.items)),r.scaling.minHeightAnim=n.animator.createAnimation(0,300),r.scaling.maxHeightAnim=n.animator.createAnimation(0,300),r.scaling.normY=Y(n.animator,r.scaling.minHeight,r.scaling.maxHeight),r.scaling.normControlY=Y(n.animator,r.scaling.minHeight,r.scaling.maxHeight),r.scaling.updateMinMax=function(t,e){r.scaling.minHeight=L(X(r.items,t,e)),r.scaling.maxHeight=L(U(r.items,t,e)),r.scaling.minHeightAnim.play(r.scaling.minHeight),r.scaling.maxHeightAnim.play(r.scaling.maxHeight),r.scaling.normY.updateDelta(r.scaling.minHeight,r.scaling.maxHeight)}),r});if(!e.y_scaled){var r=a.filter(function(t){return t.enabled}).map(function(t){return t.items}),o={};if(e.stacked)if(e.percentage){var i=n.animator.createAnimation(0,300),l=n.animator.createAnimation(100,300);o.minHeight=0,o.maxHeight=100,o.minHeightAnim=i,o.maxHeightAnim=l,o.normY=Y(n.animator,0,100),o.normControlY=Y(n.animator,0,100),o.updateMinMax=function(t,e){}}else{var c=L(R(K(r))),u=U(K(r),0,c),s=n.animator.createAnimation(0,300),h=n.animator.createAnimation(0,300);o.minHeight=0,o.maxHeight=u,o.minHeightAnim=s,o.maxHeightAnim=h,o.normY=Y(n.animator,0,u),o.normControlY=Y(n.animator,0,c),o.updateMinMax=function(t,e){var n=a.filter(function(t){return t.enabled}).map(function(t){return t.items});o.minHeight=0;try{o.maxHeight=L(U(K(n),t,e))}catch(t){return}o.minHeightAnim.play(o.minHeight),o.maxHeightAnim.play(o.maxHeight),o.normY.updateDelta(o.minHeight,o.maxHeight);var r=L(R(K(n)));o.normControlY.updateDelta(0,r)}}else{var d=L(O(r)),m=L(D(r)),f=O(r,d,m),g=D(r,d,m),v=n.animator.createAnimation(0,300),p=n.animator.createAnimation(0,300);o.minHeight=f,o.maxHeight=g,o.minHeightAnim=v,o.maxHeightAnim=p,o.normY=Y(n.animator,f,g),o.normControlY=Y(n.animator,d,m),o.updateMinMax=function(t,e){var n=a.filter(function(t){return t.enabled}).map(function(t){return t.items});o.minHeight=L(j(n,t,e)),o.maxHeight=L(N(n,t,e)),o.minHeightAnim.play(o.minHeight),o.maxHeightAnim.play(o.maxHeight),o.normY.updateDelta(o.minHeight,o.maxHeight);var r=L(O(n)),i=L(D(n));o.normControlY.updateDelta(r,i)}}a.forEach(function(t){t.scaling=o})}return{items:a}}(_,e,H);H.endIndex=k.length,w.setSubtitle("".concat(k[0].dateStringTitle," - ").concat(k[k.length-1].dateStringTitle)),H.popup=function(t,e,n,a){var r=at(t,"div","chart__popup");return{element:r,update:function(t){var e=a.items.filter(function(t){return t.enabled}).map(function(e){return ot(n.colors[e.key],n.names[e.key],e.items[t])});e.length&&(r.innerHTML="\n\t\t\t\t".concat(rt(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(e.join(""),"\n\t\t\t"))},show:function(t){var e=a.items.filter(function(t){return t.enabled}).map(function(e){return ot(n.colors[e.key],n.names[e.key],e.items[t])});e.length&&(r.innerHTML="\n\t\t\t\t".concat(rt(n.columns[0][t+1].dateString),"\n\t\t\t\t").concat(e.join(""),"\n\t\t\t"),r.style.opacity=1,r.style.visibility="visible")},hide:function(){r.style.opacity=0,r.style.visibility="hidden"}}}(b,0,e,W);var z=function(t,e,n,a,r){var o={activeButtonsCount:a.items.length,hideAllExcept:function(t){c.forEach(function(e){e.hide(t)})},hideAll:function(){c.forEach(function(t){t.hide()})}},i=at(t,"div","chart__buttons"),l={},c=a.items.map(function(t){return l[t[0]]=it(i,0,n,t,o,function(t){o.activeButtonsCount+=t?1:-1,o.activeButtonsCount<1||r&&r()})});return l}(b,H.animator,e,W,function(){J()});H.buttons=z;var I={X:P(0,k.length-1)};function J(){var t=q.range[0],e=q.range[1],n=t*k.length,a=n<0?0:Math.floor(n),r=e*k.length,o=r>k.length?k.length:Math.ceil(r);W.items.forEach(function(t){return t.scaling.updateMinMax(a,o)}),w.setSubtitle("".concat(k[a].dateStringTitle," - ").concat(k[o-1].dateStringTitle))}var q={range:[.7,1],count:0,scale:0,updateRange:function(t,e){var n=e-t,a=k.length*n;a>5&&(q.count=Math.ceil(a),q.scale=n,q.range[0]=t,q.range[1]=e,J())},normalizeForControl:function(t){return h(t)}};function G(){var t=T.getBoundingClientRect(),e=t.width*o,n=t.height*o;x.width=e,x.height=c,x.left=t.left,x.right=t.right,x.top=t.top,x.bottom=t.bottom,x.x=t.x,x.y=t.y,i===e&&l===n||(H.shouldChartUpdate=!0,H.shouldControlUpdate=!0,h=P(s,x.width-s),i=T.width=x.width,l=T.height=c)}function Z(t){G(),H.animator.updateAnimations()&&(H.shouldChartUpdate=!0),H.shouldChartUpdate&&(H.shouldChartUpdate=!1,A.clearRect(0,0,i,c-v),tt(u,0,i-s,c-v)),H.shouldControlUpdate&&(H.shouldControlUpdate=!1,A.clearRect(0,c-v,i,v),et(u,c-v,i-s,v))}window.addEventListener("resize",G),q.updateRange(q.range[0],q.range[1]),G(),J();var $={config:H,control:q,ctx:A,norm:I,colors:F,ys:_,buttons:z,xAxis:k,yAxis:W,canvasBounds:x,normYKey:"normY"},tt=n.drawChartFabric?n.drawChartFabric($):nt($),et=n.drawControlFabric?n.drawControlFabric(lt({},$,{normYKey:"normControlY"})):Q(lt({},$,{normYKey:"normControlY"}));return Z(),{render:Z,control:q,update:function(){H.shouldChartUpdate=!0,H.shouldControlUpdate=!0}}};function ht(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s){var h=t.key,d=t.items,m=t.opacity,f=t.scaling[o],g=m.value;if(g){g<1&&(e.shouldControlUpdate=!0);var v=u-i*u,p=d.length;n.save(),n.beginPath();for(var y=0;y<p;y++){a[y]+=d[y]*g;var x=i*v,b=l+x*y,w=c+s-f(a[y])*s,T=f(d[y])*s*g;n.rect(b,w,x-i,T>0?T:0)}n.fillStyle=r[h],n.strokeStyle=r[h],n.fill(),n.restore()}}}function dt(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=t.xAxis,r=et(t),c=ht(t),u=function(t){var e=t.canvasBounds,n=t.config,a=t.ctx,r=t.norm,i=(t.colors,t.ys,t.normYKey),l=(n.mouse.mouse,n.popup),c=r.X(1),u=0,s=0,h=0,d=0,m=0,f=c*u,g=f/2,v=-1,p=-1,y=!1,x=!1,b=!0,w=!1,T=k(function(t,r){if(y=x,(!(x=a.canvas===r.target||a.canvas.nextSibling.contains(r.target))&&y||"BUTTON"===r.target.tagName)&&(-1!==p&&(n.shouldChartUpdate=!0),p=-1,l.hide()),x&&r.target===a.canvas&&((x||!0===y&&!1===x)&&(v=p,t.newY>d&&t.newY<d+s&&(p=m-Math.ceil((u+h-t.newX)/f))<m&&p>=0?l.show(p):(p=-1,l.hide())),v!==p)){if(n.shouldChartUpdate=!0,-1!==p){var i=l.element.getBoundingClientRect(),c=(p*f+h)/o;c-i.width-f-g<0?b=!1:c+i.width+f+g>e.width/o&&(b=!0),l.element.style.left="".concat(b?c-i.width-g:c+f+g,"px")}v=p}},50);return n.mouse.addListener("move",function(t,e){w&&T(t,e)}),n.mouse.addListener("down",function(t,e){w=!0,T(t,e)}),n.mouse.addListener("up",function(t,e){w=!1}),function(t,e,n,o,l,v){u=l,s=v,h=n,d=o,t.key;var y=t.items,x=(t.opacity,t.scaling[i]),b=l-f;if(m=y.length,g=(f=c*b)/2,p>-1&&p<m){var w=n+r.X(p)*b;a.save(),a.strokeStyle=C.THEME.gridLines,a.lineWidth=1,a.globalAlpha=.2,a.beginPath(),a.rect(w,o+v,f,-x(e[p])*v),a.fillStyle=C.THEME.gridLines,a.fill(),a.stroke(),a.restore()}}}(t),s=$(t,{textAlign:"left"});return function(t,o,h,d){for(var m=t-h*e.range[0]/e.scale,f=h/e.scale,v=d-g-l,y=o+i+w,x=new Array(a.length).fill(0),b=0;b<n.items.length;b++)c(n.items[b],x,m,y,f,v-p);u(n.items[0],x,m,y,f,v-p),r(a,m,o+v-p,f,p),s(n.items[0],t,y,h,v-p,!0)}}function mt(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=t.xAxis,l=ht(t),c=0,u=0,s=u-c,h=10*o,d=h/2,m=10*o,f=2*m,g=m/2,v=m-m/3,p=2*o,y=(m-p)/2,x=G(n,a).controlsBounds;return function(t,n,o,w){var T=o,A=t;o-=f,t+=m;for(var H=new Array(i.length).fill(0),F=0;F<r.items.length;F++)l(r.items[F],H,t,n+3,o,w-6);c=t+o*a.range[0],u=t+o*a.range[1],s=u-c,x.start.x=c-m,x.start.y=n,x.start.width=m,x.start.height=w,x.end.x=u,x.end.y=n,x.end.width=m,x.end.height=w,e.save(),e.globalAlpha=.6,e.fillStyle=C.THEME.scrollBackground,e.beginPath(),e.moveTo(c-1,n),e.lineTo(c-1,n+w),e.arcTo(A,n+w,A,n+w-m,g),e.arcTo(A,n,c-1,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u+1,n),e.lineTo(u+1,n+w),e.arcTo(A+T,n+w,A+T,n+w-m,g),e.arcTo(A+T,n,u,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=C.THEME.scrollSelector,e.beginPath(),e.rect(c,n,s,b),e.rect(c,n+w-b,s,b),e.fill(),e.beginPath();var E=c;e.moveTo(E,n),e.lineTo(E,n+w),e.arcTo(E-m,n+w,E-m,n+w-m,v),e.arcTo(E-m,n,E,n,v),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u,n),e.lineTo(u,n+w),e.arcTo(u+m,n+w,u+m,n+w-m,v),e.arcTo(u+m,n,u,n,v),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(c-y,n+w/2-d,-p,h),e.rect(u+y,n+w/2-d,p,h),e.fill(),e.restore()}}function ft(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],a.X(1));return function(t,a,l,c,u,s,h){var d=t.key,m=t.items,f=t.opacity,g=(0,t.scaling[o])(1),v=f.value;if(v){v<1&&(e.shouldControlUpdate=!0);var p=m.length;n.save(),n.beginPath();var y=i*s,x=new Array(p).fill(0),b=l[0],w=u+h-g*Math.round(a[0]/b)*h;n.moveTo(c,w),x[0]=c+0*y;for(var T=1;T<p;T++){var A=Math.round(a[T]/l[T]);x[T]=c+y*T;var C=u+h-g*A*h;n.lineTo(x[T],C)}for(var H=p-1;H>=0;H--){a[H]+=m[H]*v;var F=u+h-g*Math.round(a[H]/l[H])*h;n.lineTo(x[H],F)}n.closePath(),n.fillStyle=r[d],n.fill(),n.restore()}}}function gt(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=(t.xAxis,function(t){var e=t.config,n=(t.control,t.ctx),a=t.norm,r=t.colors,o=(t.normYKey,t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],e.mouse.mouse,e.popup,a.X(1),0),i=0,l=0;return function(t,a,c,u,s,h,f,g){var v=t.key,p=(t.items,t.opacity.value);if(p){p<1&&(e.shouldControlUpdate=!0),o=Math.min(f/2,g/2),i=s+f/2,l=h+g/2,n.save(),n.beginPath(),n.fillStyle="red",n.moveTo(i,l);var y=d*c*2,x=d*u*2;n.arc(i,l,o,y,x),n.moveTo(i,l),n.fillStyle=r[v],n.fill(),n.restore(),n.save(),n.fillStyle="#fff",n.textAlign="center",n.globalAlpha=p,n.textBaseline="middle",n.font=m;var b=y+(x-y)/2,w=i+Math.cos(b)*(o/2),T=l+Math.sin(b)*(o/2);n.fillText(a.toFixed(0)+"%",w,T),n.restore()}}}(t));return function(t,r,o,c){e.range[0];for(var u=c-g-l,s=r+i+w,h=n.items.reduce(function(t,e){return t+e.items.reduce(_,0)*e.opacity.value},0)/100,d=0,m=0;m<n.items.length;m++){var f=n.items[m].items.reduce(_,0)/h*n.items[m].opacity.value;a(n.items[m],f,d,d+=f,t,s,o,u-p)}}}function vt(t){var e=t.ctx,n=t.config,a=(t.canvasBounds,t.control),r=(t.ys,t.yAxis),i=t.xAxis,l=ft(t),c=0,u=0,s=u-c,h=10*o,d=h/2,m=10*o,f=2*m,g=m/2,v=m-m/3,p=2*o,y=(m-p)/2,x=G(n,a).controlsBounds;return function(t,n,o,w){var T=o,A=t;o-=f,t+=m;for(var H=new Array(i.length).fill(0),F=0;F<r.items.length;F++)for(var E=0;E<r.items[F].items.length;E++)H[E]+=r.items[F].items[E]*r.items[F].opacity.value;for(var M=0;M<i.length;M++)H[M]/=100;for(var S=new Array(i.length).fill(0),P=0;P<r.items.length;P++)l(r.items[P],S,H,t,n+3,o,w-6);c=t+o*a.range[0],u=t+o*a.range[1],s=u-c,x.start.x=c-m,x.start.y=n,x.start.width=m,x.start.height=w,x.end.x=u,x.end.y=n,x.end.width=m,x.end.height=w,e.save(),e.globalAlpha=.6,e.fillStyle=C.THEME.scrollBackground,e.beginPath(),e.moveTo(c-1,n),e.lineTo(c-1,n+w),e.arcTo(A,n+w,A,n+w-m,g),e.arcTo(A,n,c-1,n,g),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u+1,n),e.lineTo(u+1,n+w),e.arcTo(A+T,n+w,A+T,n+w-m,g),e.arcTo(A+T,n,u,n,g),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle=C.THEME.scrollSelector,e.beginPath(),e.rect(c,n,s,b),e.rect(c,n+w-b,s,b),e.fill(),e.beginPath();var Y=c;e.moveTo(Y,n),e.lineTo(Y,n+w),e.arcTo(Y-m,n+w,Y-m,n+w-m,v),e.arcTo(Y-m,n,Y,n,v),e.closePath(),e.fill(),e.beginPath(),e.moveTo(u,n),e.lineTo(u,n+w),e.arcTo(u+m,n+w,u+m,n+w-m,v),e.arcTo(u+m,n,u,n,v),e.closePath(),e.fill(),e.restore(),e.save(),e.beginPath(),e.fillStyle="#FFFFFF",e.rect(c-y,n+w/2-d,-p,h),e.rect(u+y,n+w/2-d,p,h),e.fill(),e.restore()}}console.log("pi1",d);var pt=[];!function(t){var e=document.querySelector("html"),n=!0;function a(){t&&t(n)}document.addEventListener("darkmode",function(){var t=e.className.match(/\bdark\b/);console.log(t),n=!t,a()}),a()}(function(t){C.THEME=t?T:A,pt.forEach(function(t){return t.update()})});var yt,xt=[{drawChartFabric:function(t){return nt(t)},drawControlFabric:function(t){return Q(t)}},{drawChartFabric:function(t){return function(t){t.ctx,t.config;var e=t.control,n=t.ys,a=t.yAxis,r=t.xAxis,o=$(t,{textAlign:"left"}),c=$(t,{textAlign:"right"}),u=et(t),s=W(t),h=Z(t);return function(t,d,m,f){var v=t-m*e.range[0]/e.scale,y=m/e.scale,x=f-g-l,b=d+i+w;u(r,v,d+x-p,y,p);var T=!0;a.items[0].enabled&&(o(a.items[0],t,b,m,x-p,T),T=!1),a.items[1].enabled&&(c(a.items[1],t+m,b,-m,x-p,T),T=!1);for(var A=0;A<a.items.length;A++)s(a.items[A],v,b,y,x-p);for(var C=0;C<n.length;C++)h(a.items[C],v,b,y,x-p)}}(t)},drawControlFabric:function(t){return Q(t)}},{drawChartFabric:function(t){return dt(t)},drawControlFabric:function(t){return mt(t)}},{drawChartFabric:function(t){return dt(t)},drawControlFabric:function(t){return mt(t)}},{drawChartFabric:function(t){return function(t){t.ctx,t.config;var e=t.control,n=(t.ys,t.yAxis),a=t.xAxis,r=et(t),o=ft(t),c=Z(t),u=$(t,{textAlign:"left"});return function(t,s,h,d){for(var m=t-h*e.range[0]/e.scale,f=h/e.scale,v=d-g-l,y=s+i+w,x=new Array(a.length).fill(0),b=0;b<n.items.length;b++)for(var T=0;T<n.items[b].items.length;T++)x[T]+=n.items[b].items[T]*n.items[b].opacity.value;for(var A=0;A<a.length;A++)x[A]/=100;for(var C=new Array(a.length).fill(0),H=0;H<n.items.length;H++)o(n.items[H],C,x,m,y,f,v-p),c(n.items[H],m,y,f,v-p);r(a,m,s+v-p,f,p),u(n.items[0],t,y,h,v-p,!0)}}(t)},drawControlFabric:function(t){return vt(t)}},{drawChartFabric:function(t){return gt(t)},drawControlFabric:function(t){return vt(t)}}];window.GraphFabrics=xt,window.Graph=(yt=0,{render:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r={container:t||document.body,index:yt++,title:a.title||void 0},o=st(r,e,n);return E.add(function(){o.render()}),pt.push(o),o}})}]);