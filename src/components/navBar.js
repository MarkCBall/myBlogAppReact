import React, { Component } from 'react';

class navBar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <button className="nav-link">MyBlogApp <span className="sr-only">(current)</span></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default navBar;