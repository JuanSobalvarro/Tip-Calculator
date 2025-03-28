/*
* This script is used for the tip calculator application.
*/

function calculateData(bill, tip_percentage, people) {
    // Validate inputs

    if (isNaN(bill) || isNaN(tip_percentage) || isNaN(people)) {
        return { error: "Invalid input" };
    }
    if (bill < 0 || tip_percentage < 0 || people <= 0) {
        return { error: "Invalid input" };
    }
    // Calculate tip and total
    const tip = (bill * tip_percentage) / 100;
    const total = bill + tip;
    // Calculate per person amount
    const perPerson = total / people;

    return { tip: tip.toFixed(2), total: total.toFixed(2), perPerson: perPerson.toFixed(2) };

}

function updateUI(tip, total, perPerson) {
    // Update the UI with the calculated values
    document.getElementById("tip").innerText = `$${tip}`;
    document.getElementById("total").innerText = `$${total}`;
    document.getElementById("perPerson").innerText = `$${perPerson}`;
}
function resetUI() {
    // Reset the UI to default values
    document.getElementById("tip").innerText = "$0.00";
    document.getElementById("total").innerText = "$0.00";
    document.getElementById("perPerson").innerText = "$0.00";
}