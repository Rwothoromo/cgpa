num = sum = v = 0;
function calc5(cn){
	x = (prompt("Enter a letter grade")).toUpperCase();
	if (x == "A")	{ a = 5.0; }
	else if (x == "B+")	{ a = 4.5; }
	else if (x == "B")	{ a = 4.0; }
	else if (x == "B-")	{ a = 3.5; }
	else if (x == "C+")	{ a = 3.0; }
	else if (x == "C")	{ a = 2.5; }
	else if (x == "C-")	{ a = 2.0; }
	else if (x == "D+")	{ a = 1.5; }
	else if (x == "D")	{ a = 1.0; }
	else if (x == "D-")	{ a = 0.5; }
	else if (x == "E")	{ a = 0.0; }
	else {
		alert("Invalid entry: Grade A to E or A+ to E+ expected!");
		calc5(cn);
		}
	askN(a, cn);
	}

function askN(a, cn){
	n = parseInt(prompt("Enter no. of credit units for the mark"));
	if (n == 3 || n == 4 || n == 5) { doAll(a, n, cn); }
	else{
		alert("Invalid entry: Number 3 to 5 expected!");
		askN(a, cn);
		}
	}

function doAll(a, n, cn) {
	v = a*n;
	num += v;
	sum += n;
	cn -= 1
	if (cn == 0) { ans5(num, sum); }
	else if (cn >= 1) { calc5(cn); }
	}