var Bucket = (function () {
    function Bucket(quantity, production) {
        this.quantity = quantity;
	this.production = production;
	this.products = 0;
    }
    Bucket.prototype.run = function () {
	this.products += this.production;
    };
    Bucket.prototype.getProducts = function(){
	return this.products;
    };
    Bucket.prototype.getStatus = function(){
	return "Quantity:" + this.quantity + " Production:" + this.production;
    };
    return Bucket;
})();