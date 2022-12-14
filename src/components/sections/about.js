import React, {Component} from "react";
import "../../App.css"

class About extends Component {
    render() {
        return(
            <div id="About">
            <h1 className="section-header">About me</h1>
            <div className="section-div">
                <div className="info-div">
                    <div className="text-div">
                        <p>
                            I currently reside in New Hampshire, where I have spent a majority of my life. I graduated the
                            University of New Hampshire in 2021 with degrees in Finance and Information
                            Systems.
                        </p>
                        <p>
                            My favorite part about living in New England is the changes in seasons and different kinds of
                            activities you can do through the year. From Spring through Fall I enjoy fishing, dirt biking
                            and playing basketball. In the Winter you can find me ice fishing and snowboarding.
                        </p>
                    </div>
                </div>
                <div className="filler-div">
                    <img className="about-img" src="https://ajuknievichawsbucket.s3.amazonaws.com/images/about.jpeg" alt="Alec Juknievich"/>
                </div>
            </div>
            </div>
        )
    }
}

export default About