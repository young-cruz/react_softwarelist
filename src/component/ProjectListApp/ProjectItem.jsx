import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import UsingCompaniesList from './UsingCompaniesList';
import ProjectMoreInfo from './ProjectMoreInfo';

export default React.createClass({
  getInitialState () {
    return {
      showCom: false,
      showInfo: false,
      project: this.props.project
    };
  },

  shareClick () {
    this.setState({
      showCom: !this.state.showCom
    });
  },

  moreClick () {
    this.setState({
      showInfo: !this.state.showInfo
    });
  },
  
  render () {
    let project = this.state.project;

    return (
      <li key={project.id} className='project-wrapper'>
        <div className='project-cover'>
          <img alt={project.name} title={project.name} src={project.coverURL} />
        </div>
        <div className='project-info'>
          <div className='title'>
            <h2>{project.name}</h2>
            <h3>由{project.providedCompany}提供，已经分享：</h3>
            <i className='sharenum' onClick={this.shareClick}>{project.usingCompanies.length}</i>
          </div>
          <UsingCompaniesList showCom={this.state.showCom} usingCompanies={project.usingCompanies} />
          <div className='content-intro'>
            <p>{project.introText}</p>
          </div>
          <div className='content-divide' onClick={this.moreClick}>
            <span>更多资料...</span>
          </div>
          <ProjectMoreInfo showInfo={this.state.showInfo} moreInfo={project.moreInfo} />
        </div>
      </li>
    )
  }
})
