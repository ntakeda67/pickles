var Bucket = (function () {
    function Bucket(quantity) {
        this.quantity = quantity;
	this.production = 1;
    }
    Bucket.prototype.run = function () {
	this.quantity += this.production;
    };
    Bucket.prototype.getStatus = function(){
	return "Quantity:" + this.quantity + " Production:" + this.production;
    };
    return Bucket;
})();