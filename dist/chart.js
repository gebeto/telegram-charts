!function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=window.devicePixelRatio,o=4*i,c=2*o,l=343*i,u=16*i,s=2*u,d=2*Math.PI,h=(Math.PI,"".concat(11*i,"px sans-serif")),f=40*i,m=7*i,g=43*i,v=29*i,p=v/2,y=5*i,x=1*i,w=2*i,b={THEME:{}};var A,C,k=(A=[],C={time:0,add:function(t){A.push(t)},remove:function(t){var n=A.indexOf(t);n>-1&&A.splice(n,1)}},requestAnimationFrame(function t(n){C.time=n;for(var e=0;e<A.length;e++)A[e](n);requestAnimationFrame(t)}),C);function S(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=r,this.fromValue=n,this.toValue=n,this.value=n,this.startTime=0,this.duration=e,this.delay=0,this.inProgress=!1}var n,e,r;return n=t,(e=[{key:"playFrom",value:function(t,n){this.value=t,this.play(n)}},{key:"play",value:function(t){this.inProgress=!0,this.startTime=k.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return this.inProgress=!1,!1;this.inProgress=!0;var t=(k.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var n=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*n,!0}}])&&S(n.prototype,e),r&&S(n,r),t}();function E(t,n,e){var r=t.createAnimation(n,300),a=t.createAnimation(e-n,300);function i(t){return(t-r.value)/a.value}return i.updateDelta=function(t,n){n,r.play(t),a.play(n-t)},i}var H=function(t,n){var e;return function(){var r=arguments;e||(t.apply(this,r),e=!0,setTimeout(function(){return e=!1},n))}},M=function(t,n){var e;return function(r){var a=this;r?t.apply(a,null):e||(e=!0,setTimeout(function(){t.apply(a,null),e=!1},n))}};var F=function(t){return t===1/0||t===-1/0?0:t},_=function(t){return Math.min.apply(null,t)},P=function(t){return Math.max.apply(null,t)},Y=function(t,n,e){return Math.min.apply(null,t.slice(n,1+e))},O=function(t,n,e){return Math.max.apply(null,t.slice(n,1+e))},B=function(t){return Math.min.apply(null,t.map(_))},R=function(t){return Math.max.apply(null,t.map(P))},L=function(t,n,e){return Math.min.apply(null,t.map(function(t){return Y(t,n,e)}))},D=function(t,n,e){return Math.max.apply(null,t.map(function(t){return O(t,n,e)}))},j=function(t){var n,e,r=new Array(t[0].length).fill(0);for(n=0;n<t.length;n++)for(e=0;e<t[n].length;e++)r[e]+=t[n][e];return r},z=1,X=3;function U(t,n,e,r,a,o,c){t.mouse.mouse;var l=t.popup,u=t.scaleX,s={x:0,y:0,width:0,height:0,indexOld:-1,index:-1},d={count:0,chunkScale:t.scaleX,chunkSize:u*s.width,chunkSizeDiv2:u*s.width/2,onCanvasOld:!1,onCanvas:!1,popupSide:1,current:s},h=!1,f=H(function(u,h){if(d.onCanvasOld=d.onCanvas,d.onCanvas=e.canvas===h.target||e.canvas.nextSibling.contains(h.target),(!d.onCanvas&&d.onCanvasOld||"BUTTON"===h.target.tagName)&&(-1!==s.index&&(t.shouldChartUpdate=!0),s.index=-1,l.hide()),d.onCanvas&&h.target===e.canvas&&((d.onCanvas||!0===d.onCanvasOld&&!1===d.onCanvas)&&(s.indexOld=s.index,u.newY>s.y&&u.newY<s.y+s.height?(s.index=d.count-o((s.width+s.x-u.newX)/d.chunkSize+c),s.index<d.count&&s.index>=0?l.show(s.index):(s.index=-1,l.hide())):(s.index=-1,l.hide())),s.indexOld!==s.index)){if(t.shouldChartUpdate=!0,-1!==s.index){var f=l.element.getBoundingClientRect(),m=(s.index*d.chunkSize+s.x)/i,g=a(d)/i,v=r(d)/i,p=m+f.width+v,y=m-f.width-v;p>n.width/i?d.popupSide=z:y<0&&(d.popupSide=X),d.popupSide===z?l.element.style.left="".concat(m-f.width-g,"px"):d.popupSide===X&&(l.element.style.left="".concat(m+v,"px"))}s.indexOld=s.index}},50);return t.mouse.addListener("move",function(t,n){h&&f(t,n)}),t.mouse.addListener("down",function(t,n){h=!0,f(t,n)}),t.mouse.addListener("up",function(t,n){h=!1}),d}function I(t){var n=t.config,e=(t.control,t.canvasBounds,t.ctx),r=(t.norm,t.colors),a=t.normYKey,i=(t.xAxis,t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.scaleX),o={items:[],width:0,opacity:1,offsetIndex:0},c=0;return{shouldBulkRecalculate:function(t){var n=!1;if(c!==e.canvas.width)return c=e.canvas.width,!0;for(var r=0;r<t.items.length&&!(n=t.items[r].opacity.inProgress||!t.items[r].calculated);r++);return n},shouldRecalculate:function(t){return!0},calculate:function(t,r,c,l,u,s){t.key;var d=t.items,h=t.opacity,f=t.scaling[a];if(o.opacity=h.value,o.opacity){o.opacity<1&&(n.shouldControlUpdate=!0),o.items=[],o.offsetIndex=0,o.width=i*u;var m=u-o.width;o.width=i*m;for(var g=d.length,v=i*m,p=v/2,y=-v,x=e.canvas.width+g,w=0;w<g;w++){r[w]+=d[w]*o.opacity;var b=c+v*w+p,A=l+s-f(r[w])*s,C=f(d[w])*s*o.opacity;if(b<y)o.offsetIndex++;else{if(b>x)break;o.items.push([b,A,A+C])}}t.calculated=!0}},draw:function(t,n,a,i,c,l,u){var s=t.key,d=o.items;if(o.opacity){var h=d.length;e.save(),e.beginPath(),e.lineWidth=o.width,e.strokeStyle=r[s];for(var f=0;f<h;f++){var m=u===f+o.offsetIndex;m&&(e.globalAlpha=.5,e.stroke(),e.globalAlpha=1,e.beginPath()),e.moveTo(d[f][0],d[f][1]),e.lineTo(d[f][0],d[f][2]),m&&(e.stroke(),e.globalAlpha=.5,e.beginPath())}e.stroke(),e.restore()}}}}function N(t,n){var e=Math.abs(t);if(e>1e9&&n)return(t/1e9).toFixed(2)+"B";if(e>1e6&&n)return(t/1e6).toFixed(2)+"M";if(e>1e3&&n)return(t/1e3).toFixed(1)+"K";if(e>1){for(var r=e.toFixed(0),a=t<0?"-":"",i=0;i<r.length;i++)a+=r.charAt(i),(r.length-1-i)%3==0&&(a+=" ");return a}return t.toString()}function K(t){t.control;var n=t.ctx,e=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=e.textAlign||"left";return function(t,e,a,o,c,l,u){var s=Math.round(t.scaling.minHeightAnim.value),d=Math.round(t.scaling.maxHeightAnim.value),f=t.opacity.value,m=(c+c/6/2)/6,g=Math.ceil((d-s)/6);n.save(),n.beginPath(),n.fillStyle=t.scaling.color||b.THEME.gridLines,n.globalAlpha=u?f/2:t.scaling.color?.8:.5,n.font=h,n.textBaseline="bottom",n.textAlign=r;for(var v=0;v<6;v++){l&&(n.moveTo(e,a+c-v*m),n.lineTo(e+o,a+c-v*m));var p=N(s+g*v,!0);n.fillText(p,e+3,a+c-v*m-y)}n.lineWidth=1*i,l&&(n.globalAlpha=.1,n.strokeStyle=b.THEME.gridLines,n.stroke()),n.restore()}}var W=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function V(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors,t.forBars),a=n.scaleX,i=0;return function(t,n,o,c,l){var u=t.length;i=r?a*(c-a*c):a*c,r&&(c-=i),e.save(),e.fillStyle=b.THEME.gridLines,e.font=h,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var s=c*a,d=(Math.floor(s),Math.ceil(f/s)),m=d+1,g=W[d],v=W[m],y=(s/(f/d)-1)*d,x=0;x<u;x+=g){var w=x%v;e.globalAlpha=0===w?.5:y>.5?.5:y;var A=n+(r?i/2:0)+i*x,C=o+p;A<-f||A>e.canvas.width+f||e.fillText(t[x].dayString,A,C)}e.restore()}}function J(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function q(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,a=I(t),i=function(t){var n=t.canvasBounds,e=t.config,r=t.ctx,a=(t.norm,t.colors,t.normYKey,U(e,n,r,function(t){return t.chunkSize+(t.chunkSizeDiv2>10?10:t.chunkSizeDiv2)},function(t){return t.chunkSizeDiv2>10?10:t.chunkSizeDiv2},Math.ceil,0));return function(t,n,e,r,i,o){a.current.width=i,a.current.height=o,a.current.x=e,a.current.y=r;var c=i-a.chunkSize;return a.count=t.length,a.chunkSize=a.chunkScale*c,a.chunkSizeDiv2=a.chunkSize/2,a.current.index}}(t),o=V(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){J(t,n,e[n])})}return t}({},t,{forBars:!0})),l=K(t,{textAlign:"left"});return function(t,u,s,d){for(var h=t-s*n.range[0]/n.scale,f=s/n.scale,g=d-m-c,p=u+w,y=i(r,x,h,p,f,g-v),x=new Array(r.length).fill(0),b=0;b<e.items.length;b++)a.calculate(e.items[b],x,h,p,f,g-v),a.draw(e.items[b],x,h,p,f,g-v,y);o(r,h,u+g-v,f,v),l(e.items[0],t,p,s,g-v,!0)}}var Z=0,G=1,Q=2,$=3,tt=10*i,nt=tt/2,et=10*i,rt=2*et,at=et/2,it=et-et/3,ot=2*i,ct=(et-ot)/2;function lt(t,n){var e={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},r=e.controlsBounds,a=Z,o=[n.range[0],n.range[1]],c=14*i,l=0,u=0,s=u-l,d=0,h=0;return t.mouse.addListener("move",function(e){if(a!==Z){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var r=t.normalizeForControl(e.newX)-t.normalizeForControl(e.x),i=o[0]+r,c=o[1]+r;if(a===G)i>0?n.updateRange(i,o[1]):n.updateRange(0,o[1]);else if(a===Q)c<1?n.updateRange(o[0],c):n.updateRange(o[0],1);else if(i>=0&&c<=1)n.updateRange(i,c);else if(c>1){var l=1-o[1];n.updateRange(o[0]+l,o[1]+l)}else if(i<0){var u=0-o[0];n.updateRange(o[0]+u,o[1]+u)}}}),t.mouse.addListener("down",function(e){var i=c,l=c,u=r.start,s=r.end;e.y>u.y&&e.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,o=[n.range[0],n.range[1]],e.newX>u.x-i&&e.newX<u.x+u.width&&e.newY>u.y-i&&e.newY<u.y+u.height+i?a=G:e.newX>s.x&&e.newX<s.x+s.width+l&&e.newY>s.y-l&&e.newY<s.y+s.height+l?a=Q:e.newX>u.x+u.width&&e.newX<s.x&&e.newY>s.y-c&&e.newY<s.y+s.height+c&&(a=$))}),t.mouse.addListener("up",function(t){a=Z}),e.updateControlBounds=function(t,n){d=n,h=t},e.renderControl=function(t,e,a,i,o){l=e+i*n.range[0],u=e+i*n.range[1],s=u-l,r.start.x=l-et,r.start.y=a,r.start.width=et,r.start.height=o,r.end.x=u,r.end.y=a,r.end.width=et,r.end.height=o,t.save(),t.globalAlpha=.6,t.fillStyle=b.THEME.scrollBackground,t.beginPath(),t.moveTo(l-1,a),t.lineTo(l-1,a+o),t.arcTo(h,a+o,h,a+o-et,at),t.arcTo(h,a,l-1,a,at),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u+1,a),t.lineTo(u+1,a+o),t.arcTo(h+d,a+o,h+d,a+o-et,at),t.arcTo(h+d,a,u,a,at),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=b.THEME.scrollSelector,t.beginPath(),t.rect(l,a,s,x),t.rect(l,a+o-x,s,x),t.fill(),t.beginPath();var c=l;t.moveTo(c,a),t.lineTo(c,a+o),t.arcTo(c-et,a+o,c-et,a+o-et,it),t.arcTo(c-et,a,c,a,it),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u,a),t.lineTo(u,a+o),t.arcTo(u+et,a+o,u+et,a+o-et,it),t.arcTo(u+et,a,u,a,it),t.closePath(),t.fill(),t.restore(),t.save(),t.beginPath(),t.fillStyle="#FFFFFF",t.rect(l-ct,a+o/2-nt,-ot,tt),t.rect(u+ct,a+o/2-nt,ot,tt),t.fill(),t.restore()},e}function ut(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors),a=t.normYKey,o=(t.yAxis,((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*i),c=n.scaleX,l={items:[],opacity:1,offsetIndex:0},u=0;return{draws:l,shouldBulkRecalculate:function(t){return!0},shouldRecalculate:function(t){var n=t.opacity.inProgress||!t.calculated||e.canvas.width!==u;return u=e.canvas.width,n},calculate:function(t,r,i,o,u){t.key;var s=t.items,d=t.opacity,h=t.scaling[a],f=d.value;if(l.opacity=d.value,f){f<1&&(n.shouldControlUpdate=!0),l.items=[],l.offsetIndex=0;var m=s.length,g=c*o,v=i+u,p=-g,y=e.canvas.width+g;l.items.push([r+0,v-h(s[0])*u]);for(var x=1;x<m;x++){var w=r+g*x,b=v-h(s[x])*u;if(b>v&&(n.shouldControlUpdate=!0),w<p)l.offsetIndex++;else{if(w>y)break;l.items.push([w,b])}}t.calculated=!0}},draw:function(t,n,a,i,c){var u=l.items,s=l.opacity,d=t.key;if(s){var h=u.length;e.save(),e.beginPath(),e.moveTo(u[0][0],u[0][1]);for(var f=1;f<h;f++)e.lineTo(u[f][0],u[f][1]);e.lineWidth=o,e.strokeStyle=r[d],e.globalAlpha=s,e.lineJoin="round",e.stroke(),e.restore()}}}}function st(t){var n=t.canvasBounds,e=t.config,r=t.ctx,a=(t.norm,t.colors,t.normYKey,U(e,n,r,function(t){return o},function(t){return o},Math.round,1));return function(t,n,e,r,i){return a.current.width=r,a.current.height=i,a.current.x=n,a.current.y=e,a.count=t.length,a.chunkSize=a.chunkScale*r,a.current.index}}function dt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ht(t,n,e,r,a){for(var i=t.ctx,c=t.colors,l=t.yAxis,u=0;u<l.items.length;u++){var s=l.items[u].key,h=a[u].draws,f=r-h.offsetIndex;if(h.items[f]){var m=dt(h.items[f],2),g=m[0],v=m[1];i.save(),i.strokeStyle=b.THEME.gridLines,i.lineWidth=1,i.globalAlpha=.1,i.beginPath(),i.moveTo(g,n),i.lineTo(g,n+e),i.stroke(),i.restore(),i.save(),i.beginPath(),i.arc(g,v,o,0,d),i.fillStyle=b.THEME.background,i.lineWidth=w,i.globalAlpha=h.opacity,i.strokeStyle=c[s],i.fill(),i.stroke(),i.restore()}}}function ft(t){var n=t.ctx,e=t.config,r=(t.canvasBounds,t.control),a=t.yAxis,i=(t.xAxis,a.items.map(function(n){return ut(t,{lineWidth:1})})),o=lt(e,r),c=o.updateControlBounds,l=o.renderControl;return function(t,e,r,o){c(t,r),r-=rt,t+=et;for(var u=0;u<a.items.length;u++)i[u].shouldRecalculate(a.items[u])&&i[u].calculate(a.items[u],t,e+3,r,o-6),i[u].draw(a.items[u],t,e+3,r,o-6);l(n,t,e,r,o)}}function mt(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors),a=t.normYKey,i=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.scaleX);return function(t,o,c,l,u,s,d){var h=t.key,f=t.items,m=t.opacity,g=(0,t.scaling[a])(1),v=m.value;if(v){v<1&&(n.shouldControlUpdate=!0);var p=f.length;e.save(),e.beginPath();var y=i*s,x=new Array(p).fill(0),w=c[0],b=u+d-g*Math.round(o[0]/w)*d;e.moveTo(l,b),x[0]=l+0*y;for(var A=1;A<p;A++){var C=Math.round(o[A]/c[A]);x[A]=l+y*A;var k=u+d-g*C*d;e.lineTo(x[A],k)}for(var S=p-1;S>=0;S--){o[S]+=f[S]*v;var T=u+d-g*Math.round(o[S]/c[S])*d;e.lineTo(x[S],T)}e.closePath(),e.fillStyle=r[h],e.fill(),e.restore()}}}function gt(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,a=V(t),i=mt(t),l=function(t){var n=t.canvasBounds,e=t.config,r=t.ctx,a=(t.norm,t.colors,t.normYKey,U(e,n,r,function(t){return o},function(t){return o},Math.round,1));return function(t,n,e,i,o){if(a.current.width=i,a.current.height=o,a.current.x=n,a.current.y=e,a.count=t.length,a.chunkSize=a.chunkScale*i,a.current.index>-1&&a.current.index<a.count){var c=n+a.chunkSize*a.current.index;r.save(),r.strokeStyle=b.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.2,r.beginPath(),r.moveTo(c,e),r.lineTo(c,e+o),r.stroke(),r.restore()}}}(t),u=K(t,{textAlign:"left"});return function(t,s,d,h){for(var f=t-d*n.range[0]/n.scale,g=d/n.scale,p=h-m-c,y=s+o+w,x=new Array(r.length).fill(0),b=0;b<e.items.length;b++)for(var A=0;A<e.items[b].items.length;A++)x[A]+=e.items[b].items[A]*e.items[b].opacity.value;for(var C=0;C<r.length;C++)x[C]/=100;for(var k=new Array(r.length).fill(0),S=0;S<e.items.length;S++)i(e.items[S],k,x,f,y,g,p-v);l(r,f,y,g,p-v),a(r,f,s+p-v,g,v),u(e.items[0],t,y,d,p-v,!0)}}var vt={bar:{drawChartFabric:function(t){return q(t)},drawControlFabric:function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,a=n.control,i=n.yAxis,o=n.xAxis,c=i.items.map(function(t){return I(n)}),l=lt(r,a),u=l.updateControlBounds,s=l.renderControl,d=new Array(o.length),function(t,n,r,a){u(t,r),r-=rt,t+=et,d.fill(0);for(var o=c[0].shouldBulkRecalculate(i),l=0;l<i.items.length;l++)o&&c[l].calculate(i.items[l],d,t,n+3,r,a-6),c[l].draw(i.items[l],t,n+3,r,a-6);s(e,t,n,r,a)};var n,e,r,a,i,o,c,l,u,s,d}},area:{drawChartFabric:function(t){return gt(t)},drawControlFabric:function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,a=n.control,i=n.yAxis,o=n.xAxis,c=mt(n),l=lt(r,a),u=l.updateControlBounds,s=l.renderControl,function(t,n,r,a){u(t,r),r-=rt,t+=et;for(var l=new Array(o.length).fill(0),d=0;d<i.items.length;d++)for(var h=0;h<i.items[d].items.length;h++)l[h]+=i.items[d].items[h]*i.items[d].opacity.value;for(var f=0;f<o.length;f++)l[f]/=100;for(var m=new Array(o.length).fill(0),g=0;g<i.items.length;g++)c(i.items[g],m,l,t,n+3,r,a-6);s(e,t,n,r,a)};var n,e,r,a,i,o,c,l,u,s}},line:{drawChartFabric:function(t){return function(t){t.ctx,t.config,t.colors;var n=t.control,e=t.yAxis,r=t.xAxis,a=e.items.map(function(n){return ut(t)}),i=st(t),l=V(t),u=K(t,{textAlign:"left"});return function(s,d,h,f){var g=s-h*n.range[0]/n.scale,p=h/n.scale,y=f-m-c,x=d+o+w;l(r,g,d+y-v,p,v),u(e.items[0],s,x,h,y-v,!0);for(var b=0;b<e.items.length;b++)a[b].calculate(e.items[b],g,x,p,y-v),a[b].draw(e.items[b],g,x,p,y-v);var A=i(r,g,x,p,y-v);ht(t,d,f,A,a)}}(t)},drawControlFabric:function(t){return ft(t)}},dual_line:{drawChartFabric:function(t){return function(t){t.ctx,t.config;var n=t.control,e=(t.colors,t.yAxis),r=t.xAxis,a=K(t,{textAlign:"left"}),i=K(t,{textAlign:"right"}),l=V(t),u=e.items.map(function(n){return ut(t)}),s=st(t);return function(d,h,f,g){var p=d-f*n.range[0]/n.scale,y=f/n.scale,x=g-m-c,b=h+o+w;l(r,p,h+x-v,y,v);var A=!0;e.items[0].enabled&&(a(e.items[0],d,b,f,x-v,A),A=!1),e.items[1].enabled&&(i(e.items[1],d+f,b,-f,x-v,A),A=!1);for(var C=0;C<e.items.length;C++)u[C].calculate(e.items[C],p,b,y,x-v),u[C].draw(e.items[C],p,b,y,x-v,k);var k=s(r,p,b,y,x-v);ht(t,h,g,k,u)}}(t)},drawControlFabric:function(t){return ft(t)}}};function pt(t){t.canvas;var n=t.canvasBounds,e=function(t){var n={},e={},r={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){n[t]=[],e[t]=function(e,r){for(var a=0;a<n[t].length;a++)n[t][a](e,r)}}),{mouse:r,addListener:function(t,e){n[t].push(e)},dispatch:function(t,n){if(!e[t])throw Error("Unknown event");e[t](r,n)}}}(["move","enter","leave","down","up"]),r=e.mouse;function a(t){r.xRaw=t.clientX-n.left,r.yRaw=t.clientY-n.top,r.x=r.xRaw*i,r.y=r.yRaw*i,r.newXRaw=r.xRaw,r.newYRaw=r.yRaw,r.newX=r.x,r.newY=r.y,e.dispatch("down",t)}function o(t){r.newXRaw=t.clientX-n.left,r.newYRaw=t.clientY-n.top,r.newX=r.newXRaw*i,r.newY=r.newYRaw*i,e.dispatch("move",t)}function c(t){r.isHolding=!1,e.dispatch("up",t)}return document.addEventListener("mousedown",a),document.addEventListener("mousemove",o),document.addEventListener("mouseup",c),document.addEventListener("touchstart",function(t){a(t.touches[0])}),document.addEventListener("touchmove",function(t){o(t.touches[0])},{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),document.addEventListener("selectstart",function(t){return!1}),{mouse:r,addListener:e.addListener}}function yt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function xt(t,n,e){var r=t.map(function(t){var r=yt(t),a=r[0],i=r.slice(1),o={opacity:e.animator.createAnimation(1,300),key:a,scaling:{},enabled:!0,items:i};return n.y_scaled&&(o.scaling.color=n.colors[o.key],o.scaling.minHeight=F(_(o.items)),o.scaling.maxHeight=F(P(o.items)),o.scaling.minHeightAnim=e.animator.createAnimation(0,300),o.scaling.maxHeightAnim=e.animator.createAnimation(0,300),o.scaling.normY=E(e.animator,o.scaling.minHeight,o.scaling.maxHeight),o.scaling.normControlY=E(e.animator,o.scaling.minHeight,o.scaling.maxHeight),o.scaling.updateMinMax=function(t,n){o.scaling.minHeight=F(Y(o.items,t,n)),o.scaling.maxHeight=F(O(o.items,t,n)),o.scaling.minHeightAnim.play(o.scaling.minHeight),o.scaling.maxHeightAnim.play(o.scaling.maxHeight),o.scaling.normY.updateDelta(o.scaling.minHeight,o.scaling.maxHeight)}),o});if(!n.y_scaled){var a={};n.percentage?function(t,n,e){var r=t.animator.createAnimation(0,300),a=t.animator.createAnimation(100,300);n.minHeight=0,n.maxHeight=100,n.minHeightAnim=r,n.maxHeightAnim=a,n.normY=E(t.animator,0,100),n.normControlY=E(t.animator,0,100),n.updateMinMax=function(t,n){}}(e,a):n.stacked?function(t,n,e){var r=e.map(function(t){return t.items}),a=F(P(j(r))),i=O(j(r),0,a),o=t.animator.createAnimation(0,300),c=t.animator.createAnimation(0,300);n.minHeight=0,n.maxHeight=i,n.minHeightAnim=o,n.maxHeightAnim=c,n.normY=E(t.animator,0,i),n.normControlY=E(t.animator,0,a),n.updateMinMax=function(t,r){var a=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=0;try{n.maxHeight=F(O(j(a),t,r))}catch(t){return}n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var i=F(P(j(a)));n.normControlY.updateDelta(0,i)}}(e,a,r):function(t,n,e){var r=e.map(function(t){return t.items}),a=F(B(r)),i=F(R(r)),o=B(r,a,i),c=R(r,a,i),l=t.animator.createAnimation(0,300),u=t.animator.createAnimation(0,300);n.minHeight=o,n.maxHeight=c,n.minHeightAnim=l,n.maxHeightAnim=u,n.normY=E(t.animator,o,c),n.normControlY=E(t.animator,a,i),n.updateMinMax=function(t,r){var a=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=F(L(a,t,r)),n.maxHeight=F(D(a,t,r)),n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var i=F(B(a)),o=F(R(a));n.normControlY.updateDelta(i,o)}}(e,a,r),r.forEach(function(t){t.scaling=a})}return{items:r}}function wt(t,n,e){var r=document.createElement(n);return r.className=e,t&&t.appendChild(r),r}function bt(t,n,e,r,a,i){var o=r.key,c={enabled:!0},l=wt(t,"button","chart__buttons-button");function u(){!0===c.enabled?(l.className="chart__buttons-button",l.style.color="#FFF"):(l.className="chart__buttons-button unchecked",l.style.color=e.colors[o]),r.enabled=c.enabled,r.opacity.play(c.enabled?1:0),i&&i(c.enabled)}return l.textContent=e.names[o],l.style.backgroundColor=e.colors[o],l.style.borderColor=e.colors[o],function(t,n,e){var r=null,a=!1;function i(){r=setTimeout(function(){e&&e(),a=!0},200)}function o(){clearTimeout(r)}t.addEventListener("click",function(){clearTimeout(r),a?a=!1:n&&n()}),t.addEventListener("mousedown",i),t.addEventListener("mousemove",o),t.addEventListener("touchstart",i),t.addEventListener("touchmove",o)}(l,function(){if(1===a.activeButtonsCount&&c.enabled)return l.className="chart__buttons-button error",void setTimeout(function(){l.className="chart__buttons-button"},140);c.enabled=!c.enabled,u()},function(){c.show(),a.hideAllExcept(l)}),c.hide=function(t){c.enabled&&t!==l&&(c.enabled=!1,u())},c.show=function(){c.enabled||(c.enabled=!0,u())},c}function At(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ct(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function kt(t,n){var e=t.title,i=t.columns,o=t.types,c=t.colors,l=t.names,u=(t.percentage,t.stacked,t.y_scaled,Ct(i)),s=Ct(u[0]),d=(s[0],s.slice(1)),h=u.slice(1);return{title:e,columns:i,types:o,colors:c,names:l,xAxis:d.map(function(t){return n=t,e=new Date(n),{dayString:"".concat(r[e.getMonth()]," ").concat(e.getDate()),dateString:"".concat(a[e.getDay()],", ").concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),dateStringTitle:"".concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),date:e,timestamp:n};var n,e}),yAxis:xt(h,t,n)}}var St=function(t,n,e){var r,a,o,c,d,h=t.container,f=t.index,m=n.title||t.title||"Chart #".concat(f+1),v={left:0,top:0},p=wt(h,"div","chart"),y=function(t,n,e){var r=wt(t,"div","chart__header"),a=wt(r,"h2","chart__header-title");a.textContent=n;var i=wt(r,"h3","chart__header-sub-title");return i.textContent=e,{setTitle:function(t){a.textContent=t},setSubtitle:function(t){i.textContent=t}}}(p,m,""),x=wt(p,"canvas","chart__canvas"),w=x.getContext("2d"),b={index:f,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:(c=[],{opts:d={active:!1},createAnimation:function(t,n,e){var r=new T(t,n,e);return c.push(r),r},removeAnimation:function(t){var n=c.indexOf(t);n>-1&&c.splice(n,1)},updateAnimations:function(){for(var t=c.length,n=!1,e=0;e<t;e++)n=c[e].update()||n;return d.active=n,n}}),mouse:pt({config:b,canvas:x,canvasBounds:v}),popup:{},normalizeForControl:function(t){return o(t)}},A=kt(n,b),C=(A.columns,A.types,A.colors),k=(A.names,A.xAxis),S=A.yAxis;b.scaleX=function(t,n){var e=n-t;function r(n){return(n-t)/e}return r.de=function(n){return n*e+t},r}(0,k.length-1)(1),b.popup=function(t,n,e,r,a){var i=wt(t,"div","chart__popup");function o(t){var n,o=a.items.filter(function(t){return t.enabled}).map(function(n){return r=e.colors[n.key],a=e.names[n.key],i=n.items[t],'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(a,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(r,'">').concat(i,"</span>\n\t\t</span>\n\t");var r,a,i});o.length&&(i.innerHTML="\n\t\t\t".concat((n=r[t].dateString,'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(n,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')),"\n\t\t\t").concat(o.join(""),"\n\t\t"))}return{element:i,update:o,show:function(t){o(t),i.style.opacity=1,i.style.visibility="visible"},hide:function(){i.style.opacity=0,i.style.visibility="hidden"}}}(p,0,n,k,S),S.items.length>1&&function(t,n,e,r,a){var i={activeButtonsCount:r.items.length,hideAllExcept:function(t){l.forEach(function(n){n.hide(t)})},hideAll:function(){l.forEach(function(t){t.hide()})}},o=wt(t,"div","chart__buttons"),c={},l=r.items.map(function(t){return c[t[0]]=bt(o,0,e,t,i,function(t){i.activeButtonsCount+=t?1:-1,i.activeButtonsCount<1||a&&a()})})}(p,b.animator,n,S,function(){E(!0)});var E=M(function(){var t=H.range[0],n=H.range[1],e=t*k.length,r=e<0?0:Math.floor(e),a=n*k.length,i=a>k.length?k.length:Math.ceil(a);S.items.forEach(function(t){return t.scaling.updateMinMax(r,i)}),y.setSubtitle("".concat(k[r].dateStringTitle," - ").concat(k[i-1].dateStringTitle))},100),H=function(t,n){var e={range:[.7,1],count:0,scale:0,updateRange:function(r,a){var i=a-r,o=t.length*i;o>5&&(e.count=1+(o>>0),e.scale=i,e.range[0]=r,e.range[1]=a,n&&n())}};return e}(k,function(){return E()});function F(){var t=x.getBoundingClientRect(),n=t.width*i,e=t.height*i;v.width=n,v.height=l,v.left=t.left,v.right=t.right,v.top=t.top,v.bottom=t.bottom,v.x=t.x,v.y=t.y,r===n&&a===e||(b.shouldChartUpdate=!0,b.shouldControlUpdate=!0,o=function(t,n){var e=n-t,r={};function a(n){return r[n]||(r[n]=(n-t)/e),r[n]}return a.de=function(n){return n*e+t},a.data={delta:e,min:t,max:n},a}(s,v.width-s),r=x.width=v.width,a=x.height=l)}function _(t){F(),b.animator.updateAnimations()&&(b.shouldChartUpdate=!0),b.shouldChartUpdate&&(b.shouldChartUpdate=!1,w.clearRect(0,0,r,l-g),b.zoomed&&O?O(u,0,r-s,l-g):Y(u,0,r-s,l-g)),b.shouldControlUpdate&&(b.shouldControlUpdate=!1,w.clearRect(0,l-g,r,g),B(u,l-g,r-s,g))}b.popup.element.addEventListener("click",function(){O&&(b.zoomed=!b.zoomed,b.popup.hide(),b.shouldChartUpdate=!0)}),window.addEventListener("resize",F),H.updateRange(H.range[0],H.range[1]),F(),E(!0);var P={config:b,control:H,ctx:w,colors:C,xAxis:k,yAxis:S,canvasBounds:v,normYKey:"normY"},Y=e.drawChartFabric(P),O=e.drawZoomedChartFabric&&e.drawZoomedChartFabric(P),B=e.drawControlFabric(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){At(t,n,e[n])})}return t}({},P,{normYKey:"normControlY"}));return _(),{render:_,control:H,update:function(){b.shouldChartUpdate=!0,b.shouldControlUpdate=!0}}},Tt={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},Et={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"};var Ht,Mt,Ft,_t,Pt=[];function Yt(t){var n=Object.keys(t.types).map(function(n){return t.types[n]}).filter(function(t){return"x"!==t});if(!n.length)throw new Error("DataSet error. No columns for chart");if(n.length>50)throw new Error("DataSet error. Supported up to 50 columns on one graph.");var e=n[0];if(vt[e]){if(t.y_scaled){if("line"!==e||2!==n.length)throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.");return vt.dual_line}return vt[e]}return fabric}Ht=function(t){Pt.forEach(function(t){return t.update()})},Mt=document.querySelector("html"),Ft=!0,document.addEventListener("darkmode",function(){var t=Mt.className.toLowerCase().split(" ").indexOf("dark")>-1;Ft=!t,b.THEME=Ft?Tt:Et,Ht&&Ht(Ft)}),document.dispatchEvent(new Event("darkmode")),window.Graph=(_t=0,{render:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={container:t||document.body,index:_t++,title:e.title||void 0},a=Yt(n),i=St(r,n,a);return k.add(function(){i.render()}),Pt.push(i),i}})}]);