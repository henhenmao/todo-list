
import Project from "./Project.js";

function createProject(name) {
    const newProject = new Project(name);
    return newProject;
}

function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectHeader = document.createElement('div');
    projectHeader.classList.add("project-header");
    projectHeader.textContent = `${project.name}`;

    const projectContent = document.createElement("div");
    projectContent.classList.add('project-content');

    projectDiv.append(projectHeader, projectContent);
    console.log(projectDiv);
    return projectDiv;
}

function addProjectToMain(projectDiv, mainDiv) {
    mainDiv.append(projectDiv);
}

export {createProject, createProjectDiv, addProjectToMain};