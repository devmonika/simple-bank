document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('diposite-input');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    const depositeTotalAmount = document.getElementById('deposite-amount');
    const previousDepositeTotalString = depositeTotalAmount.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const currentTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalAmount.innerHTML = parseFloat(currentTotal);


    const amountTotal = document.getElementById('total-amount');
    const amountTotalString = amountTotal.innerText;
    const currentAmountTotal = parseFloat(amountTotalString);

    const newAmountTotal = currentAmountTotal + newDepositeAmount;

    amountTotal.innerText = newAmountTotal;

    depositeField.value = '';
});