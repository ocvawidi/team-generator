// Selectors
const groupInput = document.getElementById("groupInput");
const nameInput = document.getElementById("nameInput");
const SubmitButton = document.getElementById("SubmitButton");
const Group = document.getElementById("Group");

SubmitButton.addEventListener('click', e => {
    e.preventDefault();
    RandomizeTeam();
});

function RandomizeTeam() {
    const allNames = nameInput.value.split("/n");
    const namesperGroup = parseInt(groupInput.value);
}