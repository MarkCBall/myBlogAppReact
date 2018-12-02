import React, { Component } from 'react';
import SingleBlog from './singleBlog'
import BrowseBlogs from './browseBlogs'
import seedData from '../development/seedData'

class BlogContents extends Component {
    constructor(props){
        super(props)
        this.state ={
          posts:seedData,
          activeSelection:1
        }
      }
    handleSelection(e) {
        if (this.state.activeSelection == null){
            this.setState({   activeSelection : e.target.id  } )
            console.log("state set to " + e.target.id)
        }
        else{
            this.setState({   activeSelection : null  } )
            console.log("state set to null")
        }
    } 
    render() {
        return (
            <div>
            {(this.state.activeSelection == null) ? 
                //if no blog is selected, browse all blog posts
                <BrowseBlogs 
                    handleSelection={this.handleSelection.bind(this)}
                    posts={this.state.posts} 
                />
                ://else show  single blog post indicated by activeSelection
                <SingleBlog 
                    handleSelection={this.handleSelection.bind(this)}
                    activeSelection={this.state.activeSelection}
                    post={this.state.posts[this.state.activeSelection]}
                />
            }
            </div>
        );
    };
};

export default BlogContents;