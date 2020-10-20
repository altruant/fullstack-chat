import React from 'react'
import ChatList from './List'
import ChatForm from './Form'
class Chat extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ChatList />
        <ChatForm />
      </React.Fragment>
    )
  }
}

export default Chat
