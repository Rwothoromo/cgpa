num = sum = v = 0;
function calcC(cn){
	x = (prompt("Enter a letter grade")).toUpperCase();
	if (x == grdLtr1)		{ a = grdVal1; }
	else if (x == grdLtr2)	{ a = grdVal2; }
	else if (x == grdLtr3)	{ a = grdVal3; }
	else if (x == grdLtr4)	{ a = grdVal4; }
	else if (x == grdLtr5)	{ a = grdVal5; }
	else if (x == grdLtr6)	{ a = grdVal6; }
	else if (x == grdLtr7)	{ a = grdVal7; }
	else if (x == grdLtr8)	{ a = grdVal8; }
	else if (x == grdLtr9)	{ a = grdVal9; }
	else if (x == grdLtr10)	{ a = grdVal10; }
	else if (x == grdLtr11)	{ a = grdVal11; }
	else if (x == grdLtr12)	{ a = grdVal12; }
	else if (x == grdLtr13)	{ a = grdVal13; }
	else if (x == grdLtr14)	{ a = grdVal14; }
	else if (x == grdLtr15)	{ a = grdVal15; }
	askN(a, cn);
	}

function askN(a, cn){
	n = parseInt(prompt("Enter no. of credit units for the mark"));
	if (n >= 1) { doAll(a, n, cn); }
	else{
		alert("Invalid entry: Number above 0 expected!");
		askN(a, cn);
		}
	}

function doAll(a, n, cn) {
	v = a*n;
	num += v;
	sum += n;
	cn -= 1
	if (cn == 0) { ansC(num, sum); }
	else if (cn >= 1) { calcC(cn); }
	}