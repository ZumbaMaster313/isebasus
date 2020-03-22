import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Project from './components/projects.jsx';
import { createBrowserHistory } from 'history';
import logo from './logo.svg';
import './App.css';

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
  render(){
    return (
      <header className="body">
        <div className="links">

        </div>
        <div className="projects">
          <h1 className="first">hey, i'm sebastian.</h1>
          <h2 className="caption">These are the projects I've developed. Check out my <a id="git" href="https://github.com/ZumbaMaster313/">github</a> &amp; <a id="res">resume</a> for more.</h2>
          <div className="columns">
            <Project projectId="qwerty" name="Qwerty"></Project>
            <Project projectId="composter" name="Composter"></Project>
            <Project projectId="videoScraper" name="Video Scraper"></Project>
            <Project projectId="pacman" name="Pacman"></Project>
            <Project projectId="rapter" name="Rapter"></Project>
            <Project projectId="pong" name="Pong"></Project>
          </div>
        </div>
      </header>
    );
    }
}

export class Portfolio extends React.Component{

}

export default App;
