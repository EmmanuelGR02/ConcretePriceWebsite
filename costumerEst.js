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
    calculateYards();
    calculatePrice();

    // if totalYards is not a number, displays error message
    if (totalYards >= 0) {
        document.getElementById("totalYards").innerHTML = "Total yards: " + totalYards;
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

        if (totalYards < 5) {
            tempPrice= totalYards * 300;
        } else{ 
            tempPrice = totalYards * 170;
        }

        if (totalYards > 0.5 && totalYards < 1) {
            if (yesNo == "YES") {
                price = tempPrice + 1500;
                estPrice = price + 1200;
                document.getElementById("estimate").innerHTML = "Estimated Price for " + " " +length + "ft. x " + width + "ft. x " + depth + "in. " + jobType + ": $" + price + " - " + estPrice;
            } else {
                price = tempPrice + 1000;
                estPrice = price + 900;
                document.getElementById("estimate").innerHTML = "Estimated Price for " + " " +length + "ft. x " + width + "ft. x " + depth + "in. " + jobType + ": $" + price + " - " + estPrice;
            }
        } else if (totalYards > 1 && totalYards < 3) {
            if (yesNo == "YES") {
                price = tempPrice + 1700;
                estPrice = price + 1500;
                document.getElementById("estimate").innerHTML = "Estimated Price for " + " " +length + "ft. x " + width + "ft. x " + depth + "in. " + jobType + ": $" + price + " - " + estPrice;
            } else {
                price = tempPrice + 1500;
                estPrice = price + 1400;
                document.getElementById("estimate").innerHTML = "Estimated Price for " + " " +length + "ft. x " + width + "ft. x " + depth + "in. " + jobType + ": $" + price + " - " + estPrice;
            }
        } else if (totalYards > 3 && totalYards < 6) {
            if (yesNo == "YES") {
                price = tempPrice + 2200;
                estPrice = price + 2000;
                document.getElementById("estimate").innerHTML = "Estimated Price for " + " " +length + "ft. x " + width + "ft. x " + depth + "in. " + jobType + ": $" + price + " - " + estPrice;
            }
        }

    }
}