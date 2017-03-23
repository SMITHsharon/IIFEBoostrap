
var DonorsManager = (function (oldManager) {

	var donorOutputTable = document.getElementById("donorOutput");

	oldManager.writeToDOM =  function (donorsArray) {
		console.log("in writeToDOM");
		
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

	};

	return oldManager;

})(DonorsManager || {});



