const input = document.getElementById("to-do")
const addButton = document.getElementById("add-btn")
const list = document.querySelector("ul")

addButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"
    delBtn.className = "delete"

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = ""
})

list.addEventListener("click", (e) => {
    if (e.target.matches("button.delete")) {
        const li = e.target.closest("li")
        if ("li") li.remove();
        return;
    }

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done")
    }
})