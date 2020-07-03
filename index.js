const searchInput = document.querySelector(".search-input");
const addForm = document.querySelector(".add-form");
const todoList = document.querySelector(".todo-list");
const completedButton = document.querySelector(".completed-button");
const activeButton = document.querySelector(".active-button");
let allTodos = [...todoList.children];
let buttons = document.querySelector(".toggle-block");
const todoGenerator = (value) => {
  if (value) {
    const newTodo = document.createElement("li");
    newTodo.innerText = value;
    newTodo.className = "todo-elem";
    todoList.appendChild(newTodo);
    newTodo.completed = false;
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

todoList.addEventListener("mouseover", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.style = "background-color: #faf;";
});
todoList.addEventListener("mouseout", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.style = "background-color: cornsilk;";
});
todoList.addEventListener("click", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.completed = todo.completed ? false : true;
  if (todo.completed) {
  }
  console.log(todo.completed);
});
completedButton.addEventListener("click", (event) => {
  todoList.innerHTML = "";
  completedTodos.forEach((todo) => {
    todoGenerator(todo.innerText);
  });
});
activeButton.addEventListener("click", () => {
  todoList.innerHTML = "";
  activeTodos.forEach((todo) => {
    todoGenerator(todo.innerText);
  });
});
buttons.addEventListener("click", (event) => {
  const button = event.target.closest(".toggle-button");
  [...buttons.children].forEach((btn) => {
    btn.classList.remove("current");
  });
  button.classList.add("current");
});
