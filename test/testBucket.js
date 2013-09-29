TestCase('Bucket Test', {
    'test initialized, production is 0.': function() {
        var actualBucket = new Bucket(100, 1);

        assertEquals(0, actualBucket.getProducts());
    },
    'test run at once, production is increased.': function() {
        var actualBucket = new Bucket(100, 2);
	actualBucket.run();

        assertEquals(2, actualBucket.getProducts());
    }
});