const toggle = document.getElementById("dark-mode")
const billAmountInput = document.getElementById('bill-amount')
const customTipInput = document.querySelector('.custom-tip')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const tipAmountOutput = document.querySelector('.tip-amount span')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const totalBillOutput = document.querySelector('.total span')
const tipsContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')
const noTipCheckbox = document.getElementById('no-tip-checkbox');


let tipPercentage = 0
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggle.checked = true;
} else {
    document.body.classList.remove("dark-theme");
    toggle.checked = false;
}

generateBillBtn.addEventListener('click', () => {
    const billAmount = parseFloat(billAmountInput.value)
    const numberOfPeople = parseInt(numberOfPeopleInput.value)
    // const customTip = parseFloat(customTipInput.value)
    if (isNaN(billAmount) || billAmount <= 0 || tipPercentage < 0) {
        alert("Error! Please enter valid numbers!");
        resetBtn.disabled = false
        return;
    } else if (numberOfPeople <= 0 || isNaN(numberOfPeople)) {
        alert("Error! Please enter number of people!");
    }

    if ((isNaN(tipPercentage) || tipPercentage <= 0) && !noTipCheckbox.checked) {
        alert("Please select a tip or write Custom tip in (%) or choose 'Split without Tip' checkbox");
        billAmountInput.value = ''
        customTipInput.value = ''
        numberOfPeopleInput.value = ''
        tipAmountOutput.innerText = ''
        totalBillOutput.innerText = ''
        eachPersonBillOutput.innerText = ''
        resetBtn.disabled = false
        return;
    }
    if (isNaN(numberOfPeopleInput.value)) {
        generateBillBtn.disabled = true
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBill = parseFloat(billAmount + tipAmount)
    const eachPersonBill = totalBill / numberOfPeople

    tipAmountOutput.innerText = `₹${tipAmount.toFixed(2)}`
    totalBillOutput.innerText = `₹${totalBill.toFixed(2)}`
    eachPersonBillOutput.innerText = `₹${eachPersonBill.toFixed(2)}`

    resetBtn.disabled = false

})

noTipCheckbox.addEventListener('change', () => {
    if (noTipCheckbox.checked) {
        tipPercentage = 0;
        customTipInput.value = '';
        customTipInput.disabled = true;
        tipsContainer.classList.add('disabled');
        [...tipsContainer.children].forEach(tip => tip.classList.remove('selected'));
    } else {
        customTipInput.disabled = false;
        tipsContainer.classList.remove('disabled');
    }

    // Also check if number of people input is valid to enable button
    if (billAmountInput.value && numberOfPeopleInput.value) {
        generateBillBtn.disabled = false;
    }
});

tipsContainer.addEventListener('click', (e) => {
    if (tipsContainer.classList.contains('disabled')) return;

    const clicked = e.target;
    if (clicked.classList.contains('tip')) {
        const isSelected = clicked.classList.contains('selected');

        // Deselect all tips
        [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'));

        if (!isSelected) {
            clicked.classList.add('selected');
            tipPercentage = parseFloat(clicked.innerText);
            customTipInput.value = '';
        } else {
            tipPercentage = 0; // Deselecting, so reset tip
        }
    }
})

customTipInput.addEventListener('input', () => {
    const customValue = parseFloat(customTipInput.value);
    if (!isNaN(customValue) && customValue >= 0) {
        tipPercentage = customValue;
    } else {
        tipPercentage = 0;
    }
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
});


resetBtn.addEventListener('click', () => {
    tipPercentage = 0
    billAmountInput.value = ''
    customTipInput.value = ''
    numberOfPeopleInput.value = ''
    tipAmountOutput.innerText = ''
    totalBillOutput.innerText = ''
    eachPersonBillOutput.innerText = ''
    customTipInput.disabled = true
    numberOfPeopleInput.disabled = true
    generateBillBtn.disabled = true
    tipsContainer.classList.add('disabled');

    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))

    resetBtn.disabled = true
    noTipCheckbox.checked = false;



});

billAmountInput.addEventListener('input', () => {
    if (billAmountInput.value) {
        customTipInput.disabled = false
        numberOfPeopleInput.disabled = false
        // generateBillBtn.disabled = false
        tipsContainer.classList.remove('disabled')
    } else {
        customTipInput.disabled = true
        noTipCheckbox.checked = false;
        customTipInput.value = ''
        numberOfPeopleInput.value = ''
        numberOfPeopleInput.disabled = true
        generateBillBtn.disabled = true
        tipsContainer.classList.add('disabled')
    }
})

numberOfPeopleInput.addEventListener('input', () => {
    if (!isNaN(tipPercentage)) {
        generateBillBtn.disabled = false
    }
})
