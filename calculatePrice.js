function contPrice() {
    // variables for the measurements. (go with every main option)
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var depth = document.getElementById("depth").value;

    // variables that are only for the contractor price calculator
    var gravelPrice = document.getElementById("gravel").value;
    var machinesPrice = document.getElementById("machines").value;
    var utilitiesPrice = document.getElementById("utilities").value;
    var personalProfit = document.getElementById("profit").value;
    var workers = document.getElementById("workers").value;

    var gravel;
    var machines;
    var utilities;
    var personal

    function getPrices() {
        gravel = gravelPrice * 1;
        machines = machinesPrice * 1;
        utilities = utilitiesPrice * 1;
        personal = personalProfit * 1;
    }

    // holds values
    var totalPrice;
    var totalYards;
    var yardPrice;

    invalidInputs();
    calculateCost();

    document.getElementById("totalYards").innerHTML = "Total Yards: ";
    document.getElementById("totalYardsNum").innerHTML = totalYards;

    document.getElementById("totalPrice").innerHTML = "Total Price: ";
    document.getElementById("totalPriceNum").innerHTML = totalPrice;
    document.getElementById("resetButton").style.display="block";


    // check for invalid inputs
    function invalidInputs() {
        if (length == "" || width == "" || depth == "" || gravelPrice == "" ||
        machinesPrice == "" || utilitiesPrice == "" || personalProfit == "" || workers == "") {
            document.getElementById("ifString").innerHTML = "**Please Enter A Correct Input**";
        }
    }

    // use the measurement entered to calculate the yards
    function calculateYards() {
        let inchesToFeet = depth/12;
        let squaredFeet = length * width * inchesToFeet;
        let tempYards = squaredFeet/27;
        totalYards = Math.round(tempYards * 100.0) / 100.0;
    }

    // get the price for the concrete
    function concretePrice() {
        if (totalYards > 0 && totalYards < 3) {
            yardPrice = totalYards * 300;
        } else {
            yardPrice = totalYards * 180;
        }
    }

    // get total price for workes
    function workersPrice() {
        workers = workers * 150;
    }

    function calculateCost() {
        calculateYards();
        concretePrice();
        workersPrice();
        getPrices();
        totalPrice = gravel + machines + utilities + personal + yardPrice + workers;
    }

}


