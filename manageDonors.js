
var DonorsManager = (function (oldManager) {

	// Object array of Donors
	var donorsArray = [
	  {
	    name: "John Doe",
	    email: "johndoe@me.com",
	    pledge: "70",
	    type: "Total"
	  }, 

	  {
	    name: "Jane Doe",
	    email: "janedoe@me.com",
	    pledge: "5",
	    type: "Per Lap"
	  },
	];
	
	oldManager.addDonor = function(input){
		console.log("in addDonor");
		// var message = oldChatty.getMessageArray();
		// message.push(input);
		// oldChatty.writeToDOM(message);
	};

	oldManager.getDonors = function(){
		console.log("in getDonors");
		// var message = oldChatty.getMessageArray();
		// message.push(input);
		// oldChatty.writeToDOM(message);
	};

	return oldManager;

})(DonorsManager || {});


