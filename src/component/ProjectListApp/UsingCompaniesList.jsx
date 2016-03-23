import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default React.createClass({
  createUsingCompanyItem(usingCompany) {
    return <li key={usingCompany.id} ><a href={usingCompany.link} title={usingCompany.name} target='_blank'>{usingCompany.name}</a></li>
  },
  
  render() {
    if (this.props.showCom) {
      return (
        <div className='sharelist'>
          <span>正在使用：</span>
          <ul>{this.props.usingCompanies.map(this.createUsingCompanyItem)}</ul>
        </div>
      )
    } else {
      return null;
    }
  }
});
