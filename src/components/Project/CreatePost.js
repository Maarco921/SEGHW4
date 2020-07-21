import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap';


const CreatePost = () => {
    return (
      <div>
        <div class="container vertical-center">
        
          <h4 class="center ">Creating a New Post Page</h4>
          <Button href="/NewPost" variant="primary" size="lg" block>
              Create New Post
          </Button>
          <br></br>
          <Button href="/Home" variant="primary" size="lg" block>
              Read Posts
          </Button>
        </div>
      </div>
    )
  }

export default CreatePost