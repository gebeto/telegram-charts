!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=window.devicePixelRatio,o=4*a,c=2*o,l=343*a,u=16*a,s=2*u,d=2*Math.PI,h=(Math.PI,"".concat(11*a,"px sans-serif")),f=40*a,m=7*a,g=43*a,v=29*a,p=v/2,y=5*a,x=1*a,w=2*a,b={THEME:{}};function A(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors),i=t.normYKey,a=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.scaleX),o={items:[],width:0,opacity:1},c=0;return{shouldBulkRecalculate:function(t){var n=!1;if(c!==e.canvas.width)return c=e.canvas.width,!0;for(var r=0;r<t.items.length&&!(n=t.items[r].opacity.inProgress||!t.items[r].calculated);r++);return n},shouldRecalculate:function(t){return!0},calculate:function(t,r,c,l,u,s){t.key;var d=t.items,h=t.opacity,f=t.scaling[i];if(o.opacity=h.value,o.opacity){o.opacity<1&&(n.shouldControlUpdate=!0),o.items=[],o.width=a*u;var m=u-o.width;o.width=a*m;for(var g=d.length,v=a*m,p=v/2,y=e.canvas.width+g,x=-v,w=0;w<g;w++){r[w]+=d[w]*o.opacity;var b=c+v*w+p,A=l+s-f(r[w])*s,C=f(d[w])*s*o.opacity;if(!(b<x)){if(b>y)break;o.items.push([b,A,A+C])}}t.calculated=!0}},draw:function(t,n,i,a,c){var l=t.key,u=o.items;if(o.opacity){var s=u.length;e.save(),e.beginPath();for(var d=0;d<s;d++)e.moveTo(u[d][0],u[d][1]),e.lineTo(u[d][0],u[d][2]);e.lineWidth=o.width,e.strokeStyle=r[l],e.stroke(),e.restore()}}}}var C,k,S=(C=[],k={time:0,add:function(t){C.push(t)},remove:function(t){var n=C.indexOf(t);n>-1&&C.splice(n,1)}},requestAnimationFrame(function t(n){k.time=n;for(var e=0;e<C.length;e++)C[e](n);requestAnimationFrame(t)}),k);function T(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var E=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAnimation=r,this.fromValue=n,this.toValue=n,this.value=n,this.startTime=0,this.duration=e,this.delay=0,this.inProgress=!1}var n,e,r;return n=t,(e=[{key:"playFrom",value:function(t,n){this.value=t,this.play(n)}},{key:"play",value:function(t){this.inProgress=!0,this.startTime=S.time,this.toValue=t,this.fromValue=this.value}},{key:"update",value:function(){var t=this._update();return t&&this.onAnimation&&this.onAnimation(),t}},{key:"_update",value:function(){if(this.value===this.toValue)return this.inProgress=!1,!1;this.inProgress=!0;var t=(S.time-this.startTime-this.delay)/this.duration;t<0&&(t=0),t>1&&(t=1);var n=-t*(t-2);return this.value=this.fromValue+(this.toValue-this.fromValue)*n,!0}}])&&T(n.prototype,e),r&&T(n,r),t}();function H(t,n,e){var r=t.createAnimation(n,300),i=t.createAnimation(e-n,300);function a(t){return(t-r.value)/i.value}return a.updateDelta=function(t,n){n,r.play(t),i.play(n-t)},a}var M=function(t,n){var e;return function(){var r=arguments;e||(t.apply(this,r),e=!0,setTimeout(function(){return e=!1},n))}},F=function(t,n){var e;return function(r){var i=this;r?t.apply(i,null):e||(e=!0,setTimeout(function(){t.apply(i,null),e=!1},n))}};var _=function(t){return t===1/0||t===-1/0?0:t},Y=function(t){return Math.min.apply(null,t)},O=function(t){return Math.max.apply(null,t)},P=function(t,n,e){return Math.min.apply(null,t.slice(n,1+e))},L=function(t,n,e){return Math.max.apply(null,t.slice(n,1+e))},B=function(t){return Math.min.apply(null,t.map(Y))},R=function(t){return Math.max.apply(null,t.map(O))},D=function(t,n,e){return Math.min.apply(null,t.map(function(t){return P(t,n,e)}))},z=function(t,n,e){return Math.max.apply(null,t.map(function(t){return L(t,n,e)}))},j=function(t){var n,e,r=new Array(t[0].length).fill(0);for(n=0;n<t.length;n++)for(e=0;e<t[n].length;e++)r[e]+=t[n][e];return r};function X(t,n,e,r,i,o,c){t.mouse.mouse;var l=t.popup,u=t.scaleX,s={x:0,y:0,width:0,height:0,indexOld:-1,index:-1},d={count:0,chunkScale:t.scaleX,chunkSize:u*s.width,chunkSizeDiv2:u*s.width/2,onCanvasOld:!1,onCanvas:!1,isLeft:!0,current:s},h=!1,f=M(function(u,h){if(d.onCanvasOld=d.onCanvas,d.onCanvas=e.canvas===h.target||e.canvas.nextSibling.contains(h.target),(!d.onCanvas&&d.onCanvasOld||"BUTTON"===h.target.tagName)&&(-1!==s.index&&(t.shouldChartUpdate=!0),s.index=-1,l.hide()),d.onCanvas&&h.target===e.canvas&&((d.onCanvas||!0===d.onCanvasOld&&!1===d.onCanvas)&&(s.indexOld=s.index,u.newY>s.y&&u.newY<s.y+s.height?(s.index=d.count-o((s.width+s.x-u.newX)/d.chunkSize+c),s.index<d.count&&s.index>=0?l.show(s.index):(s.index=-1,l.hide())):(s.index=-1,l.hide())),s.indexOld!==s.index)){if(t.shouldChartUpdate=!0,-1!==s.index){var f=l.element.getBoundingClientRect(),m=(s.index*d.chunkSize+s.x)/a,g=i(d)/a,v=r(d)/a;m-f.width-v<0?d.isLeft=!1:m+f.width+v>n.width/a&&(d.isLeft=!0),d.isLeft?l.element.style.left="".concat(m-f.width-g,"px"):l.element.style.left="".concat(m+v,"px")}s.indexOld=s.index}},50);return t.mouse.addListener("move",function(t,n){h&&f(t,n)}),t.mouse.addListener("down",function(t,n){h=!0,f(t,n)}),t.mouse.addListener("up",function(t,n){h=!1}),d}function U(t,n){var e=Math.abs(t);if(e>1e9&&n)return(t/1e9).toFixed(2)+"B";if(e>1e6&&n)return(t/1e6).toFixed(2)+"M";if(e>1e3&&n)return(t/1e3).toFixed(1)+"K";if(e>1){for(var r=e.toFixed(0),i=t<0?"-":"",a=0;a<r.length;a++)i+=r.charAt(a),(r.length-1-a)%3==0&&(i+=" ");return i}return t.toString()}function N(t){t.control;var n=t.ctx,e=(t.normX,t.normY,t.colors,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=e.textAlign||"left";return function(t,e,i,o,c,l,u){var s=Math.round(t.scaling.minHeightAnim.value),d=Math.round(t.scaling.maxHeightAnim.value),f=t.opacity.value,m=(c+c/6/2)/6,g=Math.ceil((d-s)/6);n.save(),n.beginPath(),n.fillStyle=t.scaling.color||b.THEME.gridLines,n.globalAlpha=u?f/2:t.scaling.color?.8:.5,n.font=h,n.textBaseline="bottom",n.textAlign=r;for(var v=0;v<6;v++){l&&(n.moveTo(e,i+c-v*m),n.lineTo(e+o,i+c-v*m));var p=U(s+g*v,!0);n.fillText(p,e+3,i+c-v*m-y)}n.lineWidth=1*a,l&&(n.globalAlpha=.1,n.strokeStyle=b.THEME.gridLines,n.stroke()),n.restore()}}var W=[0,1,2,4,4,8,8,8,8,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];function K(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors,t.forBars),i=n.scaleX,a=0;return function(t,n,o,c,l){var u=t.length;a=r?i*(c-i*c):i*c,r&&(c-=a),e.save(),e.fillStyle=b.THEME.gridLines,e.font=h,e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.5;for(var s=c*i,d=(Math.floor(s),Math.ceil(f/s)),m=d+1,g=W[d],v=W[m],y=(s/(f/d)-1)*d,x=0;x<u;x+=g){var w=x%v;e.globalAlpha=0===w?.5:y>.5?.5:y;var A=n+(r?a/2:0)+a*x,C=o+p;A<-f||A>e.canvas.width+f||e.fillText(t[x].dayString,A,C)}e.restore()}}function V(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function I(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,i=A(t),a=function(t){var n=t.canvasBounds,e=t.config,r=t.ctx,i=(t.norm,t.colors,t.normYKey),a=X(e,n,r,function(t){return t.chunkSize+(t.chunkSizeDiv2>10?10:t.chunkSizeDiv2)},function(t){return t.chunkSizeDiv2>10?10:t.chunkSizeDiv2},Math.ceil,0);return function(t,n,e,o,c,l){a.current.width=c,a.current.height=l,a.current.x=e,a.current.y=o,t.key;var u=t.items,s=(t.opacity,t.scaling[i]),d=c-a.chunkSize;if(a.count=u.length,a.chunkSize=a.chunkScale*d,a.chunkSizeDiv2=a.chunkSize/2,a.current.index>-1&&a.current.index<a.count){var h=e+a.chunkSize*a.current.index;r.save(),r.strokeStyle=b.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.2,r.beginPath(),r.rect(h,o+l,a.chunkSize,-s(n[a.current.index])*l),r.fillStyle=b.THEME.gridLines,r.fill(),r.stroke(),r.restore()}}}(t),o=K(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){V(t,n,e[n])})}return t}({},t,{forBars:!0})),l=N(t,{textAlign:"left"});return function(t,u,s,d){for(var h=t-s*n.range[0]/n.scale,f=s/n.scale,g=d-m-c,p=u+w,y=new Array(r.length).fill(0),x=0;x<e.items.length;x++)i.calculate(e.items[x],y,h,p,f,g-v),i.draw(e.items[x],y,h,p,f,g-v);a(e.items[0],y,h,p,f,g-v),o(r,h,u+g-v,f,v),l(e.items[0],t,p,s,g-v,!0)}}var J=0,q=1,Z=2,G=3,Q=10*a,$=Q/2,tt=10*a,nt=2*tt,et=tt/2,rt=tt-tt/3,it=2*a,at=(tt-it)/2;function ot(t,n){var e={controlsBounds:{start:{x:0,y:0,width:0,height:0},end:{x:0,y:0,width:0,height:0}}},r=e.controlsBounds,i=J,o=[n.range[0],n.range[1]],c=14*a,l=0,u=0,s=u-l,d=0,h=0;return t.mouse.addListener("move",function(e){if(i!==J){t.shouldChartUpdate=!0,t.shouldControlUpdate=!0;var r=t.normalizeForControl(e.newX)-t.normalizeForControl(e.x),a=o[0]+r,c=o[1]+r;if(i===q)a>0?n.updateRange(a,o[1]):n.updateRange(0,o[1]);else if(i===Z)c<1?n.updateRange(o[0],c):n.updateRange(o[0],1);else if(a>=0&&c<=1)n.updateRange(a,c);else if(c>1){var l=1-o[1];n.updateRange(o[0]+l,o[1]+l)}else if(a<0){var u=0-o[0];n.updateRange(o[0]+u,o[1]+u)}}}),t.mouse.addListener("down",function(e){var a=c,l=c,u=r.start,s=r.end;e.y>u.y&&e.y<u.y+u.height&&(t.shouldChartUpdate=!0,t.shouldControlUpdate=!0,o=[n.range[0],n.range[1]],e.newX>u.x-a&&e.newX<u.x+u.width&&e.newY>u.y-a&&e.newY<u.y+u.height+a?i=q:e.newX>s.x&&e.newX<s.x+s.width+l&&e.newY>s.y-l&&e.newY<s.y+s.height+l?i=Z:e.newX>u.x+u.width&&e.newX<s.x&&e.newY>s.y-c&&e.newY<s.y+s.height+c&&(i=G))}),t.mouse.addListener("up",function(t){i=J}),e.updateControlBounds=function(t,n){d=n,h=t},e.renderControl=function(t,e,i,a,o){l=e+a*n.range[0],u=e+a*n.range[1],s=u-l,r.start.x=l-tt,r.start.y=i,r.start.width=tt,r.start.height=o,r.end.x=u,r.end.y=i,r.end.width=tt,r.end.height=o,t.save(),t.globalAlpha=.6,t.fillStyle=b.THEME.scrollBackground,t.beginPath(),t.moveTo(l-1,i),t.lineTo(l-1,i+o),t.arcTo(h,i+o,h,i+o-tt,et),t.arcTo(h,i,l-1,i,et),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u+1,i),t.lineTo(u+1,i+o),t.arcTo(h+d,i+o,h+d,i+o-tt,et),t.arcTo(h+d,i,u,i,et),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=b.THEME.scrollSelector,t.beginPath(),t.rect(l,i,s,x),t.rect(l,i+o-x,s,x),t.fill(),t.beginPath();var c=l;t.moveTo(c,i),t.lineTo(c,i+o),t.arcTo(c-tt,i+o,c-tt,i+o-tt,rt),t.arcTo(c-tt,i,c,i,rt),t.closePath(),t.fill(),t.beginPath(),t.moveTo(u,i),t.lineTo(u,i+o),t.arcTo(u+tt,i+o,u+tt,i+o-tt,rt),t.arcTo(u+tt,i,u,i,rt),t.closePath(),t.fill(),t.restore(),t.save(),t.beginPath(),t.fillStyle="#FFFFFF",t.rect(l-at,i+o/2-$,-it,Q),t.rect(u+at,i+o/2-$,it,Q),t.fill(),t.restore()},e}function ct(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors),i=t.normYKey,o=(t.yAxis,((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).lineWidth||2)*a),c=n.scaleX,l={items:[],opacity:1},u=0;return{shouldBulkRecalculate:function(t){return!0},shouldRecalculate:function(t){var n=t.opacity.inProgress||!t.calculated||e.canvas.width!==u;return u=e.canvas.width,n},calculate:function(t,r,a,o,u){t.key;var s=t.items,d=t.opacity,h=t.scaling[i],f=d.value;if(l.opacity=d.value,f){f<1&&(n.shouldControlUpdate=!0),l.items=[];var m=s.length,g=c*o,v=a+u;l.items.push([r+0,v-h(s[0])*u]);for(var p=1;p<m;p++){var y=r+g*p,x=v-h(s[p])*u;x>v&&(n.shouldControlUpdate=!0),y<-g||y>e.canvas.width+g||l.items.push([y,x])}t.calculated=!0}},draw:function(t,n,i,a,c){var u=l.items,s=l.opacity,d=t.key;if(s){var h=u.length;e.save(),e.beginPath(),e.moveTo(u[0][0],u[0][1]);for(var f=1;f<h;f++)e.lineTo(u[f][0],u[f][1]);e.lineWidth=o,e.strokeStyle=r[d],e.globalAlpha=s,e.lineJoin="round",e.stroke(),e.restore()}}}}function lt(t){var n=t.canvasBounds,e=t.config,r=t.ctx,i=(t.norm,t.colors),a=t.normYKey,c=X(e,n,r,function(t){return o},function(t){return o},Math.round,1);return function(t,n,e,l,u){c.current.width=l,c.current.height=u,c.current.x=n,c.current.y=e;var s=t.key,h=t.items,f=t.opacity,m=t.scaling[a],g=f.value;if(g&&(c.count=h.length,c.chunkSize=c.chunkScale*l,c.current.index>-1&&c.current.index<c.count)){var v=n+c.chunkSize*c.current.index;r.save(),r.strokeStyle=b.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.1,r.beginPath(),r.moveTo(v,e),r.lineTo(v,e+u),r.stroke(),r.restore(),r.save(),r.beginPath(),r.globalAlpha=g,r.arc(v,e+u-m(h[c.current.index])*u,o,0,d),r.lineWidth=w,r.strokeStyle=i[s],r.fillStyle=b.THEME.background,r.fill(),r.stroke(),r.restore()}}}function ut(t){var n=t.ctx,e=t.config,r=(t.canvasBounds,t.control),i=t.yAxis,a=(t.xAxis,i.items.map(function(n){return ct(t,{lineWidth:1})})),o=ot(e,r),c=o.updateControlBounds,l=o.renderControl;return function(t,e,r,o){c(t,r),r-=nt,t+=tt;for(var u=0;u<i.items.length;u++)a[u].shouldRecalculate(i.items[u])&&a[u].calculate(i.items[u],t,e+3,r,o-6),a[u].draw(i.items[u],t,e+3,r,o-6);l(n,t,e,r,o)}}function st(t){var n=t.config,e=(t.control,t.ctx),r=(t.norm,t.colors),i=t.normYKey,a=(t.yAxis,arguments.length>1&&void 0!==arguments[1]&&arguments[1],n.scaleX);return function(t,o,c,l,u,s,d){var h=t.key,f=t.items,m=t.opacity,g=(0,t.scaling[i])(1),v=m.value;if(v){v<1&&(n.shouldControlUpdate=!0);var p=f.length;e.save(),e.beginPath();var y=a*s,x=new Array(p).fill(0),w=c[0],b=u+d-g*Math.round(o[0]/w)*d;e.moveTo(l,b),x[0]=l+0*y;for(var A=1;A<p;A++){var C=Math.round(o[A]/c[A]);x[A]=l+y*A;var k=u+d-g*C*d;e.lineTo(x[A],k)}for(var S=p-1;S>=0;S--){o[S]+=f[S]*v;var T=u+d-g*Math.round(o[S]/c[S])*d;e.lineTo(x[S],T)}e.closePath(),e.fillStyle=r[h],e.fill(),e.restore()}}}function dt(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,i=K(t),a=st(t),l=function(t){var n=t.canvasBounds,e=t.config,r=t.ctx,i=(t.norm,t.colors,t.normYKey,X(e,n,r,function(t){return o},function(t){return o},Math.round,1));return function(t,n,e,a,o){if(i.current.width=a,i.current.height=o,i.current.x=n,i.current.y=e,i.count=t.length,i.chunkSize=i.chunkScale*a,i.current.index>-1&&i.current.index<i.count){var c=n+i.chunkSize*i.current.index;r.save(),r.strokeStyle=b.THEME.gridLines,r.lineWidth=1,r.globalAlpha=.2,r.beginPath(),r.moveTo(c,e),r.lineTo(c,e+o),r.stroke(),r.restore()}}}(t),u=N(t,{textAlign:"left"});return function(t,s,d,h){for(var f=t-d*n.range[0]/n.scale,g=d/n.scale,p=h-m-c,y=s+o+w,x=new Array(r.length).fill(0),b=0;b<e.items.length;b++)for(var A=0;A<e.items[b].items.length;A++)x[A]+=e.items[b].items[A]*e.items[b].opacity.value;for(var C=0;C<r.length;C++)x[C]/=100;for(var k=new Array(r.length).fill(0),S=0;S<e.items.length;S++)a(e.items[S],k,x,f,y,g,p-v);l(r,f,y,g,p-v),i(r,f,s+p-v,g,v),u(e.items[0],t,y,d,p-v,!0)}}var ht={bar:{drawChartFabric:function(t){return I(t)},drawControlFabric:function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,i=n.control,a=n.yAxis,o=n.xAxis,c=a.items.map(function(t){return A(n)}),l=ot(r,i),u=l.updateControlBounds,s=l.renderControl,d=new Array(o.length),function(t,n,r,i){u(t,r),r-=nt,t+=tt,d.fill(0);for(var o=c[0].shouldBulkRecalculate(a),l=0;l<a.items.length;l++)o&&c[l].calculate(a.items[l],d,t,n+3,r,i-6),c[l].draw(a.items[l],t,n+3,r,i-6);s(e,t,n,r,i)};var n,e,r,i,a,o,c,l,u,s,d}},area:{drawChartFabric:function(t){return dt(t)},drawControlFabric:function(t){return e=(n=t).ctx,r=n.config,n.canvasBounds,i=n.control,a=n.yAxis,o=n.xAxis,c=st(n),l=ot(r,i),u=l.updateControlBounds,s=l.renderControl,function(t,n,r,i){u(t,r),r-=nt,t+=tt;for(var l=new Array(o.length).fill(0),d=0;d<a.items.length;d++)for(var h=0;h<a.items[d].items.length;h++)l[h]+=a.items[d].items[h]*a.items[d].opacity.value;for(var f=0;f<o.length;f++)l[f]/=100;for(var m=new Array(o.length).fill(0),g=0;g<a.items.length;g++)c(a.items[g],m,l,t,n+3,r,i-6);s(e,t,n,r,i)};var n,e,r,i,a,o,c,l,u,s}},line:{drawChartFabric:function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,i=ct(t),a=lt(t),l=K(t),u=N(t,{textAlign:"left"});return function(t,s,d,h){var f=t-d*n.range[0]/n.scale,g=d/n.scale,p=h-m-c,y=s+o+w;l(r,f,s+p-v,g,v),u(e.items[0],t,y,d,p-v,!0);for(var x=0;x<e.items.length;x++)i.calculate(e.items[x],f,y,g,p-v),i.draw(e.items[x],f,y,g,p-v);for(var b=0;b<e.items.length;b++)a(e.items[b],f,y,g,p-v)}}(t)},drawControlFabric:function(t){return ut(t)}},dual_line:{drawChartFabric:function(t){return function(t){t.ctx,t.config;var n=t.control,e=t.yAxis,r=t.xAxis,i=N(t,{textAlign:"left"}),a=N(t,{textAlign:"right"}),l=K(t),u=ct(t),s=lt(t);return function(t,d,h,f){var g=t-h*n.range[0]/n.scale,p=h/n.scale,y=f-m-c,x=d+o+w;l(r,g,d+y-v,p,v);var b=!0;e.items[0].enabled&&(i(e.items[0],t,x,h,y-v,b),b=!1),e.items[1].enabled&&(a(e.items[1],t+h,x,-h,y-v,b),b=!1);for(var A=0;A<e.items.length;A++)u.calculate(e.items[A],g,x,p,y-v),u.draw(e.items[A],g,x,p,y-v);for(var C=0;C<e.items.length;C++)s(e.items[C],g,x,p,y-v)}}(t)},drawControlFabric:function(t){return ut(t)}}};function ft(t){t.canvas;var n=t.canvasBounds,e=function(t){var n={},e={},r={x:0,y:0,xRaw:0,yRaw:0,newX:0,newY:0,newXRaw:0,newYRaw:0,isHolding:!1};return t.forEach(function(t){n[t]=[],e[t]=function(e,r){for(var i=0;i<n[t].length;i++)n[t][i](e,r)}}),{mouse:r,addListener:function(t,e){n[t].push(e)},dispatch:function(t,n){if(!e[t])throw Error("Unknown event");e[t](r,n)}}}(["move","enter","leave","down","up"]),r=e.mouse;function i(t){r.xRaw=t.clientX-n.left,r.yRaw=t.clientY-n.top,r.x=r.xRaw*a,r.y=r.yRaw*a,r.newXRaw=r.xRaw,r.newYRaw=r.yRaw,r.newX=r.x,r.newY=r.y,e.dispatch("down",t)}function o(t){r.newXRaw=t.clientX-n.left,r.newYRaw=t.clientY-n.top,r.newX=r.newXRaw*a,r.newY=r.newYRaw*a,e.dispatch("move",t)}function c(t){r.isHolding=!1,e.dispatch("up",t)}return document.addEventListener("mousedown",i),document.addEventListener("mousemove",o),document.addEventListener("mouseup",c),document.addEventListener("touchstart",function(t){i(t.touches[0])}),document.addEventListener("touchmove",function(t){o(t.touches[0])},{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),document.addEventListener("selectstart",function(t){return!1}),{mouse:r,addListener:e.addListener}}function mt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function gt(t,n,e){var r=t.map(function(t){var r=mt(t),i=r[0],a=r.slice(1),o={opacity:e.animator.createAnimation(1,300),key:i,scaling:{},enabled:!0,items:a};return n.y_scaled&&(o.scaling.color=n.colors[o.key],o.scaling.minHeight=_(Y(o.items)),o.scaling.maxHeight=_(O(o.items)),o.scaling.minHeightAnim=e.animator.createAnimation(0,300),o.scaling.maxHeightAnim=e.animator.createAnimation(0,300),o.scaling.normY=H(e.animator,o.scaling.minHeight,o.scaling.maxHeight),o.scaling.normControlY=H(e.animator,o.scaling.minHeight,o.scaling.maxHeight),o.scaling.updateMinMax=function(t,n){o.scaling.minHeight=_(P(o.items,t,n)),o.scaling.maxHeight=_(L(o.items,t,n)),o.scaling.minHeightAnim.play(o.scaling.minHeight),o.scaling.maxHeightAnim.play(o.scaling.maxHeight),o.scaling.normY.updateDelta(o.scaling.minHeight,o.scaling.maxHeight)}),o});if(!n.y_scaled){var i={};n.percentage?function(t,n,e){var r=t.animator.createAnimation(0,300),i=t.animator.createAnimation(100,300);n.minHeight=0,n.maxHeight=100,n.minHeightAnim=r,n.maxHeightAnim=i,n.normY=H(t.animator,0,100),n.normControlY=H(t.animator,0,100),n.updateMinMax=function(t,n){}}(e,i):n.stacked?function(t,n,e){var r=e.map(function(t){return t.items}),i=_(O(j(r))),a=L(j(r),0,i),o=t.animator.createAnimation(0,300),c=t.animator.createAnimation(0,300);n.minHeight=0,n.maxHeight=a,n.minHeightAnim=o,n.maxHeightAnim=c,n.normY=H(t.animator,0,a),n.normControlY=H(t.animator,0,i),n.updateMinMax=function(t,r){var i=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=0;try{n.maxHeight=_(L(j(i),t,r))}catch(t){return}n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var a=_(O(j(i)));n.normControlY.updateDelta(0,a)}}(e,i,r):function(t,n,e){var r=e.map(function(t){return t.items}),i=_(B(r)),a=_(R(r)),o=B(r,i,a),c=R(r,i,a),l=t.animator.createAnimation(0,300),u=t.animator.createAnimation(0,300);n.minHeight=o,n.maxHeight=c,n.minHeightAnim=l,n.maxHeightAnim=u,n.normY=H(t.animator,o,c),n.normControlY=H(t.animator,i,a),n.updateMinMax=function(t,r){var i=e.filter(function(t){return t.enabled}).map(function(t){return t.items});n.minHeight=_(D(i,t,r)),n.maxHeight=_(z(i,t,r)),n.minHeightAnim.play(n.minHeight),n.maxHeightAnim.play(n.maxHeight),n.normY.updateDelta(n.minHeight,n.maxHeight);var a=_(B(i)),o=_(R(i));n.normControlY.updateDelta(a,o)}}(e,i,r),r.forEach(function(t){t.scaling=i})}return{items:r}}function vt(t,n,e){var r=document.createElement(n);return r.className=e,t&&t.appendChild(r),r}function pt(t,n,e,r,i,a){var o=r.key,c={enabled:!0},l=vt(t,"button","chart__buttons-button");function u(){!0===c.enabled?(l.className="chart__buttons-button",l.style.color="#FFF"):(l.className="chart__buttons-button unchecked",l.style.color=e.colors[o]),r.enabled=c.enabled,r.opacity.play(c.enabled?1:0),a&&a(c.enabled)}return l.textContent=e.names[o],l.style.backgroundColor=e.colors[o],l.style.borderColor=e.colors[o],function(t,n,e){var r=null,i=!1;function a(){r=setTimeout(function(){e&&e(),i=!0},200)}function o(){clearTimeout(r)}t.addEventListener("click",function(){clearTimeout(r),i?i=!1:n&&n()}),t.addEventListener("mousedown",a),t.addEventListener("mousemove",o),t.addEventListener("touchstart",a),t.addEventListener("touchmove",o)}(l,function(){if(1===i.activeButtonsCount&&c.enabled)return l.className="chart__buttons-button error",void setTimeout(function(){l.className="chart__buttons-button"},140);c.enabled=!c.enabled,u()},function(){c.show(),i.hideAllExcept(l)}),c.hide=function(t){c.enabled&&t!==l&&(c.enabled=!1,u())},c.show=function(){c.enabled||(c.enabled=!0,u())},c}function yt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function xt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function wt(t,n){var e=t.title,a=t.columns,o=t.types,c=t.colors,l=t.names,u=(t.percentage,t.stacked,t.y_scaled,xt(a)),s=xt(u[0]),d=(s[0],s.slice(1)),h=u.slice(1);return{title:e,columns:a,types:o,colors:c,names:l,xAxis:d.map(function(t){return n=t,e=new Date(n),{dayString:"".concat(r[e.getMonth()]," ").concat(e.getDate()),dateString:"".concat(i[e.getDay()],", ").concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),dateStringTitle:"".concat(e.getDate()," ").concat(r[e.getMonth()]," ").concat(e.getFullYear()),date:e,timestamp:n};var n,e}),yAxis:gt(h,t,n)}}var bt=function(t,n,e){var r,i,o,c,d,h=t.container,f=t.index,m=n.title||t.title||"Chart #".concat(f+1),v={left:0,top:0},p=vt(h,"div","chart"),y=function(t,n,e){var r=vt(t,"div","chart__header"),i=vt(r,"h2","chart__header-title");i.textContent=n;var a=vt(r,"h3","chart__header-sub-title");return a.textContent=e,{setTitle:function(t){i.textContent=t},setSubtitle:function(t){a.textContent=t}}}(p,m,""),x=vt(p,"canvas","chart__canvas"),w=x.getContext("2d"),b={index:f,shouldChartUpdate:!0,shouldControlUpdate:!0,animator:(c=[],{opts:d={active:!1},createAnimation:function(t,n,e){var r=new E(t,n,e);return c.push(r),r},removeAnimation:function(t){var n=c.indexOf(t);n>-1&&c.splice(n,1)},updateAnimations:function(){for(var t=c.length,n=!1,e=0;e<t;e++)n=c[e].update()||n;return d.active=n,n}}),mouse:ft({config:b,canvas:x,canvasBounds:v}),popup:{},normalizeForControl:function(t){return o(t)}},A=wt(n,b),C=(A.columns,A.types,A.colors),k=(A.names,A.xAxis),S=A.yAxis;b.scaleX=function(t,n){var e=n-t;function r(n){return(n-t)/e}return r.de=function(n){return n*e+t},r}(0,k.length-1)(1),b.popup=function(t,n,e,r,i){var a=vt(t,"div","chart__popup");function o(t){var n,o=i.items.filter(function(t){return t.enabled}).map(function(n){return r=e.colors[n.key],i=e.names[n.key],a=n.items[t],'\n\t\t<span class="chart__popup-item">\n\t\t\t<span class="chart__popup-item-title">'.concat(i,'</span>\n\t\t\t<span class="chart__popup-item-value" style="color: ').concat(r,'">').concat(a,"</span>\n\t\t</span>\n\t");var r,i,a});o.length&&(a.innerHTML="\n\t\t\t".concat((n=r[t].dateString,'\n\t\t<strong class="chart__popup-header">\n\t\t\t<span class="chart__popup-header-title">'.concat(n,'</span>\n\t\t\t<span class="chart__popup-header-icon"></span>\n\t\t</strong>\n\t')),"\n\t\t\t").concat(o.join(""),"\n\t\t"))}return{element:a,update:o,show:function(t){o(t),a.style.opacity=1,a.style.visibility="visible"},hide:function(){a.style.opacity=0,a.style.visibility="hidden"}}}(p,0,n,k,S),S.items.length>1&&function(t,n,e,r,i){var a={activeButtonsCount:r.items.length,hideAllExcept:function(t){l.forEach(function(n){n.hide(t)})},hideAll:function(){l.forEach(function(t){t.hide()})}},o=vt(t,"div","chart__buttons"),c={},l=r.items.map(function(t){return c[t[0]]=pt(o,0,e,t,a,function(t){a.activeButtonsCount+=t?1:-1,a.activeButtonsCount<1||i&&i()})})}(p,b.animator,n,S,function(){T(!0)});var T=F(function(){var t=H.range[0],n=H.range[1],e=t*k.length,r=e<0?0:Math.floor(e),i=n*k.length,a=i>k.length?k.length:Math.ceil(i);S.items.forEach(function(t){return t.scaling.updateMinMax(r,a)}),y.setSubtitle("".concat(k[r].dateStringTitle," - ").concat(k[a-1].dateStringTitle))},100),H=function(t,n){var e={range:[.7,1],count:0,scale:0,updateRange:function(r,i){var a=i-r,o=t.length*a;o>5&&(e.count=1+(o>>0),e.scale=a,e.range[0]=r,e.range[1]=i,n&&n())}};return e}(k,function(){return T()});function M(){var t=x.getBoundingClientRect(),n=t.width*a,e=t.height*a;v.width=n,v.height=l,v.left=t.left,v.right=t.right,v.top=t.top,v.bottom=t.bottom,v.x=t.x,v.y=t.y,r===n&&i===e||(b.shouldChartUpdate=!0,b.shouldControlUpdate=!0,o=function(t,n){var e=n-t,r={};function i(n){return r[n]||(r[n]=(n-t)/e),r[n]}return i.de=function(n){return n*e+t},i.data={delta:e,min:t,max:n},i}(s,v.width-s),r=x.width=v.width,i=x.height=l)}function _(t){M(),b.animator.updateAnimations()&&(b.shouldChartUpdate=!0),b.shouldChartUpdate&&(b.shouldChartUpdate=!1,w.clearRect(0,0,r,l-g),b.zoomed&&P?P(u,0,r-s,l-g):O(u,0,r-s,l-g)),b.shouldControlUpdate&&(b.shouldControlUpdate=!1,w.clearRect(0,l-g,r,g),L(u,l-g,r-s,g))}b.popup.element.addEventListener("click",function(){P&&(b.zoomed=!b.zoomed,b.popup.hide(),b.shouldChartUpdate=!0)}),window.addEventListener("resize",M),H.updateRange(H.range[0],H.range[1]),M(),T(!0);var Y={config:b,control:H,ctx:w,colors:C,xAxis:k,yAxis:S,canvasBounds:v,normYKey:"normY"},O=e.drawChartFabric(Y),P=e.drawZoomedChartFabric&&e.drawZoomedChartFabric(Y),L=e.drawControlFabric(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){yt(t,n,e[n])})}return t}({},Y,{normYKey:"normControlY"}));return _(),{render:_,control:H,update:function(){b.shouldChartUpdate=!0,b.shouldControlUpdate=!0}}},At={background:"#FFFFFF",scrollBackground:"#E2EEF9",scrollSelector:"#C0D1E1",gridLines:"#182D3B",tooltipArrow:"#D2D5D7",zoomText:"#108BE3"},Ct={background:"#1B232F",scrollBackground:"#304259",scrollSelector:"#56626D",gridLines:"#FFFFFF",tooltipArrow:"#D2D5D7",zoomText:"#48AAF0"};var kt,St,Tt,Et,Ht=[];function Mt(t){var n=Object.keys(t.types).map(function(n){return t.types[n]}).filter(function(t){return"x"!==t});if(!n.length)throw new Error("DataSet error. No columns for chart");if(n.length>50)throw new Error("DataSet error. Supported up to 50 columns on one graph.");var e=n[0];if(ht[e]){if(t.y_scaled){if("line"!==e||2!==n.length)throw new Error("DataSet error. 'y_scaled' is only used with exactly 2 'line' columns.");return ht.dual_line}return ht[e]}return fabric}kt=function(t){Ht.forEach(function(t){return t.update()})},St=document.querySelector("html"),Tt=!0,document.addEventListener("darkmode",function(){var t=St.className.toLowerCase().split(" ").indexOf("dark")>-1;Tt=!t,b.THEME=Tt?At:Ct,kt&&kt(Tt)}),document.dispatchEvent(new Event("darkmode")),window.Graph=(Et=0,{render:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={container:t||document.body,index:Et++,title:e.title||void 0},i=Mt(n),a=bt(r,n,i);return S.add(function(){a.render()}),Ht.push(a),a}})}]);