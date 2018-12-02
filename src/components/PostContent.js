import React, { Component } from 'react';


class postContent extends Component {
    constructor(props){
        super(props)
        // console.log("postcontent sees post"+this.props.post)
        // console.log(this.props.post.content)  
    }
    
    render() {
        return (
            <div>
                <p>{this.props.post.summary}</p>
                <p>{this.props.post.content}</p>
                <p>{this.props.post.created_at} </p>
                <img src={this.props.post.image_url} />
            </div>
        );
    };
};

export default postContent;