function editMenuItem(event) {
    event.preventDefault();
    let newLabel = prompt("Digite o novo nome para o menu:");
    if (newLabel) {
        event.target.textContent = newLabel;
    }
}

document.getElementById('page-title').addEventListener('click', function() {
    let newTitle = prompt("Digite o novo título da página:");
    if (newTitle) {
        this.textContent = newTitle;
    }
});

document.getElementById('page-description').addEventListener('click', function() {
    let newDescription = prompt("Digite a nova descrição:");
    if (newDescription) {
        this.textContent = newDescription;
    }
});

