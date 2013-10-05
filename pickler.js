(function(){
    var picklerStatus = {};
    var masterBucket = {};
    var picklesArray = [];

    initializeGame();
    $("input#shake").click(function(){
	picklerStatus.manualMatureTimes += 1;
	matureBucket();
    });

    picklerStatus.sequences.mature = window.setInterval(matureBucket, 500);

    function initializeGame(){
	picklerStatus = {
	    startTime: new Date(),
	    elapseGameTime: 0,
	    manualMatureTimes: 0, 
	    sequences: {
		mature: null
	    }
	};

	picklesArray = [
	    new Pickles("KYURI", 3), 
	    new Pickles("NASU", 10)
	];

	masterBucket = new Bucket();
	for(var i=0; i<picklesArray.length; i++){
	    masterBucket.addPickles(picklesArray[i]);
	}
    }

    function matureBucket(){
	picklerStatus.elapseGameTime += 1;
	masterBucket.mature();
	refreshScreen();
    }

    function refreshScreen(){
	// Productions
	var statuses = masterBucket.getPicklesStatus();
	var $productions = $("div#productions");
	$productions.empty();
	for(var i=0; i<statuses.length; i++){
	    var $pickles = $("<div>").text(statuses[i]);
	    $productions.append($pickles);
	}

	// Game Info
	var intRealElapseTime = parseInt((new Date() - picklerStatus.startTime)/1000, 10);
	var totalProductions = masterBucket.getNumOfProduct();
	$('#realElapseTime').text(intRealElapseTime);
	$('#gameElapseTime').text(picklerStatus.elapseGameTime);
	$('#totalProductions').text(totalProductions);
	$('#totalPPS').text((totalProductions/intRealElapseTime).toFixed(2));
    }

})();