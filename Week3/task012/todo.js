let todos = [];
let currentFilter = "all";

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const errorMessage = document.getElementById("errorMessage");
const todoCount = document.getElementById("todoCount");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filter-button");

const id = Date.now();
