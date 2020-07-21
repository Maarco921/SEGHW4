import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap'
import { addPost } from '../../actions/postActions'
import { connect } from 'react-redux'
import { createProject } from '../../actions/postActions'



class NewPost extends Component {

  state = {
    title: '',
    body: ''
  }
  handleClick = () => {
    console.log(this.props.posts);
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    console.log(title.value);
    if(title.value == "" && body.value == ""){
      alert("You silly goose, you need to write something to post!");
    }else{
      this.props.addPost((this.props.posts.length+1).toString(), title.value, body.value);
      this.props.history.push('/Home');
    }
    
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);

  }

  render(){
    return(
      <div>
        <div class="container vertical-center">
          <form action="action_page.php" onSubmit={this.handleSubmit}>
                <h1>Create your post here</h1>
                <hr></hr>

                <div className="input-field">
                  <label for="post"></label>
                  <input id="title" type="text" placeholder="Title of post" name="title" required onChange={this.handleChange}></input>
                </div>

                <div className="input-field">
                  <input id="body" type="text" placeholder="Start your post here!" name="body" required onChange={this.handleChange}></input>
                </div>

                <div class="clearfix"></div>

                <Button className="input-field" variant="primary" onClick={this.handleClick} size="lg" block >
                  Post
                </Button>

            </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      addPost: (id, title, body) => dispatch(addPost(id, title, body))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)