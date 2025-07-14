const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div"); // wrap everything in a container
    inputBox.className = "input-box";

    let note = document.createElement("p");
    note.setAttribute("contenteditable", "true");

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    icon.style.cursor = "pointer";

    icon.addEventListener("click", () => {
        inputBox.remove();
    });

    inputBox.appendChild(note);
    inputBox.appendChild(icon);
    notesContainer.appendChild(inputBox);
});
