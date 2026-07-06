

import "./styles.css";
import Task from "./Tasks.js";
import Project from "./Project.js";
import {createTask, createTaskDiv} from "./createTask.js";
import {createProjectDiv, addProjectToMain} from "./createProject.js";

const page = document.getElementById("page");
const main = document.getElementById("main");
const newTaskDiv = document.getElementById("new-task-div");
const newProjectDiv = document.getElementById("new-project-div");

// "New Task" sidebar button click event

// const newTaskButton = document.getElementById("new-task-button");
// newTaskButton.addEventListener("click", () => {
//     newTaskDiv.classList.add("visible");
//     document.getElementById("new-title").focus();
// });

// action performed after the submit button of a new task is clicked
const newTaskForm = document.querySelector(".new-task-details");
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTitle = document.getElementById("new-title").value;
    const taskDescription = document.getElementById("new-description").value;
    const taskDate = document.getElementById("new-date").value;
    const taskTime = document.getElementById("new-time").value;
    const selectedProject = projects[document.getElementById("new-project-select").value]

    const newTask = new Task(taskTitle, taskDescription, taskDate, taskTime);
    addTask(selectedProject, newTask);
    closeForm(newTaskDiv, newTaskForm);
});

// "New Project" button click event
const newProjectButton = document.getElementById("new-project-button");
newProjectButton.addEventListener("click", () => {
    newProjectDiv.classList.add("visible");
    document.getElementById("new-project-title").focus();
});

let projects = [];
const newProjectSelect = document.getElementById("new-project-select");
const projectContentDivs = new Map();

function renderProjectOptions() {
    newProjectSelect.innerHTML = "";
    projects.forEach((project, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = project.name;
        newProjectSelect.append(option);
    });
}

const newProjectForm = document.querySelector(".new-project-details");
newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectTitle = document.getElementById("new-project-title").value;
    
    const project = new Project(projectTitle);

    addProject(project);
    closeForm(newProjectDiv, newProjectForm);
});


function addProject(project) {
    projects.push(project);

    const projectDiv = createProjectDiv(project);
    main.append(projectDiv);

    const contentDiv = projectDiv.querySelector(".project-content");
    projectContentDivs.set(project, contentDiv);

    renderProjectOptions();

    const newTaskButton = projectDiv.querySelector(".new-task-button");
    newTaskButton.addEventListener("click", () => {
        newProjectSelect.value = projects.indexOf(project);
        newTaskDiv.classList.add("visible");
        document.getElementById("new-title").focus();
    });
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

function addTask(project, task) {
    project.tasks.push(task);
    const newDiv = createTaskDiv(task);
    const projectDiv = projectContentDivs.get(project);
    projectDiv.append(newDiv);
}

// init exmaple project and task in DOM 

const exampleTask = new Task(
    "Task Title",
    "This is the description of the task",
    "2026-07-06",
    "09:21",
);

const defaultProject = new Project("Project 1");
addProject(defaultProject);
addTask(defaultProject, exampleTask);



