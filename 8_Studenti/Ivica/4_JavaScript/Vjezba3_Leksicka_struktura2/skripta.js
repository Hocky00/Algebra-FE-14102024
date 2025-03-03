


var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 6;
if (cols == "" || cols == null) cols = 6;

createTable(rows, cols);

/**  Create table
 *    @author John Doe
 */

function createTable(rows, cols) {
  var j = 1;
  var output = "<table border='4' width='500' cellspacing='0' cellpadding='5' alaign='center' style='margin:auto; border-collapse: collapse; border: 2px solid black; text-align: center;'>";

  for (i = 1; i <= rows; i++) {
    output = output + "<tr>";
    while (j <= cols) {
      output = output + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    output = output + "</tr>";
    j = 1;
  }

  output = output + "</table>";
  document.write(output);
}
