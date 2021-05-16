// import data from data.js
const tableData = data;

// Reference the HTML table using d3
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
// It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), 
// for presentation.
var tbody = d3.select("tbody");

// Original addition function
//function addition(a, b) {
//    return a + b;
// }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
//function doubleAddition(c, d) {
  //  var total = addition(c, d) * 2;
  //  return total;
  //}

// Converted to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

//console.log(doubleAddition(33, 25))

//let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
//function listLoop(friends) {
  //  for (var i = 0; i < friends.length; i++) {
  //    console.log(friends[i]);
  //  }
// }

//var friend = ["Sarah", "Greg", "Cindy", "Jeff"];
//for (var i = 0; i < friend.length; i++) {
//    console.log(friend[i]);
//  }

//var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

//for (var i = 0; i < vegetables.length; i++) {
//    console.log("I love " + vegetables[i]);
//}

//for (var i = 0; i < 5; i++) {
//    console.log("I am " + i);
// }

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}