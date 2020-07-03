const searchInput = document.querySelector(".search-input");
const addForm = document.querySelector(".add-form");
const todoList = document.querySelector(".todo-list");
let allTodos = [...todoList.children];
const todoGenerator = (value) => {
  if (value) {
    const newTodo = document.createElement("li");
    newTodo.innerText = value;
    newTodo.className = "todo-elem";
    todoList.appendChild(newTodo);
    allTodos = [...todoList.children];
  }
};
const todoSearch = (value) => {
  allTodos.forEach((todo) => {
    if (!todo.textContent.toLowerCase().includes(value.toLowerCase()))
      todo.classList.add("hidden");
    else todo.classList.remove("hidden");
  });
};

searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  todoSearch(event.target.value);
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todoGenerator(event.target.addField.value);
  event.target.addField.value = "";
});
