import React, { Component } from 'react';
import PostContent from './PostContent';

class singleBlog extends Component {
    constructor(props){
        super(props)  
    }
    
    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">

                    {(this.props.activeSelection == null) ?
                    // If no selection, clickable title to specific post
                        <div>
                            <h3><a href="#" onClick={this.props.handleSelection}>xx{this.props.activeSelection}</a></h3>
                            <PostContent 
                                content={this.props.content}
                            />
                        </div>
                    //else display title as text and include a back button to all posts
                    :
                        <div>
                            <h3>{this.props.activeSelection}</h3>
                            <PostContent 
                                content={this.props.content}
                            />
                            <a href="#" onClick={this.props.handleSelection}>Browse more posts</a>
                        </div>
                    }
                </div>
            </div>
        );
    };
};

export default singleBlog;




