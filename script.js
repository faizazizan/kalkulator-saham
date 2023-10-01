document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateTradeSizeInLots);
});

function calculateTradeSizeInLots() {
    const capital = parseFloat(document.getElementById("capital").value);
    const risk = parseFloat(document.getElementById("risk").value);
    const entryPrice = parseFloat(document.getElementById("entryPrice").value);
    const stopPrice = parseFloat(document.getElementById("stopPrice").value);

    const tradeSizeInLots = (risk / 100) * capital / ((entryPrice - stopPrice) * 100);

    document.getElementById("result").innerHTML = `Trade Size (Lots): ${tradeSizeInLots.toFixed(2)}`;
}
