
// initialize the system with the current 
// contents of <donorsArray>
// var donors = DonorsManager.getDonors();
// console.log("donors :: ", donors);
DonorsManager.writeToDOM(DonorsManager.getDonors());

var thisDonorName = document.getElementById("formGroupNameInput");
var thisDonorEmail = document.getElementById("formGroupEmailInput");
var thisDonorPledge = document.getElementById("formGroupPledgeInput");
var thisDonorPledgeType = document.getElementById("pledgeSelect");

//****************************************************
// Event handlers for <Donate> and <Cancel> buttons
//****************************************************
var donateButton = document.getElementById("donateButton");
var cancelButton = document.getElementById("cancelButton");


//****************************************************
// <donateButton> event handler calls <processDonorInput> 
// to process the information entered by the Donor 
// on the input screen
//****************************************************
donateButton.addEventListener("click", function(event){

	DonorsManager.processDonorInput(event);
});


//****************************************************
// <cancelButton> event handler clears the user input
// fields, returning them to their <placeholder> states
//****************************************************
cancelButton.addEventListener("click", function(event){

	thisDonorName.value = "";
	thisDonorEmail.value = "";
	thisDonorPledge.value = "";
	thisDonorPledgeType.options.selectedIndex = 0;
});




