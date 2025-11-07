const input = document.getElementById("to-do");
const addButton = document.getElementById("add-btn");
const list = document.querySelector("ul");

function addTask() {
  const text = input.value.trim();
  if (!text) {
    return;
  };

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("toggle");

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li)

  input.value = "";
  input.focus();
}

addButton.addEventListener("click", () => {
  addTask();
})

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
})

list.addEventListener("click", (e) => {
  if (e.target.matches("button.delete")) {
    const li = e.target.closest("li")
    if (li) {
      li.remove();
      return;
    }
  }
  if (e.target.matches("input.toggle")) {
    const li = e.target.closest("li")
    if (li) {
      li.classList.toggle("done", e.target.checked)
    }
  }
})