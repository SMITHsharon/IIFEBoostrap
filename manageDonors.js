
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
	
	oldManager.addDonor = function(singleDonorArray){
		console.log("in addDonor");
		console.log("<singleDonorArry> parameter", singleDonorArray);

		// var thisForm = document.getElementById("userForm");
		// console.log("<thisForm :: ", thisForm);
		// console.log("thisForm.childNodes :: ", thisForm.childNodes);
		// console.log("thisForm.childNodes.childNodes :: ", thisForm.childNodes.childNodes[1]);
		// var thisName = document.getElementsByClassName("donorName").value;
		// console.log("<donorName> :: ", donorName);
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


