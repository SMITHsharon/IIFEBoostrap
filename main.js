
console.log("writing to console");

// var userInput = document.getElementById("userForm");
// var thisDonorName = document.getElementById("formGroupNameInput");
// var thisDonorEmail = document.getElementById("formGroupEmailInput");
// var thisDonorPledge = document.getElementById("formGroupPledgeInput");
// var thisDonorPledgeType = document.getElementById("pledgeSelect");
// var thisDonorInfo = [];

//****************************************************
// Event handler for <Donate> button
//****************************************************
var donateButton = document.getElementById("donateButton");
var cancelButton = document.getElementById("cancelButton");

//****************************************************
// Function captures the information entered on the 
// user input screen, writes it to <thisDonorInfo> array,
// passes that array to <addDonor> to add to the private 
// <donorsArray>
//****************************************************
donateButton.addEventListener("click", function(event){

	DonorsManager.processDonorInput(event);
	// thisDonorInfo[0] = thisDonorName.value;
	// thisDonorInfo[1] = thisDonorEmail.value;
	// thisDonorInfo[2] = thisDonorPledge.value;
	// thisDonorInfo[3] = getDonationType();

    // DonorsManager.addDonor(thisDonorInfo); //add this Donor's information to donorArray
});


// function getDonationType() {

// 	if (thisDonorPledgeType.options.selectedIndex === 1) { // "Total Pledge Amount"
// 		return "Total";

// 	} else { "Pledge Per Lap"
// 		return "Per Lap";
// 	} // end <else>
// } // end <getDonationType>






