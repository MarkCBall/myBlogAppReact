import React, { Component } from 'react';


class postContent extends Component {

    
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