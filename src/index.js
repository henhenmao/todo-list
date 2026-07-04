

import "./styles.css";
import Task from "./tasks.js";
import {createTask, createTaskDiv, addTaskToProject} from "./createTask.js";

const tempTask = new Task(
    "Task Title",
    "This is the description of the task",
    "now"
)
let currentTasks = [tempTask];

const page = document.getElementById("page");
const newTaskDiv = document.getElementById("new-task-div")
const currentProject = document.getElementById("default-project-content");

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", () => {
    newTaskDiv.classList.add("visible");
});

// action performed after the submit button of a new task is clicked
const newTaskForm = document.querySelector(".new-task-details");
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = createTask();
    const newTaskDiv = createTaskDiv(newTask);
    currentTasks.push(newTask);
    addTaskToProject(newTaskDiv, currentProject);
    closeTaskForm();
});

function closeTaskForm() {
    newTaskDiv.classList.remove("visible");
    newTaskForm.reset();
}

const closeTaskFormButton = document.getElementById("close-create-task");
closeTaskFormButton.addEventListener("click", () => {
    closeTaskForm();
});


currentTasks.forEach((task) => {
    const taskDiv = createTaskDiv(task);
    addTaskToProject(taskDiv, currentProject);
});