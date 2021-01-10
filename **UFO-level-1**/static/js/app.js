// from data.js
var tableData = data;
console.log(tableData);

// The new sighting to add to table
var newSighting = ["1/1/2010", "Frostproof", "FL", "US", "Saucer", "3 minutes", "Reported by dozens of people working on an orange grove"];

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    
// Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Append one cell for the student name
row.append("td").text(newSighting[0]);

// Append one cell for the student grade
row.append("td").text(newSighting[1]);

// Append one cell for the student name
row.append("td").text(newSighting[2]);

// Append one cell for the student grade
row.append("td").text(newSighting[3]);

// Append one cell for the student name
row.append("td").text(newSighting[4]);

// Append one cell for the student grade
row.append("td").text(newSighting[5]);

// Append one cell for the student grade
row.append("td").text(newSighting[6]);



//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// // Select the button
// var button = d3.select("#filter-btn");
// button.on("click", function() {

//     tbody.html("");

//     // Select the input date get the raw HTML nodes
//     var inputElement = d3.select("#datetime");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     // console.log input value
//     console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });