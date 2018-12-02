import React, { Component } from 'react';
import SingleBlog from './singleBlog'

class browseBlog extends Component {
    // constructor(props){
    //     super(props)  
    // }

    render() {
        return (
            <div>

            {this.props.posts.map((postx) => 
                <SingleBlog 
                    handleSelection={this.props.handleSelection}
                    post={postx}
                />
            )}


            </div>
        );
    };
};

export default browseBlog;