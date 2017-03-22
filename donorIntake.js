
var DonorsManager = (function (oldManager) {

	var userInput = document.getElementById("userForm");
	var thisDonorName = document.getElementById("formGroupNameInput");
	var thisDonorEmail = document.getElementById("formGroupEmailInput");
	var thisDonorPledge = document.getElementById("formGroupPledgeInput");
	var thisDonorPledgeType = document.getElementById("pledgeSelect");
	var thisDonorInfo = [];

	// function reads the information entered by the Donor
	// on input screen and adds it to <thisDonorInfoArray>
	// (a single donor array); 
	// then calls <addDonor> which adds this Donor to <donorsArray>
	// (object array containing information for all donors)
	oldManager.processDonorInput = function(input){
		console.log("in processDonorInput");

		thisDonorInfo[0] = thisDonorName.value;
		thisDonorInfo[1] = thisDonorEmail.value;
		thisDonorInfo[2] = thisDonorPledge.value;
		thisDonorInfo[3] = DonorsManager.getDonationType();

    	DonorsManager.addDonor(thisDonorInfo); //add this Donor's information to donorArray
	};


	// function gets the dontation <type> indicated 
	// by this Donor: "Total", or "Per Lap"
	// RETURNS to <processDonorInput>
	oldManager.getDonationType = function() {

		if (thisDonorPledgeType.options.selectedIndex === 1) { // "Total Pledge Amount"
			return "Total";

		} else { "Pledge Per Lap"
			return "Per Lap";
		} // end <else>
	}; // end <getDonationType>

	return oldManager;

})(DonorsManager || {});


