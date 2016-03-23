import React, { Component } from 'react';
import ProjectList from './ProjectListApp/ProjectList';

import './ProjectListApp.less';

export default React.createClass({
  render() {
    return (
      <ProjectList projects={this.props.projects}/>
    );
  }
});
