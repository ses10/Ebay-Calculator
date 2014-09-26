
// 
var profitLabel =  document.getElementsByTagName("label")[0];

// holds amount of money paid and sold
var pricePaid;
var priceSold;

// number of items
var quantity

// buttons 
var addPaid = document.getElementsByTagName("button")[0];
var addSold = document.getElementsByTagName("button")[1];
var applyQuantity = document.getElementsByTagName("button")[2];
var calcProfit = document.getElementsByTagName("button")[3];

// Input boxes to input amount paid and sold
var paidInput = document.getElementsByTagName("input")[0];
var soldInput = document.getElementsByTagName("input")[1];
var quantityInput = document.getElementsByTagName("input")[2];

// bind event handlers to buttons
addPaid.onclick = function setPricePaid() {pricePaid = parseFloat(paidInput.value);};
addSold.onclick = function setPriceSold() {priceSold = parseFloat(soldInput.value);};
applyQuantity.onclick = function setQuantity() {quantity = parseInt(quantityInput.value);};

// Calculate profit 
calcProfit.onclick = function calculateProfit() {
	
	var profit = priceSold - pricePaid;
	
	// if no input in Quantity field 
	if(isNaN(quantity))
	{
	 profitLabel.innerHTML = profit;
	}
	else 
	profitLabel.innerHTML = profit * quantity;	
};

