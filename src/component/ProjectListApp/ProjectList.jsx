import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import ProjectItem from './ProjectItem';

export default React.createClass ({
  render() {
    return <ul>{this.props.projects.map((project) => { return <ProjectItem key={project.id} project={project}/> })}</ul>;
  }
});
