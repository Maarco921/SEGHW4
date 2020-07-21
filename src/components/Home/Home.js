import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Volleyball from '../../volleyball.png'
import { connect } from 'react-redux'
import ProjectList from '../Project/ProjectList'
import Notifications from './Notifications'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends Component {
  render(){
    const { posts } = this.props
    console.log(this.props);
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Volleyball} alt="A volleyball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
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

export default connect(mapStateToProps)(Home)

/*const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}*/
/*
}
<div className="post card" key={post.id}>
              <img src={Volleyball} alt="A volleyball" />
              <div className="card-content">
                <Link to={'/' + post.id}>
                  <span className="card-title blue-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
                <div className="card-action grey lighten-4 grey-text">
                  <div>Posted by The Net Ninja</div>
                  <div>2nd September, 2am</div>
                </div>
              </div>
            </div>*/
