define("spm_modules/signal/signal",[],function(i,t,n){!function(i){function t(i,t,n,e,s){this._listener=t,this._isOnce=n,this.context=e,this._signal=i,this._priority=s||0}function e(i,t){if("function"!=typeof i)throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",t))}function s(){this._bindings=[],this._prevParams=null;var i=this;this.dispatch=function(){s.prototype.dispatch.apply(i,arguments)}}t.prototype={active:!0,params:null,execute:function(i){var t,n;return this.active&&this._listener&&(n=this.params?this.params.concat(i):i,t=this._listener.apply(this.context,n),this._isOnce&&this.detach()),t},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},s.prototype={VERSION:"0.9.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(i,n,e,s){var r,h=this._indexOfListener(i,e);if(-1!==h){if(r=this._bindings[h],r.isOnce()!==n)throw new Error("You cannot add"+(n?"":"Once")+"() then add"+(n?"Once":"")+"() the same listener without removing the relationship first.")}else r=new t(this,i,n,e,s),this._addBinding(r);return this.memorize&&this._prevParams&&r.execute(this._prevParams),r},_addBinding:function(i){var t=this._bindings.length;do--t;while(this._bindings[t]&&i._priority<=this._bindings[t]._priority);this._bindings.splice(t+1,0,i)},_indexOfListener:function(i,t){for(var n,e=this._bindings.length;e--;)if(n=this._bindings[e],n._listener===i&&n.context===t)return e;return-1},has:function(i,t){return-1!==this._indexOfListener(i,t)},add:function(i,t,n){return e(i,"add"),this._registerListener(i,!1,t,n)},addOnce:function(i,t,n){return e(i,"addOnce"),this._registerListener(i,!0,t,n)},remove:function(i,t){e(i,"remove");var n=this._indexOfListener(i,t);return-1!==n&&(this._bindings[n]._destroy(),this._bindings.splice(n,1)),i},removeAll:function(){for(var i=this._bindings.length;i--;)this._bindings[i]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(){if(this.active){var i,t=Array.prototype.slice.call(arguments),n=this._bindings.length;if(this.memorize&&(this._prevParams=t),n){i=this._bindings.slice(),this._shouldPropagate=!0;do n--;while(i[n]&&this._shouldPropagate&&i[n].execute(t)!==!1)}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var r=s;r.Signal=s,"function"==typeof define&&define.amd?define([],function(){return r}):"undefined"!=typeof n&&n.exports?n.exports=r:i.signals=r}(this)});