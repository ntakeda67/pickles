TestCase('Bucket Test', {
    'test Bucket': function() {
        // setup
        var expectedProduction = 1;

        // exercise
        var actualBucket = Bucket(100);

        // verify
        assertEquals(1, acutualBucket.production);
    }
});