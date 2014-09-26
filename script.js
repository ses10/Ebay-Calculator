

var profitLabel =  document.getElementsByTagName("label")[0];

// holds amount of money paid and sold
var pricePaid;
var priceSold;

// buttons 
var addPaid = document.getElementsByTagName("button")[0];
var addSold = document.getElementsByTagName("button")[1];
var calcProfit = document.getElementsByTagName("button")[2];

// Input boxes to input amount paid and sold
var paidInput = document.getElementsByTagName("input")[0];
var soldInput = document.getElementsByTagName("input")[1];

// bind event handlers to buttons
addPaid.onclick = function setPricePaid() {pricePaid = parseFloat(paidInput.value);};
addSold.onclick = function setPriceSold() {priceSold = parseFloat(soldInput.value);};
calcProfit.onclick = function calculateProfit() {profitLabel.innerHTML = priceSold - pricePaid;};

