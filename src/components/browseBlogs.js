import React, { Component } from 'react';
import SingleBlog from './singleBlog'

class browseBlog extends Component {
    // constructor(props){
    //     super(props)  
    // }

    render() {
        return (
            <div>

            {this.props.posts.map((post) => 
                <SingleBlog 
                    handleSelection={this.props.handleSelection}
                    post={post}
                    key={post.id}
                    id={post.id}
                />
            )}


            </div>
        );
    };
};

export default browseBlog;