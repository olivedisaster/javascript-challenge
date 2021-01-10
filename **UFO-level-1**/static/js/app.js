// from data.js
var tableData = data;
//console.log(tableData);

// The new sighting to add to table
var newSighting = ["1/1/2010", "Frostproof", "FL", "US", "Saucer", "3 minutes", "Reported by dozens of people working on an orange grove"];

// Use D3 to slect the table body
var tbody = d3.select("tbody");

// UFO Sighting values
tableData.forEach(function(Sightings)  {
    console.log(Sightings);
// Append on table row 'tr' to the table body
    var row = tbody.append("tr");

    Object.entries(Sightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value in the Sightings data
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Getting a reference to the button on the page with the id property set to 'filter-btn'
var button = d3.select("#filter-btn");

// Defining the click handler inline
button.on("click", function() {
    tbody.html("");

    // Select the input date get the raw HTML node
    var dateTime = d3.select("#datetime");

    // Get the value property of the dateTime element
    var inputValue = dateTime.property("value");
    console.log(inputValue);

    // Filter Data 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});



// // Append one cell for the student name
// row.append("td").text(newSighting[0]);

// // Append one cell for the student grade
// row.append("td").text(newSighting[1]);

// // Append one cell for the student name
// row.append("td").text(newSighting[2]);

// // Append one cell for the student grade
// row.append("td").text(newSighting[3]);

// // Append one cell for the student name
// row.append("td").text(newSighting[4]);

// // Append one cell for the student grade
// row.append("td").text(newSighting[5]);

// // Append one cell for the student grade
// row.append("td").text(newSighting[6]);






