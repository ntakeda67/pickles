var Pickles = (function(){
    function Pickles(name, maturingTime){
	var _name = name;
	var _maturingTime = maturingTime;
        var _product = 0;
        var _duration = 0;

	return {
	    getName: function(){
		return _name;
	    },
	    /**
	     * 熟成時間をすすめる
	     * 熟成期間を超えていれば、1生産し、熟成時間を初期化する
	     */
	    mature: function(){
		_duration +=1;
		if(_duration > _maturingTime){
		    _product +=1;
		    _duration = 0;
		}
	    },
	    getProduct: function(){
		return _product;
	    }
	};
    };
    return Pickles;
})();