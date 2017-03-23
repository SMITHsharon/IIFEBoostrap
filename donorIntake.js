
var DonorsManager = (function (oldManager) {

	var userInput = document.getElementById("userForm");
	var thisDonorName = document.getElementById("formGroupNameInput");
	var thisDonorEmail = document.getElementById("formGroupEmailInput");
	var thisDonorPledge = document.getElementById("formGroupPledgeInput");
	var thisDonorPledgeType = document.getElementById("pledgeSelect");
	var thisDonorPledgeType = document.getElementsByName("inlineRadioOptions");
	var thisDonorInfo = [];


	// function reads the information entered by the Donor
	// on input screen and adds it to <thisDonorInfoArray>
	// (a single donor array); 
	// then calls <addDonor> which adds this Donor to <donorsArray>
	// (object array containing information for all donors)
	oldManager.processDonorInput = function(input){

		if (DonorsManager.userInputValid(input)) {
			thisDonorInfo[0] = thisDonorName.value;
			thisDonorInfo[1] = thisDonorEmail.value;
			thisDonorInfo[2] = thisDonorPledge.value;
			thisDonorInfo[3] = DonorsManager.getDonationType();

	    	DonorsManager.addDonor(thisDonorInfo); //add this Donor's information to donorArray
    	}
	}; // end <processDonorInput>


	// function gets the dontation <type> indicated 
	// by this Donor: "Total", or "Per Lap"
	// RETURNS to <processDonorInput>
	oldManager.getDonationType = function() {

		for (var i=0; i<2; i++) {
			if (thisDonorPledgeType[i].checked) {
				return "Total"; 

			} else {
				return "Per Lap";
			}
		}
	}; // end <getDonationType>


	// function verifies that user entered
	// valid information for all input fields
	oldManager.userInputValid = function(input){

		if ((thisDonorName.value === "") || (thisDonorEmail.value === "" ) || (thisDonorPledge).value === "") {
			alert("Your Name, Email, and Pledge Amount are all required to continue with your pledge information.");
			return false;
		}; 

		if (!DonorsManager.checkEmail(thisDonorEmail.value)) { // email not valid
			return false;
		};

		return true; // user inputs are all valid

	}; // end <userInputValid>


	// function verifies that user entered
	// a valid email address
	// RETURNS <true> or <false>
	oldManager.checkEmail = function(thisDonorEmail) {

		var testresults;
		var str = thisDonorEmail;
		var filter = ( /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ) ;

		if (filter.test(str)) {
			testresults = true;

		} else {
			alert("Please input a valid email address!");
			testresults = false;
		}
		return (testresults);
	};


	return oldManager;

})(DonorsManager || {});


