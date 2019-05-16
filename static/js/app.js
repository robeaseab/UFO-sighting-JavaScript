// from data.js
var tableData = data;

// MY CODE HERE!
var tbody = d3.select("tbody");
var button = d3.selectAll("#filter-btn");


function formClick(){
  d3.event.preventDefault();
  var datetimeEntry = d3.select("#datetime");
  var datetimeValue = datetimeEntry.property("value");
  var filteredData = tableData.filter(entry => entry.datetime === datetimeValue);
  
  console.log(datetimeValue);
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



// d3.selectAll("#filter-btn").on("click", formClick);



