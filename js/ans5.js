function ans5(num, sum) {
	cgpa = num/sum;
	cgpa = cgpa.toFixed(2);
	alert("Your GPA/CGPA is " + cgpa);
	if (cgpa >= 4.40) { alert("\nA First Class!"); }
	else if (cgpa >= 3.60) { alert("\nA Second Class Upper!"); }
	else if (cgpa >= 2.50) { alert("\nA Second Class Lower!"); }
	else if (cgpa >= 2.00) { alert("\nA Pass Degree!"); }
	else { alert("\nA Fail!"); }
	exit(1);
	}