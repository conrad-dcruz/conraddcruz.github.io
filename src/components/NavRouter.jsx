
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";

class NavRouter extends Component {
    state = {}
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route path="/" exact component={Work} />
                    <Route path="/about/" component={About} />
                    <Route
                        path="/projects/:id"
                        component={Project}
                    />
                </div>
            </Router>
        );
    }
}

export default NavRouter;
