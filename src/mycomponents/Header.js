import React from 'react'
import About from './About'
import Home from './Home'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Outlet,
} from "react-router-dom";


export default function Header() {
    return (
        <Router>
            <div className="border1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <Link className="navbar-brand" to="/">Website Icon</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="./Home">Home <span className="sr-only">Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./About">About</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
