import React, { Component } from 'react';
import PostContent from './PostContent';

class singleBlog extends Component {

    
    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
                    {(this.props.activeSelection == null) ?
                    // If no selection, clickable title to specific post and only render the summary
                    //DISPLAY ALL POSTS
                        <div>
                            <h3><button id={this.props.id} onClick={this.props.handleSelection}>{this.props.post.title}</button></h3>
                            <PostContent  
                                post={(({ summary }) => ({ summary }))(this.props.post)} 
                            />
                        </div>
                    //else display title as text and include a back button to all posts
                    :
                        <div>
                            <button onClick={this.props.handleSelection}>Browse more posts</button>
                            <h3>{this.props.post.title}</h3>
                            <PostContent 
                                post={this.props.post} 
                            />
                        </div>
                    }
                </div>
            </div>
        );
    };
};

export default singleBlog;




