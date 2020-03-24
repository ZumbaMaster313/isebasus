import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Project from './components/projects.jsx';
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
          <Route path={"/portfolio"} component={Portfolio}></Route>
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


  render(){
    return (
      <header className="body">
        <div className="projects">
          <div className="links">
            <div class="container">
              <div class="background-hover">
                <a className="li" id="github" href="https://github.com/ZumbaMaster313">email</a>
                <a className="li" id="email" href="mailto: isebasus@gmail.com">games</a>
                <a className="li" id="games" href="https://github.com/ZumbaMaster313">aboutme</a>
              </div>
            </div>
          </div>
          <h1 className="first">hey, i'm sebastian.</h1>
          <h2 className="caption">These are the projects I've developed. Check out my <a id="git" href="https://github.com/ZumbaMaster313/">github</a> &amp; <a id="res">resume</a> for more.</h2>
          <div className="columns">
            <Project projectId="qwerty" name="Qwerty" method={this.onHover} xRotate={xRotate} yRotate={yRotate}></Project>
            <Project projectId="videoScraper" name="Video Scraper"></Project>
            <Project projectId="rapter" name="Rapter"></Project>
            <Project projectId="composter" name="Composter"></Project>
          </div>
        </div>
      </header>
    );
    }
}

export class Portfolio extends React.Component{

}

export default App;
