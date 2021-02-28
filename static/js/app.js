// from data.js
var tableData = data;

//Creating columns for table
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments" ]

//Input data into HTML
var addData = (dataInput) => {
    dataInput.forEach(ufosightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufosightings[column])
            )
    });
}

