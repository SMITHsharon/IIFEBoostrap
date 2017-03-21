
var DonorsManager = (function (oldManager) {

	oldManager.writeToDOM =  function (donorsArray) {
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