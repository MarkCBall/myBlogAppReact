import React, { Component } from 'react';
import SingleBlog from './singleBlog'
import BrowseBlogs from './browseBlogs'
import seedData from '../development/seedData'

class BlogContents extends Component {
    constructor(props){
        super(props)
        this.state ={
          posts:seedData,
          //activeSelection:null,
          activeSelection:1
        }
        // console.log(this.state.posts[0])
        //console.log("hello")
      }
    
    handleSelection(e) {
        if (this.state.activeSelection == null){
            this.setState({   activeSelection : e.target.id  } )
            console.log("state set to x")
        }
        else{
            this.setState({   activeSelection : null  } )
            console.log("state set to null")
        }
    } 



    
    
    render() {
        return (

            // {var content = "text ffulled from this.state.seedData[X].content where x matches activeSelection"}


            <div>
            {(this.state.activeSelection == null) ? 

                <BrowseBlogs 
                    handleSelection={this.handleSelection.bind(this)}
                    posts={this.state.posts} 
                />

                ://else activeSelection is not null 
    
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