function PlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = playerName;
    const ol = document.getElementById('ol');
    const olLength = ol.children.length;

    if (olLength < 5) {
        ol.appendChild(li);
        element.disabled = true;
    }
    else {
        alert('Sorry!!!');
        return;
    }
}