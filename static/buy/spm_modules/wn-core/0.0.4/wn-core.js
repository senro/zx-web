define("spm_modules/wn-core/0.0.4/wn-core",["spm_modules/zepto/0.0.1/zepto","spm_modules/zepto/0.0.1/zepto"],function(n,e,i){var t=n("spm_modules/zepto/0.0.1/zepto"),o=n("spm_modules/zepto/0.0.1/zepto"),r=function(){t.extend({visibleHidden:function(n){return n.css({visibility:"hidden"}),!1},visibleShow:function(n){return n.css({visibility:"visible"}),!1}})};r.prototype={constructor:r,console:function(n){!function(){for(var n,e=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],t=i.length,o=window.console=window.console||{};t--;)n=i[t],o[n]||(o[n]=e)}(),console&&console.log(n)},len:function(n){for(var n=n||"",e=0,i=n.split(""),t=0;t<i.length;t++)i[t].charCodeAt(0)<299?e++:e+=2;return e},random:function(n,e){return Math.floor(n+Math.random()*(e-n))},isIE6:function(){var n="undefined"==typeof document.body.style.maxHeight;return n?!0:!1},addScript:function(n,e){var i=document.createElement("script"),t=e||o("head"),r="?v="+(new Date).getTime();for(var l in n)i[l]=n[l];return i.src=n.src+r,t.after(i),!1},getItems:function(n){var e;if(n.find("div").length>0)e=1==n.find("div").length?n.find("div"):n.find("div").siblings();else if(n.find("li").length>0)e=1==n.find("li").length?n.find("li"):n.find("li").siblings();else if(n.find("a").length>0)e=1==n.find("a").length?n.find("a"):n.find("a").siblings();else{if(!(n.find("img").length>0))return null;e=1==n.find("img").length?n.find("img"):n.find("img").siblings()}return e},parseArgus:function(n,e){function i(n){return n instanceof t?"$":"object"==typeof n?"object":!1}var o=0;for(var r in e)e[r]="object"==i(n[0])?n[0][r]?n[0][r]:e[r]:n[o]?n[o]:e[r],o++}},i.exports=r});