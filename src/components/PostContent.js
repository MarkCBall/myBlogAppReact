import React, { Component } from 'react';


class postContent extends Component {
    constructor(props){
        super(props)  
    }
    
    render() {
        return (
            <p>content=<br/>{this.props.content}</p>
        );
    };
};

export default postContent;