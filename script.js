// Function to calculate tip and total
function calculateData(bill, tip_percentage, people) {
    if (isNaN(bill) || isNaN(tip_percentage) || isNaN(people)) {
        return { error: "Invalid inputs" };
    }

    if (bill <= 0) {
        return { error: "Bill amount must be greater than zero." };
    }
    if (tip_percentage < 0) {
        return { error: "Tip percentage cannot be negative." };
    }
    if (people <= 0) {
        return { error: "The number of people should be 1 or more." };
    }

    const total_tip = (bill * tip_percentage) / 100;
    const total = bill + total_tip;
    const perPerson = total / people;
    const tip = total_tip / people;

    return { tip: total_tip.toFixed(2), tip_person: tip.toFixed(2), total: total.toFixed(2), perPerson: perPerson.toFixed(2) };
}

// Function to update the UI
function updateUI(tip_person, total_person) {
    document.querySelector(".display-tip").innerText = `$${tip_person}`;
    document.querySelector(".display-total").innerText = `$${total_person}`;
}

// Function to reset the UI
function resetUI() {
    document.getElementById("bill").value = "";
    document.getElementById("tip-custom").value = "";
    document.getElementById("people").value = "";
    document.querySelector(".display-tip").innerText = "$0.00";
    document.querySelector(".display-total").innerText = "$0.00";
    document.getElementById("reset").disabled = true;
}

// Event listeners for tip buttons
document.querySelectorAll(".tips").forEach(button => {
    button.addEventListener("click", () => {
        const bill = parseFloat(document.getElementById("bill").value);
        const tip_percentage = parseFloat(button.getAttribute("data-tip"));
        const people = parseInt(document.getElementById("people").value);

        const result = calculateData(bill, tip_percentage, people);
        if (!result.error) {
            updateUI(result.tip_person, result.perPerson);
            document.getElementById("reset").disabled = false;
        } else {
            alert(result.error);
        }
    });
});

// Event listener for custom tip input
document.getElementById("tip-custom").addEventListener("input", () => {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip_percentage = parseFloat(document.getElementById("tip-custom").value);
    const people = parseInt(document.getElementById("people").value);

    const result = calculateData(bill, tip_percentage, people);
    if (!result.error) {
        updateUI(result.tip_person, result.total);
        document.getElementById("reset").disabled = false;
    } else {
        alert(result.error);
    }
});

// Event listener for reset button
document.getElementById("reset").addEventListener("click", resetUI);
