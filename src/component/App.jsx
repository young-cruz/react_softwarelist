import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.less';

var UsingCom = React.createClass({
  getDefaultProps() {
    return {
      appUsingCom: 'appUsingCom',
      appUsingComUrl: 'http://www.baidu.com'
    }
  },
  render() {
    return (
      <div className='sharelist'>
        <span>正在使用：</span>
        <ul>
          <li><a href={this.props.appUsingComUrl} title={this.props.appUsingCom} target='_blank'>{this.props.appUsingCom}</a></li>
        </ul>
      </div>
    )
  }
});

var MarkdownContent = React.createClass({
  getDefaultProps() {
    return {
      input: '# This is a header\n\nAnd this is a paragraph'
    }
  },
  render() {
    return (
      <div className='content-more'>
        <p>
          <ReactMarkdown source={this.props.input} />
        </p>
      </div>
    )
  }
});

const App = React.createClass({
  getDefaultProps() {
    return {
      appCom: 'appCom',
      coverSrc: 'http://image.beekka.com/blog/2015/bg2015031302.jpg',
      coverTitle: '软件封面图片',
      appTitle: 'appTitle',
      appContentIntro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  },
  getInitialState: function() {
      return {
        showCom: false,
        showInfo: false
      };
  },
  shareClick: function() {
      this.setState({
        showCom: this.state.showCom == false ? true : false,
      });
  },
  moreClick: function() {
      this.setState({
        showInfo: this.state.showInfo == false ? true : false,
      });
  },
  render() {
    return (
      <div className='app-wrapper'>
        <div className='app-cover'>
          <img alt='app-cover' title={this.props.coverTitle} src={this.props.coverSrc} />
        </div>
        <div className='app-info'>
          <div className='title'>
            <h2>{this.props.appTitle}</h2>
            <h3>由{this.props.appCom}提供，已经分享：</h3>
            <i className='sharenum' onClick={this.shareClick}>2</i>
          </div>
          { this.state.showCom ? <UsingCom /> : null }
          <div className='content-intro'>
            <p>{this.props.appContentIntro}</p>
          </div>
          <div className='content-divide'>
            <span onClick={this.moreClick}>更多资料...</span>
          </div>
          { this.state.showInfo ? <MarkdownContent /> : null }
        </div>
      </div>
    );
  }
});

export default App;
