import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/postActions'
import { addComment } from '../../actions/postActions'


class Post extends Component {
  


  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/Home');
    
  }
  handleComment = () => {
    console.log(this.props);
    var x = document.getElementById("comment");
    var comment = x.value;
    var y = document.getElementById("name");
    var name = y.value;
    
    this.props.addComment(this.props.post.id, comment, name);
    this.props.history.push('/Home');
    
  }
  handleSubmit = () => {
    var x = document.getElementById("comment");
    var comment = x.value;
    var y = document.getElementById("name");
    var name = "Posted by: "+y.value;
    
    var card = document.getElementById("card-content");

    var span = document.createElement("span");
    span.innerHTML = comment;

    span.id = "c";

    var span2 = document.createElement("span");
    span2.innerHTML = name;

    span2.id = "username";

    card.appendChild(span);

    card.appendChild(document.createElement("br"));
    card.appendChild(document.createElement("br"));
    
    card.appendChild(span2);

    card.appendChild(document.createElement("br"));
    card.appendChild(document.createElement("br"));

  }
  render() {
    const comments = this.props;
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
        <div className="center">

          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>

          <input id="comment" type="text" placeholder="Start your comment here!" name="comment" required></input>
          <input id="name" type="text" placeholder="Your Username here!" name="name" required></input>
          <br></br>

          <button className="btn blue" onClick={this.handleSubmit}>
            Submit Comment
          </button>
          <br></br>
          <br></br>

          <div className="commentSection ">
          <div className="post card">
            
            <div id="card-content" className="card-content card-action grey lighten-4 grey-text">
                <p id="c"></p>
                  <div id='username' ></div>

            </div>
          </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  console.log(state);
  return {
    post: state.posts.find(post => post.id === id),
    comment: state.comments.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    addComment: (id, comment, name) => dispatch(addComment(id, comment, name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
/*const mapAddToProps = (dispatch) => {
  return {
    AddPost: (id, title, body) => dispatch(AddPost(id, title, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
/*const mapAddToProps = (dispatch) => {
  return {
    AddPost: (id, title, body) => dispatch(AddPost(id, title, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
/*class Post extends Component {
  


  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/Home');
    
  }
  handleSubmit = () => {
    var x = document.getElementById("comment");
    var comment = x.value;
    document.getElementById("c").innerHTML = comment;
    
  }
  render() {

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
          <input id="comment" type="text" placeholder="Start your comment here!" name="comment" required></input>
          <br></br>
          <button className="btn blue" onClick={this.handleSubmit}>
            Submit Comment
          </button>
          <br></br>
          <br></br>


          <p id="c"></p>

          <div>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}
/*const mapAddToProps = (dispatch) => {
  return {
    AddPost: (id, title, body) => dispatch(AddPost(id, title, body))
  }
} return (
      <div className="post card" key={comment.id}>
        <div className="card-content">
            <span className="card-title red-text">{comment.title}</span>
          <p>{comment.body}</p>
        </div>
      </div>
    )

export default connect(mapStateToProps, mapDispatchToProps)(Post)*/
