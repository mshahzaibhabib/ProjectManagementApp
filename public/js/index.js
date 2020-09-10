import '@babel/polyfill';
import { addNewProject, updateProject, deleteProject, filterProjects } from './projectOperations';



// DOM ELEMENTS
const addNewProjectForm = document.querySelector('form.form.add_new_project');
const deleteProjectButton = document.querySelector('a.delete_project_btn');
const updateProjectForm = document.querySelector('form.form.update_project');
const projectSearchForm = document.querySelector('form.search-form');
const projectFilterForm = document.querySelector('#filter-accordion form.filter-form');


// DELAGATION

if (projectSearchForm) {
    console.log('Search Form Found');
    projectSearchForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Project Search Form');
        const projectName = document.getElementById('projectName').value;
        let queryString = `?projectName=${projectName}`;
        window.location.href = queryString;
    });
}

if (projectFilterForm) {
    // console.log('Filter Controls Found');
    projectFilterForm.addEventListener('submit', e => {
        e.preventDefault();
        // console.log('Project Filter Submit');
        const projectSourceCheckbox = document.getElementsByName('projectSource');
        const projectPlatformcheckbox = document.getElementsByName('projectPlatform');
        const projectStatusCheckbox = document.getElementsByName('projectStatus');
        let projectSource = [];
        let projectPlatform = [];
        let projectStatus = [];

        projectSourceCheckbox.forEach(el => {
            if (el.checked)
                projectSource.push(el.value);
        });

        projectPlatformcheckbox.forEach(el => {
            if (el.checked)
                projectPlatform.push(el.value);
        });

        projectStatusCheckbox.forEach(el => {
            if (el.checked)
                projectStatus.push(el.value);
        });

        // console.log(projectSource);
        // console.log(projectPlatform);
        // console.log(projectStatus);

        filterProjects(projectSource, projectPlatform, projectStatus);
    });
}

if (addNewProjectForm) {
    addNewProjectForm.addEventListener('submit', e => {
        // this prevents form from loading any other page
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        const projectSource = document.getElementById('projectSource').value;
        const clientName = document.getElementById('clientName').value;
        const projectManager = document.getElementById('projectManager').value;
        const startDate = document.getElementById('startDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const platform = document.getElementById('platform').value;
        const theme = document.getElementById('theme').value;
        const plugins = document.getElementById('plugins').value;
        const status = document.getElementById('status').value;
        const workProgress = document.getElementById('workProgress').value;

        const developerCheckboxes = document.getElementsByName('developers');
        let developers = '';

        for (let i = 0; i < developerCheckboxes.length; i++) {
            if (developerCheckboxes[i].checked) {
                developers += developerCheckboxes[i].value + ",";
            }
        }

        console.log(`${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);

        addNewProject(projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress);
    });
}

if (updateProjectForm) {
    updateProjectForm.addEventListener('submit', e => {
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        const projectSource = document.getElementById('projectSource').value;
        const clientName = document.getElementById('clientName').value;
        const projectManager = document.getElementById('projectManager').value;
        const startDate = document.getElementById('startDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const platform = document.getElementById('platform').value;
        const theme = document.getElementById('theme').value;
        const plugins = document.getElementById('plugins').value;
        const status = document.getElementById('status').value;
        const workProgress = document.getElementById('workProgress').value;

        const developerCheckboxes = document.getElementsByName('developers');
        let developers = '';

        for (let i = 0; i < developerCheckboxes.length; i++) {
            if (developerCheckboxes[i].checked) {
                developers += developerCheckboxes[i].value + ",";
            }
        }

        const projectId = window.location.href.split('/update-project/')[1];

        console.log(`${projectId} ${projectName} | ${projectSource} | ${clientName} | ${developers} | ${projectManager} | ${startDate} | ${dueDate} | ${platform} | ${theme} | ${plugins} | ${status} | ${workProgress}`);

        updateProject(projectId, projectName, projectSource, clientName, developers, projectManager, startDate, dueDate, platform, theme, plugins, status, workProgress);
    });
}

if (deleteProjectButton) {
    deleteProjectButton.addEventListener('click', e => {
        e.preventDefault();
        const projectId = window.location.href.split('/projects/')[1];
        console.log(projectId);
        deleteProject(projectId);
    });
}