
var DonorsManager = (function (oldManager) {

	// Object array of Donors
	var donorArray = [
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
	}

	oldManager.writeToDOM =  function (messageArray) {
		console.log("in writeToDOM");
		// var messageElement = "";
		// for (var i = 0; i < messageArray.length; i++) {
		// 	var captureMessage = messageArray[i];
		// 	messageElement += `<div class="mssgText">${captureMessage}<button class="delMsg btn btn-danger" id = "${i}">Delete</button><input class='play btn btn-warning' type='button' value='🔊 Play' /></div>`;
		// }
		// output.innerHTML = messageElement;
	};

	return oldManager;

})(DonorsManager || {});


