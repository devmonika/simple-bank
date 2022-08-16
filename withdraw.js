document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const previousWithdarwTotal = document.getElementById('withdraw-amount');
    const previousWithdarwTotalString = previousWithdarwTotal.innerText;
    const previousWithdarwTotalNum = parseFloat(previousWithdarwTotalString);
    const newWithdrawAmount = withdrawAmount + previousWithdarwTotalNum;
    previousWithdarwTotal.innerText = parseFloat(newWithdrawAmount);

    const amountTotal = document.getElementById('total-amount');
    const amountTotalString = amountTotal.innerText;
    const currentAmountTotal = parseFloat(amountTotalString);

    const newAmountTotal = currentAmountTotal - withdrawAmount;

    amountTotal.innerText = newAmountTotal;


    withdrawField.value = '';
});