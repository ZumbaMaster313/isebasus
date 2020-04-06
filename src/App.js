import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import qwertyVideo from '../src/videos/qwertyVideo.mp4';
import pongVideo from '../src/videos/pongVideo.mp4';
import scraperVideo from '../src/videos/scraperVideo.mp4'
import pacVideo from '../src/videos/pacman.mp4';
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
          <Route path={"/about"} component={About}></Route>
          <Route path={"/qwerty"} component={Qwerty}></Route>
          <Route path={"/videoscraper"} component={VideoScraper}></Route>
          <Route path={"/pacman"} component={Pacman}></Route>
          <Route path={"/pong"} component={Pong}></Route>
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

  pacman = () => {
    this.props.history.push('/pacman')
  }

  pong = () => {
    this.props.history.push('/pong')
  }

  render(){
    return (
      <header className="body">
         <a href="https://github.com/ZumbaMaster313/"class="github" id="g" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40" fill="rgb(255,255,255)"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
        <div className="projects">
          <h1 className="first"><a id="text">hey, i'm sebastian.</a></h1>
          <h2 className="caption">These are the projects I've developed. Check out my <a id="git" href="https://github.com/ZumbaMaster313/">github</a> &amp; <a id="res">resume</a> for more.  </h2>
          <div className="columns">
          <Project projectId="pacman" path={this.pacman} coverId="coverPac" name="pacman "></Project>
            <Project projectId="pong" path={this.pong} coverId="coverPong" name="pong "></Project>
            <Project projectId="qwerty" path={this.qwerty} name="qwerty  " coverId="coverQwerty"imagePath={qwerty}></Project>
            <Project projectId="videoScraper" path={this.videoScraper} coverId="coverScraper"name="video scraper  "></Project>
          </div>
        </div>
      </header>
    );
    }
}

export class About extends React.Component{
  render(){
    return (
      <header className="body">
         <nav class="nav">
          <a id="link" href="/">back</a>
          <a id="link" href="/">projects</a>
          <a id="link" href="/">about</a>
        </nav>
        <div className="projects">
          <h1 className="first" ><a id="color">Sebstian Carbonero</a></h1>
          <h2 className="caption" id="description">Hello there 👋, i'm a highschooler that tinkers with different technologies and loves design.</h2>
          
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
      website={ <p><a class="button">Visit Site</a> </p>}
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
      <Description 
      gitLink="https://github.com/ZumbaMaster313/YoutubeWebScraper/"
      video={scraperVideo} 
      projectName="Video Scraper"
      caption="web scraper"
      website={ <p><a class="button">View Images</a> </p>}
      p1="This Youtube Web-Scraper is an app that is able to search up any youtube video from Youtube's API. It was made in flask, which is a Python library used to create web applications. This was created for the revolutionary purpose of being able to search up youtube videos on this application instead on youtube.com. Very innovative."
      p2="This project was my first flask application which was pretty fun for me to learn. The webscraper works by grabbing a search string which then sends an HTTP request to Youtube's API. The API then sends data back that contains the urls of each video that corresponds with the search string. With that, the application is able to display those URls as videos in HTML."
      p3="As a result, I learned a lot about creating web applications since this was my first web application I made. There were some difficulties, like trying to find out how to work with Youtube's api and how to of course ping the api to get the information that the application needed. But overall very fun project, check out my code on my GitHub. Link below."
      >
      </Description>
    )
  }
}

export class Pacman extends React.Component{
  render(){
    return(
      <Description 
      projectName="Pacman"
      caption="unity game"
      website={ <p><a class="button">Visit Site</a> </p>}
      video={pacVideo} 
      gitLink="https://github.com/ZumbaMaster313/PacMan"
      link="https://gamessebastian.weebly.com/"
      p1="A simple remake of Pacman... But it was made in Unity, not straight C. I made this game to understand how the ghosts in the game worked, so I was like &quot;ok I feel like making Pacman&quot;. "
      p2="During this process I learned 2d animation, Tile mapping, Tile map art, and scripting object oriented for-loops. It worked out pretty good, except for the fact that some parts of the game doesn't function like the original."
      p3="If you want more details about this project, it's " 
      details="here"
      href="https://isebasus.wixsite.com/sebs/pac-man"
      p3b=". Thanks for checking it out!" 
      clas="details"
      ></Description>
    )
  }
}

export class Pong extends React.Component{
  render(){
    return(
      <Description 
      link="https://gameesseb.weebly.com/"
      projectName="Pong"
      caption="unity game"
      website={ <p><a class="button">Visit Site</a> </p>}
      video={pongVideo}
      p1="A simple Pong game made in Unity, just wanted to develop it for fun. I also was interested in how the ball deflected off of the objects. "
      p2="In this project, I learned how to invert the velocities of objects, use triggers on collision, and learned how the enemy behaved. I was honestly suprised that the game plays the same as the original... except for the score board 👌."
      p3="Anyways, if you want more details about this project, it's "
      details="here"
      href="https://isebasus.wixsite.com/sebs/pong"
      p3b=". Thanks for checking it out!"
      clas="details"
      >

      </Description>
    )
  }
}

export default App;
