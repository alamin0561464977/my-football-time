function PlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = playerName;
    const ol = document.getElementById('ol');
    const olLength = ol.children.length;
    if (olLength < 5) {
        ol.appendChild(li);
        element.disabled = true;
        element.style.backgroundColor = '#c73452'
    }
    else {
        alert('Please select 5 player');
        return;
    }
};
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerMoney = getElementByIdInputFil('per-player');
    const PlayerExpenses = document.getElementById('Player-Expenses');
    if (isNaN(perPlayerMoney) === true) {
        alert('Please provide Correct information');
        return;
    }
    const ol = document.getElementById('ol');
    const olLength = ol.children.length;
    const PlayerExpensesTotal = perPlayerMoney * olLength;
    PlayerExpenses.innerText = PlayerExpensesTotal;
    if (olLength == 0) {
        alert('No player selected Please select a player')
    }


});
document.getElementById('calculate-total').addEventListener('click', function () {
    const total = document.getElementById('total');
    const manager = getElementByIdInputFil('manager');
    const coach = getElementByIdInputFil('coach');
    if (isNaN(manager) === true || isNaN(coach) === true) {
        alert('Please provide Correct information');
        return;
    }
    const PlayerExpenses = parseInt(document.getElementById('Player-Expenses').innerText);
    const totalMoney = PlayerExpenses + manager + coach;
    total.innerText = totalMoney;

})