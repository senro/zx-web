/*!components/cordova/statusBar/setStatusBar.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/12
 * Time: 11:39
 * To change this template use File | Settings | File Templates.
 */
define('components/cordova/statusBar/setStatusBar', [], function (require, exports, module) {
    module.exports=[
        "StatusBar.backgroundColorByHexString('#000');"
    ].join("\n");

});
/*!components/util/deviceSetting.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 14:29
 * To change this template use File | Settings | File Templates.
 */
define('components/util/deviceSetting', ['components/cordova/statusBar/setStatusBar'], function (require, exports, module) {
    //设置app ios 顶部状态栏的背景色
    window.parent.postMessage(require('components/cordova/statusBar/setStatusBar'), '*');
});

/*!spm_modules/zepto/0.0.1/zepto.js*/
;define("spm_modules/zepto/0.0.1/zepto",[],function(t,e,n){var i=function(){function t(t){return null==t?String(t):V[H.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return N.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in k?k[t]:k[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||_[c(t)]?e:e+"px"}function h(t){var e,n;return M[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),M[t]=n),M[t]}function p(t){return"children"in t?O.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(T in e)n&&(o(e[T])||J(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),J(e[T])&&!J(t[T])&&(t[T]=[]),d(t[T],e[T],n)):e[T]!==x&&(t[T]=e[T])}function m(t,e){return null==e?E(t):E(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var x,T,E,S,j,C,P=[],O=P.slice,N=P.filter,A=window.document,M={},k={},_={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,L=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,F=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],Z=A.createElement("table"),I=A.createElement("tr"),W={tr:A.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:I,th:I,"*":A.createElement("div")},B=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},H=V.toString,X={},Y=A.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=Y).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&Y.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,a;return L.test(t)&&(i=E(A.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace($,"<$1></$2>")),e===x&&(e=D.test(t)&&RegExp.$1),e in W||(e="*"),a=W[e],a.innerHTML=""+t,i=E.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=E(i),E.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&D.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);i=X.qsa(A,t)}else{if(e(t))return E(A).ready(t);if(X.isZ(t))return t;if(J(t))i=s(t);else if(r(t))i=[t],t=null;else if(D.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return E(n).find(t);i=X.qsa(A,t)}}return X.Z(i,t)},E=function(t,e){return X.init(t,e)},E.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=U.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=function(t,e){return t!==e&&t.contains(e)},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=J,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},E.camelCase=j,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return N.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(O.apply(this,arguments))},ready:function(t){return B.test(A.readyState)&&A.body?t(E):A.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===x?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(N.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return E(C(this.concat(E(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e="object"==typeof t?E(t).filter(function(){var t=this;return P.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;E(this).empty().append(v(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===x?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)g(this,T,t[T]);else g(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=G[t]||t,e===x?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(F,"-$1").toLowerCase(),e);return null!==n?b(n):x},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(J(e)){var o={};return E.each(J(e)?e:[e],function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){S=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===x?y(this,""):(S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),void y(this,S.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!R.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var o,a=this[0];return r===x?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,v(this,r,e,a[t]()))})}}),q.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,r,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return E(t).remove();w(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),X.Z.prototype=E.fn,X.uniq=C,X.deserializeValue=b,E.zepto=X,E}();window.Zepto=i,void 0===window.$&&(window.$=i),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return w[t]||y&&b[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){if(d(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if(m(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=T),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=T),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(i),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?d(e,u,i,n):e.add(n,u)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",E="text/html",S=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var u=n.dataType,p=/\?.+=\?/.test(n.url);if("jsonp"==u||p)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var d,g=n.accepts[u],y={},b=function(t,e){y[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),T=x.setRequestHeader;if(r&&r.promise(x),n.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&b("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)b(v,n.headers[v]);if(x.setRequestHeader=b,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(d);var e,i=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==w){u=u||l(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=x.responseXML:"json"==u&&(e=S.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",x,n,r):a(e,x,n,r)}else s(x.statusText||null,x.status?"error":"abort",x,n,r)}},o(x,n)===!1)return x.abort(),s(null,"abort",x,n,r),x;if(n.xhrFields)for(v in n.xhrFields)x[v]=n.xhrFields[v];var E="async"in n?n.async:!0;x.open(n.type,n.url,E,n.username,n.password);for(v in y)T.apply(x,y[v]);return n.timeout>0&&(d=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n,r)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(i),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(i),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),c=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=t.match(/Windows Phone ([\d.]+)/),f=c&&t.match(/TouchPad/),h=t.match(/Kindle\/([\d.]+)/),p=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),m=t.match(/(BB10).*Version\/([\d.]+)/),v=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),b=t.match(/Firefox\/([\d.]+)/),w=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),x=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=x||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),u&&!s&&(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),l&&(e.wp=!0,e.version=l[1]),c&&(e.webos=!0,e.version=c[2]),f&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),m&&(e.bb10=!0,e.version=m[2]),v&&(e.rimtabletos=!0,e.version=v[2]),g&&(n.playbook=!0),h&&(e.kindle=!0,e.version=h[1]),p&&(n.silk=!0,n.version=p[1]),!p&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),b&&(n.firefox=!0,n.version=b[1]),w&&(n.ie=!0,n.version=w[1]),T&&(o||e.ios)&&(n.safari=!0,o&&(n.version=T[1])),x&&(n.webview=!0),e.tablet=!!(a||g||r&&!t.match(/Mobile/)||b&&t.match(/Tablet/)||w&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||u||c||d||m||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||b&&t.match(/Mobile/)||w&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(i),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},v=window.document,g=v.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(m,function(t,n){return g.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",b[a=d+"transition-property"]=b[s=d+"transition-duration"]=b[c=d+"transition-delay"]=b[u=d+"transition-timing-function"]=b[l=d+"animation-name"]=b[f=d+"animation-duration"]=b[p=d+"animation-delay"]=b[h=d+"animation-timing-function"]="",t.fx={off:r===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,v){var g,w,x,T={},E="",S=this,j=t.fx.transitionEnd,C=!1;if(r===e&&(r=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(r=0),"string"==typeof i)T[l]=i,T[f]=r+"s",T[p]=v+"s",T[h]=d||"linear",j=t.fx.animationEnd;else{w=[];for(g in i)y.test(g)?E+=g+"("+i[g]+") ":(T[g]=i[g],w.push(n(g)));E&&(T[o]=E,w.push(o)),r>0&&"object"==typeof i&&(T[a]=w.join(", "),T[s]=r+"s",T[c]=v+"s",T[u]=d||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,x)}else t(this).unbind(j,x);C=!0,t(this).css(b),m&&m.call(this)},r>0&&(this.bind(j,x),setTimeout(function(){C||x.call(S)},1e3*r+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=r&&setTimeout(function(){S.each(function(){x.call(this)})},0),this},g=null}(i),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(i),function(t){function e(e,i){var u=e[s],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=a(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[a(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0==this.length?void 0:e(this[0],i):this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(i),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var s=t.isFunction(n[i])&&n[i];a[r[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,a=s?[n]:arguments;e[r[0]+"With"](i,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(i,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){r=s},i[1^t][2].disable,i[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(i){var r,o,a,s=n.call(arguments),u=s.length,c=0,l=1!==u||i&&t.isFunction(i.promise)?u:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(u>1)for(r=new Array(u),o=new Array(u),a=new Array(u);u>c;++c)s[c]&&t.isFunction(s[c].promise)?s[c].promise().done(h(c,a,s)).fail(f.reject).progress(h(c,o,r)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(i),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,a,s,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,i=!0,s=o||0,o=0,a=u.length,r=!0;u&&a>s;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var i=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),r?a=u.length:n&&(o=i,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(a>=i&&--a,s>=i&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=c=n=void 0,this
},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||i&&!c||(e=e||[],e=[t,e.slice?e.slice():e],r?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}};return f}}(i),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=r(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return!(e&&!o(t,e)||n&&n.call(t,null,i)!==t)})}}(i),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,v,g,y=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(g=a(e,"down"))||o(e))&&(v=g?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in v.target?v.target:v.target.parentNode),s&&clearTimeout(s),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&g&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){if(h.last){if((g=a(t,"move"))&&!o(t))return;v=g?t:t.touches[0],i(),h.x2=v.pageX,h.y2=v.pageY,y+=Math.abs(h.x1-h.x2),b+=Math.abs(h.y1-h.y2)}}).on("touchend MSPointerUp pointerup",function(n){(!(g=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>b?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=b=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(i),function(t){function e(t){return"tagName"in t?t:t.parentNode}if(t.os.ios){var n,i={};t(document).bind("gesturestart",function(t){{var r=Date.now();r-(i.last||r)}i.target=e(t.target),n&&clearTimeout(n),i.e1=t.scale,i.last=r}).bind("gesturechange",function(t){i.e2=t.scale}).bind("gestureend",function(){i.e2>0?(0!=Math.abs(i.e1-i.e2)&&t(i.target).trigger("pinch")&&t(i.target).trigger("pinch"+(i.e1-i.e2>0?"In":"Out")),i.e1=i.e2=i.last=0):"last"in i&&(i={})}),["pinch","pinchIn","pinchOut"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}}(i),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(i),n.exports=i});
/*!spm_modules/cookie/0.0.1/cookie.js*/
;define("spm_modules/cookie/0.0.1/cookie",[],function(e,t,c){c.exports=function(e,t,c){function n(e,t){var c=30,n=new Date;n.setTime(n.getTime()+24*c*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()}function o(e){return document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}function i(e){var t=new Date;t.setTime(t.getTime()-1);var c=o(e);null!=c&&(document.cookie=e+"="+c+";expires="+t.toGMTString())}var r,s=t||"",a=c||"";switch(e){case"get":r=o(s);break;case"set":n(s,a);break;case"del":i(s)}return r||!1}});
/*!components/navigation/navigation.js*/
;define('components/navigation/navigation', ['spm_modules/zepto/0.0.1/zepto'], function (require, exports, module) {

    var $ = require('spm_modules/zepto/0.0.1/zepto');

    function domReady() {
       $('body').on('tap','.btn-refresh',function(){
           window.location.reload();
           return false;
       });
    }
    $(document).ready(domReady);

    var mainNavHtml="<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-person-buy\"></i>\r\n    集人购\r\n</a>\r\n<a href=\"#main_section\" data-target=\"section\">\r\n    <i class=\"icon icon-search-goods\"></i>\r\n    搜物\r\n</a>\r\n<a href=\"#searchToBuy_section\" data-target=\"section\">\r\n    <i class=\"icon icon-before-buy\"></i>\r\n    待购\r\n</a>\r\n<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-user-center\"></i>\r\n    个人中心\r\n</a>";
    var detailNavHtml="<a class=\"footer-btn-searchGoods\" href=\"#layout_book_article\">\r\n    <i class=\"icon icon-search-goods\"></i>\r\n    搜物\r\n</a>\r\n<a href=\"#\" data-target=\"back\">\r\n    <i class=\"icon icon-noText icon-leftArrow\"></i>\r\n</a>\r\n<a href=\"#layout_book_article\">\r\n    <i class=\"icon icon-noText icon-rightArrow\"></i>\r\n</a>\r\n<a href=\"#main_section\" data-target=\"section\">\r\n    <i class=\"icon icon-noText icon-home\"></i>\r\n</a>\r\n<a href=\"#\" class=\"btn-refresh\">\r\n    <i class=\"icon icon-noText icon-refresh\"></i>\r\n</a>";

    module.exports={
        mainNavHtml:mainNavHtml,
        detailNavHtml:detailNavHtml
    };

});
/*!spm_modules/iscroll/0.0.1/iscroll.js*/
;define("spm_modules/iscroll/0.0.1/iscroll",[],function(o,t,r){!function(o,t){function e(o){return""===s?o:(o=o.charAt(0).toUpperCase()+o.substr(1),s+o)}var l=Math,n=t.createElement("div").style,s=function(){for(var o,t="t,webkitT,MozT,msT,OT".split(","),r=0,e=t.length;e>r;r++)if(o=t[r]+"ransform",o in n)return t[r].substr(0,t[r].length-1);return!1}(),i=s?"-"+s.toLowerCase()+"-":"",a=e("transform"),c=e("transitionProperty"),p=e("transitionDuration"),m=e("transformOrigin"),h=e("transitionTimingFunction"),u=e("transitionDelay"),S=/android/gi.test(navigator.appVersion),d=/iphone|ipad/gi.test(navigator.appVersion),b=/hp-tablet/gi.test(navigator.appVersion),f=e("perspective")in n,x="ontouchstart"in o&&!b,g=s!==!1,y=e("transition")in n,v="onorientationchange"in o?"orientationchange":"resize",Y=x?"touchstart":"mousedown",T=x?"touchmove":"mousemove",X=x?"touchend":"mouseup",_=x?"touchcancel":"mouseup",w=function(){if(s===!1)return!1;var o={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return o[s]}(),z=function(){return o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(o){return setTimeout(o,1)}}(),M=function(){return o.cancelRequestAnimationFrame||o.webkitCancelAnimationFrame||o.webkitCancelRequestAnimationFrame||o.mozCancelRequestAnimationFrame||o.oCancelRequestAnimationFrame||o.msCancelRequestAnimationFrame||clearTimeout}(),E=f?" translateZ(0)":"",D=function(r,e){var l,n=this;n.wrapper="object"==typeof r?r:t.getElementById(r),n.wrapper.style.overflow="hidden",n.scroller=n.wrapper.children[0],n.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:S,hideScrollbar:d,fadeScrollbar:d&&f,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(o){o.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(l in e)n.options[l]=e[l];n.x=n.options.x,n.y=n.options.y,n.options.useTransform=g&&n.options.useTransform,n.options.hScrollbar=n.options.hScroll&&n.options.hScrollbar,n.options.vScrollbar=n.options.vScroll&&n.options.vScrollbar,n.options.zoom=n.options.useTransform&&n.options.zoom,n.options.useTransition=y&&n.options.useTransition,n.options.zoom&&S&&(E=""),n.scroller.style[c]=n.options.useTransform?i+"transform":"top left",n.scroller.style[p]="0",n.scroller.style[m]="0 0",n.options.useTransition&&(n.scroller.style[h]="cubic-bezier(0.33,0.66,0.66,1)"),n.options.useTransform?n.scroller.style[a]="translate("+n.x+"px,"+n.y+"px)"+E:n.scroller.style.cssText+=";position:absolute;top:"+n.y+"px;left:"+n.x+"px",n.options.useTransition&&(n.options.fixedScrollbar=!0),n.refresh(),n._bind(v,o),n._bind(Y),x||"none"!=n.options.wheelAction&&(n._bind("DOMMouseScroll"),n._bind("mousewheel")),n.options.checkDOMChanges&&(n.checkDOMTime=setInterval(function(){n._checkDOMChanges()},500))};D.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(o){var t=this;switch(o.type){case Y:if(!x&&0!==o.button)return;t._start(o);break;case T:t._move(o);break;case X:case _:t._end(o);break;case v:t._resize();break;case"DOMMouseScroll":case"mousewheel":t._wheel(o);break;case w:t._transitionEnd(o)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(o){var r,e=this;return e[o+"Scrollbar"]?(e[o+"ScrollbarWrapper"]||(r=t.createElement("div"),e.options.scrollbarClass?r.className=e.options.scrollbarClass+o.toUpperCase():r.style.cssText="position:absolute;z-index:100;"+("h"==o?"height:7px;bottom:1px;left:2px;right:"+(e.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(e.hScrollbar?"7":"2")+"px;top:2px;right:1px"),r.style.cssText+=";pointer-events:none;"+i+"transition-property:opacity;"+i+"transition-duration:"+(e.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(e.options.hideScrollbar?"0":"1"),e.wrapper.appendChild(r),e[o+"ScrollbarWrapper"]=r,r=t.createElement("div"),e.options.scrollbarClass||(r.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+i+"background-clip:padding-box;"+i+"box-sizing:border-box;"+("h"==o?"height:100%":"width:100%")+";"+i+"border-radius:3px;border-radius:3px"),r.style.cssText+=";pointer-events:none;"+i+"transition-property:"+i+"transform;"+i+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+i+"transition-duration:0;"+i+"transform: translate(0,0)"+E,e.options.useTransition&&(r.style.cssText+=";"+i+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),e[o+"ScrollbarWrapper"].appendChild(r),e[o+"ScrollbarIndicator"]=r),"h"==o?(e.hScrollbarSize=e.hScrollbarWrapper.clientWidth,e.hScrollbarIndicatorSize=l.max(l.round(e.hScrollbarSize*e.hScrollbarSize/e.scrollerW),8),e.hScrollbarIndicator.style.width=e.hScrollbarIndicatorSize+"px",e.hScrollbarMaxScroll=e.hScrollbarSize-e.hScrollbarIndicatorSize,e.hScrollbarProp=e.hScrollbarMaxScroll/e.maxScrollX):(e.vScrollbarSize=e.vScrollbarWrapper.clientHeight,e.vScrollbarIndicatorSize=l.max(l.round(e.vScrollbarSize*e.vScrollbarSize/e.scrollerH),8),e.vScrollbarIndicator.style.height=e.vScrollbarIndicatorSize+"px",e.vScrollbarMaxScroll=e.vScrollbarSize-e.vScrollbarIndicatorSize,e.vScrollbarProp=e.vScrollbarMaxScroll/e.maxScrollY),void e._scrollbarPos(o,!0)):void(e[o+"ScrollbarWrapper"]&&(g&&(e[o+"ScrollbarIndicator"].style[a]=""),e[o+"ScrollbarWrapper"].parentNode.removeChild(e[o+"ScrollbarWrapper"]),e[o+"ScrollbarWrapper"]=null,e[o+"ScrollbarIndicator"]=null))},_resize:function(){var o=this;setTimeout(function(){o.refresh()},S?200:0)},_pos:function(o,t){this.zoomed||(o=this.hScroll?o:0,t=this.vScroll?t:0,this.options.useTransform?this.scroller.style[a]="translate("+o+"px,"+t+"px) scale("+this.scale+")"+E:(o=l.round(o),t=l.round(t),this.scroller.style.left=o+"px",this.scroller.style.top=t+"px"),this.x=o,this.y=t,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(o,t){var r,e=this,n="h"==o?e.x:e.y;e[o+"Scrollbar"]&&(n=e[o+"ScrollbarProp"]*n,0>n?(e.options.fixedScrollbar||(r=e[o+"ScrollbarIndicatorSize"]+l.round(3*n),8>r&&(r=8),e[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px"),n=0):n>e[o+"ScrollbarMaxScroll"]&&(e.options.fixedScrollbar?n=e[o+"ScrollbarMaxScroll"]:(r=e[o+"ScrollbarIndicatorSize"]-l.round(3*(n-e[o+"ScrollbarMaxScroll"])),8>r&&(r=8),e[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px",n=e[o+"ScrollbarMaxScroll"]+(e[o+"ScrollbarIndicatorSize"]-r))),e[o+"ScrollbarWrapper"].style[u]="0",e[o+"ScrollbarWrapper"].style.opacity=t&&e.options.hideScrollbar?"0":"1",e[o+"ScrollbarIndicator"].style[a]="translate("+("h"==o?n+"px,0)":"0,"+n+"px)")+E)},_start:function(t){var r,e,n,s,i,c=this,p=x?t.touches[0]:t;c.enabled&&(c.options.onBeforeScrollStart&&c.options.onBeforeScrollStart.call(c,t),(c.options.useTransition||c.options.zoom)&&c._transitionTime(0),c.moved=!1,c.animating=!1,c.zoomed=!1,c.distX=0,c.distY=0,c.absDistX=0,c.absDistY=0,c.dirX=0,c.dirY=0,c.options.zoom&&x&&t.touches.length>1&&(s=l.abs(t.touches[0].pageX-t.touches[1].pageX),i=l.abs(t.touches[0].pageY-t.touches[1].pageY),c.touchesDistStart=l.sqrt(s*s+i*i),c.originX=l.abs(t.touches[0].pageX+t.touches[1].pageX-2*c.wrapperOffsetLeft)/2-c.x,c.originY=l.abs(t.touches[0].pageY+t.touches[1].pageY-2*c.wrapperOffsetTop)/2-c.y,c.options.onZoomStart&&c.options.onZoomStart.call(c,t)),c.options.momentum&&(c.options.useTransform?(r=getComputedStyle(c.scroller,null)[a].replace(/[^0-9\-.,]/g,"").split(","),e=+(r[12]||r[4]),n=+(r[13]||r[5])):(e=+getComputedStyle(c.scroller,null).left.replace(/[^0-9-]/g,""),n=+getComputedStyle(c.scroller,null).top.replace(/[^0-9-]/g,"")),(e!=c.x||n!=c.y)&&(c.options.useTransition?c._unbind(w):M(c.aniTime),c.steps=[],c._pos(e,n),c.options.onScrollEnd&&c.options.onScrollEnd.call(c))),c.absStartX=c.x,c.absStartY=c.y,c.startX=c.x,c.startY=c.y,c.pointX=p.pageX,c.pointY=p.pageY,c.startTime=t.timeStamp||Date.now(),c.options.onScrollStart&&c.options.onScrollStart.call(c,t),c._bind(T,o),c._bind(X,o),c._bind(_,o))},_move:function(o){var t,r,e,n=this,s=x?o.touches[0]:o,i=s.pageX-n.pointX,c=s.pageY-n.pointY,p=n.x+i,m=n.y+c,h=o.timeStamp||Date.now();return n.options.onBeforeScrollMove&&n.options.onBeforeScrollMove.call(n,o),n.options.zoom&&x&&o.touches.length>1?(t=l.abs(o.touches[0].pageX-o.touches[1].pageX),r=l.abs(o.touches[0].pageY-o.touches[1].pageY),n.touchesDist=l.sqrt(t*t+r*r),n.zoomed=!0,e=1/n.touchesDistStart*n.touchesDist*this.scale,e<n.options.zoomMin?e=.5*n.options.zoomMin*Math.pow(2,e/n.options.zoomMin):e>n.options.zoomMax&&(e=2*n.options.zoomMax*Math.pow(.5,n.options.zoomMax/e)),n.lastScale=e/this.scale,p=this.originX-this.originX*n.lastScale+this.x,m=this.originY-this.originY*n.lastScale+this.y,this.scroller.style[a]="translate("+p+"px,"+m+"px) scale("+e+")"+E,void(n.options.onZoom&&n.options.onZoom.call(n,o))):(n.pointX=s.pageX,n.pointY=s.pageY,(p>0||p<n.maxScrollX)&&(p=n.options.bounce?n.x+i/2:p>=0||n.maxScrollX>=0?0:n.maxScrollX),(m>n.minScrollY||m<n.maxScrollY)&&(m=n.options.bounce?n.y+c/2:m>=n.minScrollY||n.maxScrollY>=0?n.minScrollY:n.maxScrollY),n.distX+=i,n.distY+=c,n.absDistX=l.abs(n.distX),n.absDistY=l.abs(n.distY),void(n.absDistX<6&&n.absDistY<6||(n.options.lockDirection&&(n.absDistX>n.absDistY+5?(m=n.y,c=0):n.absDistY>n.absDistX+5&&(p=n.x,i=0)),n.moved=!0,n._pos(p,m),n.dirX=i>0?-1:0>i?1:0,n.dirY=c>0?-1:0>c?1:0,h-n.startTime>300&&(n.startTime=h,n.startX=n.x,n.startY=n.y),n.options.onScrollMove&&n.options.onScrollMove.call(n,o))))},_end:function(r){if(!x||0===r.touches.length){var e,n,s,i,c,m,h,u=this,S=x?r.changedTouches[0]:r,d={dist:0,time:0},b={dist:0,time:0},f=(r.timeStamp||Date.now())-u.startTime,g=u.x,y=u.y;if(u._unbind(T,o),u._unbind(X,o),u._unbind(_,o),u.options.onBeforeScrollEnd&&u.options.onBeforeScrollEnd.call(u,r),u.zoomed)return h=u.scale*u.lastScale,h=Math.max(u.options.zoomMin,h),h=Math.min(u.options.zoomMax,h),u.lastScale=h/u.scale,u.scale=h,u.x=u.originX-u.originX*u.lastScale+u.x,u.y=u.originY-u.originY*u.lastScale+u.y,u.scroller.style[p]="200ms",u.scroller.style[a]="translate("+u.x+"px,"+u.y+"px) scale("+u.scale+")"+E,u.zoomed=!1,u.refresh(),void(u.options.onZoomEnd&&u.options.onZoomEnd.call(u,r));if(!u.moved)return x&&(u.doubleTapTimer&&u.options.zoom?(clearTimeout(u.doubleTapTimer),u.doubleTapTimer=null,u.options.onZoomStart&&u.options.onZoomStart.call(u,r),u.zoom(u.pointX,u.pointY,1==u.scale?u.options.doubleTapZoom:1),u.options.onZoomEnd&&setTimeout(function(){u.options.onZoomEnd.call(u,r)},200)):this.options.handleClick&&(u.doubleTapTimer=setTimeout(function(){for(u.doubleTapTimer=null,e=S.target;1!=e.nodeType;)e=e.parentNode;"SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&(n=t.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,r.view,1,S.screenX,S.screenY,S.clientX,S.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,0,null),n._fake=!0,e.dispatchEvent(n))},u.options.zoom?250:0))),u._resetPos(400),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));if(300>f&&u.options.momentum&&(d=g?u._momentum(g-u.startX,f,-u.x,u.scrollerW-u.wrapperW+u.x,u.options.bounce?u.wrapperW:0):d,b=y?u._momentum(y-u.startY,f,-u.y,u.maxScrollY<0?u.scrollerH-u.wrapperH+u.y-u.minScrollY:0,u.options.bounce?u.wrapperH:0):b,g=u.x+d.dist,y=u.y+b.dist,(u.x>0&&g>0||u.x<u.maxScrollX&&g<u.maxScrollX)&&(d={dist:0,time:0}),(u.y>u.minScrollY&&y>u.minScrollY||u.y<u.maxScrollY&&y<u.maxScrollY)&&(b={dist:0,time:0})),d.dist||b.dist)return c=l.max(l.max(d.time,b.time),10),u.options.snap&&(s=g-u.absStartX,i=y-u.absStartY,l.abs(s)<u.options.snapThreshold&&l.abs(i)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(g,y),g=m.x,y=m.y,c=l.max(m.time,c))),u.scrollTo(l.round(g),l.round(y),c),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));if(u.options.snap)return s=g-u.absStartX,i=y-u.absStartY,l.abs(s)<u.options.snapThreshold&&l.abs(i)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(u.x,u.y),(m.x!=u.x||m.y!=u.y)&&u.scrollTo(m.x,m.y,m.time)),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));u._resetPos(200),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r)}},_resetPos:function(o){var t=this,r=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,e=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;return r==t.x&&e==t.y?(t.moved&&(t.moved=!1,t.options.onScrollEnd&&t.options.onScrollEnd.call(t)),t.hScrollbar&&t.options.hideScrollbar&&("webkit"==s&&(t.hScrollbarWrapper.style[u]="300ms"),t.hScrollbarWrapper.style.opacity="0"),void(t.vScrollbar&&t.options.hideScrollbar&&("webkit"==s&&(t.vScrollbarWrapper.style[u]="300ms"),t.vScrollbarWrapper.style.opacity="0"))):void t.scrollTo(r,e,o||0)},_wheel:function(o){var t,r,e,l,n,s=this;if("wheelDeltaX"in o)t=o.wheelDeltaX/12,r=o.wheelDeltaY/12;else if("wheelDelta"in o)t=r=o.wheelDelta/12;else{if(!("detail"in o))return;t=r=3*-o.detail}return"zoom"==s.options.wheelAction?(n=s.scale*Math.pow(2,1/3*(r?r/Math.abs(r):0)),n<s.options.zoomMin&&(n=s.options.zoomMin),n>s.options.zoomMax&&(n=s.options.zoomMax),void(n!=s.scale&&(!s.wheelZoomCount&&s.options.onZoomStart&&s.options.onZoomStart.call(s,o),s.wheelZoomCount++,s.zoom(o.pageX,o.pageY,n,400),setTimeout(function(){s.wheelZoomCount--,!s.wheelZoomCount&&s.options.onZoomEnd&&s.options.onZoomEnd.call(s,o)},400)))):(e=s.x+t,l=s.y+r,e>0?e=0:e<s.maxScrollX&&(e=s.maxScrollX),l>s.minScrollY?l=s.minScrollY:l<s.maxScrollY&&(l=s.maxScrollY),void(s.maxScrollY<0&&s.scrollTo(e,l,0)))},_transitionEnd:function(o){var t=this;o.target==t.scroller&&(t._unbind(w),t._startAni())},_startAni:function(){var o,t,r,e=this,n=e.x,s=e.y,i=Date.now();if(!e.animating){if(!e.steps.length)return void e._resetPos(400);if(o=e.steps.shift(),o.x==n&&o.y==s&&(o.time=0),e.animating=!0,e.moved=!0,e.options.useTransition)return e._transitionTime(o.time),e._pos(o.x,o.y),e.animating=!1,void(o.time?e._bind(w):e._resetPos(0));r=function(){var a,c,p=Date.now();return p>=i+o.time?(e._pos(o.x,o.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),void e._startAni()):(p=(p-i)/o.time-1,t=l.sqrt(1-p*p),a=(o.x-n)*t+n,c=(o.y-s)*t+s,e._pos(a,c),void(e.animating&&(e.aniTime=z(r))))},r()}},_transitionTime:function(o){o+="ms",this.scroller.style[p]=o,this.hScrollbar&&(this.hScrollbarIndicator.style[p]=o),this.vScrollbar&&(this.vScrollbarIndicator.style[p]=o)},_momentum:function(o,t,r,e,n){var s=6e-4,i=l.abs(o)/t,a=i*i/(2*s),c=0,p=0;return o>0&&a>r?(p=n/(6/(a/i*s)),r+=p,i=i*r/a,a=r):0>o&&a>e&&(p=n/(6/(a/i*s)),e+=p,i=i*e/a,a=e),a*=0>o?-1:1,c=i/s,{dist:a,time:l.round(c)}},_offset:function(o){for(var t=-o.offsetLeft,r=-o.offsetTop;o=o.offsetParent;)t-=o.offsetLeft,r-=o.offsetTop;return o!=this.wrapper&&(t*=this.scale,r*=this.scale),{left:t,top:r}},_snap:function(o,t){var r,e,n,s,i,a,c=this;for(n=c.pagesX.length-1,r=0,e=c.pagesX.length;e>r;r++)if(o>=c.pagesX[r]){n=r;break}for(n==c.currPageX&&n>0&&c.dirX<0&&n--,o=c.pagesX[n],i=l.abs(o-c.pagesX[c.currPageX]),i=i?l.abs(c.x-o)/i*500:0,c.currPageX=n,n=c.pagesY.length-1,r=0;n>r;r++)if(t>=c.pagesY[r]){n=r;break}return n==c.currPageY&&n>0&&c.dirY<0&&n--,t=c.pagesY[n],a=l.abs(t-c.pagesY[c.currPageY]),a=a?l.abs(c.y-t)/a*500:0,c.currPageY=n,s=l.round(l.max(i,a))||200,{x:o,y:t,time:s}},_bind:function(o,t,r){(t||this.scroller).addEventListener(o,this,!!r)},_unbind:function(o,t,r){(t||this.scroller).removeEventListener(o,this,!!r)},destroy:function(){var t=this;t.scroller.style[a]="",t.hScrollbar=!1,t.vScrollbar=!1,t._scrollbar("h"),t._scrollbar("v"),t._unbind(v,o),t._unbind(Y),t._unbind(T,o),t._unbind(X,o),t._unbind(_,o),t.options.hasTouch||(t._unbind("DOMMouseScroll"),t._unbind("mousewheel")),t.options.useTransition&&t._unbind(w),t.options.checkDOMChanges&&clearInterval(t.checkDOMTime),t.options.onDestroy&&t.options.onDestroy.call(t)},refresh:function(){var o,t,r,e,n=this,s=0,i=0;if(n.scale<n.options.zoomMin&&(n.scale=n.options.zoomMin),n.wrapperW=n.wrapper.clientWidth||1,n.wrapperH=n.wrapper.clientHeight||1,n.minScrollY=-n.options.topOffset||0,n.scrollerW=l.round(n.scroller.offsetWidth*n.scale),n.scrollerH=l.round((n.scroller.offsetHeight+n.minScrollY)*n.scale),n.maxScrollX=n.wrapperW-n.scrollerW,n.maxScrollY=n.wrapperH-n.scrollerH+n.minScrollY,n.dirX=0,n.dirY=0,n.options.onRefresh&&n.options.onRefresh.call(n),n.hScroll=n.options.hScroll&&n.maxScrollX<0,n.vScroll=n.options.vScroll&&(!n.options.bounceLock&&!n.hScroll||n.scrollerH>n.wrapperH),n.hScrollbar=n.hScroll&&n.options.hScrollbar,n.vScrollbar=n.vScroll&&n.options.vScrollbar&&n.scrollerH>n.wrapperH,o=n._offset(n.wrapper),n.wrapperOffsetLeft=-o.left,n.wrapperOffsetTop=-o.top,"string"==typeof n.options.snap)for(n.pagesX=[],n.pagesY=[],e=n.scroller.querySelectorAll(n.options.snap),t=0,r=e.length;r>t;t++)s=n._offset(e[t]),s.left+=n.wrapperOffsetLeft,s.top+=n.wrapperOffsetTop,n.pagesX[t]=s.left<n.maxScrollX?n.maxScrollX:s.left*n.scale,n.pagesY[t]=s.top<n.maxScrollY?n.maxScrollY:s.top*n.scale;else if(n.options.snap){for(n.pagesX=[];s>=n.maxScrollX;)n.pagesX[i]=s,s-=n.wrapperW,i++;for(n.maxScrollX%n.wrapperW&&(n.pagesX[n.pagesX.length]=n.maxScrollX-n.pagesX[n.pagesX.length-1]+n.pagesX[n.pagesX.length-1]),s=0,i=0,n.pagesY=[];s>=n.maxScrollY;)n.pagesY[i]=s,s-=n.wrapperH,i++;n.maxScrollY%n.wrapperH&&(n.pagesY[n.pagesY.length]=n.maxScrollY-n.pagesY[n.pagesY.length-1]+n.pagesY[n.pagesY.length-1])}n._scrollbar("h"),n._scrollbar("v"),n.zoomed||(n.scroller.style[p]="0",n._resetPos(400))},scrollTo:function(o,t,r,e){var l,n,s=this,i=o;for(s.stop(),i.length||(i=[{x:o,y:t,time:r,relative:e}]),l=0,n=i.length;n>l;l++)i[l].relative&&(i[l].x=s.x-i[l].x,i[l].y=s.y-i[l].y),s.steps.push({x:i[l].x,y:i[l].y,time:i[l].time||0});s._startAni()},scrollToElement:function(o,t){var r,e=this;o=o.nodeType?o:e.scroller.querySelector(o),o&&(r=e._offset(o),r.left+=e.wrapperOffsetLeft,r.top+=e.wrapperOffsetTop,r.left=r.left>0?0:r.left<e.maxScrollX?e.maxScrollX:r.left,r.top=r.top>e.minScrollY?e.minScrollY:r.top<e.maxScrollY?e.maxScrollY:r.top,t=void 0===t?l.max(2*l.abs(r.left),2*l.abs(r.top)):t,e.scrollTo(r.left,r.top,t))},scrollToPage:function(o,t,r){var e,l,n=this;r=void 0===r?400:r,n.options.onScrollStart&&n.options.onScrollStart.call(n),n.options.snap?(o="next"==o?n.currPageX+1:"prev"==o?n.currPageX-1:o,t="next"==t?n.currPageY+1:"prev"==t?n.currPageY-1:t,o=0>o?0:o>n.pagesX.length-1?n.pagesX.length-1:o,t=0>t?0:t>n.pagesY.length-1?n.pagesY.length-1:t,n.currPageX=o,n.currPageY=t,e=n.pagesX[o],l=n.pagesY[t]):(e=-n.wrapperW*o,l=-n.wrapperH*t,e<n.maxScrollX&&(e=n.maxScrollX),l<n.maxScrollY&&(l=n.maxScrollY)),n.scrollTo(e,l,r)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(T,o),this._unbind(X,o),this._unbind(_,o)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(w):M(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(o,t,r,e){var l=this,n=r/l.scale;l.options.useTransform&&(l.zoomed=!0,e=void 0===e?200:e,o=o-l.wrapperOffsetLeft-l.x,t=t-l.wrapperOffsetTop-l.y,l.x=o-o*n+l.x,l.y=t-t*n+l.y,l.scale=r,l.refresh(),l.x=l.x>0?0:l.x<l.maxScrollX?l.maxScrollX:l.x,l.y=l.y>l.minScrollY?l.minScrollY:l.y<l.maxScrollY?l.maxScrollY:l.y,l.scroller.style[p]=e+"ms",l.scroller.style[a]="translate("+l.x+"px,"+l.y+"px) scale("+r+")"+E,l.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},n=null,"undefined"!=typeof r&&r.exports?r.exports=D:o.iScroll=D}(window,document)});
/*!spm_modules/jingle/0.0.1/Jingle.debug.qymodify.js*/
;define("spm_modules/jingle/0.0.1/Jingle.debug.qymodify",["spm_modules/zepto/0.0.1/zepto","spm_modules/iscroll/0.0.1/iscroll"],function(e,t,n){{var a=e("spm_modules/zepto/0.0.1/zepto"),o=e("spm_modules/iscroll/0.0.1/iscroll");J={version:"0.41",$:a,settings:{appType:"single",transitionType:"slide",transitionTime:250,transitionTimingFunc:"ease-in",toastDuration:3e3,showWelcome:!1,welcomeSlideChange:null,showPageLoading:!1,basePagePath:"html/",basePageSuffix:".html",remotePage:{}},mode:window.innerWidth<800?"phone":"tablet",hasTouch:"ontouchstart"in window,launchCompleted:!1,hasMenuOpen:!1,hasPopupOpen:!1,isWebApp:"http:"==location.protocol,launch:function(e){$.extend(this.settings,e);try{var t=window.localStorage.getItem("hasShowWelcome")}catch(n){}!t&&this.settings.showWelcome&&this.Welcome.show(),this.Element.init(),this.Element.initControlGroup(),this.Router.init(),this.Menu.init()}}}J.Element=function(e){var t={icon:"[data-icon]",scroll:'[data-scroll="true"]',toggle:".toggle",range:"[data-rangeinput]",progress:"[data-progress]",count:"[data-count]",checkbox:"[data-checkbox]"},n=function(n){n||e(document).on("articleshow","article",function(){J.Element.scroll(this)});var a=e(n||"body");0!=a.length&&(e.map(o(a,t.icon),s),e.map(o(a,t.toggle),r),e.map(o(a,t.range),l),e.map(o(a,t.progress),c),e.map(o(a,t.count),u),e.map(o(a,t.checkbox),d),a=null)},a=function(){e(document).on("tap","ul.control-group li",function(){var t=e(this);t.hasClass("active")||t.addClass("active").siblings(".active").removeClass("active").parent().trigger("change",[t])})},o=function(e,t){return e.find(t).add(e.filter(t))},i=function(n){e.map(o(e(n),t.scroll),function(e){J.Scroll(e)})},s=function(t){var n=e(t),a=n.children("i.icon"),o=n.data("icon");a.length>0?a.attr("class","icon "+o):n.prepend('<i class="icon '+o+'"></i>')},r=function(t){var n=e(t);if(!(n.find("div.toggle-handle").length>0)){var a=n.attr("name");a&&n.append('<input style="display: none;" name="'+a+'" value="'+n.hasClass("active")+'"/>'),n.append('<div class="toggle-handle"></div>'),n.tap(function(){var t=e(this),n=!t.hasClass("active");t.toggleClass("active").trigger("toggle",[n]),t.find("input").val(n)})}},l=function(t){var n,a=e(t),o=e('input[type="range"]',t),i=a.data("rangeinput"),s=e('<input type="number" name="test" value="'+o.val()+'"/>');n="left"==i?s.prependTo(a):s.appendTo(a);var r=parseInt(o.attr("max"),10),l=parseInt(o.attr("min"),10);o.change(function(){n.val(o.val())}),n.on("input",function(){var e=parseInt(n.val(),10);e=e>r?r:l>e?l:e,o.val(e),n.val(e)})},c=function(t){var n,a=e(t),o=parseFloat(a.data("progress"))+"%",i=a.data("title")||"";n=a.find("div.bar"),0==n.length&&(n=e('<div class="bar"></div>').appendTo(a)),n.width(o).text(i+o),"100%"==o&&n.css("border-radius","10px")},u=function(t){var n=e(t),a=n.find("span.count"),o=parseInt(n.data("count")),i=n.data("orient"),s="left"==i?"left":"";a.length>0?a.text(o).show():a=e('<span class="count '+s+'">'+o+"</span>").appendTo(n),0==o&&a.hide()},d=function(t){var n=e(t),a=n.data("checkbox");n.find("i.icon").length>0||(n.prepend('<i class="icon checkbox-'+a+'"></i>'),n.on("tap",function(){var e="checked"==n.data("checkbox")?"unchecked":"checked";n.data("checkbox",e).find("i.icon").attr("class","icon checkbox-"+e),n.trigger("change")}))};return{init:n,initControlGroup:a,icon:s,toggle:r,progress:c,range:l,badge:u,scroll:i}}(J.$),J.Menu=function(e){var t,n,a,o=function(){t=e("#aside_container"),n=e("#section_container"),a=e('<div id="section_container_mask"></div>').appendTo("#section_container"),a.on("tap",s),t.on("swipeRight","aside",function(){"right"==e(this).data("position")&&s()}),t.on("swipeLeft","aside",function(){"right"!=e(this).data("position")&&s()}),t.on("tap",".aside-close",s)},i=function(t){var a=e(t).addClass("active"),o=a.data("transition"),i=a.data("position")||"left",s=a.data("show-close"),r=a.width(),l="left"==i?r+"px":"-"+r+"px";s&&0==a.find("div.aside-close").length&&a.append('<div class="aside-close icon close"></div>'),J.Element.scroll(a),"overlay"==o?J.anim(a,{translateX:"0%"}):"reveal"==o?J.anim(n,{translateX:l}):(J.anim(a,{translateX:"0%"}),J.anim(n,{translateX:l})),e("#section_container_mask").show(),J.hasMenuOpen=!0},s=function(t,a){var o=e("#aside_container aside.active"),i=o.data("transition"),s=o.data("position")||"left",r="left"==s?"-100%":"100%",l=function(){o.removeClass("active"),J.hasMenuOpen=!1,a&&a.call(this)};"overlay"==i?J.anim(o,{translateX:r},t,l):"reveal"==i?J.anim(n,{translateX:"0"},t,l):(J.anim(o,{translateX:r},t),J.anim(n,{translateX:"0"},t,l)),e("#section_container_mask").hide()};return{init:o,show:i,hide:s}}(J.$),J.Page=function(e){var t=function(e){return 0==e.indexOf("#")?e.substr(1):e},n=function(n,a){var i,s={},r=!1;"object"==e.type(n)&&(s=n.param,i=n.query,n=n.tag);var l=e(n).data("query");if(1==e(n).length){if(l==i)return void a();r=!0}var c=t(n),u=J.settings.remotePage[n];u||(u=J.settings.basePagePath+c+J.settings.basePageSuffix),J.settings.showPageLoading&&J.showMask(),o(u,s,function(t){J.settings.showPageLoading&&J.hideMask(),e(n).remove();var o=e(t);e("#section_container").append(o),r&&o.addClass("active"),o.trigger("pageload").data("query",i),J.Element.init(n),a(),o=null})},a=function(t,n){var a=J.Util.parseHash(window.location.hash).param;o(t,a,function(t){e(n).html(t),J.Element.init(n)})},o=function(t,n,a){return e.ajax({url:t,timeout:2e4,data:n,success:function(e){a&&a(e)}})};return{load:n,loadSection:a,loadContent:o}}(J.$),J.Router=function(e){var t=[],n=function(){e(window).on("popstate",o),e(document).on("click","a",function(t){var n=e(this).data("target"),a=e(this).attr("href");return!a||a.match(/^#/)||n?(t.preventDefault(),!1):void 0}),e(document).on("tap","a[data-target]",i),a()},a=function(){var t=location.hash,n=e("#section_container section").first(),a="#"+n.attr("id");c(a,!0),""!=t&&t!=a?s(t):n.trigger("pageinit").trigger("pageshow").data("init",!0).find("article.active").trigger("articleshow")},o=function(e){if(e.state&&e.state.hash){var n=e.state.hash;t[1]&&n===t[1].hash&&(J.hasMenuOpen&&J.Menu.hide(),J.hasPopupOpen&&J.Popup.close(),r())}},i=function(){var t=e(this),n=t.attr("data-target"),a=t.attr("href");switch(n){case"section":"single"==J.settings.appType&&s(a);break;case"article":u(a,t);break;case"menu":d(a);break;case"back":window.history.go(-1)}},s=function(n){var a=J.Util.parseHash(n);if(J.hasMenuOpen)return void J.Menu.hide(200,function(){s(a.hash),e(a.tag).attr("data-query",a.query)});var o=t[0];o.hash!==a.hash&&J.Page.load(a,function(){var t=o.tag==a.tag;t?e(o.tag).trigger("pageshow").find("article.active").trigger("articlehide"):(l(o.tag,a.tag),e(a.tag).attr("data-query",a.query)),c(n,t)})},r=function(){"single"==J.settings.appType&&l(t.shift().tag,t[0].tag,!0)},l=function(e,t,n){J.Transition.run(e,t,n)},c=function(e,n){var a=J.Util.parseHash(e);n?(t.shift(a),window.history.replaceState(a,"",e)):window.history.pushState(a,"",e),t.unshift(a)},u=function(t,n){var a=e(t);if(!a.hasClass("active")){n.addClass("active").siblings(".active").removeClass("active");var o=a.addClass("active").siblings(".active").removeClass("active");a.trigger("articleshow"),o.trigger("articlehide")}},d=function(e){J.hasMenuOpen?J.Menu.hide():J.Menu.show(e)};return{init:n,goTo:s,showArticle:u,back:r}}(J.$),J.Service=function(e){function t(t,n,a,o){var i=!e.isFunction(n);return{url:t,data:i?n:void 0,success:i?e.isFunction(a)?a:void 0:n,dataType:i?o||a:a}}var n="JINGLE_POST_DATA",a="JINGLE_GET_",o=function(e){"post"==e.type?i(e):s(e)},i=function(t){J.offline?(c(t.url,t.data),t.success("数据已存至本地")):e.ajax(t)},s=function(t){var n=t.url+JSON.stringify(t.data);if(J.offline){var a=r(n);a?t.success(a.data,n,a.cacheTime):t.success(a)}else{var o=t.success;t.success=function(e){l(n,e),o(e,n)},e.ajax(t)}},r=function(e){return JSON.parse(window.localStorage.getItem(a+e))},l=function(e,t){var n={data:t,cacheTime:new Date};window.localStorage.setItem(a+e,JSON.stringify(n))},c=function(e,t){var a=u();a=a||{},a[e]={data:t,createdTime:new Date},window.localStorage.setItem(n,JSON.stringify(a))},u=function(e){var t=JSON.parse(window.localStorage.getItem(n));return t&&e?t[e]:t},d=function(e){if(e){var t=u();delete t[e],window.localStorage.setItem(n,JSON.stringify(t))}else window.localStorage.removeItem(n)},p=function(t,n,a){var o=u(t).data;e.ajax({url:t,contentType:"application/json",data:o,type:"post",success:function(){n(t)},error:function(){a(t)}})},h=function(e,t){var n=u();for(var a in n)p(a,e,t);d()},f=function(){return o(t.apply(null,arguments))},g=function(){var e=t.apply(null,arguments);return e.type="POST",o(e)},v=function(){var e=t.apply(null,arguments);return e.dataType="json",o(e)},m=function(){for(var e=window.localStorage,t=[],o=0;o<e.length;o++){var i=e.key(o);0==i.indexOf(a)&&t.push(i)}for(var o=0;o<t.length;o++)e.removeItem(t[o]);e.removeItem(n)};return{ajax:o,get:f,post:g,getJSON:v,getUnPostData:u,removeUnPostData:d,syncPostData:p,syncAllPostData:h,getCacheData:r,saveCacheData:l,clear:m}}(J.$),J.Template=function(e){var t=function(t,n,a){var o='<div class="back-mask"><div class="icon '+a+'"></div><div>'+n+"</div></div>";e(t).html(o)},n=function(e){t(e,"没有找到相关数据","drawer")},a=function(e){t(e,"加载中...","cloud-download")},o=function(t,a,o,i){var s=e(t),i=i||"replace";if("array"==e.type(o)&&0==o.length)n(s);else{var r=template(a,o);"replace"==i?s.html(r):s.append(r),J.Element.init(r)}};return{render:o,background:t,loading:a,no_result:n}}(J.$),J.Toast=function(e){var t,n,a="toast",o={toast:'<a href="#">{value}</a>',success:'<a href="#"><i class="icon checkmark-circle"></i>{value}</a>',error:'<a href="#"><i class="icon cancel-circle"></i>{value}</a></div>',info:'<a href="#"><i class="icon info-2"></i>{value}</a>'},i=function(){e("body").append('<div id="jingle_toast"></div>'),t=e("#jingle_toast"),l()},s=function(){J.anim(t,"scaleOut",function(){t.hide(),t.empty()})},r=function(e,i,r){n&&clearTimeout(n);var l=e.split(/\s/);a=l[0],t.attr("class",e).html(o[a].replace("{value}",i)).show(),J.anim(t,"scaleIn"),0!==r&&(n=setTimeout(s,r||J.settings.toastDuration))},l=function(){t.on("tap",'[data-target="close"]',function(){s()})};return i(),{show:r,hide:s}}(J.$),J.Transition=function(e){var t,n,a,o,i={slide:[["slideLeftOut","slideLeftIn"],["slideRightOut","slideRightIn"]],cover:[["","slideLeftIn"],["slideRightOut",""]],slideUp:[["","slideUpIn"],["slideDownOut",""]],slideDown:[["","slideDownIn"],["slideUpOut",""]],popup:[["","scaleIn"],["scaleOut",""]]},s=function(){n.trigger("beforepagehide",[t]),a.trigger("beforepageshow",[t]);var e=o[0]||"empty",i=o[1]||"empty";n.bind("webkitAnimationEnd.jingle",r).addClass("anim "+e),a.addClass("anim animating "+i)},r=function(){n.off("webkitAnimationEnd.jingle"),a.off("webkitAnimationEnd.jingle"),n.attr("class",""),a.attr("class","active"),!a.data("init")&&a.trigger("pageinit").data("init",!0),!n.data("init")&&n.trigger("pageinit").data("init",!0),n.trigger("pagehide",[t]),a.trigger("pageshow",[t]),n.find("article.active").trigger("articlehide"),a.find("article.active").trigger("articleshow"),n=a=null},l=function(r,l,c){e(":focus").trigger("blur"),t=c,n=e(r),a=e(l);var u=t?n.attr("data-transition"):a.attr("data-transition");u=u||J.settings.transitionType,o=t?i[u][1]:i[u][0],s()},c=function(e,t,n,a,o){return i[e]?void console.error("该转场动画已经存在，请检查你自定义的动画名称(名称不能重复)"):void(i[e]=[[t,n],[a,o]])};return{run:l,add:c}}(J.$),J.Util=function(){var e=function(e){var t,n,a={},o=e.split("?");if(t=o[0],o.length>1){var i,s;n=o[1],i=n.split("&");for(var r=0;r<i.length;r++)i[r]&&(s=i[r].split("="),a[s[0]]=s[1])}return{hash:e,tag:t,query:n,param:a}},t=function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t};return{parseHash:e,formatDate:t}}(J.$),J.Welcome=function(e){var t=function(){e.ajax({url:J.settings.basePagePath+"welcome.html",timeout:5e3,async:!1,success:function(t){e("body").append(t),new J.Slider({selector:"#jingle_welcome",onAfterSlide:J.settings.welcomeSlideChange})}})},n=function(){J.anim("#jingle_welcome","slideLeftOut",function(){e(this).remove(),window.localStorage.setItem("hasShowWelcome",!0)})};return{show:t,hide:n}}(J.$),function(e){J.anim=function(t,n){for(var a,o,i,s=arguments.length,r=2;s>r;r++){var l=arguments[r],c=e.type(l);"number"==c?a=l:"string"==c?o=l:"function"==c?i=l:null}e(t).animate(n,a||J.settings.transitionTime,o||J.settings.transitionTimingFunc,i)},J.showMask=function(e){J.Popup.loading(e)},J.hideMask=function(){J.Popup.close(!0)},J.showToast=function(t,n,a){n=n||"toast",J.Toast.show(n,t,a),e("input").blur()},J.hideToast=function(){J.Toast.hide()},J.alert=function(e,t){J.Popup.alert(e,t)},J.confirm=function(e,t,n,a){J.Popup.confirm(e,t,n,a)},J.popup=function(e){J.Popup.show(e)},J.closePopup=function(){J.Popup.close()},J.popover=function(e,t,n,a){J.Popup.popover(e,t,n,a)},J.tmpl=function(e,t,n,a){J.Template.render(e,t,n,a)}}(J.$),J.Popup=function(e){var t,n,a,o,i={top:{top:0,left:0,right:0},"top-second":{top:"44px",left:0,right:0},center:{top:"50%",left:"5%",right:"5%","border-radius":"3px"},bottom:{bottom:0,left:0,right:0},"bottom-second":{bottom:"51px",left:0,right:0}},s={top:["slideDownIn","slideUpOut"],bottom:["slideUpIn","slideDownOut"],defaultAnim:["bounceIn","bounceOut"]},r={alert:'<div class="popup-title">{title}</div><div class="popup-content">{content}</div><div id="popup_btn_container"><a data-target="closePopup" data-icon="checkmark">{ok}</a></div>',confirm:'<div class="popup-title">{title}</div><div class="popup-content">{content}</div><div id="popup_btn_container"><a class="cancel" data-icon="close">{cancel}</a><a data-icon="checkmark">{ok}</a></div>',loading:'<i class="icon spinner"></i><p>{title}</p>'},l=function(){e("body").append('<div id="jingle_popup"></div><div id="jingle_popup_mask"></div>'),n=e("#jingle_popup_mask"),t=e("#jingle_popup"),d()},c=function(r){var l={height:void 0,width:void 0,opacity:.3,url:null,tplId:null,tplData:null,html:"",pos:"center",clickMask2Close:!0,showCloseBtn:!0,arrowDirection:void 0,animation:!0,timingFunc:"linear",duration:200,onShow:void 0};e.extend(l,r),o=l.clickMask2Close,n.css("opacity",l.opacity),t.attr({style:"","class":""}),l.width&&t.width(l.width),l.height&&t.height(l.height);var c=e.type(l.pos);if("object"==c)t.css(l.pos),a=s.defaultAnim;else{if("string"!=c)return void console.error("错误的参数！");if(i[l.pos]){t.css(i[l.pos]);var u=l.pos.indexOf("top")>-1?"top":l.pos.indexOf("bottom")>-1?"bottom":"defaultAnim";a=s[u]}else t.addClass(l.pos),a=s.defaultAnim}n.show();var d;if(l.html?d=l.html:l.url?d=J.Page.loadContent(l.url):l.tplId&&(d=template(l.tplId,l.tplData)),l.showCloseBtn&&(d+='<div id="tag_close_popup" data-target="closePopup" class="icon cancel-circle"></div>'),l.arrowDirection&&(t.addClass("arrow "+l.arrowDirection),t.css("padding","8px"),("top"==l.arrowDirection||"bottom"==l.arrowDirection)&&(a=s[l.arrowDirection])),t.html(d).show(),J.Element.init(t),l.onShow&&l.onShow.call(t),"center"==l.pos){var p=t.height();t.css("margin-top","-"+p/2+"px")}l.animation&&J.anim(t,a[0],l.duration,l.timingFunc),J.hasPopupOpen=!0},u=function(e){n.hide(),a&&!e?J.anim(t,a[1],200,function(){t.hide().empty(),J.hasPopupOpen=!1}):(t.hide().empty(),J.hasPopupOpen=!1)},d=function(){n.on("tap",function(){o&&u()}),t.on("tap",'[data-target="closePopup"]',function(){u()})},p=function(e,t,n){var a=r.alert.replace("{title}",e).replace("{content}",t).replace("{ok}",n||"确定");c({html:a,pos:"center",clickMask2Close:!1,showCloseBtn:!1})},h=function(t,n,a,o){var i=r.confirm.replace("{title}",t).replace("{content}",n).replace("{cancel}","取消").replace("{ok}","确定");c({html:i,pos:"center",clickMask2Close:!1,showCloseBtn:!1}),e('#popup_btn_container [data-icon="checkmark"]').tap(function(){u(),a.call(this)}),e('#popup_btn_container [data-icon="close"]').tap(function(){u(),o.call(this)})},f=function(e,t,n,a){c({html:e,pos:t,showCloseBtn:!1,arrowDirection:n,onShow:a})},g=function(e){var t=r.loading.replace("{title}",e||"加载中...");c({html:t,pos:"loading",opacity:.1,animation:!0,clickMask2Close:!1})},v=function(t){var n='<div class="actionsheet">';e.each(t,function(e,t){n+='<button style="background-color: '+t.color+' !important;">'+t.text+"</button>"}),n+='<button class="alizarin">取消</button>',n+="</div>",c({html:n,pos:"bottom",showCloseBtn:!1,onShow:function(){e(this).find("button").each(function(n,a){e(a).on("tap",function(){t[n]&&t[n].handler&&t[n].handler.call(a),u()})})}})};return l(),{show:c,close:u,alert:p,confirm:h,popover:f,loading:g,actionsheet:v}}(J.$),J.Selected=function(e){var t=100,n="[data-selected]",a=e.fn.trigger;e.fn.trigger=function(o){var i,s=e(this),r=arguments;if("tap"===o||"tap"===o.type){var l=s.closest(n).get(0);if(l)return l=e(l),i=l.data("selected"),l.addClass(i),setTimeout(function(){l.removeClass(i),a.apply(s,r),s=l=null},t),this}return a.apply(s,r),this}}(J.$),J.Cache=function(e){var t="_J_P_",n="_J_",a=function(e,t){var a={data:t,cacheTime:new Date};window.localStorage.setItem(n+e,JSON.stringify(a))},o=function(e){return JSON.parse(window.localStorage.getItem(n+e))},i=function(e,n){var a=s();a=a||{},a[e]={data:n,createdTime:new Date},window.localStorage.setItem(t,JSON.stringify(a))},s=function(e){var n=JSON.parse(window.localStorage.getItem(t));return n&&e?n[e]:n},r=function(e){if(e){var n=s();delete n[e],window.localStorage.setItem(t,JSON.stringify(n))}else window.localStorage.removeItem(t)},l=function(t,n,a){function o(t){var o=s(t).data;e.ajax({url:t,contentType:"application/json",data:o,type:"post",success:function(){l++,r(t),l==i&&n(t)},error:function(){a(t)}})}var i,l=0;if("string"==e.type(t))i=1,o(t);else{var c=s();if(!c)return;i=c.length;for(var t in c)o(t)}},c=function(){var e=window.localStorage;for(var a in e)0==a.indexOf(n)&&e.removeItem(a);e.removeItem(t)};return{get:o,save:a,getPost:s,savePost:i,removePost:r,syncPost:l,clear:c}}(J.$),function(e){var t=function(t,n){var a,o,i,s,r,l,c={months:["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"],days:["日","一","二","三","四","五","六"],swipeable:!0,date:new Date,onRenderDay:void 0,onSelect:void 0},u=this,d=e(t),p=function(){u.settings=e.extend({},c,n),r=u.settings.date.getFullYear(),l=u.settings.date.getMonth(),s=new Date(r,l,u.settings.date.getDate()),g(),b()},h=function(e){return new Date(e.getFullYear(),e.getMonth(),1).getDay()},f=function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},g=function(){var e="";e+='<div class="jingle-calendar">',e+=v(r,l),e+=m(),e+='<div class="jingle-calendar-body">',e+=w(s),e+="</div></div>",d.html(e);var t=d.find("span");a=t.eq(0),o=t.eq(1),i=d.find(".jingle-calendar-body")},v=function(e,t){var n='<div class="jingle-calendar-nav">';return n+='<div> <i class="icon previous" data-year='+e+"></i><span>"+e+'</span><i class="icon next" data-year='+e+"></i></div>",n+='<div ><i class="icon previous" data-month='+t+"></i> <span>"+u.settings.months[t]+'</span><i class="icon next" data-month='+t+"></i></div>",n+="</div>"},m=function(){for(var e="<table><thead><tr>",t=0;7>t;t++)e+="<th>"+u.settings.days[t]+"</th>";return e+="</tr></thead></table>"},w=function(e){var t,n=h(e),a=f(e),o=Math.ceil((n+a)/7),i="";r=e.getFullYear(),l=e.getMonth(),t=new Date(r,l,1-n),i+="<table><tbody>";for(var s=0;o>s;s++){i+="<tr>";for(var c=0;7>c;c++)i+=y(t,l),t.setDate(t.getDate()+1);i+="</tr>"}return i+="</tbody></table>"},y=function(e,t){var n=e.getMonth()!==t,a=u.format(e),o=u.format(u.settings.date)==a?"active":"",i=e.getDate();return u.settings.onRenderDay&&(i=u.settings.onRenderDay.call(null,i,a)),n?"<td>&nbsp;</td>":'<td data-selected="selected" class="'+o+'" data-date= '+a+">"+i+"</td>"},b=function(){var t,n;d.on("tap",function(a){if(t=e(a.target),t.is("[data-year].next")?(s.setFullYear(s.getFullYear()+1),u.refresh(s)):t.is("[data-year].previous")?(s.setFullYear(s.getFullYear()-1),u.refresh(s)):t.is("[data-month].next")?(s.setMonth(s.getMonth()+1),u.refresh(s)):t.is("[data-month].previous")&&(s.setMonth(s.getMonth()-1),u.refresh(s)),n=t.closest("td"),!t.is("td")&&n.length>0&&(t=n),t.is("td")){var o=t.data("date");o&&u.settings.onSelect&&u.settings.onSelect.call(u,o)}}),d.on("swipeLeft",function(){s.setMonth(s.getMonth()+1),u.refresh(s)}),d.on("swipeRight",function(){s.setMonth(s.getMonth()-1),u.refresh(s)})};this.refresh=function(e){var t=new Date(r,l,1),n=new Date(e.getFullYear(),e.getMonth(),1),s=void 0;if(t.getTime()!=n.getTime()){s=n>t?"slideLeftRound":"slideRightRound",a.text(e.getFullYear()),o.text(this.settings.months[e.getMonth()]);var c=w(e);J.anim(i,s,function(){i.html(c)})}},p()};t.prototype.parse=function(e){var t=/^(\d{4})(?:\-|\/)(\d{1,2})(?:\-|\/)(\d{1,2})$/;return t.test(e)?new Date(parseInt(RegExp.$1,10),parseInt(RegExp.$2,10)-1,parseInt(RegExp.$3,10)):null},t.prototype.format=function(e){var t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return n=10>n?"0"+n:n,a=10>a?"0"+a:a,t+"-"+n+"-"+a},J.Calendar=t}(J.$),function(e){var t={},n=1;J.Scroll=function(a,i){var s,r,l=e(a),c={hScroll:!1,bounce:!1,lockDirection:!0,useTransform:!0,useTransition:!1,checkDOMChanges:!1,onBeforeScrollStart:function(t){e("select,input,textarea").blur();for(var n=t.target;1!=n.nodeType;)n=n.parentNode;"SELECT"!=n.tagName&&"INPUT"!=n.tagName&&"TEXTAREA"!=n.tagName&&t.preventDefault()}};return r=l.data("_jscroll_"),r&&t[r]?(s=t[r],e.extend(s.scroller.options,i),s.scroller.refresh(),s):(r="_jscroll_"+n++,l.data("_jscroll_",r),e.extend(c,i),scroller=new o(l[0],c),t[r]={scroller:scroller,destroy:function(){scroller.destroy(),delete t[r]}})}}(J.$),function(e){function t(t,n){var a,o,i,s,r,l,c,u,d=function(){},p=function(){return!0},h=!1,f=0,g=200;interval=0;var v=this;e.isPlainObject(t)?(a=e(t.selector),n=t.showDots,p=t.onBeforeSlide||p,d=t.onAfterSlide||d,u=t.autoPlay,interval=t.interval||3e3):a=e(t);var m=function(){i=a.children().first(),s=i.children(),r=s.length,l=a.offset().width,i.css("width",r*l),s.css({width:l,"float":"left"}).show(),void 0==n&&(n=!0),n&&J(),y(0,0),d(0),u&&w()},w=function(){setTimeout(function(){f==r-1?y(0):v.next(),w()},interval)},J=function(){if(o=a.find(".dots"),o.length>0)o.show();else{for(var t=30*r+20+2,n='<div class="dots"><ul>',i=0;r>i;i++)n+='<li index="'+i+'"',0==i&&(n+='class="active"'),n+='><a href="#"></a></li>';n+="</ul></div>",a.append(n),o=a.find(".dots"),o.children().css("width",t+"px"),o.find("li").on("tap",function(){var t=e(this).attr("index");y(parseInt(t),g)})}},y=function(t,n){n=n||g,i.css({"-webkit-transition-duration":n+"ms","-webkit-transform":"translate3D("+-(t*l)+"px,0,0)"}),f!=t&&(f=t,o&&e(o.find("li").get(f)).addClass("active").siblings().removeClass("active"),d(f))},b=function(){i.on("touchstart",x,!1),i.on("touchmove",P,!1),i.on("touchend",T,!1)},x=function(e){var t=e.touches[0];start={pageX:t.pageX,pageY:t.pageY,time:Number(new Date)},isScrolling=void 0,c=0,i[0].style.webkitTransitionDuration=0,h=!0},P=function(e){if(h){var t=e.touches[0];if(c=t.pageX-start.pageX,"undefined"==typeof isScrolling&&(isScrolling=Math.abs(c)<Math.abs(t.pageY-start.pageY)),!isScrolling){e.preventDefault();var n=!f&&c>0||f==r-1&&0>c;if(n)return;var a=c-f*l;i[0].style.webkitTransform="translate3D("+a+"px,0,0)"}}},T=function(){var e=Number(new Date)-start.time<250&&Math.abs(c)>20||Math.abs(c)>l/3,t=!f&&c>0||f==r-1&&0>c;isScrolling||(p(f,c)?y(f+(e&&!t?0>c?1:-1:0),g):y(f)),h=!1};m(),b(),this.refresh=function(){i.attr("style",""),m()},this.prev=function(){f&&y(f-1,g)},this.next=function(){r-1>f&&y(f+1,g)},this.index=function(e){y(e)}}J.Slider=t}(J.$),function(e){function t(t,n,a,o,i){var s,r,l,c,u,d,p,h,f,g,v={selector:void 0,type:"pullDown",minPullHeight:10,pullText:"下拉刷新...",releaseText:"松开立即刷新...",refreshText:"刷新中...",refreshTip:!1,onPullIcon:"arrow-down-2",onReleaseIcon:"icon-reverse",onRefreshIcon:"spinner",callback:void 0,forceOpenPullDown:!1,forceOpenPullDownCallback:void 0,forceOpenPullDown_pullText:"下拉刷新...",forceOpenPullDown_releaseText:"松开立即刷新...",forceOpenPullDown_refreshText:"刷新中...",forceOpenPullDown_refreshTip:!1,forceOpenPullDown_onPullIcon:"arrow-down-2"};"object"==typeof t?e.extend(v,t):(v.selector=t,v.type=n,v.callback=a,v.forceOpenPullDown=o,v.forceOpenPullDownCallback=i,"pullUp"===n&&e.extend(v,{pullText:"上拉加载更多...",releaseText:"松开开立即加载...",refreshText:"加载中...",onPullIcon:"arrow-up-3"})),p="pullDown"===v.type?!0:!1;var m=function(t){r=e(t.selector).children()[0];var n='<div class="refresh-container"><span class="refresh-icon icon '+t.onPullIcon+'"></span><span class="refresh-label">'+t.pullText+"</span>"+(t.refreshTip?'<div class="refresh-tip">'+t.refreshTip+"</div>":"")+"</div>";if(p)l=e(n).prependTo(r);else if(l=e(n).appendTo(r),t.forceOpenPullDown){var a='<div class="refresh-container"><span class="refresh-icon icon '+t.forceOpenPullDown_onPullIcon+'"></span><span class="refresh-label">'+t.forceOpenPullDown_pullText+"</span>"+(t.forceOpenPullDown_refreshTip?'<div class="refresh-tip">'+t.forceOpenPullDown_refreshTip+"</div>":"")+"</div>";h=e(a).prependTo(r),f=h.find(".refresh-icon"),g=h.find(".refresh-label")}d=l.height(),c=l.find(".refresh-icon"),u=l.find(".refresh-label")},w=function(e){return J.Scroll(e.selector,{topOffset:p?d:0,bounce:!0,onScrollMove:function(){this.y>e.minPullHeight&&p&&!c.hasClass(e.onReleaseIcon)?(l.show(),c.addClass(e.onReleaseIcon),u.html(e.releaseText),this.minScrollY=0):this.y<e.minPullHeight&&p&&c.hasClass(e.onReleaseIcon)?(l.show(),c.removeClass(e.onReleaseIcon),u.html(e.pullText),this.minScrollY=-d):this.y>0&&this.y>e.minPullHeight&&!p&&e.forceOpenPullDown&&!f.hasClass(e.onReleaseIcon)?(h.show(),f.addClass(e.onReleaseIcon),g.html(e.forceOpenPullDown_releaseText),this.minScrollY=0):this.y>0&&this.y<e.minPullHeight&&!p&&e.forceOpenPullDown&&f.hasClass(e.onReleaseIcon)?(h.show(),f.removeClass(e.onReleaseIcon),g.html(e.forceOpenPullDown_pullText),this.minScrollY=-d):this.y<0&&this.y<this.maxScrollY-e.minPullHeight&&!p&&!c.hasClass(e.onReleaseIcon)?(l.show(),c.addClass(e.onReleaseIcon),u.html(e.releaseText),this.maxScrollY=this.maxScrollY):this.y<0&&this.y>this.maxScrollY+e.minPullHeight&&!p&&c.hasClass(e.onReleaseIcon)&&(l.show(),c.removeClass(e.onReleaseIcon),u.html(e.pullText),this.maxScrollY=d)},onScrollEnd:function(){if(c.hasClass(e.onReleaseIcon)){c.removeClass(e.onReleaseIcon).removeClass(e.onPullIcon).addClass(e.onRefreshIcon),u.html(e.refreshText);var t=this;setTimeout(function(){e.callback.call(t,l)},1),h.hide()}else if(e.forceOpenPullDown&&f.hasClass(e.onReleaseIcon)){f.removeClass(e.onReleaseIcon).removeClass(e.forceOpenPullDown_onPullIcon).addClass(e.onRefreshIcon),g.html(e.forceOpenPullDown_refreshText);var t=this;setTimeout(function(){e.forceOpenPullDownCallback.call(t,h)},1),l.hide()}},onRefresh:function(){c.removeClass(e.onReleaseIcon).removeClass(e.onPullIcon).addClass(e.onRefreshIcon),u.html(e.refreshText),f.removeClass(e.onReleaseIcon).removeClass(e.forceOpenPullDown_onPullIcon).addClass(e.onRefreshIcon),g.html(e.forceOpenPullDown_refreshText)}})};return m(v),s=w(v)}var n={},a=1;J.Refresh=function(o,i,s,r,l){var c,u;if(c=e(o.selector?o.selector:o),u=c.data("_jrefresh_"),u&&n[u])return n[u];u="_jrefresh_"+a++,c.data("_jrefresh_",u);var d=new t(o,i,s,r,l);return n[u]={scroller:d.scroller,destroy:function(){delete n[u],d.scroller.destroy(),e(".refresh-container",o).remove()}}}}(J.$),n.exports=J});
/*!components/util/App.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
define('components/util/App', ['spm_modules/jingle/0.0.1/Jingle.debug.qymodify'], function (require, exports, module) {
    var J=Jingle=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var App;
    var pages = {};
    var run = function () {
        $.each(pages, function (k, v) {
            var sectionId = '#' + k + '_section';
            $('body').delegate(sectionId, 'pageinit', function () {
                v.init && v.init.call(v);
            });
            $('body').delegate(sectionId, 'pageshow', function (e, isBack) {
                //页面加载的时候都会执行
                v.show && v.show.call(v);
                //后退时不执行
                if (!isBack && v.load) {
                    v.load.call(v);
                }
            });
        });

        J.Transition.add('flip', 'slideLeftOut', 'flipOut', 'slideRightOut', 'flipIn');


        Jingle.launch({
            showWelcome: false,
            welcomeSlideChange: function (i) {},
            showPageLoading: true,
            remotePage: {
                '#modifyPassword_section': 'components/modifyPassword_section/modifyPassword_section.html',
                '#user_section': 'components/user_section/user_section.html',
                '#login_section': 'components/login_section/login_section.html',

                //首页列表
                '#main_section': 'components/main_section/main_section.html',
                '#search_section': 'components/gatherSearch/search_section/search_section.html',
                '#searchResult_section': 'components/gatherSearch/searchResult_section/searchResult_section.html',
                '#searchResultAllWebDetail_section': 'components/gatherSearch/searchResultAllWebDetail_section/searchResultAllWebDetail_section.html',
                '#change_section': 'components/gatherSearch/change_section/change_section.html',

                '#searchToBuy_section': 'components/waitBuy/searchToBuy_section/searchToBuy_section.html',
                '#searchToBuyDetail_section': 'components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section.html',

                '#gatherMain_section': 'components/gatherMain_section/gatherMain_section.html',
                '#gatherCheapBuy_section': 'components/gatherCheapBuy_section/gatherCheapBuy_section.html',
                '#gatherHeadlineList_section': 'components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section.html',
                '#gatherHeadlineListDetail_section': 'components/gatherHeadline/gatherHeadlineListDetail_section/gatherHeadlineListDetail_section.html',
                '#gatherActsList_section': 'components/gatherActs/gatherActsList_section/gatherActsList_section.html',
                '#gatherActsListDetail_section': 'components/gatherActs/gatherActsListDetail_section/gatherActsListDetail_section.html',
                '#gatherGroupBuy_section': 'components/gatherGroupBuy_section/gatherGroupBuy_section.html',
                '#gatherSeaBuy_section': 'components/gatherSeaBuy_section/gatherSeaBuy_section.html',

                '#addAccount_section': 'components/gatherAccount/addAccount_section/addAccount_section.html',
                '#accountDetail_section': 'components/gatherAccount/accountDetail_section/accountDetail_section.html',
                '#accountManage_section': 'components/gatherAccount/accountManage_section/accountManage_section.html',

                '#gatherIntelligentSearch_section': 'components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section.html',
                '#gatherIntelligentSearchAll_section': 'components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section.html',
                '#gatherIntelligentSearchAllDetail_section': 'components/gatherIntelligentSearch/gatherIntelligentSearchAllDetail_section/gatherIntelligentSearchAllDetail_section.html'
            }
        });



    };
    var page = function (id, factory) {
        return ((id && factory) ? _addPage : _getPage).call(this, id, factory);
    };
    var _addPage = function (id, factory) {
        pages[id] = new factory();
    };
    var _getPage = function (id) {
        return pages[id];
    };
    //动态计算chart canvas的高度，宽度，以适配终端界面
    var calcChartOffset = function () {
        return {
            height: $(document).height() - 44 - 30 - 60,
            width: $(document).width()
        }

    };
    App= {
        run: run,
        page: page,
        calcChartOffset: calcChartOffset
    };

    module.exports=App;
});
/*!components/login_section/login_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
define('components/login_section/login_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var userObj={account:{}};

    App.page('login', function () {
        this.init = function () {

            if (cookie('get', 'userObj')) {
                userObj = JSON.parse(cookie('get', 'userObj'));
            }
            //检测登录
            //$.ajax({
            //    url: apiHost + 'login/checkLoginStatus.do',
            //    dataType: 'json',
            //    success: function (data) {
            //        if (data.status == 1) {
            //            //已经登录
            //            J.Router.goTo('#areaList_section');
            //        } else if (data.status == '-99') {
            //            J.Router.goTo('#login_section');
            //            //根据缓存自动填写手机号
            //            if (userObj.account && userObj.account.mobile) {
            //                $('.input-cellphone').val(userObj.account.mobile);
            //            }
            //
            //        } else {
            //            //J.showToast(data.detail, 'error');
            //        }
            //
            //    },
            //    beforeSend: function () {
            //
            //    },
            //    complete: function () {
            //
            //    }
            //});
            if (userObj.account && userObj.account.mobile) {
                $('.input-cellphone').val(userObj.account.mobile);
            }
            $('.btn-login').on('tap', function () {
                //J.Router.goTo('#areaList_section');
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return false;
                }
                J.Router.goTo('#main_section');
                //$.ajax({
                //    url: apiHost + 'user/loginHtml5.do',
                //    data: $('#login_form').serialize(),
                //    dataType: 'json',
                //    success: function (data) {
                //        if (data.status == 1) {
                //            J.Router.goTo('#main_section');
                //            userObj.account = data.data;
                //            userObj.account.key = data.key;
                //            window.userObj=userObj;
                //            //缓存到本地
                //            cookie('set', 'userObj', JSON.stringify(userObj));
                //
                //        } else if (data.status == '-99') {
                //            J.Router.goTo('#login_section');
                //        } else {
                //            J.showToast(data.detail, 'error');
                //        }
                //
                //    },
                //    beforeSend: function () {
                //        $this.addClass('disable').html('登录中...');
                //    },
                //    complete: function () {
                //        $this.removeClass('disable').html('登录');
                //    }
                //});
                return false;
            });
        }
    });
});
/*!components/util/utilFunctions.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */
define('components/util/utilFunctions', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    function validateGoodsId(goodsId) {
        var result = true;
        $.each(userObj.goodsIds, function (i, item) {
            if (item.goodsId == goodsId) {
                result = false;
                return false;
            }
        });
        return result;
    }

    function collectParams($items) {
        var params = [];
        $items.each(function (index) {
            var $thisItem = $(this);
            var id = $thisItem.attr('data-id');
            params.push(id);
        });
        return params.join(',');
    }

    function getOrderList(params, beforeCallback, completeCallback, usefullCallback, uselessCallback) {
        $.ajax({
            url: apiHost + 'groupPurchase/queryProductOrderByIds.do',
            data: params,
            dataType: 'json',
            success: function (data) {
                //var data=JSON.parse(data);
                if (data.status == 1) {
                    if (data.data.content && data.data.content.length > 0) {
                        usefullCallback && usefullCallback(data);
                        for (var i = 0; i < data.data.content.length; i++) {
                            var item = data.data.content[i];
                            var name = item.name;
                            var goodsName = item.goodsName;
                            var goodsId = item.goodsId;
                            var orderId = item.orderId;
                            var mobile = item.mobile;
                            var imgKey = item.orderImg;
                            $('.orderListItems').append(
                                '<li class="orderListItem clearfix" data-selected="selected" data-id="' + orderId + '">' +
                                '<div class="item-media"><img src="/hw-sq-run-web/banner/getBannerPicture.do?pictureId=' + imgKey + '" style="width: 4rem;"></div>' +
                                '<div class="item-inner">' +
                                '<div class="item-title-row">' +
                                '<div class="item-title">' + goodsName + '</div>' +
                                '</div>' +
                                '<div class="item-text">' + name + '<br/>' + mobile + '</div>' +
                                '</div>' +
                                '<div class="item-after btn-checkBtn">' +
                                '<i class="icon checkbox-unchecked"></i>' +
                                '</div>' +
                                '</li>'
                            );
                        }
                        totalPage = data.data.totalPages;
                        startPage = data.data.number;

                    } else {
                        uselessCallback && uselessCallback();
                        $('.orderListItems').html('');
                        $('.orderListItems').append(
                            '<li class="orderListItem clearfix" data-selected="selected"><p class="textCenter">没有相关订单</p></li>'
                        );
                    }

                } else if (data.status == '-99') {
                    J.Router.goTo('#login_section');
                } else {
                    J.showToast(data.detail, 'error');
                }

            },
            beforeSend: function () {
                beforeCallback && beforeCallback();
            },
            complete: function () {
                completeCallback && completeCallback();
            }
        });
    }
    function calculateInput($inputs,$total,$minus){
        var oldValue=[];
        $inputs.each(function(index){
            var $this=$(this);

            oldValue.push($this.val());

            $this.blur(function(){
                var value=$this.val(),
                    maxNum=$this.attr('data-maxNum');

                if(!/^([-]|[0-9])*$/g.test(value)){
                    $this.focusin();
                    J.showToast('补货数量必须为数字！', 'error');
                    $this.val(oldValue[index]);
                }else if(value<0){
                    $this.focusin();
                    J.showToast('补货数量必须为正数！', 'error');
                    $this.val(oldValue[index]);
                }else if(maxNum&&value>maxNum){
                    J.showToast('停售商品数量只能补齐！', 'error');
                    $this.val(oldValue[index]);
                }else{
                    var total=0;
                    $this.parents('.item-detail-table').find('.item-detail-form-input').each(function(){
                        var $other=$(this),
                            otherValue=Number($other.val());
                        //console.log(otherValue);
                        total+=otherValue;
                    });
                    //total+=Number(value);
                    $total.html(total);
                    $minus.parent().html('');
                }
            });
        });

    }
    module.exports={
        validateGoodsId:validateGoodsId,
        collectParams:collectParams,
        getOrderList:getOrderList,
        calculateInput:calculateInput
    }
});
/*!spm_modules/get-query-string/0.0.1/get-query-string.js*/
;define("spm_modules/get-query-string/0.0.1/get-query-string",[],function(){function n(n,e){var t=e||document.location.search||document.location.hash,o=null;return n&&""!==t?(o=t.match(new RegExp("(^|&|[?#])"+n+"=([^&]*)(&|$)")),null===o?o:decodeURIComponent(o[2])):o}return n});
/*!spm_modules/wn-core/0.0.4/wn-core.js*/
;define("spm_modules/wn-core/0.0.4/wn-core",["spm_modules/zepto/0.0.1/zepto","spm_modules/zepto/0.0.1/zepto"],function(n,e,i){var t=n("spm_modules/zepto/0.0.1/zepto"),o=n("spm_modules/zepto/0.0.1/zepto"),r=function(){t.extend({visibleHidden:function(n){return n.css({visibility:"hidden"}),!1},visibleShow:function(n){return n.css({visibility:"visible"}),!1}})};r.prototype={constructor:r,console:function(n){!function(){for(var n,e=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],t=i.length,o=window.console=window.console||{};t--;)n=i[t],o[n]||(o[n]=e)}(),console&&console.log(n)},len:function(n){for(var n=n||"",e=0,i=n.split(""),t=0;t<i.length;t++)i[t].charCodeAt(0)<299?e++:e+=2;return e},random:function(n,e){return Math.floor(n+Math.random()*(e-n))},isIE6:function(){var n="undefined"==typeof document.body.style.maxHeight;return n?!0:!1},addScript:function(n,e){var i=document.createElement("script"),t=e||o("head"),r="?v="+(new Date).getTime();for(var l in n)i[l]=n[l];return i.src=n.src+r,t.after(i),!1},getItems:function(n){var e;if(n.find("div").length>0)e=1==n.find("div").length?n.find("div"):n.find("div").siblings();else if(n.find("li").length>0)e=1==n.find("li").length?n.find("li"):n.find("li").siblings();else if(n.find("a").length>0)e=1==n.find("a").length?n.find("a"):n.find("a").siblings();else{if(!(n.find("img").length>0))return null;e=1==n.find("img").length?n.find("img"):n.find("img").siblings()}return e},parseArgus:function(n,e){function i(n){return n instanceof t?"$":"object"==typeof n?"object":!1}var o=0;for(var r in e)e[r]="object"==i(n[0])?n[0][r]?n[0][r]:e[r]:n[o]?n[o]:e[r],o++}},i.exports=r});
/*!spm_modules/tab/0.0.2/tab.js*/
;define("spm_modules/tab/0.0.2/tab",["spm_modules/zepto/0.0.1/zepto","spm_modules/wn-core/0.0.4/wn-core"],function(e,r,s){var a=e("spm_modules/zepto/0.0.1/zepto"),n=e("spm_modules/wn-core/0.0.4/wn-core"),t=new n,o=t.parseArgus;s.exports=function(e,r,s,n,t,c,l,d){function i(e){return f.eq(w).hide().removeClass("active"),C.eq(w).removeClass(s),f.eq(e).show().addClass("active"),C.eq(e).addClass(s),d&&d(w,e),!1}function u(e){return f.eq(w).fadeOut(200).removeClass("active"),C.eq(w).removeClass(s),f.eq(e).fadeIn(200).addClass(s),C.eq(e).addClass(s),d&&d(w,e),!1}var m={btns:a,conts:a,current:"",trigerType:"mouseover",transType:"normal",currIndex:0,initCallback:function(){},triggerCallback:function(){}};o(arguments,m);var e=m.btns,r=m.conts,s=m.current,n=m.trigerType,t=m.transType,c=m.currIndex,p=m.initCallback,v=m.triggerCallback,C=e,f=r,q=n||"mouseover",b=t||"normal",g=c||0,w=c||0,l=p,d=v;C.eq(g).addClass(s);for(var h=0;h<f.length;h++)h!=g?f.eq(h).hide():f.eq(h).show();return l&&l(g),C.bind(q,function(){var e=C.index(this);switch(b){case"normal":i(e);break;case"fade":u(e)}return w=e,!1}),!1}});
/*!spm_modules/template/3.0.0/template.js*/
;!function(){function e(e){return e.replace(y,"").replace(w,",").replace(b,"").replace(x,"").replace(T,"").split(E)}function n(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function t(t,r){function a(e){return p+=e.split(/\n/).length-1,s&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=v[1]+n(e)+v[2]+"\n"),e}function o(n){var t=p;if(u?n=u(n,r):i&&(n=n.replace(/\n/g,function(){return p++,"$line="+p+";"})),0===n.indexOf("=")){var a=f&&!/^=[=#]/.test(n);if(n=n.replace(/^=[=#]?|[\s;]*$/g,""),a){var o=n.replace(/\s*\([^\)]+\)/,"");$[o]||/^(include|print)$/.test(o)||(n="$escape("+n+")")}else n="$string("+n+")";n=v[1]+n+v[2]}return i&&(n="$line="+t+";"+n),h(e(n),function(e){if(e&&!d[e]){var n;n="print"===e?w:"include"===e?b:$[e]?"$utils."+e:g[e]?"$helpers."+e:"$data."+e,x+=e+"="+n+",",d[e]=!0}}),n+"\n"}var i=r.debug,l=r.openTag,c=r.closeTag,u=r.parser,s=r.compress,f=r.escape,p=1,d={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},m="".trim,v=m?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],y=m?"$out+=text;return $out;":"$out.push(text);",w="function(){var text=''.concat.apply('',arguments);"+y+"}",b="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+y+"}",x="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(i?"$line=0,":""),T=v[0],E="return new String("+v[3]+");";h(t.split(l),function(e){e=e.split(c);var n=e[0],t=e[1];1===e.length?T+=a(n):(T+=o(n),t&&(T+=a(t)))});var j=x+T+E;i&&(j="try{"+j+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+n(t)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var S=new Function("$data","$filename",j);return S.prototype=$,S}catch(W){throw W.temp="function anonymous($data,$filename) {"+j+"}",W}}var r=function(e,n){return"string"==typeof n?m(n,{filename:e}):i(e,n)};r.version="3.0.0",r.config=function(e,n){a[e]=n};var a=r.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},o=r.cache={};r.render=function(e,n){return m(e,n)};var i=r.renderFile=function(e,n){var t=r.get(e)||d({filename:e,name:"Render Error",message:"Template not found"});return n?t(n):t};r.get=function(e){var n;if(o[e])n=o[e];else if("object"==typeof document){var t=document.getElementById(e);if(t){var r=(t.value||t.innerHTML).replace(/^\s*|\s*$/g,"");n=m(r,{filename:e})}}return n};var l=function(e,n){return"string"!=typeof e&&(n=typeof e,"number"===n?e+="":e="function"===n?l(e.call(e)):""),e},c={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},u=function(e){return c[e]},s=function(e){return l(e).replace(/&(?![\w#]+;)|[<>"']/g,u)},f=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},p=function(e,n){var t,r;if(f(e))for(t=0,r=e.length;r>t;t++)n.call(e,e[t],t,e);else for(t in e)n.call(e,e[t],t)},$=r.utils={$helpers:{},$include:i,$string:l,$escape:s,$each:p};r.helper=function(e,n){g[e]=n};var g=r.helpers=$.$helpers;r.onerror=function(e){var n="Template Error\n\n";for(var t in e)n+="<"+t+">\n"+e[t]+"\n\n";"object"==typeof console&&console.error(n)};var d=function(e){return r.onerror(e),function(){return"{Template Error}"}},m=r.compile=function(e,n){function r(t){try{return new c(t,l)+""}catch(r){return n.debug?d(r)():(n.debug=!0,m(e,n)(t))}}n=n||{};for(var i in a)void 0===n[i]&&(n[i]=a[i]);var l=n.filename;try{var c=t(e,n)}catch(u){return u.filename=l||"anonymous",u.name="Syntax Error",d(u)}return r.prototype=c.prototype,r.toString=function(){return c.toString()},l&&n.cache&&(o[l]=r),r},h=$.$each,v="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",y=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,w=/[^\w$]+/g,b=new RegExp(["\\b"+v.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),x=/^\d[^,]*|,\d[^,]*/g,T=/^,+|,+$/g,E=/^$|,+/;"function"==typeof define?define("spm_modules/template/3.0.0/template",[],function(){return r}):"undefined"!=typeof exports?module.exports=r:this.template=r}();
/*!spm_modules/cssTriangle/0.0.1/cssTriangle.js*/
;define("spm_modules/cssTriangle/0.0.1/cssTriangle",[],function(r,e,o){o.exports=function(r,e,o,t){var n={up:{borderWidth:"0 "+o+" "+o+" "+o,borderColor:"#000000 #000000 "+t+" #000000",ie6borderColor:"transparent transparent "+t+" transparent"},right:{borderWidth:o+" 0 "+o+" "+o,borderColor:"#000000 #000000 #000000 "+t,ie6borderColor:"transparent transparent transparent "+t},down:{borderWidth:o+" "+o+" 0 "+o,borderColor:t+" #000000 #000000 #000000",ie6borderColor:t+" transparent transparent transparent"},left:{borderWidth:o+" "+o+" "+o+" 0",borderColor:"#000000 "+t+" #000000 #000000",ie6borderColor:"transparent "+t+" transparent transparent"}};return r.css({width:0,height:0,lineHeight:"0",borderStyle:"solid",borderWidth:n[e].borderWidth}),r.css({borderColor:n[e].ie6borderColor}),!1}});
/*!components/gatherMain_section/gatherMain_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherMain_section/gatherMain_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template', 'spm_modules/cssTriangle/0.0.1/cssTriangle'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    var cssTriangle=require('spm_modules/cssTriangle/0.0.1/cssTriangle');

    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherMain', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherMain_section');
            var $websiteCats=$currentSection.find('.websiteCats');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($websiteCats.height()==0){
                    $websiteCats.animate({height:110,borderWidth:1},100);
                }else{
                    $websiteCats.animate({height:0,borderWidth:0},100);
                }
            });
            J.Scroll('#gatherMain-websiteCats-box-cats',{hScroll:true,hScrollbar : false});
            J.Scroll('#gatherMain-websiteCats-box-catsCont',{hScroll:true,hScrollbar : false});

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'button-link-active-lock',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });

            //初始化更多按钮的三角
            cssTriangle($('.triangle-down'),'down','5px','#3498DB');
        }
    });

});
/*!components/gatherCheapBuy_section/gatherCheapBuy_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherCheapBuy_section/gatherCheapBuy_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherCheapBuy', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherCheapBuy_section');
            var $websiteCats=$currentSection.find('.websiteCats');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($websiteCats.height()==0){
                    $websiteCats.animate({height:110,borderWidth:1},100);
                }else{
                    $websiteCats.animate({height:0,borderWidth:0},100);
                }
            });
            J.Scroll('#gatherCheapBuy-websiteCats-box-cats',{hScroll:true,hScrollbar : false});
            J.Scroll('#gatherCheapBuy-websiteCats-box-catsCont',{hScroll:true,hScrollbar : false});
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'button-link-downArrow-active',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });
        }
    });

});
/*!components/gatherGroupBuy_section/gatherGroupBuy_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherGroupBuy_section/gatherGroupBuy_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherGroupBuy', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherGroupBuy_section');
            var $tabBtns=$currentSection.find('.header-secondary');
            var $activeArticle=$currentSection.find('article.active');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($tabBtns.height()==0){
                    $tabBtns.animate({height:30},100);
                    $activeArticle.animate({top:74},100);
                }else{
                    $tabBtns.animate({height:0},100);
                    $activeArticle.animate({top:44},100);
                }
            });

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'button-link-active-lock',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });
        }
    });

});
/*!components/gatherSeaBuy_section/gatherSeaBuy_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherSeaBuy_section/gatherSeaBuy_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherSeaBuy', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherSeaBuy_section');
            var $websiteCats=$currentSection.find('.websiteCats');
            $currentSection.find('.button-links .btn-more').on('tap',function(){
                if($websiteCats.height()==0){
                    $websiteCats.animate({height:110,borderWidth:1},100);
                }else{
                    $websiteCats.animate({height:0,borderWidth:0},100);
                }
            });
            J.Scroll('#gatherSeaBuy-websiteCats-box-cats',{hScroll:true,hScrollbar : false});
            J.Scroll('#gatherSeaBuy-websiteCats-box-catsCont',{hScroll:true,hScrollbar : false});

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'button-link-downArrow-active',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });
        }
    });

});
/*!components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherHeadlineList', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherHeadlineList_section');
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'active',
                trigerType:'tap'
            });
        }
    });

});
/*!components/gatherActs/gatherActsList_section/gatherActsList_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherActs/gatherActsList_section/gatherActsList_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherActsList', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#gatherActsList_section');
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'active',
                trigerType:'tap'
            });
        }
    });

});
/*!components/gatherSearch/search_section/search_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherSearch/search_section/search_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');

    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('search', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currSection=$('#search_section');
            $currSection.find('.btn-cats').on('tap',function(){
                var $this=$(this);
                if($this.hasClass('list')){
                    $this.removeClass('list').addClass('pencil');
                    $currSection.find('.hot-words,.history-words').hide();
                    $currSection.find('.category-viewport').show();
                }else{
                    $this.removeClass('pencil').addClass('list');
                    $currSection.find('.hot-words,.history-words').show();
                    $currSection.find('.category-viewport').hide();
                }
            });

            $currSection.find('.history-words .btn-delAll').on('tap',function(){
                $currSection.find('.history-words .history-words-list').html('');
            });
            $currSection.find('.history-words').on('tap','.btn-del',function(){
                var $currItem=$(this).parents('.history-words-list-item');
                $currItem.remove();
            });
        }
    });

});
/*!components/gatherSearch/searchResult_section/searchResult_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherSearch/searchResult_section/searchResult_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template', 'components/navigation/navigation'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var navigation=require('components/navigation/navigation');

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('searchResult', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#searchResult_section');

            tab({
                btns:$currentSection.find('.header-tabBtns .tabBtn'),
                conts:$currentSection.find('.tabConts-iframe .tabCont'),
                current:'button-link-active-lock',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabConts-iframe .tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabConts-iframe .tabCont').eq(currIndex);
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });

            tab({
                btns:$currentSection.find('.searchToolBar .tabBtn'),
                conts:$currentSection.find('.searchToolBar .tabCont'),
                current:'color-blue',
                trigerType:'tap'
            });

            $('.searchToolBar-footer-btn-cancel').on('tap', function () {
                var $this=$(this);
                $this.parents('.searchToolBar').hide();
                return false;
            });

            $('.searchToolIcon').on('tap', function () {
                var $this=$(this);
                $('.searchToolBar').show();
                return false;
            });

            $('.searchKeywordsIcon').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsBar').show();
                return false;
            });

            $('.searchKeywordsBar .searchKeywordsBar-tit-btn-cancel').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsBar').hide();
                return false;
            });

            //搜索详情取消按钮
            $('.searchKeywordsDetail-btn-cancel').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail').hide();
                return false;
            });

            //搜本站按钮
            $('.btn-searchSelfWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-selfWeb').show();
                return false;
            });

            //搜三家按钮
            $('.btn-searchThreeWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-threeWeb').show();
                return false;
            });

            //搜淘宝按钮
            $('.btn-searchTaobao').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-taobao').show();
                return false;
            });

            //搜全网按钮
            $('.btn-searchAllWeb').on('tap', function () {
                var $this=$(this);
                $('.searchKeywordsDetail-allWeb').show();
                return false;
            });

            //切换导航菜单
            $currentSection.find('footer').on('tap','.footer-btn-searchGoods',function(){
                $currentSection.find('footer').html(navigation.mainNavHtml);
                return false;
            });
        }
    });

});
/*!components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');

    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherIntelligentSearch', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currSection=$('#gatherIntelligentSearch_section');
            $currSection.find('.input-keywords').blur(function(){
                var $this=$(this);
                if($this.val()){
                    $currSection.find('.blankState').hide();
                    $currSection.find('.enterKeywordsStats').show();
                }
            });
            tab({
                btns:$currSection.find('.enterKeywordsStats .tabBtn'),
                conts:$currSection.find('.enterKeywordsStats .tabCont'),
                current:'active',
                trigerType:'tap'
            });
            $currSection.find('.history-words .btn-delAll').on('tap',function(){
                $currSection.find('.history-words .history-words-list').html('');
            });
            $currSection.find('.history-words').on('tap','.btn-del',function(){
                var $currItem=$(this).parents('.history-words-list-item');
                $currItem.remove();
            });
            $currSection.find('.button-lookup').on('tap',function(){
                var $this=$(this);
                J.Router.goTo('#gatherIntelligentSearchAll_section?'+cellectKeywordsToParams($currSection.find('.input-keywords')));
                return false;
            });
            function cellectKeywordsToParams($inputs){
                var keywords={};
                $inputs.each(function(){
                    var $currInput=$(this),
                        index=$currInput.index();
                    keywords[index]=$currInput.val();
                });
                return 'keywords='+JSON.stringify(keywords);
            }
        }
    });

});
/*!components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');

    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('gatherIntelligentSearchAll', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currSection=$('#gatherIntelligentSearchAll_section');

            var keywords=JSON.parse(getQueryString('keywords'));
            $.each(keywords,function(i,item){
                $currSection.find('.input-keywords').eq(Number(i)).val(item);
            });

        }
    });

});
/*!components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('searchToBuyDetail', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#searchToBuyDetail_section');

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'peter-river',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabBtn=$currentSection.find('.tabBtn').eq(currIndex);
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currTabBtn.removeClass('asbestos');
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }

                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    var $currTabBtn=$currentSection.find('.tabBtn').eq(currIndex);
                    var $lastTabBtn=$currentSection.find('.tabBtn').eq(lastOneIndex);
                    $lastTabBtn.addClass('asbestos');
                    $currTabBtn.removeClass('asbestos');
                    if(!$currTabCont.attr('src')){
                        $currTabCont.attr('src',$currTabCont.attr('data-src'));
                    }
                }
            });
        }
    });

});
/*!components/gatherSearch/change_section/change_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherSearch/change_section/change_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('change', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#change_section');
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'dark-orange',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                }
            });

            $currentSection.find('.search-result').on('tap','.search-result-word',function(){
                var $this=$(this);
                $currentSection.find('.tabCont.active').find('.btn-replace').eq(0).css('display','block !important');
            });

        }
    });

});
/*!components/gatherAccount/addAccount_section/addAccount_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/gatherAccount/addAccount_section/addAccount_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('addAccount', function () {
        this.show=function(){

        };
        this.init = function () {
            var $currentSection=$('#addAccount_section');
            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'dark-orange',
                trigerType:'tap',
                initCallback:function(currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                },
                triggerCallback:function(lastOneIndex,currIndex){
                    var $currTabCont=$currentSection.find('.tabCont').eq(currIndex);
                    $currentSection.find('.tabCont').removeClass('active');
                    $currTabCont.addClass('active');
                }
            });
            $currentSection.find('.search-result').on('tap','.search-result-word',function(){
                var $this=$(this);
                $currentSection.find('.tabCont.active').find('.btn-replace').eq(0).css('display','block !important');
            });
        }
    });

});
/*!components/user_section/user_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/user_section/user_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');

    App.page('user', function () {
        this.show = function () {
            var $currSection = $('#user_section');
            $currSection.find('.name').html(window.userObj.account.name);
            $currSection.find('.mobile').html(window.userObj.account.mobile);
            $currSection.find('.role').html(window.userObj.account.roleName);
        };
        this.init = function () {
            var $currSection = $('#user_section');
            //退出按钮
            $currSection.find('.btn-loginOut').on('tap',function(){
                var $this = $(this);
                //if ($this.hasClass('disable')) {
                //    return false;
                //}
                $.ajax({
                    url: apiHost + 'login/logout.do',
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        if (data.status == "-99") {
                            J.Router.goTo('#login_section');
                            window.location.reload();
                        } else {
                            J.showToast(data.detail, 'error');
                        }
                    },
                    beforeSend: function () {
                        $this.addClass('disable');
                    },
                    complete: function () {
                        $this.removeClass('disable');
                    }
                });
                return false;
            });
        }
    });

});
/*!components/modifyPassword_section/modifyPassword_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/modifyPassword_section/modifyPassword_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');

    App.page('modifyPassword', function () {
        this.show = function () {
            var $currSection = $('#modifyPassword_section');
            $currSection.find('form')[0].reset();
        };
        this.init = function () {
            var $currSection = $('#modifyPassword_section');
            //修改按钮
            $currSection.find('.btn-modify').on('tap',function(){
                var $this = $(this),
                    oldPass=$('#oldPassword').val(),
                    password=$('#password').val(),
                    confirmPassword=$('#confirmPassword').val();

                if ($this.hasClass('disable')) {
                    return false;
                }
                if(confirmPassword==password){
                    J.confirm('','确认修改密码？',function(){
                        $.ajax({
                            url: apiHost + 'user/modifyPass.do',
                            dataType: 'json',
                            data:{
                                key:window.userObj.account.key,
                                userId:window.userObj.account.userId,
                                oldPass:oldPass,
                                newPass:password
                            },
                            success: function (data) {
                                if (data.status == 1) {
                                    J.showToast('修改成功！', 'success');
                                    J.Router.goTo('#user_section');
                                    //window.location.reload();
                                } else {
                                    J.showToast(data.detail, 'error');
                                }
                            },
                            beforeSend: function () {
                                $this.addClass('disable');
                            },
                            complete: function () {
                                $this.removeClass('disable');
                            }
                        });
                    },function(){

                    });

                }else {
                    J.showToast('两次密码不相同！', 'error');
                }

                return false;
            });
        }
    });

});
/*!components/main_section/main_section.js*/
;/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */
define('components/main_section/main_section', ['spm_modules/zepto/0.0.1/zepto', 'spm_modules/jingle/0.0.1/Jingle.debug.qymodify', 'spm_modules/cookie/0.0.1/cookie', 'components/util/App', 'components/util/utilFunctions', 'spm_modules/get-query-string/0.0.1/get-query-string', 'spm_modules/tab/0.0.2/tab', 'spm_modules/template/3.0.0/template'], function (require, exports, module) {
    var $=require('spm_modules/zepto/0.0.1/zepto');
    var J=require('spm_modules/jingle/0.0.1/Jingle.debug.qymodify');
    var cookie=require('spm_modules/cookie/0.0.1/cookie');
    var App=require('components/util/App');
    var utilFunctions=require('components/util/utilFunctions');
    var getQueryString=require('spm_modules/get-query-string/0.0.1/get-query-string');
    var tab=require('spm_modules/tab/0.0.2/tab');
    var template=require('spm_modules/template/3.0.0/template');
    template.helper('$',$);
    template.helper('decodeURIComponent', decodeURIComponent);

    var startPage = 0,
        pageSize = 10,
        totalPage;

    App.page('main', function () {
        this.show=function(){

        };
        this.init = function () {
            var slider;
            var $currentSection=$('#main_section');

            slider = new J.Slider({
                selector : '#main_banner',
                onBeforeSlide : function(){
                    return true;
                },
                onAfterSlide : function(i){
                    //alert(i);
                }
            });
            $('#slider_prev').tap(function(){slider.prev()});
            $('#slider_next').tap(function(){slider.next()});

            tab({
                btns:$currentSection.find('.tabBtn'),
                conts:$currentSection.find('.tabCont'),
                current:'dark-orange',
                trigerType:'tap'
            });
        }
    });

});
/*!static/js/index.js*/
;define('static/js/index', ['components/util/deviceSetting', 'spm_modules/zepto/0.0.1/zepto', 'spm_modules/cookie/0.0.1/cookie', 'components/navigation/navigation', 'components/util/App', 'components/login_section/login_section', 'components/gatherMain_section/gatherMain_section', 'components/gatherCheapBuy_section/gatherCheapBuy_section', 'components/gatherGroupBuy_section/gatherGroupBuy_section', 'components/gatherSeaBuy_section/gatherSeaBuy_section', 'components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section', 'components/gatherActs/gatherActsList_section/gatherActsList_section', 'components/gatherSearch/search_section/search_section', 'components/gatherSearch/searchResult_section/searchResult_section', 'components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section', 'components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section', 'components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section', 'components/gatherSearch/change_section/change_section', 'components/gatherAccount/addAccount_section/addAccount_section', 'components/navigation/navigation', 'components/user_section/user_section', 'components/modifyPassword_section/modifyPassword_section', 'components/main_section/main_section'], function (require, exports, module) {

    //初始化app的native设置
    require('components/util/deviceSetting');
    //require('components/util/utilRouter');

    var $ = require('spm_modules/zepto/0.0.1/zepto');
    var cookie = require('spm_modules/cookie/0.0.1/cookie');
    var navigation = require('components/navigation/navigation');
    var App=require('components/util/App');

    if(cookie('get', 'userObj')){
        window.userObj = JSON.parse(cookie('get', 'userObj'));     // 全局登录信息
    }

    //模拟接口数据
    //require('components/util/mockInterface');
    require('components/login_section/login_section');
    require('components/gatherMain_section/gatherMain_section');
    require('components/gatherCheapBuy_section/gatherCheapBuy_section');
    require('components/gatherGroupBuy_section/gatherGroupBuy_section');
    require('components/gatherSeaBuy_section/gatherSeaBuy_section');
    require('components/gatherHeadline/gatherHeadlineList_section/gatherHeadlineList_section');
    require('components/gatherActs/gatherActsList_section/gatherActsList_section');
    require('components/gatherSearch/search_section/search_section');
    require('components/gatherSearch/searchResult_section/searchResult_section');
    require('components/gatherIntelligentSearch/gatherIntelligentSearch_section/gatherIntelligentSearch_section');
    require('components/gatherIntelligentSearch/gatherIntelligentSearchAll_section/gatherIntelligentSearchAll_section');
    require('components/waitBuy/searchToBuyDetail_section/searchToBuyDetail_section');
    require('components/gatherSearch/change_section/change_section');
    require('components/gatherAccount/addAccount_section/addAccount_section');

    require('components/navigation/navigation');
    require('components/user_section/user_section');
    require('components/modifyPassword_section/modifyPassword_section');

    require('components/main_section/main_section');



    var $aside = $('#section_container');
    $aside.load(window.baseUrl+'/components/login_section/login_section.html',function(html){
        App.run();
    });

});
/*!static/lib/GLOBAL_config.js*/
;var protocol = window.location.protocol + '//',
    host = window.location.host,
    apiHost='/kaola-delivery-web/',
    baseUrl = protocol + host +'/buy/';

window.baseUrl = baseUrl;
window.apiHost = apiHost;