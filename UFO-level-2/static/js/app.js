// from data.js
const tableData = data;

// <tbody> in index.html
const tbody = d3.select("tbody");

var filters = {};

function inputChange() {
  var changedInput = d3.select(this).select("input");
  var inputID = changedInput.attr("id");
  var inputValue = changedInput.property("value");

  console.log("1= " + inputID)
  console.log("2= " + inputValue)

  if (inputValue) {
    filters[inputID] = inputValue;
  }
  else {
    delete filters[filterId];
  }

  let filteredRows = tableData;

  Object.entries(filters).forEach(([key, value]) => {
    filteredRows = filteredRows.filter(row => row[key] === value);
  });

  console.log("3= " + filteredRows)

  // Wipe out any row data
  tbody.html("");

  filteredRows.forEach((row_data) => {
    // Create tr for each row of the table
    const row = tbody.append("tr");

    // Create multiple td cells for each row
    Object.values(row_data).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    }
    );
  });
}

// The input field is changed.
d3.selectAll(".filter").on("change", inputChange);

data.forEach((dataRow) => {
  // Append a row to the table body
  var row = tbody.append("tr");

  // Loop through each field in the dataRow and add
  // each value as a table cell (td)
  Object.values(dataRow).forEach((val) => {
    var cell = row.append("td");
    cell.text(val);
  });
});