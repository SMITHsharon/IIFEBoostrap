
var DonorsManager = (function (oldManager) {

	var donorOutputTable = document.getElementById("donorOutput");

	var thisDonorNameForClear = document.getElementById("formGroupNameInput");
	var thisDonorEmailForClear = document.getElementById("formGroupEmailInput");
	var thisDonorPledgeForClear = document.getElementById("formGroupPledgeInput");
	var thisDonorPledgeTypeForReset = document.getElementsByName("inlineRadioOptions");


	// function writes all Donor information 
	// that is stored in the private <donorsArray>
	// to the DOM
	// then clears the user input fields to the placeholder state
	oldManager.writeToDOM =  function (donorsArray) {
		
		// var tableHeadString =  `<div class="col-6"><h4>Donor Pledges</h4>`;
		// var tableHeadString =  `<div class="col-md-6"><h4>Donor Pledges</h4>`;
		var tableHeadString =  `<div><h4>Donor Pledges</h4>`;
		// tableHeadString += `<table class="table table table-striped table-sm">`;
		tableHeadString += `<table class="table table table-striped">`;
		tableHeadString += `<thead class="thead-default">`;
		tableHeadString += `<tr>`;
		tableHeadString += `<th>#</th>`;
		tableHeadString += `<th>Donor Name</th>`;
		tableHeadString += `<th>Donor Email</th>`;
		tableHeadString += `<th>Pledge Amount</th>`;
		tableHeadString += `<th>Total or Per Lap</th>`;
		tableHeadString += `</tr>`;
		tableHeadString += `</thead>`;
		tableHeadString += `<tbody>`;

		var donorString = "";
 
		for (var i=0; i<donorsArray.length; i++) {
			donorString += `<tr>`;
		    donorString += `<th scope="row">${i+1}</th>`;
		    donorString += `<td>${donorsArray[i].name}</td>`;
		    donorString += `<td>${donorsArray[i].email}</td>`;
		    donorString += `<td>$${donorsArray[i].pledge}</td>`;
		    donorString += `<td>${donorsArray[i].type}</td>`;
		    donorString += `</tr>`;
		}
		  	donorOutputTable.innerHTML = tableHeadString + donorString + `</tbody>
          </table></div>`;

        // clear the user input fields
        thisDonorNameForClear.value = "";
		thisDonorEmailForClear.value = "";
		thisDonorPledgeForClear.value = "";
		thisDonorPledgeTypeForReset[0].checked; // does not restore ? 

	};

	return oldManager;

})(DonorsManager || {});



