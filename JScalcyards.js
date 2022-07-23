function yardsMain() {
    // declare the measurements to variables
    var length = document.getElementById("yardLength").value;
    var width = document.getElementById("yardWidth").value;
    var depth = document.getElementById("yardDepth").value;
    var totalYards;


    checkInvalidInput();
    calculateYards();

    // if totalYards is not a number, displays error message
    if (totalYards >= 0) {
        document.getElementById("totalYards").innerHTML = "Total yards: ";
        document.getElementById("totalYardsNum").innerHTML = totalYards;

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
}