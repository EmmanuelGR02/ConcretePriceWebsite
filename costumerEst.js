function estMain() {
    // declare the measurements to variables
    var length = document.getElementById("yardLength").value;
    var width = document.getElementById("yardWidth").value;
    var depth = document.getElementById("yardDepth").value;
    var jobType = document.getElementById("estType").value;
    var yesNo = document.getElementById("estRemoval").value;

    var price;
    var totalYards;


    checkInvalidInput();
    warning();
    calculateYards();
    calculatePrice();

    // if totalYards is not a number, displays error message
    if (totalYards >= 0) {
        document.getElementById("estTotalYards").innerHTML = "Total yards: ";
        document.getElementById("estTotalYardsNum").innerHTML = totalYards;
        document.getElementById("resetButton").style.display="block";
    } else {
        document.getElementById("ifString").innerHTML = "**Do NOT enter letters or special characters**";
        document.getElementById("resetButton").style.display="block";
    }

    // use the measurement entered to calculate the yards
    function calculateYards() {
        let inchesToFeet = depth/12;
        let squaredFeet = length * width * inchesToFeet;
        let tempYards = squaredFeet/27;
        totalYards = Math.round(tempYards * 100.0) / 100.0;
    }

    // Check if the any placeholder is left on blank, and it it is, display error message
    function checkInvalidInput() {
        if (length == "" && width == "" && depth == "") {
            document.getElementById("invalidLength").style.display="block";
            document.getElementById("invalidWidth").style.display="block";
            document.getElementById("invalidDepth").style.display="block";
        } else if (length == "" && width == "") {
            document.getElementById("invalidLength").style.display="block";
            document.getElementById("invalidWidth").style.display="block";
        } else if (length == "" && depth == "") {
            document.getElementById("invalidLength").style.display="block";
            document.getElementById("invalidDepth").style.display="block";
        } else if (width == "" && depth == "") {
            document.getElementById("invalidWidth").style.display="block";
            document.getElementById("invalidDepth").style.display="block";
        } else if (length == "") {
            document.getElementById("invalidLength").style.display="block";
        } else if (width == "") {
            document.getElementById("invalidWidth").style.display="block";
        } else if (depth == "") {
            document.getElementById("invalidDepth").style.display="block"; 
        }
    }

    function calculatePrice(){
        let tempPrice;
        let estPrice;

        // if yards are less than 5, multiply by 300 else multiply by 170
        if (totalYards < 5) {
            tempPrice= totalYards * 300;
        } else{ 
            tempPrice = totalYards * 170;
        }

        if (totalYards > 0.5 && totalYards < 1) {
            // if yes add price is more
            if (yesNo == "yes" || yesNo == "YES") {
                price = tempPrice + 1500;
                estPrice = price + 1200;

                document.getElementById("estPrice").innerHTML = "Estimate Price For "
                document.getElementById("estMeasurements").innerHTML = " " +length + "ft x " + width + "ft x " + depth + "in ";
                document.getElementById("estJob").innerHTML = jobType + ": "
                document.getElementById("estPriceNum").innerHTML = "$" + price + " - " + estPrice;
            } else {
                price = tempPrice + 1000;
                estPrice = price + 900;

                document.getElementById("estPrice").innerHTML = "Estimate Price For "
                document.getElementById("estMeasurements").innerHTML = " " +length + "ft x " + width + "ft x " + depth + "in ";
                document.getElementById("estJob").innerHTML = jobType + ": "
                document.getElementById("estPriceNum").innerHTML = "$" + price + " - " + estPrice;
            }
        // loop through the yards and add 900 per yard and 1100 for the estimate    
        } else if (totalYards > 1) {
            if (yesNo == "yes" || yesNo == "YES") {
                for (let i = 0; i < totalYards; i ++) {
                    price = i * 750;
                    estPrice = price + 1500;
                }
            } else if (yesNo == "no" || yesNo == "NO") {
                for (let i = 0; i < totalYards; i ++) {
                    price = i * 600;
                    estPrice = price + 1200;
                }
            } else {
                document.getElementById("invalidYesNo").style.display="block";
                for (let i = 0; i < totalYards; i ++) {
                    price = i * 500;
                    estPrice = price + 1200;
                }
            }
            // prompt the price tp the user
            document.getElementById("estPrice").innerHTML = "Estimate Price For "
            document.getElementById("estMeasurements").innerHTML = " " +length + "ft x " + width + "ft x " + depth + "in ";
            document.getElementById("estJob").innerHTML = jobType + ": "
            document.getElementById("estPriceNum").innerHTML = "$" + price + " - " + estPrice;

        } else {
            document.getElementById("ifString").innerHTML = "***INVALID AMOUNT***";
        }
    }

    function warning() {
        prompt("**This estimates are not 100% reliable**")
    }
}