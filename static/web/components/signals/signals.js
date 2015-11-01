/**
 * Created with PhpStorm.
 * User: Administrator
 * Date: 2015/9/10
 * Time: 18:51
 * To change this template use File | Settings | File Templates.
 */
define('components/signals/signals', ['spm_modules/signal/signal'], function(require, exports, module){
    var signal=require('spm_modules/signal/signal');

    module.exports = {
        getCurrPos : new signal.Signal(),
        getPicture : new signal.Signal(),
        pickContact : new signal.Signal()
    };
});