// from data.js
var tableData = data;

// MY CODE HERE!
var tbody = d3.select("tbody");
var button = d3.selectAll("#filter-btn");

// filter data
function formClick(){
  d3.event.preventDefault();
  var formInput = d3.select("#search-criteria");
  var inputValue = formInput.property("value");
  var filteredData = tableData.filter(entry => entry.datetime === inputValue);
  
  console.log(filteredData);

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