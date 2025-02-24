import React, { Component } from "react";
import "./App.css";
import Imodb from "./Movie-Serch/Imdb";
import Dashboard from "./DashboardGame/Dashboard";

class PhotoPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: null,
      projects: [
        { title: "Movie Search", component: <Imodb /> },
        { title: "Coin Game", component: <Dashboard /> },
      ],
    };
  }

  showProject = (index) => {
    this.setState({ activeProject: index });
  };

  closeProject = () => {
    this.setState({ activeProject: null });
  };

  render() {
    const { activeProject, projects } = this.state;

    return (
      <div className="portfolio-container">
        <h1 className="name">I Am Pooja Nalode</h1>
        <h2 className="name">This is my Portfolio.</h2>

        {activeProject !== null ? (
          <div>
            <div>
              {projects[activeProject].component}
              <button className="back-button" onClick={this.closeProject}>
                ← Back to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <button className="project-button" onClick={() => this.showProject(index)}>
                  View Project
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PhotoPortfolio;
