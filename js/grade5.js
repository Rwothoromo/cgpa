function grade5(){
	cn = prompt("Enter no. of course units");
	if (isNaN(cn) || cn < 1){
		alert("Invalid entry: Number above 0 expected!");
		cn = null;
		grade5();
		}
	else { calc5(cn); }
	}