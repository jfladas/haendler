function calculate(){
	var screws = document.getElementById("screws").value;
	var nuts = document.getElementById("nuts").value;
	var grommets = document.getElementById("grommets").value;

	var price = Math.round((screws*0.2+nuts*0.1+grommets*0.05)*100)/100;
	console.log(screws);
	document.getElementById("price").innerText = price;
}