import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Project from './components/projects.jsx';
import Description from './components/description.jsx';
import { createBrowserHistory } from 'history';
import logo from './logo.svg';
import './App.css';

var xRotate = 0;
var yRotate = 0;

function App() {
  return (
    <Router history={createBrowserHistory}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={"/qwerty"} component={Qwerty}></Route>
          <Route path={"/videoscraper"} component={VideoScraper}></Route>
          <Route path={"/rapter"} component={Rapter}></Route>
          <Route path={"/composte"} component={Composter}></Route>
        </Switch>
      </div>
    </Router>
  );
}

class Home extends React.Component{
  onHover = () =>{
    xRotate = 1;
    yRotate = 1;
  }

  qwerty = () => {
    this.props.history.push('/qwerty')
  }

  videoScraper = () => {
    this.props.history.push('/videoscraper')
  }

  rapter = () => {
    this.props.history.push('/rapter')
  }

  composter = () => {
    this.props.history.push('/composter')
  }

  render(){
    return (
      <header className="body">
        <div className="projects">
          <h1 className="first">hey, i'm sebastian.</h1>
          <h2 className="caption">These are the projects I've developed. Check out my <a id="git" href="https://github.com/ZumbaMaster313/">github</a> &amp; <a id="res">resume</a> for more.</h2>
          <div className="columns">
            <Project projectId="qwerty" path={this.qwerty} name="Qwerty"></Project>
            <Project projectId="videoScraper" path={this.videoScraper} name="Video Scraper"></Project>
            <Project projectId="rapter" path={this.rapter} name="Rapter"></Project>
            <Project projectId="composter" path={this.composter} name="Composter"></Project>
          </div>
        </div>
      </header>
    );
    }
}

export class Qwerty extends React.Component{
  render(){
    return(
      <Description></Description>
    )
  }
}

export class VideoScraper extends React.Component{

}

export class Rapter extends React.Component{

}

export class Composter extends React.Component{

}

export default App;
