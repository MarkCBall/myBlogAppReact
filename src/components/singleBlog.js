import React, { Component } from 'react';

class singleBlog extends Component {
    constructor(props){
        super(props)  
        console.log("singleBlog constructor called")
        console.log(this.props.handleSelection)
    }
    
    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
                    <div className="blog-grids">
                        <div className="grid">
                            <div className="entry-body">
                                <h3><a href="#">My First Blog Post</a></h3>
                                <p>hardcoded text</p>
                                <div className="read-more-date">
<a href="#" onClick={this.props.handleSelection}>Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default singleBlog;




