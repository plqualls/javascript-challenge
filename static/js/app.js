// from data.js
var tableData = data;

// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input data into HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}
//adding data from table
addData(tableData);

// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    $tbody.html("");

//Loop statement
    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("NO UFO HERE!!!! Keep Searching...");
        }
})

