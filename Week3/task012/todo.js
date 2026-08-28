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
