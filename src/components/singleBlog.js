import React, { Component } from 'react';
import PostContent from './PostContent';

class singleBlog extends Component {
    constructor(props){
        super(props)  
        // console.log("singleblog sees post"+this.props.post)
    }
    
    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
                    {(this.props.activeSelection == null) ?
                    // If no selection, clickable title to specific post and only render the summary
                        <div>
                            <h3><a href="#" onClick={this.props.handleSelection}>{this.props.post.title}</a></h3>
                            <PostContent  
                                post={(({ summary }) => ({ summary }))(this.props.post)} 
                            />
                        </div>
                    //else display title as text and include a back button to all posts
                    :
                        <div>
                            <a href="#" onClick={this.props.handleSelection}>Browse more posts</a>
                            <h3>{this.props.post.title}</h3>
                            <PostContent 
                                post={this.props.post} 
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




