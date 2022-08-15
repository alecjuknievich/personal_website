import './App.css';
import React from 'react';

import Nav from "./components/sections/nav";
import About from "./components/sections/about"
import Work from "./components/sections/work"
import Projects from "./components/sections/projects";
import Footer from "./components/sections/footer";
import Background from "./background-component";

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="flex-row">
            <div className="filler-div"></div>
            <div className="info-div" style={{marginTop: 60}}>
                <div className="text-div">
                    <h1> Hello, I'm Alec</h1>
                    <p>
                        Full Stack software developer with a background in data analysis and finance
                    </p>
                </div>
            </div>
        </div>
        <div className="content-div">
            <Background />
            <About />
            <Work />
            <Projects />
            <Footer />
        </div>
    </div>
  );
}

export default App;
