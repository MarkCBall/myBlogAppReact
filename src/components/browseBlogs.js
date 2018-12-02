import React, { Component } from 'react';
import SingleBlog from './singleBlog'

class browseBlog extends Component {
    // constructor(props){
    //     super(props)  
    // }

    render() {
        return (
            <div className="container">
            <div className="row">
                
                    {this.props.posts.map((post) =>
                        <div className="col-sm-4"> 
                        <SingleBlog 
                            handleSelection={this.props.handleSelection}
                            post={post}
                            key={post.id}
                            id={post.id}
                        />
                        </div>
                    )}
                
            </div>
            </div>
        );
    };
};

export default browseBlog;