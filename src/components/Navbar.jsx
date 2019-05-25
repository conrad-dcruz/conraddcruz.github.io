import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid translucent">
                <nav className="navbar navbar-expand-md navbar-light fixed-top translucent nav-container-spacing">
                    <div className="container">
                        <div className="navbar-brand" href="#">

                            <Link className="navbar-brand" to="/"><img className="site-logo" src="/img/icons/site-logo.png" /></Link>
                                
                            <Link className="navbar-brand portfolio-title" to="/">CONRAD D'CRUZ</Link>
                            {/* <a className="navbar-brand designation">Industrial Designer</a> */}
                        </div>
                        <button className="navbar-toggler toggle-button" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <ul className="navbar-nav navbar-right ">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Work</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbar;