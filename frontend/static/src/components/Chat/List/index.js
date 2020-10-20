import React from 'react';
import Cookies from 'js-cookie'

class ChatList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
    }
    this.fetchMessages = this.fetchMessages.bind(this);
  }
  componentDidMount() {
      this.fetchMessages();
      setInterval(this.fetchMessages, 2000);
  }
  componentWillUnmount() {
    clearInterval()
  }
  async fetchMessages() {
    if(Cookies.get('Authorization')){
      const response = await fetch('/api/v1/chats');
      const data = await response.json();
      this.setState({ messages: data });
    } else {
      this.setState({messages: []});
    }
  }

  render() {
    if(Cookies.get('Authorization')) {
      return(
        this.state.messages.map((message, index) => (
          <div key={message.id}>
            <div className="message"><span className='content'>{message.content}</span><span className="username">{message.user}</span></div>
          </div>
        ))
      )
    }
    else {
      return(
        <h2>you are not logged in</h2>
      )
    }
  }
}

export default ChatList
