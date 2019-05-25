
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class Work extends Component {
    state = {
        largeProjects: [],
        smallProjects: []
    }

    async componentDidMount() {
        const siteData = await fetch('site-data/index.json')
        const response = await siteData.json();
        const projects = response.projects;
        let largeProjects = [];
        let smallProjects = [];
        for (var i = 0; i < projects.length; i++) {
            const thisProj = projects[i];
            thisProj.size === "large" ? largeProjects.push(thisProj) : smallProjects.push(thisProj);
        }
        this.setState({
            largeProjects: largeProjects,
            smallProjects: smallProjects
        })

    }

    renderProject(project) {
        return (
            <Link to={"/projects/" + project.id} className="btn" href="#" key={project.id}>
                <div className="card album-card">
                    <img className="card-img" src={"/site-data/projects/" + project.id + "/img/thumbnail.png"} />
                    <div className="container">
                        <p className="card-caption">{project.title}</p>
                    </div>
                </div>
            </Link>

        );
    }


    render() {
        return (

            <div className="container album-container" id="album">
                <div className='row container-with-top-padding'>
                    <div className="col-md-7 col-12 tile-horizontal-spacing" id="tileGridColLarge">
                        {this.state.largeProjects.map((project) => this.renderProject(project))}
                    </div>
                    <div className="col-md-5 col-12 tile-horizontal-spacing" id="tileGridColSmall">
                        {this.state.smallProjects.map((project) => this.renderProject(project))}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Work;