
var text1 = "";
var runningTotal;

function getReceipt() {
	text1 += "<h3>You Ordered:</h3>";
	runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");

	//Iterate through the area I just created and figure out which one is checked.
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 += selectedSize + "<br>";

		}
	}
	
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} 
	runningTotal += sizeTotal;
	getMeat(runningTotal,text1);
	

	
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 += meatArray[j].value+ "<br>";
		
		}
	}

	var meatCount = selectedMeat.length;
if (meatCount > 1) {
	meatTotal = (meatCount - 1);
}
else {
	meatTotal = 0;
	}	
	runningTotal += meatTotal;
	getVeg(runningTotal,text1);
}
	
	
function getVeg(runningTotal,text1) {
		var vegTotal = 0;
		var selectedVeg = [];
		var vegArray = document.getElementsByClassName("veg");
		for (var v = 0; v < vegArray.length; v++) {
			if (vegArray[v].checked) {
				selectedVeg.push(vegArray[v].value);
				console.log("selected veg item: ("+vegArray[v].value+")");
				text1 = text1+vegArray[v].value+"<br>";
			
			}
		}
		var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} 
	else {
		vegTotal = 0;
	}
	runningTotal += vegTotal;
	getCheese(runningTotal,text1);
}
	
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese;
	var cheeseArray = document.getElementsByClassName("cheese");

	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			var selectedCheese = cheeseArray[c].value;
			text1 += selectedCheese + "<br>";

		}
	}
	
	if (selectedCheese === "Regular") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} 
	runningTotal += cheeseTotal;
	getCrust(runningTotal,text1);
}

	function getCrust(runningTotal,text1) {
		var crustTotal = 0;
		var selectedCrust;
		var crustArray = document.getElementsByClassName("crust");

	for (var cr = 0; cr < crustArray.length; cr++) {
		if (crustArray[cr].checked) {
			var selectedCrust = crustArray[cr].value;
			text1 += selectedCrust + "<br>";

		}
	}
	
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	} 
	runningTotal += crustTotal;
	getSauce(runningTotal,text1);
}

function getSauce(runningTotal,text1) {
	var SauceTotal = 0;
	var selectedSauce;
	var sauceArray = document.getElementsByClassName("sauce");

	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			text1 += selectedSauce + "<br>";

		}
	}
	
	if (selectedSauce === "Marinara") {
		sauceTotal = 0;
		} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
		} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 3;
		} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
		}
	
	
	
	
	// console.log("total selected meat items: "+meatCount);
	// console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	// console.log("meat text1: "+text1);
	// console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}





