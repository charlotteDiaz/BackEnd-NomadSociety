import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UsersProvider } from './context/UsersState'
import { PostProvider } from './context/PostContext/PostState'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersProvider>
<<<<<<< HEAD
    <CommentsProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </CommentsProvider>
=======
      <App />
>>>>>>> 9846aa5b57b5eeb043a07dad46dce6ded4c743b5
  </UsersProvider>
)
