import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default React.createClass({
  render() {
    if (this.props.showInfo) {
      return (
        <div className='content-more'>
          <p>
            <ReactMarkdown source={this.props.moreInfo} />
          </p>
        </div>
      )
    } else {
      return null;
    }
  }
});
