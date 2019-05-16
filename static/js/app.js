// from data.js
var tableData = data;

// MY CODE HERE!
var tbody = d3.select("tbody");
var button = d3.selectAll("#filter-btn");

// filter data by date only
// function formClick(){
//   d3.event.preventDefault();
//   var formInput = d3.select("#search-criteria");
//   var inputValue = formInput.property("value");
//   var filteredData = tableData.filter(entry => entry.datetime === inputValue);
  
//   console.log(filteredData);

//   filteredData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//     cell.text(value);
//     });
//   });
  
//   }
// button.on("click", formClick);

// // .replace('"', "");
// d3.event.preventDefault();

function formClick(){
  d3.event.preventDefault();
  // get value of drop down choice
  var entryType = d3.select("#select-filter");
  var entryValue = entryType.property("value");
  console.log(entryValue);

  // get value of search input
  var formInput = d3.select("#search-criteria");
  var inputValue = formInput.property("value").toLowerCase();
  
  // get data.entryValue
  if (entryValue == "datetime") {
    var filteredData = tableData.filter(entry => entry.datetime === inputValue);
  }
  else if (entryValue == "city") {
    var filteredData = tableData.filter(entry => entry.city === inputValue);
  }
  else if (entryValue == "state") {
    var filteredData = tableData.filter(entry => entry.state === inputValue);
  }
  else if (entryValue == "country") {
    var filteredData = tableData.filter(entry => entry.country === inputValue);
  }
  else if (entryValue == "shape") {
    var filteredData = tableData.filter(entry => entry.shape === inputValue);
  }
  else {
    console.log("error");
  }
  
  // if (filteredData = []) {
  //   alert("Sorry, no results were found.  Check your search and try again");
  // };
  
  console.log(filteredData);
  console.log(inputValue);

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
    cell.text(value);
    });
  });
  
  }
button.on("click", formClick);






// all sightings
var allButton = d3.select("#full-table");
function showAll() {
  d3.event.preventDefault();
  var tbody = d3.select("tbody");
  tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
allButton.on("click", showAll);

// clear table 
d3.select("#clear-table").on("click",d3.event.default());