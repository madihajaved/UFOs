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

// if-statement syntax
// if ( condition ) { code to execute }

// The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.
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

function handleClick() {
    // Grab the datetime value from the filter
    // By chaining .property("value"), we're telling D3 not only to look for where our date values are stored on the webpage
    // but to actually grab that information and hold it in the "date" variable.
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
    // Rebuild the table using the filtered data @NOTE: If no date was entered, then filteredData will 
    // just be the original tableData.
    // calling function buildTable based on filteredData
    buildTable(filteredData);
  };  
    
// Attach an event to listen for the form button
// By adding .on("click", handleClick) we're telling D3 to execute our handleClick() function 
//when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
