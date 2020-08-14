// from data.js
var tableData = data;

// YOUR CODE HERE!
// view array of objects in console 
console.log(tableData);

// Create tbody variable
var tbody = d3.select("#ufo-table>tbody");

// Loop through array and select each object
tableData.forEach((ufoSighting, i) => {
    var row = tbody.append('tr');
    // Display key and value of each object in console to check if values are correct
    Object.entries(ufoSighting).forEach( ([key,value]) => {
        console.log(`ID ${i}, Key: ${key}, Value: ${value}`);
        // Append data into ufo-table
        var newEntry = row.append('td');
        newEntry.text(value);
    });
});

// Create filter button variable
var button = d3.select("#filter-btn");
// Create varaible for pressing enter on the form
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);

// Create variable to clear user entered date
// var outputElem = d3.select('.form-control');

// Create event handler function
function runEnter() {
    
    // Prevent page from refreshing!
    d3.event.preventDefault();
    // Select input element
    var inputElem = d3.select('#datetime');
    // Grab value property of the input element
    var inputValue = inputElem.property('value');
    // filter the form by the date given
    var dateInput = tableData.filter(date => date.datetime === inputValue);
    // Display output in console
    console.log(dateInput);
    
    // Clear table
    tbody.html('');
    // replace table with input values from form entry
    dateInput.forEach((ufoSighting, i) => {
        var row = tbody.append('tr');
        // Display key and value of each object in console to check if values are correct
        Object.entries(ufoSighting).forEach( ([key,value]) => {
            console.log(`ID ${i}, Key: ${key}, Value: ${value}`);
            // Append data into ufo-table
            var newEntry = row.append('td');
            newEntry.text(value);
        });
    });
};


// Create variable for newly created refresh button
var refreshButton = d3.select("#filter-btn-2");
refreshButton.on("click", refreshTable);

// Refresh table to display all values on click 
function refreshTable() {
    // Clear table
    tbody.html('');
    // replace table with input values from form entry
    tableData.forEach((ufoSighting, i) => {
        var row = tbody.append('tr');
        // Display key and value of each object in console to check if values are correct
        Object.entries(ufoSighting).forEach( ([key,value]) => {
            console.log(`ID ${i}, Key: ${key}, Value: ${value}`);
            // Append data into ufo-table
            var newEntry = row.append('td');
            newEntry.text(value);
        });
    });
};
