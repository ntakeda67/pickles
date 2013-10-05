TestCase('Bucket Test', {
    'test when initialized, production is 0.': function() {
        var b = new Bucket();

        assertEquals(0, b.getNumOfProduct());
    },
    'test multiple mature, production is increased.': function() {
	var aPickles = new Pickles("a", 10);
	var bPickles = new Pickles("b", 5);

        var b = new Bucket();

	b.addPickles(aPickles);
	b.addPickles(bPickles);

	assertEquals(0, aPickles.getProduct());
	assertEquals(0, bPickles.getProduct());

        assertEquals(0, b.getNumOfProduct());

	var i=0;
	for(i=0; i<4; i++){
	    b.mature();
            assertEquals(0, b.getNumOfProduct());
	} 
	b.mature();
        assertEquals(1, b.getNumOfProduct());
	assertEquals(1, bPickles.getProduct());

	for(i=0; i<4; i++){
	    b.mature();
            assertEquals(1, b.getNumOfProduct());
	}
	b.mature();
	assertEquals(1, aPickles.getProduct());
	assertEquals(2, bPickles.getProduct());
        assertEquals(3, b.getNumOfProduct());
   }
});