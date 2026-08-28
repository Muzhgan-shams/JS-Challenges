let todos = [];
let currentFilter = "all";

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const errorMessage = document.getElementById("errorMessage");
const todoCount = document.getElementById("todoCount");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filter-button");

const id = Date.now();

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    showError("Please enter a todo");
    return;
  }

  const newTodo = {
    id: id,
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = "";
  clearError();
  saveTodos();
  renderTodos();
  todoInput.focus();
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

function getVisibleTodos() {
  if (currentFilter === "active") {
    return todos.filter(function (todo) {
      return todo.completed === false;
    });
  }

  if (currentFilter === "completed") {
    return todos.filter(function (todo) {
      return todo.completed === true;
    });
  }

  return todos;
}

function createTodoElement(todo) {
  const listItem = document.createElement("li");
  listItem.className = "todo-item";
  listItem.dataset.id = todo.id;

  if (todo.completed) {
    listItem.classList.add("completed");
  }

  const text = document.createElement("span");
  text.className = "todo-text";
  text.textContent = todo.text;

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.textContent = todo.completed ? "Undo" : "Complete";
  completeButton.dataset.action = "complete";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.dataset.action = "delete";

  listItem.appendChild(text);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

function renderTodos() {
  todoList.innerHTML = "";

  const visibleTodos = getVisibleTodos();

  visibleTodos.forEach(function (todo) {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
  updateCount();
}

function updateCount() {
  const activeTodos = todos.filter(function (todo) {
    return todo.completed === false;
  });

  const activeCount = activeTodos.length;
  const itemWord = activeCount === 1 ? "item" : "items";

  todoCount.textContent = `${activeCount} ${itemWord} left`;
}
