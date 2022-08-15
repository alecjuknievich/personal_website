import React, {Component} from "react";
import "../../App.css";
import FishSwimming from "../swimming-fish";
import SharkSwimming from "../swimming-shark";
import WhaleSwimming from "../swimming-whale";

class Work extends Component {
    render() {
        return(
            <div>
                <h1 className="section-header">Work Experience</h1>
            <div className="section-div">
                <div className="filler-div">
                    <FishSwimming/>
                </div>
                <div className="info-div">
                    <div className="text-div">
                        <h2>Xplor</h2>
                        <h4>Data Engineer</h4>
                        <p>Create a robust data environment for delivering
                        business insights using industry best practices</p>

                        <h5>Daily tools:</h5>
                        <p> Python | SQL | Snowflake | Linux | Docker | AWS | GitHub | Firebase | Dagster</p>
                    </div>
                </div>
            </div>
                <div className="section-div" style={{marginTop: 50}}>
                    <div className="info-div">
                        <div className="text-div">
                            <h2>Xplor</h2>
                            <h4>Junior Software Engineer</h4>
                            <p>Develop web application for integrating with Business Management Software(BMS) and displaying advanced reports for BMS users </p>

                            <h5>Daily tools:</h5>
                            <p> Typescript | Javascript | Angular | Express | Firebase | AWS | Bitbucket </p>
                        </div>
                    </div>
                    <div className="filler-div">
                        <SharkSwimming/>
                    </div>
                </div>

                <div className="section-div" style={{marginTop: 50}}>
                    <div className="filler-div">
                        <WhaleSwimming/>
                    </div>
                    <div className="info-div">
                        <div className="text-div">
                            <h2>Adaptive Analytics</h2>
                            <h4>Junior Data Operations</h4>
                            <p>Develop ETL pipelines as well as writing technical and non technical documentation for creating business metrics </p>

                            <h5>Daily tools:</h5>
                            <p> Python | SQL | Snowflake | Linux | AWS </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
