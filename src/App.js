import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import qwertyVideo from '../src/videos/qwertyVideo.mp4'
import scraperVideo from '../src/videos/scraperVideo.mp4'
import Project from './components/projects.jsx';
import Description from './components/description.jsx';
import { createBrowserHistory } from 'history';
import qwerty from '../src/images/qwerty.png'
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
          <Route path={"/composter"} component={Composter}></Route>
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
        <nav class="nav">
          <a id="link"> about</a>
        </nav>
        <div className="projects">
          <h1 className="first"><a id="text">hi, i'm sebastian</a> 👋</h1>
          <h2 className="caption">These are the projects I've developed. Check out my <a id="git" href="https://github.com/ZumbaMaster313/">github</a> &amp; <a id="res">resume</a> for more. </h2>
          <div className="columns">
            <Project projectId="qwerty" path={this.qwerty} name="Qwerty" imagePath={qwerty}></Project>
            <Project projectId="composter" path={this.composter} name="Composter"></Project>
            <Project projectId="videoScraper" path={this.videoScraper} name="Video Scraper"></Project>
            <Project projectId="pong" path={this.rapter} name="Pong"></Project>
          </div>
        </div>
      </header>
    );
    }
}

export class Qwerty extends React.Component{
  render(){
    return(
      <Description 
      video={qwertyVideo} 
      projectName="Qwerty"
      caption="web proxy"
      p1="This Web Proxy was originally created for the necessity of searching up websites under my high school wifi. As a result, most websites under the school wifi are blocked so a web proxy would save the day. Until, of course, one day it would finally become a blocked website as well."
      p2="This project was created with the Flask web server. This application works by HTTP requesting a website to grab its HTML under a given search string. As a result, once the application has the HTMl it could use the css and js links to fully render the site. It does this by integrating this servers domain in front of the css and js links in the HTML so that way it could request the css and js from my server. It of course does not work for ever single website, but it still needs work to be done."
      p3="Overall, this project was a pain at first, trying to figure out how to render the HTML and css, but it was really fun in my opinion. Check out the code on my GitHub and also check out my website! Links above."
      website={ <p><a class="button">Visit Live</a> </p>}
      link="https://qwertyuiop.space"
      gitLink="https://github.com/ZumbaMaster313/qwertyuiop/"
      >
      </Description>
    )
  }
}

export class VideoScraper extends React.Component{
  render(){
    return(
      <Description video={scraperVideo} projectName="Video Scraper"></Description>
    )
  }
}

export class Rapter extends React.Component{
  render(){
    return(
      <Description projectName="Rapter"></Description>
    )
  }
}

export class Composter extends React.Component{
  render(){
    return(
      <Description projectName="Compost"></Description>
    )
  }
}

export default App;
