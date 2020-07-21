  


export const deletePost = (id, title, body) => {
    return {
      type: 'DELETE_POST',
      id:id,
      title:title,
      body:body
    }
  }
  
export const addPost = (id, title, body) => {
  return {
    type: 'ADD_POST',
    id,
    title,
    body
  }
}
export const addComment = (id, title, name) => {
  return {
    type: 'ADD_COMMENT',
    id,
    title,
    name
  }
}
