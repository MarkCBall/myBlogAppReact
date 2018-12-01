import React, { Component } from 'react';

class blogContents extends Component {
    render() {
        return (
            <div class="row">
                <div class="col col-xs-12">
                    <div class="blog-grids">
                        <div class="grid">
                            <div class="entry-body">
                                <h3><a href="#">My First Blog Post</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <div class="read-more-date">
                                    <a href="#">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default blogContents;