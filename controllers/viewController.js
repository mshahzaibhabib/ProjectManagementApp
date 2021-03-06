const Project = require('./../models/projectModel');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const APIFeatures = require('./../utils/APIfeatures');



exports.getProjects = catchAsync(async (req, res, next) => {
    // const projects = await Project.find();

    const features = new APIFeatures(Project.find(), req.query).filter();
    const projects = await features.query;

    res.status(200).render('projects', {
        title: 'All Projects',
        projects
    });
});

exports.getProject = catchAsync(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    res.status(200).render('project', {
        title: project.projectName,
        project
    });
});

exports.addNewProject = catchAsync(async (req, res, next) => {
    res.status(200).render('addProject', {
        title: 'Add New Project'
    });
});

exports.updateProject = catchAsync(async (req, res, next) => {
    const project = await Project.findById(req.params.id);
    // console.log('\n', project.startDate);
    // console.log(project.dueDate, '\n');
    res.status(200).render('updateProject', {
        title: project.projectName,
        project
    });
});

exports.getUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).render('users', {
        title: 'Users',
        users
    });
});
