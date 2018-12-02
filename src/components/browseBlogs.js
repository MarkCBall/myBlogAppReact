import React, { Component } from 'react';
import SingleBlog from './singleBlog'

class browseBlog extends Component {
    // constructor(props){
    //     super(props)  
    // }

    render() {
        return (
            <div>
            {/* <p>browseblogs first</p> */}
            <SingleBlog handleSelection={this.props.handleSelection}/>

            {/* <p>browseblogs second</p> */}
            <SingleBlog/>
            </div>
        );
    };
};

export default browseBlog;