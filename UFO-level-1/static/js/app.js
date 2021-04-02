// from data.js
const tableData = data;

console.log("tableData")
console.log(tableData)

// <tbody> in index.html
const tbody = d3.select("tbody");

function btnClick() {
  const myDate = d3.select("#datetime").property("value");
  console.log("myDate");
  console.log(myDate);

  if (myDate) {
    filteredRows = tableData.filter(row => row.datetime === myDate);
  } else {
    // First time page load or no date is provided
    filteredRows = tableData;
  }

  console.log("filteredRows")
  console.log(filteredRows)

  // Wipe out any row data
  tbody.html("");

  // ** use forEach 
  filteredRows.forEach((row_data) => {
    // Create tr for each row of the table
    const row = tbody.append("tr");

    console.log("row_data")
    console.log(row_data)

    // Create multiple td cells for each row
    Object.values(row_data).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

// The button id="filter-btn" is clicked.
d3.selectAll("#filter-btn").on("click", btnClick);

// First time when the browser loads the web page
btnClick();