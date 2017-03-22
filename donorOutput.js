
var DonorsManager = (function (oldManager) {

	var donorOutputTable = document.getElementById("donorOutput");

	oldManager.writeToDOM =  function (donorsArray) {
		console.log("in writeToDOM");
		
		var tableHeadString =  `<h4>Donor Pledges</h4>`;
		tableHeadString += `<table class="table table table-striped table-sm">`;
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
		    donorString += `<th scope="row">1</th>`;
		    donorString += `<td>${donorsArray[i].name}</td>`;
		    donorString += `<td>${donorsArray[i].email}</td>`;
		    donorString += `<td>$${donorsArray[i].pledge}</td>`;
		    donorString += `<td>${donorsArray[i].type}</td>`;
		    donorString += `</tr>`;
		}
		  	donorOutputTable.innerHTML = tableHeadString + donorString + `</tbody>
          </table>`;

	};

	return oldManager;

})(DonorsManager || {});

// <table class="table table table-striped table-sm">
//             <thead class="thead-default">
//               <tr>
//                 <th>#</th>
//                 <th>Donor Name</th>
//                 <th>Donor Email</th>
//                 <th>Pledge Amount</th>
//                 <th>Total or Per Lap</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">1</th>
//                 <td>Mark Miller</td>
//                 <td>Mark@email.com</td>
//                 <td>$99.99</td>
//                 <td>Total Pledge</td>
//               </tr>
//               <tr>
//                 <th scope="row">2</th>
//                 <td>Jacob Thornton</td>
//                 <td>Jacob@email.com</td>
//                 <td>$25.00</td>
//                 <td>Total Pledge</td>
//               </tr>
//               <tr>
//                 <th scope="row">3</th>
//                 <td>Larry Bird</td>
//                 <td>Larry@Bird.com</td>
//                 <td>$5.00</td>
//                 <td>Per Lap</td>
//               </tr>
//             </tbody>
//           </table>


