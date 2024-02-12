document.addEventListener("DOMContentLoaded", function() {
    const distanceEl = document.getElementById("distance");
    const fuelEl = document.getElementById("fuel");
    const fuelpriceEl = document.getElementById("fuelprice");
    const calculatebtn = document.getElementById("calculatebtn");
    const resultEl = document.getElementById("result");

    calculatebtn.addEventListener("click", function() {
        const distanceValue = parseFloat(distanceEl.value);
        const fuelValue = parseFloat(fuelEl.value);
        const fuelpriceValue = parseFloat(fuelpriceEl.value);

        if (isNaN(distanceValue) || isNaN(fuelValue) || isNaN(fuelpriceValue)) {
            resultEl.textContent = "Please enter valid numbers for all fields.";
            return;
        }

        const fuelCost = (distanceValue / fuelValue) * fuelpriceValue;
        resultEl.textContent = `⚡ Estimated fuel cost: $${fuelCost.toFixed(2)}`;
    });
});
