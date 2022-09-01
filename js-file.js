
// Food Item User Input
const foodName = document.querySelector("#foodName");
const expirationDate = document.querySelector("#expirationDate");
const submitButton = document.querySelector(".submit-btn");
const tableFoodInventory = document.querySelector("#foodInventory");

itemCounter = 1;

submitButton.addEventListener('click', () => {
    var row = tableFoodInventory.insertRow();

    var cell = row.insertCell();
    cell.textContent = `${foodName.value}`;
    
    var cell = row.insertCell();
    cell.textContent = `${expirationDate.value}`;

    var cell = row.insertCell();
    cell.innerHTML = `<button id="delete-${itemCounter}" value=${itemCounter}>X</button>`;
    var deleteButton = document.querySelector(`#delete-${itemCounter}`);
    deleteButton.addEventListener('click', () => {
        tableFoodInventory.deleteRow(`${deleteButton.value}`);
    })
    itemCounter++;
});