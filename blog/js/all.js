/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-shiv-cssclasses-addtest-testprop-testallprops-domprefixes-css_boxsizing
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e});for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(document.documentMode===undefined||document.documentMode>7)});

/*! jQuery.tinyscroller - v0.2.3 -  4/8/2012
 * https://github.com/Takazudo/jQuery.tinyscroller
 * Copyright (c) 2012 "Takazudo" Takeshi Takatsudo; Licensed MIT */(function(){var a=Array.prototype.slice,b=function(a,b){return function(){return a.apply(b,arguments)}},c=Object.prototype.hasOwnProperty,d=function(a,b){function e(){this.constructor=a}for(var d in b)c.call(b,d)&&(a[d]=b[d]);return e.prototype=b.prototype,a.prototype=new e,a.__super__=b.prototype,a};(function(c,e,f){var g,h,i,j,k,l;return k={},h=c(e),g=c(f),l=Math.round,j=Math.min,i=Math.abs,k.yOf=function(a){var b;b=0;while(a.offsetParent)b+=a.offsetTop,a=a.offsetParent;return b},k.isHash=function(a){return/^#.+$/.test(a)},k.getWhereTo=function(a){var b;return b=c(a),b.data("scrollto")||b.attr("href")},k.calcY=function(a){var b,d;if(c.type(a)==="number")return a;if(c.type(a)==="string"){if(!k.isHash(a))return!1;b=g.find(a)}else b=c(a);return b.size()?(d=k.yOf(b[0]),d):null},k.scrollTop=function(){return g.scrollTop()||f.documentElement.scrollTop||f.body.scrollTop||e.pageYOffset||0},k.ua=function(){var a,b,d;return b={},d=navigator.userAgent,a=function(a){var e;return e=!1,c.each(a,function(a,c){var f;return f=new RegExp(c,"i"),Boolean(d.match(f))?(b[c]=!0,e=!0):b[c]=!1,!0}),e},a(["iphone","ipod","ipad"]||a(["android"]))&&(b.mobile=!0),b}(),k.Event=function(){function b(){this._callbacks={}}return b.prototype.bind=function(a,b){var c,d,e,f,g;c=a.split(" ");for(f=0,g=c.length;f<g;f++)d=c[f],(e=this._callbacks)[d]||(e[d]=[]),this._callbacks[d].push(b);return this},b.prototype.one=function(a,b){return this.bind(a,function(){return this.unbind(a,arguments.callee),b.apply(this,arguments)})},b.prototype.trigger=function(){var b,c,d,e,f,g,h;b=1<=arguments.length?a.call(arguments,0):[],d=b.shift(),e=(h=this._callbacks)!=null?h[d]:void 0;if(!e)return;for(f=0,g=e.length;f<g;f++){c=e[f];if(c.apply(this,b)===!1)break}return this},b.prototype.unbind=function(a,b){var c,d,e,f,g;if(!a)return this._callbacks={},this;e=(g=this._callbacks)!=null?g[a]:void 0;if(!e)return this;if(!b)return delete this._callbacks[a],this;for(d=0,f=e.length;d<f;d++){c=e[d];if(c!==b)continue;e=e.slice(),e.splice(d,1),this._callbacks[a]=e;break}return this},b}(),k.Scroller=function(a){function f(a){this._stepToNext=b(this._stepToNext,this),a&&this.option(a),this._handleMobile(),f.__super__.constructor.apply(this,arguments)}return d(f,a),f.prototype.options={speed:30,maxStep:2e3,slowdownRate:3,changehash:!0,userskip:!0,selector:"a[href^=#]:not(.apply-noscroll)"},f.prototype._handleMobile=function(){return k.ua.mobile?(this.options.userskip=!1,this):this},f.prototype._invokeScroll=function(){var a=this;return this.trigger("scrollstart",this._endY,this._reservedHash),this._scrollDefer.then(function(){return a.options.changehash&&a._reservedHash&&(location.hash=a._reservedHash),a.trigger("scrollend",a._endY,a._reservedHash)},function(){return a.trigger("scrollcancel",a._endY,a._reservedHash)}).always(function(){return a._reservedHash&&(a._reservedHash=null),a._scrollDefer=null}),this._stepToNext(),this},f.prototype._stepToNext=function(){var a,b,c,d,f,m,n,o,p,q,r,s;return o=k.scrollTop(),d=this.options,d.userskip&&this._prevY&&o!==this._prevY?(e.scrollTo(0,this._endY),(q=this._scrollDefer)!=null&&q.resolve(),this._prevY=null,this):(this._endY>o?(a=g.height(),p=h.height(),m=l((a-o-p)/d.slowdownRate),n=l((this._endY-o)/d.slowdownRate),b=j(m,n),f=j(b,d.maxStep),f<2&&(f=2)):f=-j(i(l((this._endY-o)/d.slowdownRate)),d.maxStep),c=o+f,e.scrollTo(0,c),this._prevY=c,this._cancelNext?(this._cancelNext=!1,(r=this._scrollDefer)!=null&&r.reject()):i(o-self._endY)<=1||k.scrollTop()===o?(e.scrollTo(0,this._endY),this._prevY=null,(s=this._scrollDefer)!=null&&s.resolve()):setTimeout(this._stepToNext,d.speed),this)},f.prototype.scrollTo=function(a){var b;return k.isHash(a)&&(this._reservedHash=a),b=k.calcY(a),b===!1?this:(this._endY=b,this._scrollDefer=c.Deferred(),this._invokeScroll(),this._scrollDefer)},f.prototype.stop=function(){return this._scrollDefer&&(this._cancelNext=!0),this},f.prototype.option=function(a){return a?(c.extend(this.options,a),this._handleMobile(),this):this.options},f.prototype.live=function(a){var b;return a=a||this.options.selector,b=this,g.on("click",a,function(a){return a.preventDefault(),b.scrollTo(k.getWhereTo(this))}),this},f}(k.Event),c.tinyscroller=new k.Scroller,c.fn.tinyscrollable=function(){return this.each(function(){var a;return a=c(this),a.data("tinyscrollerattached")?this:(a.on("click",function(a){return a.preventDefault(),c.tinyscroller.scrollTo(k.getWhereTo(this))}),a.data("tinyscrollerattached",!0))})},c.TinyscrollerNs=k,c.Tinyscroller=k.Scroller})(jQuery,this,this.document)}).call(this);
/*!
 * Davis - http://davisjs.com - JavaScript Routing - 0.8.1
 * Copyright (C) 2011 Oliver Nightingale
 * MIT Licensed
 */Davis=function(a){var b=new Davis.App;return a&&a.call(b),Davis.$(function(){b.start()}),b},window.jQuery?Davis.$=jQuery:Davis.$=null,Davis.supported=function(){return typeof window.history.pushState=="function"},Davis.noop=function(){},Davis.extend=function(a){a(Davis)},Davis.version="0.8.1",Davis.utils=function(){if(Array.prototype.every)var a=function(a,b){return a.every(b,arguments[2])};else var a=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=arguments[2];for(var f=0;f<d;f++)if(f in c&&!b.call(e,c[f],f,c))return!1;return!0};if(Array.prototype.forEach)var b=function(a,b){return a.forEach(b,arguments[2])};else var b=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=arguments[2];for(var f=0;f<d;f++)f in c&&b.call(e,c[f],f,c)};if(Array.prototype.filter)var c=function(a,b){return a.filter(b,arguments[2])};else var c=function(a,b){if(a===void 0||a===null)throw new TypeError;var c=Object(a),d=c.length>>>0;if(typeof b!="function")throw new TypeError;var e=[],f=arguments[2];for(var g=0;g<d;g++)if(g in c){var h=c[g];b.call(f,h,g,c)&&e.push(h)}return e};var d=function(a,b){var b=b||0;return Array.prototype.slice.call(a,b)};return{every:a,forEach:b,filter:c,toArray:d}}(),Davis.listener=function(){var a={A:function(a){return a.hostname!==window.location.hostname||a.protocol!==window.location.protocol},FORM:function(a){var b=document.createElement("a");return b.href=a.action,this.A(b)}},b=function(b){return a[b.nodeName.toUpperCase()]?a[b.nodeName.toUpperCase()](b):!0},c=function(a){return function(c){if(b(this))return!0;var d=new Davis.Request(a.call(Davis.$(this)));return Davis.location.assign(d),!1}},d=c(function(){var a=this;return{method:"get",fullPath:this.attr("href"),title:this.attr("title"),delegateToServer:function(){window.location.pathname=a.attr("href")}}}),e=c(function(){var a=this;return{method:this.attr("method"),fullPath:decodeURI(this.serialize()?[this.attr("action"),this.serialize()].join("?"):this.attr("action")),title:this.attr("title"),delegateToServer:function(){a.submit()}}});this.listen=function(){Davis.$(document).delegate(this.settings.formSelector,"submit",e),Davis.$(document).delegate(this.settings.linkSelector,"click",d)},this.unlisten=function(){Davis.$(document).undelegate(this.settings.linkSelector,"click",d),Davis.$(document).undelegate(this.settings.formSelector,"submit",e)}},Davis.event=function(){var a={};this.bind=function(b,c){return(a[b]=a[b]||[]).push(c),this},this.trigger=function(b){var c=Davis.utils.toArray(arguments,1),d=a[b];if(!d)return this;for(var e=0,f=d.length;e<f;++e)d[e].apply(this,c);return this}},Davis.logger=function(){function a(){return"["+Date()+"]"}function b(b){var c=Davis.utils.toArray(b);return c.unshift(a()),c.join(" ")}var c=function(a){return function(){window.console&&console[a](b(arguments))}},d=c("error"),e=c("info"),f=c("warn");this.logger={error:d,info:e,warn:f}},Davis.Route=function(){var a=/:([\w\d]+)/g,b="([^/]+)",c=function(c,d,e){var f=function(){if(d instanceof RegExp)return d;var c=d.replace(a,b);return d.lastIndex=0,new RegExp("^"+c+"$","gi")},g=function(){return c instanceof RegExp?c:new RegExp("^"+c+"$","i")},h=function(){var b=[],c;while(c=a.exec(d))b.push(c[1]);return b};this.paramNames=h(),this.path=f(),this.method=g(),this.callback=e};return c.prototype.match=function(a,b){return this.reset(),this.method.test(a)&&this.path.test(b)},c.prototype.reset=function(){this.method.lastIndex=0,this.path.lastIndex=0},c.prototype.run=function(a){this.reset();var b=this.path.exec(a.path);if(b){b.shift();for(var c=0;c<b.length;c++)a.params[this.paramNames[c]]=b[c]}return this.callback.call(a,a)},c.prototype.toString=function(){return[this.method,this.path].join(" ")},c}(),Davis.router=function(){this.route=function(b,c,d){var e=function(c,d){var e=new Davis.Route(b,c,d);return a.push(e),e};return arguments.length==1?e:e(c,d)},this.get=this.route("get"),this.post=this.route("post"),this.put=this.route("put"),this.del=this.route("delete"),this.state=this.route("state"),this.trans=function(a,b){if(b)var c=[a,decodeURIComponent(Davis.$.param(b))].join("?");else var c=a;var d=new Davis.Request({method:"state",fullPath:c,title:""});Davis.location.assign(d)},this.filter=function(a){return function(){var c=/.+/;if(arguments.length==1)var d=/.+/,e=arguments[0];else if(arguments.length==2)var d=arguments[0],e=arguments[1];var f=new Davis.Route(c,d,e);return b[a].push(f),f}},this.lookupFilter=function(a){return function(c,d){return Davis.utils.filter(b[a],function(a){return a.match(c,d)})}},this.before=this.filter("before"),this.after=this.filter("after"),this.lookupBeforeFilter=this.lookupFilter("before"),this.lookupAfterFilter=this.lookupFilter("after");var a=[],b={before:[],after:[]};this.lookupRoute=function(b,c){return Davis.utils.filter(a,function(a){return a.match(b,c)})[0]}},Davis.history=function(){function c(){return"state"in window.history?!0:b}function d(b){a.push(b)}function e(a){window.addEventListener("popstate",a,!0)}function f(a){return function(d){d.state&&d.state._davis?a(new Davis.Request(d.state._davis)):(c()&&a(Davis.Request.forPageLoad()),b=!0)}}function g(a){return{_davis:a}}function h(a){d(a),e(f(a))}function i(b){history.pushState(g(b.toJSON()),b.title,b.location()),Davis.utils.forEach(a,function(a){a(b)})}function j(b){history.replaceState(g(b.toJSON()),b.title,b.location()),Davis.utils.forEach(a,function(a){a(b)})}function k(){return window.location.pathname+(window.location.search?window.location.search:"")}var a=[],b=!1;return{onChange:h,current:k,assign:i,replace:j}}(),Davis.location=function(){function b(b){a=b}function c(){return a.current()}function d(b){a.assign(b)}function e(b){a.replace(b)}function f(b){a.onChange(b)}var a=Davis.history;return{setLocationDelegate:b,current:c,assign:d,replace:e,onChange:f}}(),Davis.Request=function(){var a=function(b){var c=Davis.$.extend({},{title:"",fullPath:"",method:"get"},b),d=this;this.raw=c,this.params={},this.title=c.title,this.queryString=c.fullPath.split("?")[1],this._staleCallback=function(){},this.queryString&&Davis.utils.forEach(this.queryString.split("&"),function(a){var b=a.split("=")[0],c=a.split("=")[1],e=/^(\w+)\[(\w+)?\](\[\])?/,f;if(f=e.exec(b)){var g=f[1],b=f[2],h=!!f[3],i=d.params[g]||{};h?(i[b]=i[b]||[],i[b].push(c),d.params[g]=i):!b&&!h?(i=d.params[g]||[],i.push(c),d.params[g]=i):(i[b]=c,d.params[g]=i)}else d.params[b]=c}),c.fullPath=c.fullPath.replace(/^https?:\/\/.+?\//,"/"),this.method=(this.params._method||c.method).toLowerCase(),this.path=c.fullPath.replace(/\?.+$/,"").replace(/^https?:\/\/[^\/]+/,""),this.fullPath=c.fullPath,this.delegateToServer=c.delegateToServer||Davis.noop,this.isForPageLoad=c.forPageLoad||!1,a.prev&&a.prev.makeStale(this),a.prev=this};return a.prototype.redirect=function(b){Davis.location.replace(new a({method:"get",fullPath:b,title:this.title}))},a.prototype.whenStale=function(a){this._staleCallback=a},a.prototype.makeStale=function(a){this._staleCallback.call(a,a)},a.prototype.location=function(){return this.method==="get"?this.fullPath:""},a.prototype.toString=function(){return[this.method.toUpperCase(),this.path].join(" ")},a.prototype.toJSON=function(){return{title:this.raw.title,fullPath:this.raw.fullPath,method:this.raw.method}},a.forPageLoad=function(){return new this({method:"get",fullPath:Davis.location.current(),title:document.title,forPageLoad:!0})},a.prev=null,a}(),Davis.App=function(){function a(){this.running=!1,this.boundToInternalEvents=!1,this.use(Davis.listener),this.use(Davis.event),this.use(Davis.router),this.use(Davis.logger)}return a.prototype.configure=function(a){a.call(this.settings,this.settings)},a.prototype.use=function(a){a.apply(this,Davis.utils.toArray(arguments,1))},a.prototype.helpers=function(a){for(property in a)a.hasOwnProperty(property)&&(Davis.Request.prototype[property]=a[property])},a.prototype.settings={linkSelector:"a",formSelector:"form",throwErrors:!0,handleRouteNotFound:!1,generateRequestOnPageLoad:!1},a.prototype.start=function(){var a=this;if(this.running)return;if(!Davis.supported()){this.trigger("unsupported");return}var b=function(a){return function(b){var c=b.run(a,a);return typeof c=="undefined"||c}},c=function(c){return Davis.utils.every(a.lookupBeforeFilter(c.method,c.path),b(c))},d=function(d){if(c(d)){a.trigger("lookupRoute",d);var e=a.lookupRoute(d.method,d.path);if(e){a.trigger("runRoute",d,e);try{e.run(d),a.trigger("routeComplete",d,e)}catch(f){a.trigger("routeError",d,e,f)}Davis.utils.every(a.lookupAfterFilter(d.method,d.path),b(d))}else a.trigger("routeNotFound",d)}else a.trigger("requestHalted",d)},e=function(){a.bind("runRoute",function(b){a.logger.info("runRoute: "+b.toString())}).bind("routeNotFound",function(b){!a.settings.handleRouteNotFound&&!b.isForPageLoad&&(a.stop(),b.delegateToServer()),a.logger.warn("routeNotFound: "+b.toString())}).bind("start",function(){a.logger.info("application started")}).bind("stop",function(){a.logger.info("application stopped")}).bind("routeError",function(b,c,d){if(a.settings.throwErrors)throw d;a.logger.error(d.message,d.stack)}),Davis.location.onChange(function(a){d(a)}),a.boundToInternalEvents=!0};this.boundToInternalEvents||e(),this.listen(),this.trigger("start"),this.running=!0,this.settings.generateRequestOnPageLoad&&d(Davis.Request.forPageLoad())},a.prototype.stop=function(){this.unlisten(),this.trigger("stop"),this.running=!1},a}();
/*! jQuery.LazyJaxDavis - v0.1.1 -  4/6/2012
 * https://github.com/Takazudo/jQuery.LazyJaxDavix
 * Copyright (c) 2012 "Takazudo" Takeshi Takatsudo; Licensed MIT */(function(){var a=Array.prototype.slice,b=Object.prototype.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};(function(b,d,e){var f,g,h,i,j;return i={},f=b(e),j=i.wait=function(a){return b.Deferred(function(b){return setTimeout(function(){return b.resolve()},a)})},b.support.pushstate=b.isFunction(d.history.pushState),i.isToId=function(a){return a.charAt(0)==="#"?!0:!1},i.trimGetVals=function(a){return a.replace(/\?.*/,"")},i.tryParseAnotherPageAnchor=function(a){var b,c;return i.isToId(a)?!1:a.indexOf("#")===-1?!1:(b=a.match(/^([^#]+)#(.+)/),c={path:b[1]},b[2]&&(c.hash="#"+b[2]),c)},i.filterStr=function(a,c){var d;return d=a.match(c),d&&d[1]?b.trim(d[1]):null},i.logger=d.Davis?(new Davis.logger).logger:null,i.info=h=function(a){if(!i.logger)return;return i.logger.info(a)},i.error=g=function(a){if(!i.logger)return;return i.logger.error(a)},i.fetchPage=function(){var a;return a=null,function(c,d){var e;return e=b.Deferred(function(e){return a&&a.abort(),d=b.extend({url:c},d),a=b.ajax(d).then(function(b){return a=null,e.resolve(b)},function(a,b){var c;return c=b==="abort",e.reject(c)})}).promise(),e.abort=function(){return a!=null?a.abort():void 0},e}}(),i.Event=function(){function b(){this._callbacks={}}return b.prototype.bind=function(a,b){var c,d,e,f,g;c=a.split(" ");for(f=0,g=c.length;f<g;f++)d=c[f],(e=this._callbacks)[d]||(e[d]=[]),this._callbacks[d].push(b);return this},b.prototype.one=function(a,b){return this.bind(a,function(){return this.unbind(a,arguments.callee),b.apply(this,arguments)})},b.prototype.trigger=function(){var b,c,d,e,f,g,h;b=1<=arguments.length?a.call(arguments,0):[],d=b.shift(),e=(h=this._callbacks)!=null?h[d]:void 0;if(!e)return;for(f=0,g=e.length;f<g;f++){c=e[f];if(c.apply(this,b)===!1)break}return this},b.prototype.unbind=function(a,b){var c,d,e,f,g;if(!a)return this._callbacks={},this;e=(g=this._callbacks)!=null?g[a]:void 0;if(!e)return this;if(!b)return delete this._callbacks[a],this;for(d=0,f=e.length;d<f;d++){c=e[d];if(c!==b)continue;e=e.slice(),e.splice(d,1),this._callbacks[a]=e;break}return this},b}(),i.HistoryLogger=function(){function a(){this._items=[],this._items.push(location.pathname.replace(/#.*/,""))}return a.prototype.push=function(a){return this._items.push(a),this},a.prototype.last=function(){var a;return a=this._items.length,a?this._items[a-1]:null},a.prototype.isToSamePageRequst=function(a){var b;return b=this.last(),b?a===b?!0:!1:!1},a.prototype.size=function(){return this._items.length},a}(),i.Page=function(a){function j(a,c,d,e,f,g){var i,k,l,m=this;this.request=a,this.routed=d,this.router=e,this.hash=g,j.__super__.constructor.apply(this,arguments),this.config=b.extend({},this.config,c),this.options=b.extend(!0,{},this.options,f),b.type(this.config.path)==="string"?this.path=this.config.path:this.path=this.request.path,b.each(h,function(a,c){return b.each(m.config,function(a,b){return c!==a?!0:m.bind(c,b)})}),i=((k=this.config)!=null?k.anchorhandler:void 0)||((l=this.options)!=null?l.anchorhandler:void 0),i&&(this._anchorhandler=i),this.bind("pageready",function(){if(!m.hash)return;return m._anchorhandler.call(m,m.hash)})}var h;return c(j,a),h=["fetchstart","fetchsuccess","fetchabort","fetchfail","pageready","anchorhandler"],j.prototype.options={ajxoptions:{dataType:"text",cache:!0},expr:null,updatetitle:!0,title:null},j.prototype.router=null,j.prototype.config=null,j.prototype._text=null,j.prototype._anchorhandler=function(a){var b;return a?(b=f.find(a).offset().top,d.scrollTo(0,b),this):this},j.prototype.fetch=function(){var a,c,d,e,f,g,h=this;a=null,d=this.request.path,c=((e=this.options)!=null?e.ajaxoptions:void 0)||{};if((f=this.config)!=null?f.method:void 0)c.type=this.config.method;if((g=this.request)!=null?g.params:void 0)c.data=b.extend(!0,{},c.data,this.request.params);return this._fetchDefer=b.Deferred(function(b){return a=i.fetchPage(d,c).then(function(a){return h._text=a,h.updatetitle(),b.resolve()},function(a){return b.reject({aborted:a})}).always(function(){return h._fetchDefer=null})}),this._fetchDefer.abort=function(){return a.abort()},this._fetchDefer},j.prototype.abort=function(){var a;return(a=this._fetchDefer)!=null&&a.abort(),this},j.prototype.rip=function(a){var b,c,d,e;return this._text?a?(b=(d=this.options)!=null?(e=d.expr)!=null?e[a]:void 0:void 0,b?(c=i.filterStr(this._text,b),c||g("ripper could not find the text for key: "+a),c):null):this._text:null},j.prototype.updatetitle=function(){var a;return this.options.updatetitle?(a=null,!a&&this._text&&(a=this.rip("title")),a?(e.title=a,this):this):this},j}(i.Event),i.Router=function(d){function e(a){if(!(this instanceof arguments.callee))return new i.Router(a);e.__super__.constructor.apply(this,arguments),this.history=new i.HistoryLogger,a.call(this,this),this.options.davis&&this._setupDavis(),this.firePageready(!this.options.firereadyonstart),this.fireTransPageready()}return c(e,d),e.prototype.options={ajaxoptions:{dataType:"text",cache:!0,type:"GET"},expr:{title:/<title[^>]*>([^<]*)<\/title>/,content:/<!-- LazyJaxDavis start -->([\s\S]*)<!-- LazyJaxDavis end -->/},davis:{linkSelector:"a:not([href^=#]):not(.apply-nolazy)",formSelector:"form:not(.apply-nolazy)",throwErrors:!1,handleRouteNotFound:!0},minwaittime:0,updatetitle:!0,firereadyonstart:!0,ignoregetvals:!1},e.prototype._createPage=function(a,b,c,d){var e,f;return e={expr:this.options.expr,updatetitle:this.options.updatetitle},this.options.anchorhandler&&(e.anchorhandler=this.options.anchorhandler),(b!=null?b.ajaxoptions:void 0)?e.ajaxoptions=b.ajaxoptions:this.options.ajaxoptions&&(e.ajaxoptions=this.options.ajaxoptions),!d&&(a!=null?a.path:void 0)&&(f=i.tryParseAnotherPageAnchor(a.path),d=f.hash||null),new i.Page(a,b,c,this,e,d)},e.prototype._setupDavis=function(){var a,c,d=this;if(!b.support.pushstate)return;return c=this,a=function(a){return a.bind("pageready",function(){return c._findWhosePathMatches("page",a.path),c.trigger("everypageready"),c.fireTransPageready()}),c.history.push(a.path),c.fetch(a)},this.davis=new Davis(function(){var d,e;return d=this,c.pages&&b.each(c.pages,function(e,f){var g;if(b.type(f.path)==="regexp")return;return g=(f.method||"get").toLowerCase(),d[g](f.path,function(b){var d;if(c.history.isToSamePageRequst(b.path))return;return d=c._createPage(b,f,!0),a(d)}),!0}),(e=c.davisInitializer)!=null?e.call(d):void 0}),this.options.davis.handleRouteNotFound&&this.davis.bind("routeNotFound",function(b){var d,e,f,g,h,j;if(i.isToId(b.path)){c.trigger("toid",b.path);return}h=i.tryParseAnotherPageAnchor(b.path),e=h.hash||null,g=h.path||b.path;if(c.history.isToSamePageRequst(g))return;return d=c._findWhosePathMatches("page",g)||null,j=d?!0:!1,f=c._createPage(b,d,j,e),a(f)}),this.davis.configure(function(a){return b.each(d.options.davis,function(b,c){return a[b]=c,!0})}),this._tweakDavis(),this},e.prototype._tweakDavis=function(){var b,c=this;return b=this.davis.logger.warn,h=this.davis.logger.info,this.davis.logger.warn=function(){var d;return d=1<=arguments.length?a.call(arguments,0):[],d[0].indexOf("routeNotFound")!==-1?(d[0]=d[0].replace(/routeNotFound/,"unRouted"),h.apply(c.davis.logger,d)):b.apply(c.davis.logger,d)},this},e.prototype._findWhosePathMatches=function(a,c,d){var e,f,h,j=this;if(a==="page"){if(!this.pages||!this.pages.length)return null;e=this.pages}else if(a==="transRoutes"){if(!this.transRoutes||!this.transRoutes.length)return null;e=this.transRoutes,d=!0}return f=[],h=i.trimGetVals(c),b.each(e,function(a,e){var g;j.options.ignoregetvals||e.ignoregetvals?g=h:g=c;if(b.type(e.path)==="regexp"){if(!e.path.test(g))return!0;f.push(e);if(d)return!0}if(e.path===g){f.push(e);if(d)return!0}return!0}),!d&&f.length>1?(g("2 or more expr was matched about: "+c),b.each(f,function(a,b){return g("dumps detected page configs - path:"+b.path)}),!1):d?f:f[0]||null},e.prototype.fetch=function(a){var c=this;return b.Deferred(function(d){return a.trigger("fetchstart",a),c.trigger("everyfetchstart",a),b.when(a.fetch(),j(c.options.minwaittime)).then(function(){return a.trigger("fetchsuccess",a),c.trigger("everyfetchsuccess",a),d.resolve()},function(b){return b.aborted?(a.trigger("fetchabort",a),c.trigger("everyfetchabort",a)):(a.trigger("fetchfil",a),c.trigger("everyfetchfail",a))})}).promise()},e.prototype.stop=function(){var a;return(a=this.davis)!=null&&a.stop(),this},e.prototype.navigate=function(a,b){var c;return this.davis?(c=new Davis.Request({method:b||"get",fullPath:a,title:""}),Davis.location.assign(c)):location.href=a,this},e.prototype.firePageready=function(a){var b,c;if((c=this.pages)!=null?c.length:void 0)b=this._findWhosePathMatches("page",location.pathname),b&&typeof b.pageready=="function"&&b.pageready();return a?this:(this.trigger("everypageready"),this)},e.prototype.fireTransPageready=function(){var a,c;if((c=this.transRoutes)!=null?c.length:void 0){a=this._findWhosePathMatches("transRoutes",location.pathname);if(!a.length)return this;b.each(a,function(a,b){return typeof b.pageready=="function"?b.pageready():void 0})}return this},e.prototype.route=function(a){return this.pages=a,this},e.prototype.routeTransparents=function(a){return this.transRoutes=a,this},e.prototype.routeDavis=function(a){return this.davisInitializer=a,this},e.prototype.option=function(a){return a?this.options=b.extend(!0,{},this.options,a):this.options},e}(i.Event),b.LazyJaxDavisNs=i,b.LazyJaxDavis=i.Router})(jQuery,this,this.document)}).call(this);

(function(){$.tinyscroller.option({changehash:!1}),$.tinyscroller.live(),$(function(){var a,b,c,d;return a=function(){return window.disqus_shortname="takazudolog",window.disqus_identifier=location.href,window.disqus_url=location.href,window.disqus_script="embed.js",function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="http://"+disqus_shortname+".disqus.com/"+disqus_script,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}()},b=function(){var a,b;return a=!1,b=function(){return function(a,b,c){var d,e=a.getElementsByTagName(b)[0];if(a.getElementById(c))return;d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/all.js#appId=212934732101925&xfbml=1",e.parentNode.insertBefore(d,e)}(document,"script","facebook-jssdk"),a=!0},function(c){return a?FB.XFBML.parse(c[0]):b()}}(),c=function(){var a,b;return a=!1,window.___gcfg={lang:"en"},b=function(){return $.getScript("https://apis.google.com/js/plusone.js"),a=!0},function(c){if(!a)return b();if(gapi)return gapi.plusone.go()}}(),d=function(){return $.getScript("https://platform.twitter.com/widgets.js")},$.fn.disableCurrentLinks=function(){var a;return a="state-disabled",this.each(function(){return $("a",this).each(function(){var b;return b=$(this),b.attr("href")===location.pathname?b.addClass(a):b.removeClass(a)})})},$.fn.handleCodeHighlight=function(){return this.each(function(){var a,b,c,d,e;return a=$(this),b=$("pre",a),d=b.html(),e=d.split(/\n\r?/),e=$.map(e,function(a){return"<div class='line'>"+(a||" ")+"</div>"}),b.html(e.join("")),c=$("<table><tr><td></td></tr></table>"),c.find("td").append(b),a.append(c)})},$.LazyJaxDavis(function(e){var f,g,h;return g=$("#lazyjaxdavisroot"),f=$("body"),h=null,e.option({ignoregetvals:!0,anchorhandler:function(a){return $.tinyscroller.scrollTo(a)}}),e.bind("everyfetchstart",function(a){return g.css("opacity",.6),h=$.tinyscroller.scrollTo(0)}),e.bind("everyfetchsuccess",function(a){return g.css("opacity",1),$.when(h).done(function(){var b;return b=$(a.rip("content")).hide(),g.empty().append(b),$.when(b.fadeIn()).done(function(){return a.trigger("pageready"),h=null})})}),e.bind("everypageready",function(){return f.disableCurrentLinks(),g.find(".highlight").handleCodeHighlight()}),e.routeTransparents([{path:/^\/blog\/entry\/.+/,pageready:function(){return d(),c(),b(g.find(".fb-likewrap")),a()}}])})})}).call(this);