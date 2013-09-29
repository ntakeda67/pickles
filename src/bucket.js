var Bucket = (function() {
    function Bucket(){
        var _pickles = [];
	return {
	    addPickles: function(added){
		_pickles.push(added);
	    },
	    mature : function(){
		for(var i=0; i<_pickles.length; i++){
		    _pickles[i].mature();
		}
	    },
	    getNumOfProduct: function(){
		var num = 0;
		for(var i=0; i<_pickles.length; i++){
		    num += (_pickles[i]).getProduct();
		}
		return num;
	    },
	    getPicklesNames: function(){
		var names = [];
		for(var i=0; i<_pickles.length; i++){
		    names.push((_pickles[i]).getName());
		}
		return names;
	    },
	    getPicklesStatus: function(){
		var statuses = [];
		for(var i=0; i<_pickles.length; i++){
		    var p = _pickles[i];
		    statuses.push("Name:" + p.getName() + " Product:" + p.getProduct());
		}
		return statuses;
	    }
	};
    };
    return Bucket;
})();