import React, { Component } from 'react';


class footer extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p>© All Rights Reserved. {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default footer;