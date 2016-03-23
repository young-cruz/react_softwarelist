import '../common/lib';
import ProjectListApp from '../component/ProjectListApp';
import ReactDOM from 'react-dom';
import React from 'react';

const Projects = require('../../projects.json');

ReactDOM.render(<ProjectListApp projects={Projects}/>, document.getElementById('react-content'));
