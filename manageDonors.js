
var DonorsManager = (function (oldManager) {

	// Object array of Donors
	var donorsArray = [
	  {
	    name: "Zoe Ames",
	    email: "zoe.ames@nss.com",
	    pledge: "100",
	    type: "Per Lap"
	  }, 

	  {
	    name: "Callan Morrison",
	    email: "callan.morrison@nss.com",
	    pledge: "25",
	    type: "Total"
	  },
	];
	

	// function adds information entered by new Donor
	// on input screen to <donorsArray>
	oldManager.addDonor = function(singleDonorArray){
console.log("in addDonor");

		donorsArray.push( { 
			"name" : singleDonorArray[0], 
			"email" : singleDonorArray[1], 
			"pledge" : singleDonorArray[2],
			"type" : singleDonorArray[3]
		} );

console.log("donorsArray :: ", donorsArray);
	};


	oldManager.getDonors = function(){
		console.log("in getDonors");
		// var message = oldChatty.getMessageArray();
		// message.push(input);
		// oldChatty.writeToDOM(message);
	};

	return oldManager;

})(DonorsManager || {});


