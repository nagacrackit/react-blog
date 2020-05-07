import React from 'react';
import './style.css';
import Card from '../UI/Card'

const BlogPost=props=>{
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always beautiful</h1>
                    <span class="postedBy">Posted on May 7,2020 by Chanti</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/1.jpg')} alt="postImage"></img>
                </div>
            </Card>
        </div>
        
    )
}

export default BlogPost;