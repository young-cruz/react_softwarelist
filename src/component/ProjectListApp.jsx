import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './ProjectListApp.less';

var UsingCompaniesList = React.createClass({
  render() {
    var createUsingCompany = function(usingCompany) {
      return <li><a href={usingCompany.link} title={usingCompany.name} target='_blank'>{usingCompany.name}</a></li>
    };
    return (
      <div className='sharelist'>
        <span>正在使用：</span>
        <ul>{this.props.usingCompanies.map(createUsingCompany)}</ul>
      </div>
    )
  }
});

var ProjectMoreInfo = React.createClass({
  render() {
    return (
      <div className='content-more'>
        <p>
          <ReactMarkdown source={this.props.moreInfo} />
        </p>
      </div>
    )
  }
});

var ProjectList = React.createClass ({
  getInitialState: function() {
    return {
      showCom: false,
      showInfo: false
    };
  },
  shareClick: function() {
    this.setState({
      showCom: !this.state.showCom
    });
  },
  moreClick: function() {
    this.setState({
      showInfo: !this.state.showInfo
    });
  },
  render() {
    var createProject = function(project) {
      return (
        <li key={project.id} className='project-wrapper'>
          <div className='project-cover'>
            <img alt={project.name} title={project.name} src={project.coverURL} />
          </div>
          <div className='project-info'>
            <div className='title'>
              <h2>{project.name}</h2>
              <h3>由{project.providedCompany}提供，已经分享：</h3>
              <i className='sharenum'>{project.usingCompanies.length}</i>
            </div>
            <UsingCompaniesList showCom={true} usingCompanies={project.usingCompanies} />
            <div className='content-intro'>
              <p>{project.introText}</p>
            </div>
            <div className='content-divide'>
              <span>更多资料...</span>
            </div>
            <ProjectMoreInfo showInfo={true} moreInfo={project.moreInfo} />
          </div>
        </li>
      )
    };
    return <ul>{this.props.projects.map(createProject)}</ul>;
  }
});

const ProjectListApp = React.createClass({
  render() {
    return (
      <ProjectList projects={this.props.projects}/>
    );
  }
});

export default ProjectListApp;
