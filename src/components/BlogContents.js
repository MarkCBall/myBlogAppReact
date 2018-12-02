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
          activeSelection:"X"
        }
        //console.log(this.state.posts[1])
        //console.log("hello")
      }
    
    handleSelection() {
        if (this.state.activeSelection == null){
            this.setState({   activeSelection : "X"  } )
            console.log("state set to x")
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

                <BrowseBlogs handleSelection={this.handleSelection.bind(this)} />

                ://else activeSelection is not null 
    
                <SingleBlog 
                    handleSelection={this.handleSelection.bind(this)}
                />
            }
                


            </div>
        );
    };
};

export default BlogContents;