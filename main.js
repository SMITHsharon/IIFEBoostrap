
console.log("writing to console");
var userInput = document.getElementById("userForm");
//****************************************************
// Event handler for <Donate> button
//****************************************************
var donateButton = document.getElementById("donateButton");
var cancelButton = document.getElementById("cancelButton");

donateButton.addEventListener("click", function(event){
	console.log("donateButton <event>", event);
	console.log("userInput", userInput);

    DonorsManager.addDonor(userInput); //add this Donor's information to donorArray
});



