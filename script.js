// Function to calculate tip and total
function calculateData(bill, tip_percentage, people) {
    if (isNaN(bill) || isNaN(tip_percentage) || isNaN(people)) {
        return { error: "Invalid inputs" };
    }

    if (bill < 0) {
        return { error: "Bill amount cannot be negative." };
    }
    if (tip_percentage < 0) {
        return { error: "Tip percentage cannot be negative." };
    }
    if (people <= 0) {
        return { error: "The number of people should be 1 on more." };
    }

    const tip = (bill * tip_percentage) / 100;
    const total = bill + tip;
    const perPerson = total / people;

    return { tip: tip.toFixed(2), total: total.toFixed(2), perPerson: perPerson.toFixed(2) };
}

// Function to update the UI
function updateUI(tip, total_person) {
    document.getElementById("tip").innerText = `$${tip}`;
    document.getElementById("total-person").innerText = `$${total_person}`;
}

// Function to reset the UI
function resetUI() {
    document.getElementById("bill").value = "";
    document.getElementById("custom-tip").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip").innerText = "$0.00";
    document.getElementById("total-person").innerText = "$0.00";
}

// Event listeners
document.querySelectorAll(".tip-btn").forEach(button => {
    button.addEventListener("click", () => {
        const bill = parseFloat(document.getElementById("bill").value);
        const tip_percentage = parseFloat(button.getAttribute("data-tip"));
        const people = parseInt(document.getElementById("people").value);

        const result = calculateData(bill, tip_percentage, people);
        if (!result.error) {
            updateUI(result.tip, result.perPerson);
        } else {
            alert(result.error);
        }
    });
});

document.getElementById("custom-tip").addEventListener("input", () => {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip_percentage = parseFloat(document.getElementById("custom-tip").value);
    const people = parseInt(document.getElementById("people").value);

    const result = calculateData(bill, tip_percentage, people);
    if (!result.error) {
        updateUI(result.tip, result.total);
    } else {
        alert(result.error);
    }
});

document.getElementById("reset").addEventListener("click", resetUI);