const searchInput = document.querySelector(".search-input");
const addForm = document.querySelector(".add-form");
const todoList = document.querySelector(".todo-list");
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
const showAll = () => {
  allTodos.forEach((todo) => {
    todo.classList.remove('hidden');
  })
};
const showCompleted = () => {
  allTodos.forEach((todo) => {
    todo.completed ? todo.classList.remove('hidden') : todo.classList.add('hidden');
  })
}
const showActive = () => {
  allTodos.forEach((todo) => {
    todo.completed ? todo.classList.add('hidden') : todo.classList.remove('hidden');
  })
}
//Search
searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  todoSearch(event.target.value);
});

//Adding todo
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todoGenerator(event.target.addField.value);
  event.target.addField.value = "";
});

//Hovering
todoList.addEventListener("mouseover", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.style = "background-color: #faf;";
});
todoList.addEventListener("mouseout", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.style = "cornsilk;";
});

//Marking status Completed/Active
todoList.addEventListener("click", (event) => {
  const todo = event.target.closest(".todo-elem");
  todo.completed = todo.completed ? false : true;
  todo.classList.toggle('completed');
  console.log(todo.completed);
});

//Switching All/Completed/Active
buttons.addEventListener("click", (event) => {
  if (event.target.closest(".toggle-button")) {
    const button = event.target.closest(".toggle-button");
    [...buttons.children].forEach((btn) => {
      btn.classList.remove("current");
    });
    button.classList.add("current");
    switch(button.name){
      case 'all':
        showAll();
        break;
      case 'completed':
        showCompleted();
        break;
      case 'active':
        showActive();
        break;
    }
  }
});
