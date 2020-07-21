  
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const initState = {
  posts: [
    {id: '1', title: 'Spike of a Lifetime', body: 'The spike that won us provincials was the best moment of my life.'},
    {id: '2', title: 'My New Hope', body: 'As a coach, you dont see new talent all that often but I found a prodigy this year. Lets see how far we can go...'},
    {id: '3', title: 'A Funny Story', body: 'During warm-ups, my coach managed to spike the ball in my nuts and now Im in the hospital... LOL!'}
  ],
  comments: [
    [{id: '1', name: 'Bibidi', body: 'Great Story.'}],
    [{id: '2', name: 'Babidi', body: 'My school has never had anyone like that...'}],
    [{id: '3', name: 'Boo', body: 'During warm-ups, my coach did the same thing!'}]
  ]
}
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    if(action.type === 'ADD_POST'){
      let newPosts = state.posts.concat({id:action.id, title:action.title, body:action.body});
      console.log(newPosts);
      return {
        ...state,
        posts: newPosts
      }
     }
     if(action.type === 'ADD_COMMENT'){
       
      let newComment = state.comments.concat([{id:action.id, title:action.title, body:action.body}]);
      console.log(newComment);
      return {
        ...state,
        comments: newComment
      }
     }
    return state;
  }
 
export default rootReducer;