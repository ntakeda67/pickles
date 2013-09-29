TestCase('Pickles Test', {
    'test initialized, production is 0.': function() {
        var actualPickles = new Pickles("material A", 1);

        assertEquals(0, actualPickles.getProduct());
	assertEquals("material A", actualPickles.getName());
    },
    'test done matured, then increase production.': function() {
	var maturingTime = 100;
        var actualPickles = new Pickles("material B", maturingTime);
	for(var i =0 ; i<maturingTime; i++){
	    actualPickles.mature();
            assertEquals("matured " + i + " times", 0, actualPickles.getProduct());
	}
	actualPickles.mature();
        assertEquals(1, actualPickles.getProduct());
	assertEquals("material B", actualPickles.getName());
    }
});