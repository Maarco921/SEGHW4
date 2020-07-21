import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Post from './components/Home/Post'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import CreatePost from './components/Project/CreatePost'
import NewPost from './components/Project/NewPost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            
            <Route exact path='/' component={Login}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/CreatePost' component={CreatePost}/>
            <Route path='/NewPost' component={NewPost}/>
            <Route path='/Home' component={Home}/>
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
