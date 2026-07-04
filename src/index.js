

import "./styles.css";
import Task from "./Tasks.js";
import Project from "./Project.js";
import {createTask, createTaskDiv} from "./createTask.js";
import {createProject, createProjectDiv, addProjectToMain} from "./createProject.js";

const exampleTask = new Task(
    "Task Title",
    "This is the description of the task",
    "now"
);

const page = document.getElementById("page");
const main = document.getElementById("main");
const newTaskDiv = document.getElementById("new-task-div");
const newProjectDiv = document.getElementById("new-project-div");

// "New Task" button click event
const newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click", () => {
    newTaskDiv.classList.add("visible");
});

// action performed after the submit button of a new task is clicked
const newTaskForm = document.querySelector(".new-task-details");
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTitle = document.getElementById("new-title").value;
    const taskDescription = document.getElementById("new-description").value;
    const taskDue = document.getElementById("new-due").value;
    const selectedProject = projects[document.getElementById("new-project-select").value]

    const newTask = new Task(taskTitle, taskDescription, taskDue);
    addTask(newTask, selectedProject);
    closeForm(newTaskDiv, newTaskForm);
});

// "New Project" button click event
const newProjectButton = document.getElementById("new-project-button");
newProjectButton.addEventListener("click", () => {
    newProjectDiv.classList.add("visible");
});

// Initializes default project and in DOM
const defaultProject = new Project("Project 1");
defaultProject.tasks.push(exampleTask);
let projects = [];

const newProjectSelect = document.getElementById("new-project-select");
const projectContentDivs = new Map();

addProject(defaultProject.name);

function renderProjectOptions() {
    newProjectSelect.innerHTML = "";
    projects.forEach((project, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = project.name;
        newProjectSelect.append(option);
    });
}
renderProjectOptions();

const newProjectForm = document.querySelector(".new-project-details");
newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById("new-project-title").value;
    addProject(projectTitle);
    renderProjectOptions();
    closeForm(newProjectDiv, newProjectForm);
});


function addProject(name) {
    const newProject = createProject(name);
    projects.push(newProject);

    const projectDiv = createProjectDiv(newProject);
    main.append(projectDiv);

    const contentDiv = projectDiv.querySelector(".project-content");
    projectContentDivs.set(newProject, contentDiv);
}

// for closing the "New Task" / "New Project" menus
function closeForm(div, form) {
    if (!div.classList.contains("visible")) return;
    div.classList.remove("visible");
    form.reset();
}

// button that closes the "New Task" menu
const closeTaskFormButton = document.getElementById("close-new-task");
closeTaskFormButton.addEventListener("click", () => {
    closeForm(newTaskDiv, newTaskForm);
});

const closeProjectFormButton = document.getElementById("close-new-project");
closeProjectFormButton.addEventListener("click", () => {
    closeForm(newProjectDiv, newProjectForm);
});

function addTask(task, project) {
    project.tasks.push(task);
    const newDiv = createTaskDiv(task);
    const projectDiv = projectContentDivs.get(project);
    projectDiv.append(newDiv);
}